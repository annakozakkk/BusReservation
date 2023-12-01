import {Input} from "./Input"

import {message, Modal} from "antd";
import {useForm,FormProvider} from "react-hook-form";
const ReservationForm = ({visible,onCancel,onConfirm}) => {
    const methods = useForm();

     const  onSubmit =methods.handleSubmit(async (data) => {
         onConfirm();


         methods.reset();
     })

    return(
        <FormProvider {...methods}>
       <Modal
       visible={visible}
       onCancel={onCancel}
       onOk={onSubmit}
       title="Реєстрація місць">
            <form onSubmit={e => e.preventDefault()}
                  noValidate
                  className="container">
                    <Input
                        label="ПІБ"
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Введіть своє ПІБ"
                        validation={{
                            required: {
                                value: true,
                                message: 'required',
                            },
                            minLength: {
                                value: 6,
                                message: 'min 6 characters',
                            },
                        }}/>
                    <Input
                        label="Контакти"
                        name = "constacts"
                        type="number"
                        id="contacts"
                        placeholder="Введіть свій номер телефону"
                        validation={{
                            required: {
                                value: true,
                                message: 'required',
                            },
                            minLength: {
                                value: 10,
                                message: 'min 10 characters',
                            },
                            maxLength:{
                                value: 10,
                                message: 'max 10 characters'}
                        }}/>

            </form>
       </Modal>
        </FormProvider>
    )

 }

 export default ReservationForm