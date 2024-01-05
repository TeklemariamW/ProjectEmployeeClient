export interface Project
{
    id: string;
    projectName: string;
    projectOwner: string;
    projectCreationTime: Date;
    projectEndTime: Date;
    isActive: boolean;
}