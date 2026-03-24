import Footer from "../components/common/Footer"
import ContactDetails from "../components/core/ContactPage/ContactDetails"
import ContactForm from "../components/core/ContactPage/ContactForm"

const Contact = () => {
  return (
    <div>
       <div className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
            {/* Contact Details */}
            <div className="lg:w-[40%]">
            <ContactDetails />
            </div>

            {/* Contact Form */}
            <div className="lg:w-[60%]">
            <ContactForm/>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Contact
