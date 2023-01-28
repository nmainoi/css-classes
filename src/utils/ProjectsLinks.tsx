import { ProjectSchemaProps } from "@/types/global"	
import { LoginIcon } from "@/assets/icons"

export const ProjectSchemas = () => {

    const projects: ProjectSchemaProps[] = []

    const ClassOne: ProjectSchemaProps = {
        name: "Study 1",
        description: "Login Form",
        link: "/projects/Class1",
        icon: <LoginIcon color="#fff" />
    }

        projects.push(ClassOne)
        
    
   

    return projects
}
