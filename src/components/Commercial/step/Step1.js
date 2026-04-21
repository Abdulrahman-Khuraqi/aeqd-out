import { CardTitle, Form, ListGroup, ListGroupItem } from "reactstrap";
import { CheckIcon } from "@/components/common/Icons";

const handleNext = (props) => {
  props.nextStep();
};
const Step1 = (props) => (
  <div>
    <div
      className="p-4 text-center shadow-lg"
      style={{ borderRadius: "20px", background: "white" }}
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
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              معلومات هوية المؤجر والمستأجر
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              جوال الطرفين المسجل في ابشر
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              صورة السجل التجاري للمستأجر
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              رقم الحساب البنكي (آيبان) للمؤجر
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              رقم الصك الإلكتروني
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              الدور ، المساحة ، عدد أدوار المبنى
            </ListGroupItem>
            <ListGroupItem className="border-b py-3">
              <CheckIcon
                stroke="#000"
                className="stepZero__icon ml-5 inline p-1"
                width="20"
                height="20"
              />
              399 رس رسوم الخدمة للسنة{" "}
            </ListGroupItem>
          </ListGroup>
        </Form>
      </div>
      <a
        className="btn__main btn1"
        style={{ display: "inline-block" }}
        onClick={() => handleNext(props)}
      >
        ابدأ
      </a>
    </div>
  </div>
);

export default Step1;
