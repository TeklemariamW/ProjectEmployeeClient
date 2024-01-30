/**
 * Represents a project.
 */
export interface Project {
    /**
     * The ID of the project.
     */
    id: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The owner of the project.
     */
    projectOwner: string;
    /**
     * The creation time of the project.
     */
    projectCreationTime: Date;
    /**
     * The end time of the project.
     */
    projectEndTime: Date;
    /**
     * Indicates whether the project is active or not.
     */
    isActive: boolean;
}