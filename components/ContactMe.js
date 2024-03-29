export default function ContactMe() {
    return (
        <section id="contact" className="sm:w-5/6 w-full rounded-2xl mx-auto py-4 px-8 bg-blurredBg">
            <h2 className="text-5xl mb-4">Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true" action="/"
                className="flex-grow flex flex-col gap-2">
                {/* Netlify form stuff */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex gap-2 w-full">
                    <label className="flex-grow">Your Name:
                        <input type="text" name="name" required
                            className="w-full p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700" />
                    </label>
                    <label className="flex-grow">Your Email:
                        <input type="email" name="email" required
                            className="w-full p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700 invalid:text-pink-500" />
                    </label>
                </div>
                <label>Message:
                    <textarea name="message" rows="6" required
                        className="w-full p-1 border-2 border-slate-300 block rounded focus:ring-1 text-slate-700
                    resize-none"></textarea>
                </label>
                <button type="submit"
                    className="ml-auto hover:bg-foggedBg focus:bg-foggedBg bg-blurredBg active:text-slate-400 ring-slate-50 active:ring-2 ring-0 mt-4 px-4 py-2 rounded-xl">Send</button>
            </form>
        </section>
    );
}