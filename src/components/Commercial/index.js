/* eslint-disable react/destructuring-assignment */

import 'animate.css';
import { React, useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';

import useToggle from '../../Hooks/useToggle';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';
import Step5 from './step/Step5';
import Step6 from './step/Step6';
import Step7 from './step/Step7';

import contactInfo from '../../assets/data/contactInfo.json';

const custom = {
    enterRight: 'animate__animated animate__fadeIn ',
    enterLeft: 'animate__animated animate__fadeIn ',
    exitRight: '',
    exitLeft: '',
    intro: ' ',
};

const Contract = () => {
    const html = document.getElementsByTagName('html');
    // eslint-disable-next-line no-unused-vars
    const [lang, setLang] = useToggle(true);
    const [newContract, setNewContract] = useState(false);
    useEffect(() => {
        if (lang) {
            html[0].lang = 'ar';
            html[0].dir = 'rtl';
        } else {
            html[0].lang = 'en';
            html[0].dir = '';
        }
        return () => {
            html[0].lang = 'en';
            html[0].dir = '';
        };
    });
    // eslint-disable-next-line no-unused-vars
    const [stepWizard, setStepWizard] = useState(null);
    const [lessor, setLessor] = useState('');
    const [contractImage, setContractImage] = useState('');
    const [commercialImage, setCommerialImage] = useState('');

    const [info, setInfo] = useState({
        lessorOrlessee:'',
        lessor: '',
        propertyContract: '',
        lessorName: '',
        lessorIdNumber: '',
        lessorPhone: '',
        lessorBirthday: '',
        lessorIban: '',
        lesseeName: '',
        lesseeIdNumber: '',
        lesseePhone: '',
        lesseeBirthday: '',
        propertyContractId: '',
        propertyContractDate: '',
        propertyType: '',
        propertyUse: '',
        buildingFloorsNo: '',
        unitsPerFloor: '',
        rentAmount: '',
        paymentMethod: '',
        startingDate: '',
        contractDuration: '',
        unitType: '',
        FloorNo: '',
        apartmentNo: '',
        roomNo: '',
        insurance: '',
        dailyFine: '',
        water: '',
        electricity: '',
        city: '',
        buildingNo: '',
        postalCode: '',
        extraNo: '',
        contracturl: '',
        commercialRegistrationNo: '',
        commercialurl: '',
        brokerAssistantId:'',
        area:'',
        street:'',
        district:''
    });
    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    // const assignUser = (val) => {
    //     console.log('parent receive user callback');
    //     console.log(val);
    //     setUser((e) => ({
    //         ...e,
    //         ...val,
    //     }));
    // };


    // const handleComplete = () => {
    //     alert('You r done. TQ');
    // };

    return (
        <div className="contract">
            <div className="container contract__container">
                {/* <HeaderHomeRtl className="appie-header-area-rtl " /> */}
                {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
                <div className=" d-flex flex-column min-vh-100  justify-content-center align-items-center ">
                    <StepWizard
                        instance={assignStepWizard}
                        transitions={custom}
                        className="contract__content"
                    >
                        <Step1 info={info} setInfo={setInfo} />
                        {/* <SendEmail info={info} setInfo={setInfo} /> */}
                        <Step2 info={info} setInfo={setInfo} />
                        <Step3
                            lessor={lessor}
                            setLessor={setLessor}
                            info={info}
                            setInfo={setInfo}
                        />
                        <Step4
                            info={info}
                            setInfo={setInfo}
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            commercialImage={commercialImage}
                            setCommerialImage={setCommerialImage}
                        />
                        <Step5
                            info={info}
                            setInfo={setInfo}
                            newContract={newContract}
                            setNewContract={setNewContract}
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                        />
                        <Step6
                            info={info}
                            setInfo={setInfo}
                            newContract={newContract}
                            setNewContract={setNewContract}
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                        />
                        <Step7
                            contractImage={contractImage}
                            setContractImage={setContractImage}
                            info={info}
                            setInfo={setInfo}
                            commercialImage={commercialImage}
                            setCommerialImage={setCommerialImage}
                        />
                    </StepWizard>
                    <div className="mt-3" style={{ color: 'white' }}>
                    واجهتك مشكلة ؟
                        <a
                                                 target="_blank" rel="noopener noreferrer"

                            style={{
                                color: '#03e7b4',
                                paddingRight: '6px',
                                textDecoration: 'underline',
                            }}
                            href={contactInfo.whatsapp}
                        >
                            {'  '}
                            {'  '} كلمنا على واتساب{'  '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
