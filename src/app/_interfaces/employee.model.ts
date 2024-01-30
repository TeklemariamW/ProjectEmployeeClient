/**
 * Represents an employee.
 */
export interface Employee {
    /**
     * The name of the employee.
     */
    empName: string;
    /**
     * The address of the employee.
     */
    empAddress: string;
    /**
     * The email of the employee.
     */
    empEmail: string;
    /**
     * The telephone number of the employee.
     */
    empTelefon: number;
    /**
     * Indicates whether the employee is currently at work.
     */
    empAtWork: boolean;
}