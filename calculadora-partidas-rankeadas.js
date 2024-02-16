let nickName = "Lord Dark";

function partidasRankeadas(quantidadeVitorias, quantidadeDerrotas) {
  let resultado = quantidadeVitorias - quantidadeDerrotas;
  return resultado;
}

function nivelRank() {
  if (saldoVitorias <= 10) {
    let nivel = "Ferro";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    let nivel = "Bronze";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    let nivel = "Prata";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    let nivel = "Ouro";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    let nivel = "Diamante";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    let nivel = "Lendário";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  } else if (saldoVitorias >= 101) {
    let nivel = "Imortal";
    console.log(
      `O ${nickName} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
  }
}

let saldoVitorias = partidasRankeadas(20, 5);

nivelRank();
