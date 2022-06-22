import * as React from "react"

export default function IndexMenu() {

  return (
    <div className="hide-mobile mobile-tap-area ">
      <div className="max-width">
        <div className="vertical-center">
          <h1 className="font-fira-code">
            <div className="text-color-white hide-text-block">
              <div className="animate toggle-mobile-first ">Hello.</div>
            </div>
            <div className="text-color-purple hide-text-block">
              <div className="animate delay04 toggle-mobile-first">I am</div>
            </div>
            <div className="text-color-purple hide-text-block">
              <div className="animate delay08 toggle-mobile-first">Lincey</div>
            </div>
          </h1>
        </div>
      </div>
      <div className="tap-indication">Tap anywhere</div>
    </div>
  )
}