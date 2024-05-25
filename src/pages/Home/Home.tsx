import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/input";

import { DivButton, DivFormWall, ErrorText, Form, Grid } from "./Home.styled";
import { useCalculateRoomPaintMutation } from "../../hooks/useApollo";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils";
import { toast } from "react-toastify";

export interface wallProps {
	height: number;
	length: number;
	quantityDoors?: number;
	quantityWindows?: number;
}

export interface FormProps {
	firstWall: wallProps;
	secondWall: wallProps;
	thirdWall: wallProps;
	fourthWall: wallProps;
}

export const Home = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormProps>();
	const [calculateRoom, { error }] = useCalculateRoomPaintMutation();
	const [existResult, setExistResult] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (info: FormProps) => {
		const { data } = await calculateRoom({
			variables: {
				data: {
					walls: Object.values(info).map(
						(wall) =>
							Object.fromEntries(
								Object.entries(wall).map(([key, value]) => [key, Number(value)])
							) as unknown as wallProps
					),
				},
			},
		});
		const inksRoom = data?.calculateRoomPaint;
		console.log(inksRoom);
		if (inksRoom) {
			navigate(routes.result, { state: { inksRoom } });
		}
	};

	useEffect(() => {
		if (!error?.message) return;

		toast.error(error.message, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}, [error]);

	return (
		<Container>
			<h1>Calcule a quantidade de tinta</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{!existResult && (
					<Grid>
						<DivFormWall>
							<h4>Primeira parede</h4>
							<Controller
								control={control}
								name="firstWall.height"
								rules={{
									required: { value: true, message: "A altura é obrigatório!" },
									min: { value: 1, message: "A altura deve ser no minimo 1!" },
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.firstWall?.height && (
								<ErrorText>{errors.firstWall?.height.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="firstWall.length"
								rules={{
									required: {
										value: true,
										message: "A comprimento é obrigatório!",
									},
									min: {
										value: 1,
										message: "A comprimento deve ser no minimo 1!",
									},
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.firstWall?.length && (
								<ErrorText>{errors.firstWall?.length.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="firstWall.quantityDoors"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da portas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="firstWall.quantityWindows"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da janelas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
						</DivFormWall>

						<DivFormWall>
							<h4>Segunda parede</h4>
							<Controller
								control={control}
								name="secondWall.height"
								rules={{
									required: { value: true, message: "A altura é obrigatório!" },
									min: { value: 1, message: "A altura deve ser no minimo 1!" },
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.secondWall?.height && (
								<ErrorText>{errors.secondWall?.height.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="secondWall.length"
								rules={{
									required: {
										value: true,
										message: "A comprimento é obrigatório!",
									},
									min: {
										value: 1,
										message: "A comprimento deve ser no minimo 1!",
									},
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.secondWall?.length && (
								<ErrorText>{errors.secondWall?.length.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="secondWall.quantityDoors"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da portas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="secondWall.quantityWindows"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da janelas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
						</DivFormWall>

						<DivFormWall>
							<h4>Terceira parede</h4>
							<Controller
								control={control}
								name="thirdWall.height"
								rules={{
									required: { value: true, message: "A altura é obrigatório!" },
									min: { value: 1, message: "A altura deve ser no minimo 1!" },
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.thirdWall?.height && (
								<ErrorText>{errors.thirdWall?.height.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="thirdWall.length"
								rules={{
									required: {
										value: true,
										message: "A comprimento é obrigatório!",
									},
									min: {
										value: 1,
										message: "A comprimento deve ser no minimo 1!",
									},
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.thirdWall?.length && (
								<ErrorText>{errors.thirdWall?.length.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="thirdWall.quantityDoors"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da portas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="thirdWall.quantityWindows"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da janelas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
						</DivFormWall>

						<DivFormWall>
							<h4>Quarta parede</h4>
							<Controller
								control={control}
								name="fourthWall.height"
								rules={{
									required: { value: true, message: "A altura é obrigatório!" },
									min: { value: 1, message: "A altura deve ser no minimo 1!" },
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.fourthWall?.height && (
								<ErrorText>{errors.fourthWall?.height.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="fourthWall.length"
								rules={{
									required: {
										value: true,
										message: "A comprimento é obrigatório!",
									},
									min: {
										value: 1,
										message: "A comprimento deve ser no minimo 1!",
									},
								}}
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							{errors.fourthWall?.length && (
								<ErrorText>{errors.fourthWall?.length.message}</ErrorText>
							)}
							<Controller
								control={control}
								name="fourthWall.quantityDoors"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da portas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="fourthWall.quantityWindows"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a quantidade da janelas..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
						</DivFormWall>
					</Grid>
				)}

				<DivButton>
					{!existResult ? (
						<Button type="submit">Enviar</Button>
					) : (
						<Button onClick={() => setExistResult(false)}>Voltar</Button>
					)}
				</DivButton>
			</Form>
		</Container>
	);
};
