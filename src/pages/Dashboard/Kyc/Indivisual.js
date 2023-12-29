import React from "react";
import { Container, Button} from "reactstrap";
import { Form, Formik } from "formik";
import KycRepresentor from "../../components/Common/KycRepresentor";

function Indivisual(){
    const initialValues = {
        name: "sdf",
        mobile: "12345",
        passport_photo: "",
        whatsapp: "",
        email: "",
        dob: "",
        height: "",
        weight: "",
        gender: "",
        gender: "",
        aadhar_card: "",
        pan_card: "",
        father_name: "",
        mother_name: "",
        spouse_name: "",
        profession: "",
        instagram_link: "",
        facebook_link: "",
        youtube_link: "",
        twitter_link: "",
        linkedin_link: "",
        skype_link: "",
        website_link: "",
        permanent_city: "",
        permanent_district: "",
        permanent_pincode: "",
        permanent_state: "",
        permanent_country: "",
        permanent_address: "",
        temporary_city: "",
        temporary_district: "",
        temporary_pincode: "",
        temporary_state: "",
        temporary_country: "",
        temporary_address: "",
    };

    const handleSubmit = (values) => {
        console.log(values,'values');
    }
    return (
    <React.Fragment>
        <div className="page-content">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Container fluid={true}>
                        <KycRepresentor title="Personal Representor"/> 
                        <Button type="submit">Submit</Button>
                    </Container>
                </Form>
            </Formik>
        </div>
    </React.Fragment>
    );
}
export default Indivisual;