
import SectionTitle from "./SectionTitle";

function Contact() {
    return (
        <section className="h-auto w-full py-10 bg-emerald-100" id="contact">
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <SectionTitle title="Contact Us" />
                <h1 className="font-medium underline text-3xl text-center mb-6">Contact</h1>
                <form className="flex flex-col space-y-5">
                    <label className="flex flex-col">
                        <span className="font-semibold text-lg mb-1">Name:</span>
                        <input 
                            type="text" 
                            id="name" 
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                            placeholder="Enter your name"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="font-semibold text-lg mb-1">Email:</span>
                        <input 
                            type="email" 
                            id="email" 
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                            placeholder="Enter your email"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="font-semibold text-lg mb-1">Message:</span>
                        <textarea 
                            id="message" 
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                            placeholder="Write your message" 
                            rows="5"
                        />
                    </label>
                    <button 
                        type="submit" 
                        className="mt-4 bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
