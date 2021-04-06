import React, { Component } from "react";
class ForEmployers extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <h5 className="d-flex justify-content-center">For Employers</h5>
                <br />
                <p>
                    For non-EEA countries, people working in Ireland require a
                    work permit from the Enterprise. The most construction
                    trades were reserved for EU countries for many years. As
                    construction labour market drives up in recent years, the
                    shuttering carpenter is currently open to non-EU contries,
                    the plasterer is open with quotas.
                </p>

                <p>
                    To apply for the work permit, the employer has to meet
                    certain criteria. The following factors may be taken into
                    concern in practice :{" "}
                </p>

                <div className="ml-2">
                    1. The company must have been registered for at least 1
                    year; <br />
                    2. The company must have tax cleared in Revenue. <br />
                    3. At least 50% of the employees in the company are EEA
                    nationals (50:50 rule).
                </div>
                <br />
                <p>
                    The official employer criteria in Enterprise website could
                    be found{" "}
                    <a
                        href="https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Permit-Types/General-Employment-Permit/"
                        target="_blank"
                        className=""
                    >
                        {" "}
                        here
                    </a>
                    .{" "}
                </p>
                <p>
                    To bring in Chinese workers here, it normally takes about
                    4-5 months. This is based on presumption the COVID-19
                    quarantine does not exist.
                    <br />
                </p>
                <p>
                    The application fee for 2 years work permit is a 1000 euro.
                    This is the only money you need to pay out for obtaining
                    direct employees from us. We promise our service quality and
                    on time. To give employer a guarantee, We would pay certain
                    amount of deposit to the company who pays the work permit
                    application fee. The deposit is to secure your payment in
                    case of anything unexpected happens, such as refusal or long
                    delay on visa application. We won't withdral the diposit
                    until the new workers' arrival of Ireland.
                </p>
            </div>
        );
    }
}

export default ForEmployers;
