import { UserNav } from "@/app/(dashboard)/workspace/_components/user-nav";
import { WorkspaceList } from "@/app/(dashboard)/workspace/_components/workspace-list";
import { CreateWorkspace } from "@/app/(dashboard)/workspace/_components/create-workspace";

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-screen">
            <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
                <WorkspaceList />

                <div className="mt-4">
                    <CreateWorkspace />
                </div>

                <div className="mt-auto">
                    <UserNav />
                </div>
            </div>
            {children}
        </div>
    );
}

export default WorkspaceLayout;
