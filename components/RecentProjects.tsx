"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// A simple loading spinner (you can replace it with any spinner you like)
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple"></div>
    <p className="text-purple ml-4">Loading projects...</p>
  </div>
);

// Error message component
const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-red-500 text-center">
    <p>{message}</p>
  </div>
);

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  projectLink: string;
  icons: string[];
  projectImages: {
    url: string;
    project_Id: number;
  }; // projectImages is an array of objects with url and project_Id
};

const RecentProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecentProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(
            `*,
        projectImages (
          url,
          project_Id
        )`
          )
          .order("created_at", { ascending: true });
        // .limit(5);

        if (error) throw error;

        setProjects(data || []); // Ensure it sets an empty array if no data
      } catch (err) {
        setError("Failed to fetch recent projects.");
        console.error("Error fetching recent projects:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecentProjects();
  }, []);

  // Conditional rendering based on the loading, error, or projects state
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No recent projects to display.</p>
      </div>
    );
  }

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.projectLink} href={item.projectLink}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.projectImages.url}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {/* Check if iconLists is an array before mapping */}
                  {Array.isArray(item.icons) &&
                    item.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
