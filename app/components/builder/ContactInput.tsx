import { useEffect, useState } from "react";
import { SingleLineInput } from "./Input";
import { ContactDetails } from "@/app/lib/types/resume";
import { useResumeContext } from "@/app/lib/context";

export default function ContactInput({
  setContact,
}: {
  setContact: (info: ContactDetails) => void;
}) {
  const { resume } = useResumeContext();
  const [phone, setPhone] = useState(resume.contactDetails.phone);
  const [email, setEmail] = useState(resume.contactDetails.email);
  const [website, setWebsite] = useState(resume.contactDetails.website);
  useEffect(() => {
    setPhone(resume.contactDetails.phone);
    setEmail(resume.contactDetails.email);
    setWebsite(resume.contactDetails.website);
  }, [resume]);
  return (
    <div>
      <h3>Contact</h3>
      <SingleLineInput label="Phone Number" value={phone} setValue={setPhone} />
      <SingleLineInput label="Email" value={email} setValue={setEmail} />
      <SingleLineInput label="Website" value={website} setValue={setWebsite} />
      <button onClick={() => setContact({ phone, email, website })}>
        Set Contact
      </button>
    </div>
  );
}
