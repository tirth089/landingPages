import { useForm } from 'react-hook-form';
import './contactus.scss';
const Contactus = () => {
    // const moreInfo = () => { }
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    console.log(errors);
    return (
        <div className="contactUsContainer">
            <div className="container textCentered">
                <h4 className="title textColor" id="contact">35,000+ Already Joined</h4>
                <h1 className="pad-btm-2 textColor sectittle">Stay up-to-date with what we're doing.</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{ position: 'relative' }}>
                    <input
                        className={(errors.email) ? 'errorBorder' : ''}
                        type="text"
                        {...register('email', {
                            required: true,
                            pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && errors.email.type === "required" && <span className="errorMsg">This is required</span>}
                    {errors.email && errors.email.type === "pattern" && <span className="errorMsg">Whoops, make sure it's sure an email</span>}
                    <input type="submit" className="dangerBtn" value="Contact Us" />
                </form>
            </div>
        </div>
    );
}
export default Contactus