export default function ContactMe() {
    return (
        <section className="sm:w-5/6 w-full rounded-2xl mx-auto p-8 bg-blurredBg">
            <h2 className="text-4xl mb-2">Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true" action="/"
                className="flex-grow flex flex-col gap-4">
                {/* Netlify form stuff */}
                <input type="hidden" name="form-name" value="contact" />
                <label className="">Your Name:
                    <input type="text" name="name" required
                        className="w-5/6 p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700" />
                </label>
                <label>Your Email:
                    <input type="email" name="email" required
                        className="w-5/6 p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700 invalid:text-pink-500" />
                </label>
                <label>Message:
                    <textarea name="message" rows="6" required
                        className="w-5/6 p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700
                    resize-none"></textarea>
                </label>
                <button type="submit"
                    className="ml-auto hover:bg-foggedBg focus:bg-foggedBg bg-blurredBg active:text-slate-400 ring-slate-50 active:ring-2 ring-0 px-4 py-2 rounded-xl">Send</button>
            </form>
        </section>
    );
}