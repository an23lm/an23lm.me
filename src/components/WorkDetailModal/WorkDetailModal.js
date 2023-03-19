import React, { useEffect, useRef, useState } from "react";
import AppStoreIcon from "../../assets/AppStore_Badge.svg";
import GithubIcon from "../../assets/GitHub_Logo.png";
import WorkDetails from "../../WorkDetails";
import "./WorkDetailModal.css";

export default function WorkDetailModal({ showModal, workId, setModalOpen }) {
  const containerRef = useRef();
  const [workDetails, setWorkDetails] = useState();

  const onScroll = (event) => {
    // console.log("scroll", event.nativeEvent.target.scrollTop);
  };

  useEffect(() => {
    setWorkDetails(WorkDetails.filter((w) => w.id === workId)[0]);
  }, [workId]);

  useEffect(() => {
    containerRef.current.setAttribute("visible", `${showModal}`);
  }, [showModal]);

  const backButtonOnClick = () => {
    setModalOpen(false);
  };

  const prevOnClick = () => {
    let wid = workDetails.id;
    if (workDetails.id > 1) wid -= 1;
    setWorkDetails(WorkDetails.find((w) => w.id === wid));
  };

  const nextOnClick = () => {
    let wid = workDetails.id;
    if (workDetails.id < 4) wid += 1;
    setWorkDetails(WorkDetails.find((w) => w.id === wid));
  };

  const openWebsite = (link) => {
    window.open(link, "_blank");
  };

  const getLink = (item) => {
    let child = null;
    if (item.type === "website")
      child = (
        <div className="Link WebsiteLink">
          {/* <img src={WebsiteIcon} className="WebsiteIcon" /> */}
          <p className="WebsiteText">Website</p>
        </div>
      );
    else if (item.type === "github")
      child = (
        <div className="Link GithubLink">
          <img src={GithubIcon} className="GithubIcon" alt="Github link" />
        </div>
      );
    else if (item.type === "appstore")
      child = (
        <div className="Link AppStoreLink">
          <img
            src={AppStoreIcon}
            className="AppStoreIcon"
            alt="App Store Link"
          />
        </div>
      );
    else if (item.type === "award")
      child = (
        <div
          className="Link Award"
          style={{ pointerEvents: "none" }}
          dangerouslySetInnerHTML={{ __html: item.icon }}
        />
      );

    return (
      <div
        key={item.type}
        className="WorkDetailLink"
        onClick={() => openWebsite(item.link)}
      >
        {child}
      </div>
    );
  };

  const image = (imageItem, index) => (
    <div key={`${workDetails.id}-${index}`} className="ImageWrapper">
      <img
        src={imageItem.url}
        className="Image"
        alt="Screenshot of the project"
      />
    </div>
  );

  return (
    <div
      className="WorkDetailModalContainer"
      ref={containerRef}
      onScroll={onScroll}
      onClick={backButtonOnClick}
    >
      <div className="WorkDetailContent" onClick={(e) => e.stopPropagation()}>
        <div className="WorkDetailHeader">
          <div className="WorkDetailBack" onClick={backButtonOnClick}>
            Close
          </div>
        </div>
        <div className="WorkDetailBody">
          <div className="WorkDetailTitleWrapper">
            <div className="WorkDetailTitle Title-font">
              {workDetails?.title}
            </div>
          </div>
          <div className="WorkDetailBodyContent">
            <div className="WorkDetailGallery">
              {workDetails?.images.map(image)}
            </div>
            <div className="WorkDetailDescriptionWrapper">
              <p className="WorkDetailDescription">{workDetails?.subtitle}</p>
              <p className="WorkDetailDescription2">
                {workDetails?.description}
              </p>
              <div className="WorkDetailLinksWrapper">
                {workDetails?.links.map((l) => getLink(l))}
              </div>
            </div>
          </div>
        </div>
        <div className="WorkDetailFooter">
          <div className="PrevItem">
            <div
              className="WorkDetailFooterItem WorkDetailPrev"
              onClick={prevOnClick}
              enabled={workDetails?.id > 1 ? "true" : "false"}
            >
              prev
            </div>
          </div>
          <div className="WorkDetailFooterItem">
            <div
              className="WorkDetailFooterItem WorkDetailNext"
              onClick={nextOnClick}
              enabled={workDetails?.id < 4 ? "true" : "false"}
            >
              next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
