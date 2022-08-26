const Inquiries = () => {
    return (
        <main className="main inquiries-main">
            <section className="section work">
                <div className="wrapper">
                    <div className="box">
                        <span>LET'S WORK TOGETHER</span>
                        <h1>Tell us a bit about your project and we'll follow up shortly.</h1>
                    </div>
                    <form action="#" className="form">
                        <label htmlFor="#">
                            Your Name/company name *
                            <input type="text" name="name" id="name"  />
                        </label>

                        <label htmlFor="#">
                            Pronoun (optional)
                            <select name="pronoun" id="pronoun">
                                <option value="She/Her">She/Her</option>
                                <option value="He/Him">He/Him</option>
                                <option value="They/Them">They/Them</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label htmlFor="#">
                            Email *
                            <input type="email" name="email" id="email"  />
                        </label>

                        <label htmlFor="#">
                            Website/Instagram (if exists) 
                            <input type="text" name="website" id="website"  />
                        </label>

                        <label htmlFor="#">
                            Timeline *
                            <select name="pronoun" id="pronoun">
                                <option value="Quickly, but no hard Date">Quickly, but no hard Date</option>
                                <option value="3 - 6 Weeks">3 - 6 Weeks</option>
                                <option value="6 - 8 Weeks">6 - 8 Weeks</option>
                                <option value="2 - 4 Months">2 - 4 Months</option>
                            </select>
                        </label> 

                        <label htmlFor="#">
                            What would you like help with? *
                            <textarea name="help" id="help" cols="30" rows="10"></textarea>
                        </label> 

                        <label htmlFor="#">
                            Specify Budget Range 
                            <select name="pronoun" id="pronoun">
                                <option value="$2000">$2000</option>
                                <option value="$5000">$5000</option>
                                <option value="$7000">$7000</option>
                                <option value="$1000">$1000</option>
                            </select>
                        </label>     

                        <label htmlFor="#">
                            <button name="submit">Submit</button>
                        </label>                     
                    </form>
                </div>
            </section>
        </main>
    );
}
 
export default Inquiries;