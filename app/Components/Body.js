"use client"
import Terminal from "./Terminal"
import TiltedCard from "@/components/ui/TiltedCard"

export default function Body() {
    return (
        <div className="h-[91vh] w-full bg-black text-green-400 font-mono overflow-hidden">
            <div className="h-[91vh] flex ">
                <div className="w-1/3 flex flex-col p-8 hidden xl:block border-b border-green-500 ">

                    <div className="flex justify-center items-center h-full flex-col">
                        <TiltedCard
                            imageSrc="./profile.jpeg"
                            altText="Aniket Saha - Software Engineer"
                            captionText="Kendrick Lamar - GNX"
                            containerHeight="350px"
                            containerWidth="350px"
                            imageHeight="350px"
                            imageWidth="350px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            captionTextClass="pink"
                            captionBgClass="black"
                            captionFontSizeClass="text-xs"
                            overlayContent={
                                <p className="tilted-card-demo-text">
                                    Aniket Saha - Wiz
                                </p>
                            }
                        />
                    </div>
                    <div className=" flex justify-end text-sm text-green-500">
                        [Interactive 3D card]
                    </div>
                </div>
                <div className="h-full xl:border-l border-b border-green-500 w-full xl:w-2/3">
                    <div className="md:w-full overflow-hidden h-full">
                        <Terminal />
                    </div>
                </div>
            </div>
        </div>
    )
}
