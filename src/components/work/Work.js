import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import WorkDetails from "../../WorkDetails";
import "./Work.css";

export default function Work({
	setWorkContainerHeight,
	setWorkCardsHeight,
	workEntryOnClick,
}) {
	const clientWidth = useRef(window.innerWidth);

	const containerRef = useRef();
	const workCardsRef = useRef();

	const [isMobile, setIsMobile] = useState(false);

	const onResize = useCallback(() => {
		clientWidth.current = window.innerWidth;
		setWorkContainerHeight(containerRef.current.offsetHeight);
		setWorkCardsHeight(workCardsRef.current.offsetHeight);
		calcMobileDiem();
	}, [setWorkCardsHeight, setWorkContainerHeight]);

	function calcMobileDiem() {
		setIsMobile(clientWidth.current <= 800);
	}

	useEffect(() => {
		onResize();

		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [onResize]);

	useLayoutEffect(() => {
		onResize();
	});

	const workCardOnClick = (id) => {
		workEntryOnClick(id);
	};

	const getTags = (list1, list2) => (
		<div className="Work-card-right">
			<div className="Work-card-tag-list">
				{list1.map((i, index) => (
					<p key={`${index}`} className="Work-card-tag">
						{i}
					</p>
				))}
			</div>

			<div className="Work-card-tag-divider" />

			<div className="Work-card-tag-list">
				{list2.map((i, index) => (
					<p key={`${index}`} className="Work-card-tag">
						{i}
					</p>
				))}
			</div>
		</div>
	);

	const workCard = (workItem) => (
		<div
			className="Elevated-card"
			key={`${workItem.id}`}
			onClick={workCardOnClick.bind(null, workItem.id)}
		>
			<div className="Work-card">
				{isMobile ? getTags(workItem.platforms, workItem.languages) : null}
				<div className="Work-card-left">
					<p className="Work-card-description">{workItem.subtitle}</p>
					<p className="Work-card-name">{workItem.title}</p>
				</div>
				{!isMobile ? getTags(workItem.platforms, workItem.languages) : null}
			</div>
		</div>
	);

	return (
		<div className="Work-container" ref={containerRef}>
			<div className="Work-content">
				<h1 className="Title-font Work-title">Selection of my Work</h1>
				<div className="Work-cards-wrapper">
					<div className="Work-cards" ref={workCardsRef}>
						{WorkDetails.map((w) => workCard(w))}
					</div>
				</div>
			</div>
			<div>
				<h4 className="More-work-footer">
					Find the rest of my open souce work on{" "}
					<a href="https://github.com/an23lm" className="Footer-link">
						github.com/an23lm
					</a>
				</h4>
			</div>
		</div>
	);
}
