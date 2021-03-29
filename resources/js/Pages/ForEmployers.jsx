import React, { Component } from "react";
class ForEmployers extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <h5>For Employers</h5>
                <p>
                    For non-EEA countries, people working in Ireland require a
                    work permit from the Enterprise. The most construction
                    trades were reserved for EU countries for many years. As
                    construction labour market drive up in recent years, the
                    shuttering carpenter is currently open to non-EU contries,
                    the plaster is open with quotas.
                    <br />
                    To apply for the work permit, the employer has to meet
                    certain criteria. The following factors may be taken into
                    concern in practice : <br />
                    1. The company must have been registered for at least 1
                    year; <br />
                    2. The company must have tax cleared in Revenue. <br />
                    3. At least 50% of the employees in a firm are EEA nationals
                    (50:50 rule). <br />
                    The official criteria in Enterprise website could be found{" "}
                    <a
                        href="https://enterprise.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Permit-Types/General-Employment-Permit/"
                        target="_blank"
                        className=""
                    >
                        {" "}
                        here
                    </a>
                    . <br />
                    To bring in Chinese employees to here, it normally takes
                    about 4-5 months. <br />
                </p>
            </div>
        );
    }
}

export default ForEmployers;
