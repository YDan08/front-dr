import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/input";

import { DivButton, DivFormWall, Form, Grid } from "./Home.styled";
import { useCalculateRoomPaintMutation } from "../../hooks/useApollo";
import { Button } from "../../components/button";
import { useState } from "react";
import { Container } from "../../components/container";

interface wallProps {
	height: string;
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
	const { handleSubmit, control } = useForm<FormProps>();
	const [calculateRoom, { data }] = useCalculateRoomPaintMutation();
	const [existResult, setExistResult] = useState(false);

	const onSubmit = async (info: FormProps) => {
		await calculateRoom({
			variables: {
				data: {
					walls: [
						{
							height: Number(info.firstWall.height),
							length: Number(info.firstWall.length),
							quantityDoors: Number(info.firstWall.quantityDoors ?? 0),
							quantityWindows: Number(info.firstWall.quantityWindows ?? 0),
						},
						{
							height: Number(info.secondWall.height),
							length: Number(info.secondWall.length),
							quantityDoors: Number(info.secondWall.quantityDoors ?? 0),
							quantityWindows: Number(info.secondWall.quantityWindows ?? 0),
						},
						{
							height: Number(info.thirdWall.height),
							length: Number(info.thirdWall.length),
							quantityDoors: Number(info.thirdWall.quantityDoors ?? 0),
							quantityWindows: Number(info.thirdWall.quantityWindows ?? 0),
						},
						{
							height: Number(info.fourthWall.height),
							length: Number(info.fourthWall.length),
							quantityDoors: Number(info.fourthWall.quantityDoors ?? 0),
							quantityWindows: Number(info.fourthWall.quantityWindows ?? 0),
						},
					],
				},
			},
		});
		data && setExistResult(true);
	};

	return (
		<Container>
			<h1>Calcule a quantidade de tinta</h1>
			{existResult && (
				<div>
					<h1>Tinta 18L: {data?.CalculateRoomPaint.ink18}</h1>
					<h1>Tinta 3,6L: {data?.CalculateRoomPaint.ink3}</h1>
					<h1>Tinta 2,5L: {data?.CalculateRoomPaint.ink2}</h1>
					<h1>Tinta 0,5L: {data?.CalculateRoomPaint.ink05}</h1>
				</div>
			)}
			<Form onSubmit={handleSubmit(onSubmit)}>
				{!existResult && (
					<Grid>
						<DivFormWall>
							<h4>Primeria parede</h4>
							<Controller
								control={control}
								name="firstWall.height"
								rules={{
									required: { value: true, message: "A altura é obrigatório" },
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
							<Controller
								control={control}
								name="firstWall.length"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
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
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="secondWall.length"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
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
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="thirdWall.length"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
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
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a altura da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="fourthWall.length"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Digite a comprimento da parede..."
										type="number"
										value={value}
										onChange={onChange}
									/>
								)}
							/>
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
export default Home;
