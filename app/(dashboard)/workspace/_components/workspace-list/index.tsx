import { cn } from "@/lib/utils";

import { workspaces } from "@/app/(dashboard)/workspace/constants";
import getWorkspaceColor from "@/app/(dashboard)/workspace/utils/get-workspace-color";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function WorkspaceList() {
    return (
        <TooltipProvider>
            <div className="flex flex-col gap-2">
                {workspaces.map((workspace) => (
                    <Tooltip key={workspace.id}>
                        <TooltipTrigger asChild>
                            <Button 
                                size="icon"
                                className={cn("size-12 transition-all duration-200", getWorkspaceColor(workspace.id))}
                            >
                                <span className="text-sm font-semibold">{workspace.avatar}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{workspace.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};