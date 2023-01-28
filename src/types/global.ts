import { ReactElement } from "react";

export interface ProjectSchemaProps {
    name: string;
    description: string;
    link: string;
    icon: ReactElement<any, any>
}

export interface SvgProps {
    props?: ProjectSchemaProps;
    color: string;



}