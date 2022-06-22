import * as React from "react"

export default function aboutWorkContact() {

    return (
        <div>
            <div className="max-width">
                <div className="vertical-center">
                    <h1 className="font-fira-code">
                        <div className="hide-text-block">
                            <a href="/about">
                                <div
                                    className="animate text-color-white on-hover-40 hide-web label-hello"
                                ></div>
                                <div
                                    className="animate text-color-white on-hover-40 hide-mobile toggle-mobile-second"
                                >
                                    About
                                </div>
                            </a>
                        </div>
                        <div className="hide-text-block">
                            <a href="/work">
                                <div
                                    className="animate text-color-purple on-hover-40 delay04 hide-web label-iam"
                                ></div>
                                <div
                                    className="animate text-color-purple on-hover-40 delay04 hide-mobile toggle-mobile-second"
                                >
                                    Work
                                </div>
                            </a>
                        </div>
                        <div className="hide-text-block">
                            <a href="/contact">
                                <div
                                    className="animate text-color-purple on-hover-40 delay08 hide-web label-Lincey"
                                ></div>
                                <div
                                    className="animate text-color-purple on-hover-40 delay08 hide-mobile toggle-mobile-second"
                                >
                                    Contact
                                </div>
                            </a>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}