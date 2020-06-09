# Ecoleta :earth_asia: :earth_africa: :earth_americas:

O Ecoleta tem o obetivo de mapear pontos de coleta de resíduos que não podem ser descartados de qualquer maneira, como pilhas e lixo eletrônico.
Um ponto de coleta pode ser cadastrado pelo aplicativo web, e os dados de localização deste ponto de coleta ficam disponíveis na API pública do ecoleta.
Os pontos de coleta cadastrados podem ser visualizados através do aplicativo ecoleta, disponível para Android na Play Store.
Este projeto foi idealizado pela Rocketseat na primeira edição da Next Level Week (NLW), durante a semana do meio ambiente de 2020.

---
![](https://imgur.com/WvKt6CG.gif)
---

## Como funciona?

1. Um dono de um estabelecimento que colete resíduos especiais para descarte se cadastra na [plataforma](https://lucas-lm.github.io/ecoleta-web/).
2. Os dados sobre este estabelecimento como itens que coleta, localização, nome e endereço ficam disponíveis na nossa base de dados e pode ser acessado publicamente através da nossa API. Você pode até mesmo usar estes dados em seu próprio site/serviço/app ou criar um client personalizado :smirk:
3. Uma pessoa em busca de um local para descartar seus resíduos especiais entra no app e encontra os pontos de coleta que deseja. Por baixo dos panos o app busca os dados dos pontos de coleta na nossa API pública.
4. A partir do app a pessoa pode escolher entrar em contato com o estabelecimento escolhido ou ir até lá para fazer o descarte.
5. O estabelecimento cuida para que o descarte seja feito adequadamente e o meio ambiente agradece :seedling: :evergreen_tree: :deciduous_tree:

## Sobre o app

O app mobile fornece uma interface gráfica onde é possível visualizar pontos de coleta pelo mapa.
O app está disponível para android na Play Store.

### Funcionalidades

- Visualização de detalhes dos pontos de coleta
  - Itens que o ponto de coleta aceita
  - Whatsapp
  - E-mail
  - Nome do ponto de coleta
  - Endereço do ponto de coleta
- Geolocalização
  - Abre o mapa centralizado na região em que você se encontra
  - Exibe pontos de coleta próximos de você
- Integração com mapas padrão do smartphone
  - Você pode visualizar pontos de coleta no mapa
- Integração com whatsapp
  - Você pode enviar mensagem via whatsapp para o ponto de coleta diretamente do app
- Integração com aplicativo de email
  - Você pode enviar mensagem via e-mail para o ponto de coleta diretamente do app

## Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/) - Interpretador de JavaScript assíncrono
- [TypeScript](https://www.typescriptlang.org/) - Um superset do javascript com tipagem estática que compila para javascript limpo
- [ReactJS](https://reactjs.org/) - Uma biblioteca declarativa e flexível para criação de interfaces do usuário
- [React Native](https://reactnative.dev/) - Framework para construção de aplicativos nativos com React
- [Expo](https://docs.expo.io/) - Plataforma para criação de aplicativos nativos com React
- [Axios](https://github.com/axios/axios) - Cliente HTTP baseado em Promises para o Browser e NodeJS

## Veja também

- Web app em funcionamento: https://lucas-lm.github.io/ecoleta-web
- Repositório da API: https://github.com/lucas-lm/ecoleta-api
- Repositório do app web: https://github.com/lucas-lm/ecoleta-web

## Autor

Feito com :heart: e :coffee: por:

[<img src="https://avatars3.githubusercontent.com/u/29049644?s=460&u=6fcf78abdf0e007afa9b2a31beaf686d79fa9173&v=4" width=115><br><sub>@lucas-lm</sub>](https://github.com/lucas-lm)

LinkedIn: https://www.linkedin.com/in/lucas-miranda-103976168/
Twitter: @Lucas66321061
