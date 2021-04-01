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
                    construction labour market drive up in recent years, the
                    shuttering carpenter currently open to non-EU contries, the
                    plasterer is open with quotas.
                </p>
                <p>
                    To apply for the work permit, the employer has to meet
                    certain criteria. The following factors may be taken into
                    concern in practice :{" "}
                </p>

                <p>
                    <div className="ml-2">
                        1. The company must have been registered for at least 1
                        year; <br />
                        2. The company must have tax cleared in Revenue. <br />
                        3. At least 50% of the employees in a firm are EEA
                        nationals (50:50 rule). <br />
                    </div>
                </p>
                <p>
                    The official criteria in Enterprise website could be found{" "}
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
                    To bring in Chinese employees to here, it normally takes
                    about 4-5 months. <br />
                </p>
            </div>
        );
    }
}

export default ForEmployers;
