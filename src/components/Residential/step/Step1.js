import { Button, CardTitle, Form, ListGroup, ListGroupItem } from "reactstrap";
import { CheckIcon } from "@/components/common/Icons";

const handleNext = (props) => {
  props.nextStep();
};
const Step1 = (props) => (
  <div >
    <div
      className="p-4 text-center bg-gray-50  shadow-lg"
      style={{ borderRadius: "20px"}}
    >
      <CardTitle
 className="mb-4 text-2xl font-bold"
 style={{
          background: "#203a4b",
          borderRadius: "100px",
          display: "block",
          padding: "5px",
          color: "white",
        }}
      >
        المستندات المطلوبة
      </CardTitle>
      <div>
        <Form>
          <ListGroup flush className="font-weight-light text-right">
            <ListGroupItem className="py-3 border-b">
            <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              معلومات هوية المؤجر والمستأجر
            </ListGroupItem>
            <ListGroupItem className="py-3 border-b">
               <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              جوال الطرفين المسجل في ابشر
            </ListGroupItem>
                        <ListGroupItem className="py-3 border-b">

               <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              رقم الحساب البنكي (آيبان) للمؤجر
            </ListGroupItem>
                        <ListGroupItem className="py-3 border-b">

               <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              رقم الصك الإلكتروني من المؤجر
            </ListGroupItem>
                        <ListGroupItem className="py-3 border-b">

               <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              الدور ، عدد الغرف ، عدد أدوار المبنى
            </ListGroupItem>
                        <ListGroupItem className="py-3 border-b">

               <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              249 رس رسوم الخدمة للسنة{" "}
            </ListGroupItem>
          </ListGroup>
        </Form>
      </div>
      <Button
        className="btn__main btn1"
        style={{ display: "inline-block" }}
        onClick={() => handleNext(props)}
      >
        ابدأ
      </Button>
    </div>
  </div>
);

export default Step1;
