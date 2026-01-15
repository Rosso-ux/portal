Este projeto é um portal de viagens desenvolvido em Next.js, que lista destinos turísticos e permite visualizar detalhes individuais de cada local.

## Gargalos Identificados (Antes)

- Imagens grandes e não otimizadas, causando alto consumo de banda.
- LCP elevado devido ao carregamento de imagens sem priorização.
- JavaScript contribuindo para tempo de bloqueio da renderização.

## Melhorias Aplicadas

- Substituição de <img> por next/image para otimização automática.
- Aplicação de lazy loading nas imagens.
- Remoção de imports e estilos não utilizados.
- Garantia de minificação de JS e CSS.
