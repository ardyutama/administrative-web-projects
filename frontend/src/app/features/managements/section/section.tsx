import { ManagementSection } from "./management-section";

export const Section = ({children}: {children: React.ReactNode}) => {
    return (
        <ManagementSection>
            {children}
        </ManagementSection>
    )
}