import React, { SVGProps } from "react";

const VisaSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      enable-background="new 0 0 750 471"
      height="471"
      viewBox="0 0 750 471"
      width="750"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        position: "absolute",
        width: "51px",
        height: "30px",
        top: "11px",
        right: "13px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <g fill="#0e4595">
        <path d="m278.198 334.228 33.36-195.763h53.358l-33.384 195.763z" />
        <path d="m524.307 142.687c-10.57-3.966-27.135-8.222-47.822-8.222-52.725 0-89.863 26.551-90.18 64.604-.297 28.129 26.514 43.821 46.754 53.185 20.77 9.597 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.116-31.924 19.116-21.355 0-32.701-2.967-50.225-10.274l-6.877-3.112-7.488 43.823c12.463 5.466 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.884.199-22.27-14.016-39.216-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.559-16.838 17.447-.271 30.088 3.534 39.936 7.5l4.781 2.259z" />
        <path d="m661.615 138.464h-41.23c-12.773 0-22.332 3.486-27.941 16.234l-79.244 179.402h56.031s9.16-24.121 11.232-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512zm-65.417 126.408c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.607 16.878s10.217 46.729 12.352 56.527h-44.293z" />
        <path d="m45.878906 138.46484-.68164 4.07227c21.092962 5.106 39.932007 12.49619 56.425784 21.68945l47.3457 169.6875 56.45508-.0625 84.0039-195.38672h-56.52539l-52.23828 133.4961-5.56445-27.13086c-.26068-.83823-.54407-1.67793-.83399-2.51953l-18.16015-87.31836c-3.229-12.396-12.59655-16.09535-24.18555-16.52735z" />
      </g>
    </svg>
  );
};

export default VisaSvg;
