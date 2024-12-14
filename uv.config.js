self.__uv$config = {
    prefix: '/gsp/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://gsprequest.camdvr.org/uv.handler.js',
    bundle: 'https://gsprequest.camdvr.org/uv.bundle.js',
    config: 'https://gsprequest.camdvr.org/uv.config.js',
    sw: 'https://gsprequest.camdvr.org/uv.sw.js',
};
