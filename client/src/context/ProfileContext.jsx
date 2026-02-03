const USE_MOCK_API = true;


import { createContext, useContext, useState, useEffect } from "react";
import * as userAPI from "../services/user.api";
import { useAuth } from "./AuthContext";

const ProfileContext = createContext(null);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [profileStrength, setProfileStrength] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  // -------------------------------
  // FETCH PROFILE STRENGTH
  // -------------------------------
  useEffect(() => {
    if (user) {
      fetchProfileStrength();
    }
  }, [user]);

  const fetchProfileStrength = async () => {
    setLoading(true);

    try {
      // 🟢 BACKEND AVAILABLE (later)
      const data = await userAPI.getProfileStrength();
      setProfileStrength(data);
    } catch (err) {
      // 🟡 FRONTEND-ONLY FALLBACK
      console.warn("Using mock profile strength (backend not connected)");

      const mockStrength = {
        score: getCompletionPercentage(),
        level: getStrengthLevel().level,
      };

      setProfileStrength(mockStrength);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------
  // FETCH RECOMMENDATIONS
  // -------------------------------
  const fetchRecommendations = async () => {
    try {
      const data = await userAPI.getRecommendations();
      setRecommendations(data);
    } catch (err) {
      console.warn("Using mock recommendations");

      setRecommendations([
        {
          id: "headline",
          title: "Add a headline",
          description: "Help others understand what you do",
        },
        {
          id: "skills",
          title: "Add more skills",
          description: "Profiles with skills get more views",
        },
      ]);
    }
  };

  // -------------------------------
  // PROFILE COMPLETION LOGIC
  // -------------------------------
  const getCompletionPercentage = () => {
    if (!user) return 0;

    const fields = [
      user.name,
      user.headline,
      user.about,
      user.location,
      user.profileImage,
      user.experience?.length > 0,
      user.education?.length > 0,
      user.skills?.length > 0,
    ];

    const completed = fields.filter(Boolean).length;
    return Math.round((completed / fields.length) * 100);
  };

  const getStrengthLevel = () => {
    const percentage = getCompletionPercentage();
    if (percentage >= 90) return { level: "Expert", color: "#057642" };
    if (percentage >= 70) return { level: "Advanced", color: "#0a66c2" };
    if (percentage >= 50) return { level: "Intermediate", color: "#c37d16" };
    return { level: "Beginner", color: "#cc1016" };
  };

  const getSuggestions = () => {
    if (!user) return [];

    const suggestions = [];

    if (!user.headline)
      suggestions.push({
        id: "headline",
        title: "Add a headline",
        description: "Help others understand what you do",
      });

    if (!user.about)
      suggestions.push({
        id: "about",
        title: "Write your summary",
        description: "Tell your professional story",
      });

    if (!user.experience?.length)
      suggestions.push({
        id: "experience",
        title: "Add work experience",
        description: "Showcase your career journey",
      });

    if (!user.education?.length)
      suggestions.push({
        id: "education",
        title: "Add education",
        description: "Share your academic background",
      });

    if (!user.skills || user.skills.length < 3)
      suggestions.push({
        id: "skills",
        title: "Add skills",
        description: "Help people discover your expertise",
      });

    if (!user.profileImage)
      suggestions.push({
        id: "profile-image",
        title: "Add profile photo",
        description: "Profiles with photos get more views",
      });

    return suggestions;
  };

  const value = {
    profileStrength,
    recommendations,
    loading,
    completionPercentage: getCompletionPercentage(),
    strengthLevel: getStrengthLevel(),
    suggestions: getSuggestions(),
    fetchProfileStrength,
    fetchRecommendations,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};
