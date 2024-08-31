export interface Resume {
  basicInfo: PersonalDetails;
}

export interface PersonalDetails {
  name: string;
  location: string;
  contact: ContactDetails;
  bio: string;
}

export interface ContactDetails {
  email: string | null;
  phone: string | null;
  website: string | null;
}

export interface HTMLToPDFObject {
  filename: string;
  htmlContent: string;
  cssContent: any;
}

export function isHTMLToPDFObject(obj: any): obj is HTMLToPDFObject {
  return (
    typeof obj.filename === "string" &&
    typeof obj.htmlContent === "string" &&
    typeof obj.cssContent === "string"
  );
}
