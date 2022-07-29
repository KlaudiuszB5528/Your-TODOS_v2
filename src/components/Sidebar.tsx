import { SidebarAddProject } from "./SidebarAddProject";
import { SidebarInbox } from "./SidebarInbox";
import { SidebarProjects } from "./SidebarProjects";

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <SidebarInbox />
      <SidebarProjects />
      <SidebarAddProject />
    </div>
  );
};
