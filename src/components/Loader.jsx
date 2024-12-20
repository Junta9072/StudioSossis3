import "../styles/loader.css";
import { useParams } from "react-router-dom";

export default function Loader(props) {
  const { code, project } = useParams();
  console.log(code, project);

  let loaderFill;
  let logoFill;

  if (code != null) {
    loaderFill = "#" + code;
    if (loaderFill == "#000000") {
      logoFill = "#ffffff";
    } else {
      logoFill = "#000000";
    }
  } else if (props.color) {
    logoFill = props.color[0];
    loaderFill = props.color[1];
  } else {
    logoFill = "#f43711";
    loaderFill = "#000000";
  }

  // console.log(loaderFill);
  return (
    <div
      className={"loader__cover " + props.display}
      style={{ backgroundColor: loaderFill }}
    >
      <div className="loader__container">
        <svg
          className="loader__logo loader__logo--1"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 387.31 91.34"
          fill={logoFill}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path d="m338.67,45.44c-.02-8.24-1.19-15.29-3.51-21.12-2.36-5.88-5.92-10.58-10.7-14.14-4.77-3.58-10.49-6.15-17.2-7.77-6.71-1.6-14.66-2.41-23.87-2.41h-89.74s-89.74.01-89.74.01c-7.48,0-14.03.43-19.61,1.31-5.58.86-10.7,2.34-15.33,4.44s-8.4,4.86-11.28,8.33c-2.9,3.45-5.13,7.81-6.71,13.06-1.53,5.13-2.3,11.17-2.34,18.08l.34.34-.34.34c.02,8.24,1.19,15.29,3.51,21.12,2.36,5.88,5.92,10.58,10.7,14.14,4.77,3.58,10.49,6.15,17.2,7.77,6.71,1.6,14.66,2.41,23.87,2.41h89.74s89.74-.01,89.74-.01c7.48,0,14.03-.43,19.61-1.31,5.58-.86,10.7-2.34,15.33-4.44,4.64-2.09,8.4-4.86,11.28-8.33,2.9-3.45,5.13-7.81,6.71-13.06,1.53-5.13,2.3-11.17,2.34-18.08l-.34-.34.34-.34Zm-30.56,12.02c-1.15,3.17-2.93,5.65-5.29,7.43-2.36,1.78-5.11,2.99-8.17,3.72-3.08.7-6.85,1.06-11.26,1.06h-89.74v.06h-89.74c-4.5,0-8.31-.34-11.39-1.06-3.11-.7-5.83-1.94-8.2-3.69-2.34-1.78-4.08-4.26-5.18-7.41-1.1-3.15-1.67-7.12-1.67-11.87s.56-8.65,1.71-11.82c1.15-3.17,2.93-5.65,5.29-7.43,2.36-1.78,5.11-2.99,8.17-3.72,3.08-.7,6.85-1.06,11.26-1.06h89.74v-.06h89.74c4.5,0,8.31.34,11.39,1.06,3.11.7,5.83,1.94,8.2,3.69,2.34,1.78,4.08,4.26,5.18,7.41,1.1,3.15,1.67,7.12,1.67,11.87s-.56,8.65-1.71,11.82Z" />
              <polygon points="387.31 30.22 370.51 13.49 338.67 45.44 338.67 46.12 370.54 77.86 387.27 61.09 371.84 45.73 387.31 30.22" />
              <polygon points="16.78 13.48 .05 30.25 15.47 45.61 0 61.12 16.8 77.85 48.64 45.9 48.64 45.23 16.78 13.48" />
            </g>
          </g>
        </svg>
        <svg
          className="loader__logo loader__logo--2"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 387.31 91.34"
          fill={logoFill}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path d="m338.67,45.44c-.02-8.24-1.19-15.29-3.51-21.12-2.36-5.88-5.92-10.58-10.7-14.14-4.77-3.58-10.49-6.15-17.2-7.77-6.71-1.6-14.66-2.41-23.87-2.41h-89.74s-89.74.01-89.74.01c-7.48,0-14.03.43-19.61,1.31-5.58.86-10.7,2.34-15.33,4.44s-8.4,4.86-11.28,8.33c-2.9,3.45-5.13,7.81-6.71,13.06-1.53,5.13-2.3,11.17-2.34,18.08l.34.34-.34.34c.02,8.24,1.19,15.29,3.51,21.12,2.36,5.88,5.92,10.58,10.7,14.14,4.77,3.58,10.49,6.15,17.2,7.77,6.71,1.6,14.66,2.41,23.87,2.41h89.74s89.74-.01,89.74-.01c7.48,0,14.03-.43,19.61-1.31,5.58-.86,10.7-2.34,15.33-4.44,4.64-2.09,8.4-4.86,11.28-8.33,2.9-3.45,5.13-7.81,6.71-13.06,1.53-5.13,2.3-11.17,2.34-18.08l-.34-.34.34-.34Zm-30.56,12.02c-1.15,3.17-2.93,5.65-5.29,7.43-2.36,1.78-5.11,2.99-8.17,3.72-3.08.7-6.85,1.06-11.26,1.06h-89.74v.06h-89.74c-4.5,0-8.31-.34-11.39-1.06-3.11-.7-5.83-1.94-8.2-3.69-2.34-1.78-4.08-4.26-5.18-7.41-1.1-3.15-1.67-7.12-1.67-11.87s.56-8.65,1.71-11.82c1.15-3.17,2.93-5.65,5.29-7.43,2.36-1.78,5.11-2.99,8.17-3.72,3.08-.7,6.85-1.06,11.26-1.06h89.74v-.06h89.74c4.5,0,8.31.34,11.39,1.06,3.11.7,5.83,1.94,8.2,3.69,2.34,1.78,4.08,4.26,5.18,7.41,1.1,3.15,1.67,7.12,1.67,11.87s-.56,8.65-1.71,11.82Z" />
              <polygon points="387.31 30.22 370.51 13.49 338.67 45.44 338.67 46.12 370.54 77.86 387.27 61.09 371.84 45.73 387.31 30.22" />
              <polygon points="16.78 13.48 .05 30.25 15.47 45.61 0 61.12 16.8 77.85 48.64 45.9 48.64 45.23 16.78 13.48" />
            </g>
          </g>
        </svg>
        <svg
          className="loader__logo loader__logo--1bis"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 387.31 91.34"
          fill={logoFill}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path d="m338.67,45.44c-.02-8.24-1.19-15.29-3.51-21.12-2.36-5.88-5.92-10.58-10.7-14.14-4.77-3.58-10.49-6.15-17.2-7.77-6.71-1.6-14.66-2.41-23.87-2.41h-89.74s-89.74.01-89.74.01c-7.48,0-14.03.43-19.61,1.31-5.58.86-10.7,2.34-15.33,4.44s-8.4,4.86-11.28,8.33c-2.9,3.45-5.13,7.81-6.71,13.06-1.53,5.13-2.3,11.17-2.34,18.08l.34.34-.34.34c.02,8.24,1.19,15.29,3.51,21.12,2.36,5.88,5.92,10.58,10.7,14.14,4.77,3.58,10.49,6.15,17.2,7.77,6.71,1.6,14.66,2.41,23.87,2.41h89.74s89.74-.01,89.74-.01c7.48,0,14.03-.43,19.61-1.31,5.58-.86,10.7-2.34,15.33-4.44,4.64-2.09,8.4-4.86,11.28-8.33,2.9-3.45,5.13-7.81,6.71-13.06,1.53-5.13,2.3-11.17,2.34-18.08l-.34-.34.34-.34Zm-30.56,12.02c-1.15,3.17-2.93,5.65-5.29,7.43-2.36,1.78-5.11,2.99-8.17,3.72-3.08.7-6.85,1.06-11.26,1.06h-89.74v.06h-89.74c-4.5,0-8.31-.34-11.39-1.06-3.11-.7-5.83-1.94-8.2-3.69-2.34-1.78-4.08-4.26-5.18-7.41-1.1-3.15-1.67-7.12-1.67-11.87s.56-8.65,1.71-11.82c1.15-3.17,2.93-5.65,5.29-7.43,2.36-1.78,5.11-2.99,8.17-3.72,3.08-.7,6.85-1.06,11.26-1.06h89.74v-.06h89.74c4.5,0,8.31.34,11.39,1.06,3.11.7,5.83,1.94,8.2,3.69,2.34,1.78,4.08,4.26,5.18,7.41,1.1,3.15,1.67,7.12,1.67,11.87s-.56,8.65-1.71,11.82Z" />
              <polygon points="387.31 30.22 370.51 13.49 338.67 45.44 338.67 46.12 370.54 77.86 387.27 61.09 371.84 45.73 387.31 30.22" />
              <polygon points="16.78 13.48 .05 30.25 15.47 45.61 0 61.12 16.8 77.85 48.64 45.9 48.64 45.23 16.78 13.48" />
            </g>
          </g>
        </svg>
        <svg
          className="loader__logo loader__logo--2bis"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 387.31 91.34"
          fill={logoFill}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path d="m338.67,45.44c-.02-8.24-1.19-15.29-3.51-21.12-2.36-5.88-5.92-10.58-10.7-14.14-4.77-3.58-10.49-6.15-17.2-7.77-6.71-1.6-14.66-2.41-23.87-2.41h-89.74s-89.74.01-89.74.01c-7.48,0-14.03.43-19.61,1.31-5.58.86-10.7,2.34-15.33,4.44s-8.4,4.86-11.28,8.33c-2.9,3.45-5.13,7.81-6.71,13.06-1.53,5.13-2.3,11.17-2.34,18.08l.34.34-.34.34c.02,8.24,1.19,15.29,3.51,21.12,2.36,5.88,5.92,10.58,10.7,14.14,4.77,3.58,10.49,6.15,17.2,7.77,6.71,1.6,14.66,2.41,23.87,2.41h89.74s89.74-.01,89.74-.01c7.48,0,14.03-.43,19.61-1.31,5.58-.86,10.7-2.34,15.33-4.44,4.64-2.09,8.4-4.86,11.28-8.33,2.9-3.45,5.13-7.81,6.71-13.06,1.53-5.13,2.3-11.17,2.34-18.08l-.34-.34.34-.34Zm-30.56,12.02c-1.15,3.17-2.93,5.65-5.29,7.43-2.36,1.78-5.11,2.99-8.17,3.72-3.08.7-6.85,1.06-11.26,1.06h-89.74v.06h-89.74c-4.5,0-8.31-.34-11.39-1.06-3.11-.7-5.83-1.94-8.2-3.69-2.34-1.78-4.08-4.26-5.18-7.41-1.1-3.15-1.67-7.12-1.67-11.87s.56-8.65,1.71-11.82c1.15-3.17,2.93-5.65,5.29-7.43,2.36-1.78,5.11-2.99,8.17-3.72,3.08-.7,6.85-1.06,11.26-1.06h89.74v-.06h89.74c4.5,0,8.31.34,11.39,1.06,3.11.7,5.83,1.94,8.2,3.69,2.34,1.78,4.08,4.26,5.18,7.41,1.1,3.15,1.67,7.12,1.67,11.87s-.56,8.65-1.71,11.82Z" />
              <polygon points="387.31 30.22 370.51 13.49 338.67 45.44 338.67 46.12 370.54 77.86 387.27 61.09 371.84 45.73 387.31 30.22" />
              <polygon points="16.78 13.48 .05 30.25 15.47 45.61 0 61.12 16.8 77.85 48.64 45.9 48.64 45.23 16.78 13.48" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
