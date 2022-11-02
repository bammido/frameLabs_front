import React from "react";
import ImageLogo from "../../Atoms/imageLogo";
import imageCar from "../../Assets/carro-sedan-na-frente.png";
import "./style.css";

export default function LogoImageCar() {
	return (
		<>
			<div>
				<ImageLogo src={imageCar} />
			</div>
		</>
	);
}
