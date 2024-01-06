import { Button, TextField, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Grid, Stack } from '@mui/material';

export default function Cadastro() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center">
      <Stack spacing={2} width="100%" maxWidth="400px" textAlign="center">

        {/* Informações Gerais */}
        <TextField label="Nome da Peça" variant="outlined" fullWidth required />
        <TextField label="Categoria" variant="outlined" fullWidth required />
        <TextField label="Marca" variant="outlined" fullWidth required />
        <TextField label="Modelo" variant="outlined" fullWidth required />
        <TextField label="Ano" variant="outlined" fullWidth required />

        {/* Condição da Peça */}
        <FormControl fullWidth required>
          <InputLabel id="condicao-label">Condição</InputLabel>
          <Select labelId="condicao-label" label="Condição">
            <MenuItem value="nova">Nova</MenuItem>
            <MenuItem value="usada">Usada</MenuItem>
            <MenuItem value="recondicionada">Recondicionada</MenuItem>
          </Select>
        </FormControl>

        {/* Preço e Estoque */}
        <TextField type="number" label="Preço" variant="outlined" fullWidth required />
        <TextField type="number" label="Quantidade em Estoque" variant="outlined" fullWidth required />

        {/* Descrição */}

        {/* Botão de Envio */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Peça
        </Button>

      </Stack>
    </Grid>
  );
}
