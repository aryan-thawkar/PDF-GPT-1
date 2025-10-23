module.exports = [
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region rolldown:runtime
__turbopack_context__.s([
    "__export",
    ()=>__export
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/documents/document.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/documents/document.ts
/**
* Interface for interacting with a document.
*/ __turbopack_context__.s([
    "Document",
    ()=>Document
]);
var Document = class {
    pageContent;
    metadata;
    /**
	* An optional identifier for the document.
	*
	* Ideally this should be unique across the document collection and formatted
	* as a UUID, but this will not be enforced.
	*/ id;
    constructor(fields){
        this.pageContent = fields.pageContent !== void 0 ? fields.pageContent.toString() : "";
        this.metadata = fields.metadata ?? {};
        this.id = fields.id;
    }
};
;
 //# sourceMappingURL=document.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/map_keys.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keyFromJson",
    ()=>keyFromJson,
    "keyToJson",
    ()=>keyToJson,
    "mapKeys",
    ()=>mapKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$decamelize$40$1$2e$2$2e$0$2f$node_modules$2f$decamelize$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/decamelize@1.2.0/node_modules/decamelize/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$camelcase$40$6$2e$3$2e$0$2f$node_modules$2f$camelcase$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/camelcase@6.3.0/node_modules/camelcase/index.js [app-route] (ecmascript)");
;
;
//#region src/load/map_keys.ts
function keyToJson(key, map) {
    return map?.[key] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$decamelize$40$1$2e$2$2e$0$2f$node_modules$2f$decamelize$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key);
}
function keyFromJson(key, map) {
    return map?.[key] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$camelcase$40$6$2e$3$2e$0$2f$node_modules$2f$camelcase$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(key);
}
function mapKeys(fields, mapper, map) {
    const mapped = {};
    for(const key in fields)if (Object.hasOwn(fields, key)) mapped[mapper(key, map)] = fields[key];
    return mapped;
}
;
 //# sourceMappingURL=map_keys.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/serializable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Serializable",
    ()=>Serializable,
    "get_lc_unique_name",
    ()=>get_lc_unique_name,
    "serializable_exports",
    ()=>serializable_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$map_keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/map_keys.js [app-route] (ecmascript)");
;
;
//#region src/load/serializable.ts
var serializable_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(serializable_exports, {
    Serializable: ()=>Serializable,
    get_lc_unique_name: ()=>get_lc_unique_name
});
function shallowCopy(obj) {
    return Array.isArray(obj) ? [
        ...obj
    ] : {
        ...obj
    };
}
function replaceSecrets(root, secretsMap) {
    const result = shallowCopy(root);
    for (const [path, secretId] of Object.entries(secretsMap)){
        const [last, ...partsReverse] = path.split(".").reverse();
        let current = result;
        for (const part of partsReverse.reverse()){
            if (current[part] === void 0) break;
            current[part] = shallowCopy(current[part]);
            current = current[part];
        }
        if (current[last] !== void 0) current[last] = {
            lc: 1,
            type: "secret",
            id: [
                secretId
            ]
        };
    }
    return result;
}
/**
* Get a unique name for the module, rather than parent class implementations.
* Should not be subclassed, subclass lc_name above instead.
*/ function get_lc_unique_name(serializableClass) {
    const parentClass = Object.getPrototypeOf(serializableClass);
    const lcNameIsSubclassed = typeof serializableClass.lc_name === "function" && (typeof parentClass.lc_name !== "function" || serializableClass.lc_name() !== parentClass.lc_name());
    if (lcNameIsSubclassed) return serializableClass.lc_name();
    else return serializableClass.name;
}
var Serializable = class Serializable {
    lc_serializable = false;
    lc_kwargs;
    /**
	* The name of the serializable. Override to provide an alias or
	* to preserve the serialized module name in minified environments.
	*
	* Implemented as a static method to support loading logic.
	*/ static lc_name() {
        return this.name;
    }
    /**
	* The final serialized identifier for the module.
	*/ get lc_id() {
        return [
            ...this.lc_namespace,
            get_lc_unique_name(this.constructor)
        ];
    }
    /**
	* A map of secrets, which will be omitted from serialization.
	* Keys are paths to the secret in constructor args, e.g. "foo.bar.baz".
	* Values are the secret ids, which will be used when deserializing.
	*/ get lc_secrets() {
        return void 0;
    }
    /**
	* A map of additional attributes to merge with constructor args.
	* Keys are the attribute names, e.g. "foo".
	* Values are the attribute values, which will be serialized.
	* These attributes need to be accepted by the constructor as arguments.
	*/ get lc_attributes() {
        return void 0;
    }
    /**
	* A map of aliases for constructor args.
	* Keys are the attribute names, e.g. "foo".
	* Values are the alias that will replace the key in serialization.
	* This is used to eg. make argument names match Python.
	*/ get lc_aliases() {
        return void 0;
    }
    /**
	* A manual list of keys that should be serialized.
	* If not overridden, all fields passed into the constructor will be serialized.
	*/ get lc_serializable_keys() {
        return void 0;
    }
    constructor(kwargs, ..._args){
        if (this.lc_serializable_keys !== void 0) this.lc_kwargs = Object.fromEntries(Object.entries(kwargs || {}).filter(([key])=>this.lc_serializable_keys?.includes(key)));
        else this.lc_kwargs = kwargs ?? {};
    }
    toJSON() {
        if (!this.lc_serializable) return this.toJSONNotImplemented();
        if (this.lc_kwargs instanceof Serializable || typeof this.lc_kwargs !== "object" || Array.isArray(this.lc_kwargs)) return this.toJSONNotImplemented();
        const aliases = {};
        const secrets = {};
        const kwargs = Object.keys(this.lc_kwargs).reduce((acc, key)=>{
            acc[key] = key in this ? this[key] : this.lc_kwargs[key];
            return acc;
        }, {});
        for(let current = Object.getPrototypeOf(this); current; current = Object.getPrototypeOf(current)){
            Object.assign(aliases, Reflect.get(current, "lc_aliases", this));
            Object.assign(secrets, Reflect.get(current, "lc_secrets", this));
            Object.assign(kwargs, Reflect.get(current, "lc_attributes", this));
        }
        Object.keys(secrets).forEach((keyPath)=>{
            let read = this;
            let write = kwargs;
            const [last, ...partsReverse] = keyPath.split(".").reverse();
            for (const key of partsReverse.reverse()){
                if (!(key in read) || read[key] === void 0) return;
                if (!(key in write) || write[key] === void 0) {
                    if (typeof read[key] === "object" && read[key] != null) write[key] = {};
                    else if (Array.isArray(read[key])) write[key] = [];
                }
                read = read[key];
                write = write[key];
            }
            if (last in read && read[last] !== void 0) write[last] = write[last] || read[last];
        });
        return {
            lc: 1,
            type: "constructor",
            id: this.lc_id,
            kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$map_keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapKeys"])(Object.keys(secrets).length ? replaceSecrets(kwargs, secrets) : kwargs, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$map_keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["keyToJson"], aliases)
        };
    }
    toJSONNotImplemented() {
        return {
            lc: 1,
            type: "not_implemented",
            id: this.lc_id
        };
    }
};
;
 //# sourceMappingURL=serializable.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tools/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/tools/utils.ts
__turbopack_context__.s([
    "ToolInputParsingException",
    ()=>ToolInputParsingException,
    "_configHasToolCallId",
    ()=>_configHasToolCallId,
    "_isToolCall",
    ()=>_isToolCall
]);
function _isToolCall(toolCall) {
    return !!(toolCall && typeof toolCall === "object" && "type" in toolCall && toolCall.type === "tool_call");
}
function _configHasToolCallId(config) {
    return !!(config && typeof config === "object" && "toolCall" in config && config.toolCall != null && typeof config.toolCall === "object" && "id" in config.toolCall && typeof config.toolCall.id === "string");
}
/**
* Custom error class used to handle exceptions related to tool input parsing.
* It extends the built-in `Error` class and adds an optional `output`
* property that can hold the output that caused the exception.
*/ var ToolInputParsingException = class extends Error {
    output;
    constructor(message, output){
        super(message);
        this.output = output;
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/singletons/async_local_storage/globals.ts
__turbopack_context__.s([
    "_CONTEXT_VARIABLES_KEY",
    ()=>_CONTEXT_VARIABLES_KEY,
    "getGlobalAsyncLocalStorageInstance",
    ()=>getGlobalAsyncLocalStorageInstance,
    "setGlobalAsyncLocalStorageInstance",
    ()=>setGlobalAsyncLocalStorageInstance
]);
const TRACING_ALS_KEY = Symbol.for("ls:tracing_async_local_storage");
const _CONTEXT_VARIABLES_KEY = Symbol.for("lc:context_variables");
const setGlobalAsyncLocalStorageInstance = (instance)=>{
    globalThis[TRACING_ALS_KEY] = instance;
};
const getGlobalAsyncLocalStorageInstance = ()=>{
    return globalThis[TRACING_ALS_KEY];
};
;
 //# sourceMappingURL=globals.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/content/data.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/messages/content/data.ts
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ __turbopack_context__.s([
    "convertToOpenAIImageBlock",
    ()=>convertToOpenAIImageBlock,
    "convertToProviderContentBlock",
    ()=>convertToProviderContentBlock,
    "isBase64ContentBlock",
    ()=>isBase64ContentBlock,
    "isDataContentBlock",
    ()=>isDataContentBlock,
    "isIDContentBlock",
    ()=>isIDContentBlock,
    "isPlainTextContentBlock",
    ()=>isPlainTextContentBlock,
    "isURLContentBlock",
    ()=>isURLContentBlock,
    "parseBase64DataUrl",
    ()=>parseBase64DataUrl,
    "parseMimeType",
    ()=>parseMimeType
]);
function isDataContentBlock(content_block) {
    return typeof content_block === "object" && content_block !== null && "type" in content_block && typeof content_block.type === "string" && "source_type" in content_block && (content_block.source_type === "url" || content_block.source_type === "base64" || content_block.source_type === "text" || content_block.source_type === "id");
}
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function isURLContentBlock(content_block) {
    return isDataContentBlock(content_block) && content_block.source_type === "url" && "url" in content_block && typeof content_block.url === "string";
}
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function isBase64ContentBlock(content_block) {
    return isDataContentBlock(content_block) && content_block.source_type === "base64" && "data" in content_block && typeof content_block.data === "string";
}
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function isPlainTextContentBlock(content_block) {
    return isDataContentBlock(content_block) && content_block.source_type === "text" && "text" in content_block && typeof content_block.text === "string";
}
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function isIDContentBlock(content_block) {
    return isDataContentBlock(content_block) && content_block.source_type === "id" && "id" in content_block && typeof content_block.id === "string";
}
/**
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function convertToOpenAIImageBlock(content_block) {
    if (isDataContentBlock(content_block)) {
        if (content_block.source_type === "url") return {
            type: "image_url",
            image_url: {
                url: content_block.url
            }
        };
        if (content_block.source_type === "base64") {
            if (!content_block.mime_type) throw new Error("mime_type key is required for base64 data.");
            const mime_type = content_block.mime_type;
            return {
                type: "image_url",
                image_url: {
                    url: `data:${mime_type};base64,${content_block.data}`
                }
            };
        }
    }
    throw new Error("Unsupported source type. Only 'url' and 'base64' are supported.");
}
/**
* Utility function for ChatModelProviders. Parses a mime type into a type, subtype, and parameters.
*
* @param mime_type - The mime type to parse.
* @returns An object containing the type, subtype, and parameters.
*
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function parseMimeType(mime_type) {
    const parts = mime_type.split(";")[0].split("/");
    if (parts.length !== 2) throw new Error(`Invalid mime type: "${mime_type}" - does not match type/subtype format.`);
    const type = parts[0].trim();
    const subtype = parts[1].trim();
    if (type === "" || subtype === "") throw new Error(`Invalid mime type: "${mime_type}" - type or subtype is empty.`);
    const parameters = {};
    for (const parameterKvp of mime_type.split(";").slice(1)){
        const parameterParts = parameterKvp.split("=");
        if (parameterParts.length !== 2) throw new Error(`Invalid parameter syntax in mime type: "${mime_type}".`);
        const key = parameterParts[0].trim();
        const value = parameterParts[1].trim();
        if (key === "") throw new Error(`Invalid parameter syntax in mime type: "${mime_type}".`);
        parameters[key] = value;
    }
    return {
        type,
        subtype,
        parameters
    };
}
/**
* Utility function for ChatModelProviders. Parses a base64 data URL into a typed array or string.
*
* @param dataUrl - The base64 data URL to parse.
* @param asTypedArray - Whether to return the data as a typed array.
* @returns The parsed data and mime type, or undefined if the data URL is invalid.
*
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function parseBase64DataUrl({ dataUrl: data_url, asTypedArray = false }) {
    const formatMatch = data_url.match(/^data:(\w+\/\w+);base64,([A-Za-z0-9+/]+=*)$/);
    let mime_type;
    if (formatMatch) {
        mime_type = formatMatch[1].toLowerCase();
        const data = asTypedArray ? Uint8Array.from(atob(formatMatch[2]), (c)=>c.charCodeAt(0)) : formatMatch[2];
        return {
            mime_type,
            data
        };
    }
    return void 0;
}
/**
* Convert from a standard data content block to a provider's proprietary data content block format.
*
* Don't override this method. Instead, override the more specific conversion methods and use this
* method unmodified.
*
* @param block - The standard data content block to convert.
* @returns The provider data content block.
* @throws An error if the standard data content block type is not supported.
*
* @deprecated Don't use data content blocks. Use {@link ContentBlock.Multimodal.Data} instead.
*/ function convertToProviderContentBlock(block, converter) {
    if (block.type === "text") {
        if (!converter.fromStandardTextBlock) throw new Error(`Converter for ${converter.providerName} does not implement \`fromStandardTextBlock\` method.`);
        return converter.fromStandardTextBlock(block);
    }
    if (block.type === "image") {
        if (!converter.fromStandardImageBlock) throw new Error(`Converter for ${converter.providerName} does not implement \`fromStandardImageBlock\` method.`);
        return converter.fromStandardImageBlock(block);
    }
    if (block.type === "audio") {
        if (!converter.fromStandardAudioBlock) throw new Error(`Converter for ${converter.providerName} does not implement \`fromStandardAudioBlock\` method.`);
        return converter.fromStandardAudioBlock(block);
    }
    if (block.type === "file") {
        if (!converter.fromStandardFileBlock) throw new Error(`Converter for ${converter.providerName} does not implement \`fromStandardFileBlock\` method.`);
        return converter.fromStandardFileBlock(block);
    }
    throw new Error(`Unable to convert content block type '${block.type}' to provider-specific format: not recognized.`);
}
;
 //# sourceMappingURL=data.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/messages/block_translators/utils.ts
__turbopack_context__.s([
    "_isArray",
    ()=>_isArray,
    "_isBytesArray",
    ()=>_isBytesArray,
    "_isContentBlock",
    ()=>_isContentBlock,
    "_isNumber",
    ()=>_isNumber,
    "_isObject",
    ()=>_isObject,
    "_isString",
    ()=>_isString,
    "iife",
    ()=>iife,
    "safeParseJson",
    ()=>safeParseJson
]);
function _isContentBlock(block, type) {
    return _isObject(block) && block.type === type;
}
function _isObject(value) {
    return typeof value === "object" && value !== null;
}
function _isArray(value) {
    return Array.isArray(value);
}
function _isString(value) {
    return typeof value === "string";
}
function _isNumber(value) {
    return typeof value === "number";
}
function _isBytesArray(value) {
    return value instanceof Uint8Array;
}
function safeParseJson(value) {
    try {
        return JSON.parse(value);
    } catch  {
        return void 0;
    }
}
const iife = (fn)=>fn();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/anthropic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatAnthropicTranslator",
    ()=>ChatAnthropicTranslator,
    "convertToV1FromAnthropicInput",
    ()=>convertToV1FromAnthropicInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
;
//#region src/messages/block_translators/anthropic.ts
function convertAnthropicAnnotation(citation) {
    if (citation.type === "char_location" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.document_title) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.start_char_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.end_char_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.cited_text)) {
        const { document_title, start_char_index, end_char_index, cited_text, ...rest } = citation;
        return {
            ...rest,
            type: "citation",
            source: "char",
            title: document_title ?? void 0,
            startIndex: start_char_index,
            endIndex: end_char_index,
            citedText: cited_text
        };
    }
    if (citation.type === "page_location" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.document_title) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.start_page_number) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.end_page_number) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.cited_text)) {
        const { document_title, start_page_number, end_page_number, cited_text, ...rest } = citation;
        return {
            ...rest,
            type: "citation",
            source: "page",
            title: document_title ?? void 0,
            startIndex: start_page_number,
            endIndex: end_page_number,
            citedText: cited_text
        };
    }
    if (citation.type === "content_block_location" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.document_title) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.start_block_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.end_block_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.cited_text)) {
        const { document_title, start_block_index, end_block_index, cited_text, ...rest } = citation;
        return {
            ...rest,
            type: "citation",
            source: "block",
            title: document_title ?? void 0,
            startIndex: start_block_index,
            endIndex: end_block_index,
            citedText: cited_text
        };
    }
    if (citation.type === "web_search_result_location" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.url) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.title) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.encrypted_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.cited_text)) {
        const { url, title, encrypted_index, cited_text, ...rest } = citation;
        return {
            ...rest,
            type: "citation",
            source: "url",
            url,
            title,
            startIndex: Number(encrypted_index),
            endIndex: Number(encrypted_index),
            citedText: cited_text
        };
    }
    if (citation.type === "search_result_location" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.source) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.title) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.start_block_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(citation.end_block_index) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(citation.cited_text)) {
        const { source, title, start_block_index, end_block_index, cited_text, ...rest } = citation;
        return {
            ...rest,
            type: "citation",
            source: "search",
            url: source,
            title: title ?? void 0,
            startIndex: start_block_index,
            endIndex: end_block_index,
            citedText: cited_text
        };
    }
    return void 0;
}
/**
* Converts an Anthropic content block to a standard V1 content block.
*
* This function handles the conversion of Anthropic-specific content blocks
* (document and image blocks) to the standardized V1 format. It supports
* various source types including base64 data, URLs, file IDs, and text data.
*
* @param block - The Anthropic content block to convert
* @returns A standard V1 content block if conversion is successful, undefined otherwise
*
* @example
* ```typescript
* const anthropicBlock = {
*   type: "image",
*   source: {
*     type: "base64",
*     media_type: "image/png",
*     data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
*   }
* };
*
* const standardBlock = convertToV1FromAnthropicContentBlock(anthropicBlock);
* // Returns: { type: "image", mimeType: "image/png", data: "..." }
* ```
*/ function convertToV1FromAnthropicContentBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "document") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.source) && "type" in block.source) {
        if (block.source.type === "base64" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.media_type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.data)) return {
            type: "file",
            mimeType: block.source.media_type,
            data: block.source.data
        };
        else if (block.source.type === "url" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.url)) return {
            type: "file",
            url: block.source.url
        };
        else if (block.source.type === "file" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.file_id)) return {
            type: "file",
            fileId: block.source.file_id
        };
        else if (block.source.type === "text" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.data)) return {
            type: "file",
            mimeType: String(block.source.media_type ?? "text/plain"),
            data: block.source.data
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.source) && "type" in block.source) {
        if (block.source.type === "base64" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.media_type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.data)) return {
            type: "image",
            mimeType: block.source.media_type,
            data: block.source.data
        };
        else if (block.source.type === "url" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.url)) return {
            type: "image",
            url: block.source.url
        };
        else if (block.source.type === "file" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.source.file_id)) return {
            type: "image",
            fileId: block.source.file_id
        };
    }
    return void 0;
}
/**
* Converts an array of content blocks from Anthropic format to v1 standard format.
*
* This function processes each content block in the input array, attempting to convert
* Anthropic-specific block formats (like image blocks with source objects, document blocks, etc.)
* to the standardized v1 content block format. If a block cannot be converted, it is
* passed through as-is with a type assertion to ContentBlock.Standard.
*
* @param content - Array of content blocks in Anthropic format to be converted
* @returns Array of content blocks in v1 standard format
*/ function convertToV1FromAnthropicInput(content) {
    function* iterateContent() {
        for (const block of content){
            const stdBlock = convertToV1FromAnthropicContentBlock(block);
            if (stdBlock) yield stdBlock;
            else yield block;
        }
    }
    return Array.from(iterateContent());
}
/**
* Converts an Anthropic AI message to an array of v1 standard content blocks.
*
* This function processes an AI message containing Anthropic-specific content blocks
* and converts them to the standardized v1 content block format.
*
* @param message - The AI message containing Anthropic-formatted content blocks
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const message = new AIMessage([
*   { type: "text", text: "Hello world" },
*   { type: "thinking", text: "Let me think about this..." },
*   { type: "tool_use", id: "123", name: "calculator", input: { a: 1, b: 2 } }
* ]);
*
* const standardBlocks = convertToV1FromAnthropicMessage(message);
* // Returns:
* // [
* //   { type: "text", text: "Hello world" },
* //   { type: "reasoning", reasoning: "Let me think about this..." },
* //   { type: "tool_call", id: "123", name: "calculator", args: { a: 1, b: 2 } }
* // ]
* ```
*/ function convertToV1FromAnthropicMessage(message) {
    function* iterateContent() {
        const content = typeof message.content === "string" ? [
            {
                type: "text",
                text: message.content
            }
        ] : message.content;
        for (const block of content){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "text") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.text)) {
                const { text, citations, ...rest } = block;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(citations) && citations.length) {
                    const _citations = citations.reduce((acc, item)=>{
                        const citation = convertAnthropicAnnotation(item);
                        if (citation) return [
                            ...acc,
                            citation
                        ];
                        return acc;
                    }, []);
                    yield {
                        ...rest,
                        type: "text",
                        text,
                        annotations: _citations
                    };
                    continue;
                } else {
                    yield {
                        ...rest,
                        type: "text",
                        text
                    };
                    continue;
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "thinking") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.thinking)) {
                const { thinking, signature, ...rest } = block;
                yield {
                    ...rest,
                    type: "reasoning",
                    reasoning: thinking,
                    signature
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "redacted_thinking")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "tool_use") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.id)) {
                yield {
                    type: "tool_call",
                    id: block.id,
                    name: block.name,
                    args: block.input
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "input_json_delta")) {
                if (_isAIMessageChunk(message) && message.tool_call_chunks?.length) {
                    const tool_call_chunk = message.tool_call_chunks[0];
                    yield {
                        type: "tool_call_chunk",
                        id: tool_call_chunk.id,
                        name: tool_call_chunk.name,
                        args: tool_call_chunk.args,
                        index: tool_call_chunk.index
                    };
                    continue;
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "server_tool_use") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.id)) {
                const { name, id } = block;
                if (name === "web_search") {
                    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])(()=>{
                        if (typeof block.input === "string") return block.input;
                        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.input.query)) return block.input.query;
                        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.partial_json)) {
                            const json = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeParseJson"])(block.partial_json);
                            if (json?.query) return json.query;
                        }
                        return "";
                    });
                    yield {
                        id,
                        type: "server_tool_call",
                        name: "web_search",
                        args: {
                            query
                        }
                    };
                    continue;
                } else if (block.name === "code_execution") {
                    const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])(()=>{
                        if (typeof block.input === "string") return block.input;
                        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.input.code)) return block.input.code;
                        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.partial_json)) {
                            const json = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeParseJson"])(block.partial_json);
                            if (json?.code) return json.code;
                        }
                        return "";
                    });
                    yield {
                        id,
                        type: "server_tool_call",
                        name: "code_execution",
                        args: {
                            code
                        }
                    };
                    continue;
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "web_search_tool_result") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.tool_use_id) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(block.content)) {
                const { content: content$1, tool_use_id } = block;
                const urls = content$1.reduce((acc, content$2)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(content$2, "web_search_result")) return [
                        ...acc,
                        content$2.url
                    ];
                    return acc;
                }, []);
                yield {
                    type: "server_tool_call_result",
                    name: "web_search",
                    toolCallId: tool_use_id,
                    status: "success",
                    output: {
                        urls
                    }
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "code_execution_tool_result") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.tool_use_id) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.content)) {
                yield {
                    type: "server_tool_call_result",
                    name: "code_execution",
                    toolCallId: block.tool_use_id,
                    status: "success",
                    output: block.content
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "mcp_tool_use")) {
                yield {
                    id: block.id,
                    type: "server_tool_call",
                    name: "mcp_tool_use",
                    args: block.input
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "mcp_tool_result") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.tool_use_id) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.content)) {
                yield {
                    type: "server_tool_call_result",
                    name: "mcp_tool_use",
                    toolCallId: block.tool_use_id,
                    status: "success",
                    output: block.content
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "container_upload")) {
                yield {
                    type: "server_tool_call",
                    name: "container_upload",
                    args: block.input
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "search_result")) {
                yield {
                    id: block.id,
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "tool_result")) {
                yield {
                    id: block.id,
                    type: "non_standard",
                    value: block
                };
                continue;
            } else {
                const stdBlock = convertToV1FromAnthropicContentBlock(block);
                if (stdBlock) {
                    yield stdBlock;
                    continue;
                }
            }
            yield {
                type: "non_standard",
                value: block
            };
        }
    }
    return Array.from(iterateContent());
}
const ChatAnthropicTranslator = {
    translateContent: convertToV1FromAnthropicMessage,
    translateContentChunk: convertToV1FromAnthropicMessage
};
function _isAIMessageChunk(message) {
    return typeof message?._getType === "function" && typeof message.concat === "function" && message._getType() === "ai";
}
;
 //# sourceMappingURL=anthropic.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/data.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToV1FromDataContent",
    ()=>convertToV1FromDataContent,
    "convertToV1FromOpenAIDataBlock",
    ()=>convertToV1FromOpenAIDataBlock,
    "isOpenAIDataBlock",
    ()=>isOpenAIDataBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/content/data.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
;
;
//#region src/messages/block_translators/data.ts
function convertToV1FromDataContentBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isURLContentBlock"])(block)) return {
        type: block.type,
        mimeType: block.mime_type,
        url: block.url,
        metadata: block.metadata
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBase64ContentBlock"])(block)) return {
        type: block.type,
        mimeType: block.mime_type ?? "application/octet-stream",
        data: block.data,
        metadata: block.metadata
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIDContentBlock"])(block)) return {
        type: block.type,
        mimeType: block.mime_type,
        fileId: block.id,
        metadata: block.metadata
    };
    return block;
}
function convertToV1FromDataContent(content) {
    return content.map(convertToV1FromDataContentBlock);
}
function isOpenAIDataBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image_url") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image_url)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "input_audio") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.input_audio)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "file") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.file)) return true;
    return false;
}
function convertToV1FromOpenAIDataBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image_url") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image_url) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.image_url.url)) {
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
            dataUrl: block.image_url.url
        });
        if (parsed) return {
            type: "image",
            mimeType: parsed.mime_type,
            data: parsed.data
        };
        else return {
            type: "image",
            url: block.image_url.url
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "input_audio") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.input_audio) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.input_audio.data) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.input_audio.format)) return {
        type: "audio",
        data: block.input_audio.data,
        mimeType: `audio/${block.input_audio.format}`
    };
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "file") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.file) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.file.data)) {
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
            dataUrl: block.file.data
        });
        if (parsed) return {
            type: "file",
            data: parsed.data,
            mimeType: parsed.mime_type
        };
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.file.file_id)) return {
            type: "file",
            fileId: block.file.file_id
        };
    }
    return block;
}
;
 //# sourceMappingURL=data.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/openai.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatOpenAITranslator",
    ()=>ChatOpenAITranslator,
    "convertToV1FromChatCompletionsInput",
    ()=>convertToV1FromChatCompletionsInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/data.js [app-route] (ecmascript)");
;
;
//#region src/messages/block_translators/openai.ts
/**
* Converts a ChatOpenAICompletions message to an array of v1 standard content blocks.
*
* This function processes an AI message from ChatOpenAICompletions API format
* and converts it to the standardized v1 content block format. It handles both
* string content and structured content blocks, as well as tool calls.
*
* @param message - The AI message containing ChatOpenAICompletions formatted content
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const message = new AIMessage("Hello world");
* const standardBlocks = convertToV1FromChatCompletions(message);
* // Returns: [{ type: "text", text: "Hello world" }]
* ```
*
* @example
* ```typescript
* const message = new AIMessage([
*   { type: "text", text: "Hello" },
*   { type: "image_url", image_url: { url: "https://example.com/image.png" } }
* ]);
* message.tool_calls = [
*   { id: "call_123", name: "calculator", args: { a: 1, b: 2 } }
* ];
*
* const standardBlocks = convertToV1FromChatCompletions(message);
* // Returns:
* // [
* //   { type: "text", text: "Hello" },
* //   { type: "image", url: "https://example.com/image.png" },
* //   { type: "tool_call", id: "call_123", name: "calculator", args: { a: 1, b: 2 } }
* // ]
* ```
*/ function convertToV1FromChatCompletions(message) {
    const blocks = [];
    if (typeof message.content === "string") blocks.push({
        type: "text",
        text: message.content
    });
    else blocks.push(...convertToV1FromChatCompletionsInput(message.content));
    for (const toolCall of message.tool_calls ?? [])blocks.push({
        type: "tool_call",
        id: toolCall.id,
        name: toolCall.name,
        args: toolCall.args
    });
    return blocks;
}
/**
* Converts a ChatOpenAICompletions message chunk to an array of v1 standard content blocks.
*
* This function processes an AI message chunk from OpenAI's chat completions API and converts
* it to the standardized v1 content block format. It handles both string and array content,
* as well as tool calls that may be present in the chunk.
*
* @param message - The AI message chunk containing OpenAI-formatted content blocks
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const chunk = new AIMessage("Hello");
* const standardBlocks = convertToV1FromChatCompletionsChunk(chunk);
* // Returns: [{ type: "text", text: "Hello" }]
* ```
*
* @example
* ```typescript
* const chunk = new AIMessage([
*   { type: "text", text: "Processing..." }
* ]);
* chunk.tool_calls = [
*   { id: "call_456", name: "search", args: { query: "test" } }
* ];
*
* const standardBlocks = convertToV1FromChatCompletionsChunk(chunk);
* // Returns:
* // [
* //   { type: "text", text: "Processing..." },
* //   { type: "tool_call", id: "call_456", name: "search", args: { query: "test" } }
* // ]
* ```
*/ function convertToV1FromChatCompletionsChunk(message) {
    const blocks = [];
    if (typeof message.content === "string") blocks.push({
        type: "text",
        text: message.content
    });
    else blocks.push(...convertToV1FromChatCompletionsInput(message.content));
    for (const toolCall of message.tool_calls ?? [])blocks.push({
        type: "tool_call",
        id: toolCall.id,
        name: toolCall.name,
        args: toolCall.args
    });
    return blocks;
}
/**
* Converts an array of ChatOpenAICompletions content blocks to v1 standard content blocks.
*
* This function processes content blocks from OpenAI's Chat Completions API format
* and converts them to the standardized v1 content block format. It handles both
* OpenAI-specific data blocks (which require conversion) and standard blocks
* (which are passed through with type assertion).
*
* @param blocks - Array of content blocks in ChatOpenAICompletions format
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const openaiBlocks = [
*   { type: "text", text: "Hello world" },
*   { type: "image_url", image_url: { url: "https://example.com/image.png" } }
* ];
*
* const standardBlocks = convertToV1FromChatCompletionsInput(openaiBlocks);
* // Returns:
* // [
* //   { type: "text", text: "Hello world" },
* //   { type: "image", url: "https://example.com/image.png" }
* // ]
* ```
*/ function convertToV1FromChatCompletionsInput(blocks) {
    const convertedBlocks = [];
    for (const block of blocks)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOpenAIDataBlock"])(block)) convertedBlocks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToV1FromOpenAIDataBlock"])(block));
    else convertedBlocks.push(block);
    return convertedBlocks;
}
function convertResponsesAnnotation(annotation) {
    if (annotation.type === "url_citation") {
        const { url, title, start_index, end_index } = annotation;
        return {
            type: "citation",
            url,
            title,
            startIndex: start_index,
            endIndex: end_index
        };
    }
    if (annotation.type === "file_citation") {
        const { file_id, filename, index } = annotation;
        return {
            type: "citation",
            title: filename,
            startIndex: index,
            endIndex: index,
            fileId: file_id
        };
    }
    return annotation;
}
/**
* Converts a ChatOpenAIResponses message to an array of v1 standard content blocks.
*
* This function processes an AI message containing OpenAI Responses-specific content blocks
* and converts them to the standardized v1 content block format. It handles reasoning summaries,
* text content with annotations, tool calls, and various tool outputs including code interpreter,
* web search, file search, computer calls, and MCP-related blocks.
*
* @param message - The AI message containing OpenAI Responses-formatted content blocks
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const message = new AIMessage({
*   content: [{ type: "text", text: "Hello world", annotations: [] }],
*   tool_calls: [{ id: "123", name: "calculator", args: { a: 1, b: 2 } }],
*   additional_kwargs: {
*     reasoning: { summary: [{ text: "Let me calculate this..." }] },
*     tool_outputs: [
*       {
*         type: "code_interpreter_call",
*         code: "print('hello')",
*         outputs: [{ type: "logs", logs: "hello" }]
*       }
*     ]
*   }
* });
*
* const standardBlocks = convertToV1FromResponses(message);
* // Returns:
* // [
* //   { type: "reasoning", reasoning: "Let me calculate this..." },
* //   { type: "text", text: "Hello world", annotations: [] },
* //   { type: "tool_call", id: "123", name: "calculator", args: { a: 1, b: 2 } },
* //   { type: "code_interpreter_call", code: "print('hello')" },
* //   { type: "code_interpreter_result", output: [{ type: "code_interpreter_output", returnCode: 0, stdout: "hello" }] }
* // ]
* ```
*/ function convertToV1FromResponses(message) {
    function* iterateContent() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(message.additional_kwargs?.reasoning) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(message.additional_kwargs.reasoning.summary)) {
            const summary = message.additional_kwargs.reasoning.summary.reduce((acc, item)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(item.text)) return `${acc}${item.text}`;
                return acc;
            }, "");
            yield {
                type: "reasoning",
                reasoning: summary
            };
        }
        const content = typeof message.content === "string" ? [
            {
                type: "text",
                text: message.content
            }
        ] : message.content;
        for (const block of content)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "text")) {
            const { text, annotations, ...rest } = block;
            if (Array.isArray(annotations)) yield {
                ...rest,
                type: "text",
                text: String(text),
                annotations: annotations.map(convertResponsesAnnotation)
            };
            else yield {
                ...rest,
                type: "text",
                text: String(text)
            };
        }
        for (const toolCall of message.tool_calls ?? [])yield {
            type: "tool_call",
            id: toolCall.id,
            name: toolCall.name,
            args: toolCall.args
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(message.additional_kwargs) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(message.additional_kwargs.tool_outputs)) for (const toolOutput of message.additional_kwargs.tool_outputs){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "web_search_call")) {
                yield {
                    id: toolOutput.id,
                    type: "server_tool_call",
                    name: "web_search",
                    args: {
                        query: toolOutput.query
                    }
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "file_search_call")) {
                yield {
                    id: toolOutput.id,
                    type: "server_tool_call",
                    name: "file_search",
                    args: {
                        query: toolOutput.query
                    }
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "computer_call")) {
                yield {
                    type: "non_standard",
                    value: toolOutput
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "code_interpreter_call")) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(toolOutput.code)) yield {
                    id: toolOutput.id,
                    type: "server_tool_call",
                    name: "code_interpreter",
                    args: {
                        code: toolOutput.code
                    }
                };
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(toolOutput.outputs)) {
                    const returnCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])(()=>{
                        if (toolOutput.status === "in_progress") return void 0;
                        if (toolOutput.status === "completed") return 0;
                        if (toolOutput.status === "incomplete") return 127;
                        if (toolOutput.status === "interpreting") return void 0;
                        if (toolOutput.status === "failed") return 1;
                        return void 0;
                    });
                    for (const output of toolOutput.outputs)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(output, "logs")) {
                        yield {
                            type: "server_tool_call_result",
                            toolCallId: toolOutput.id ?? "",
                            status: "success",
                            output: {
                                type: "code_interpreter_output",
                                returnCode: returnCode ?? 0,
                                stderr: [
                                    0,
                                    void 0
                                ].includes(returnCode) ? void 0 : String(output.logs),
                                stdout: [
                                    0,
                                    void 0
                                ].includes(returnCode) ? String(output.logs) : void 0
                            }
                        };
                        continue;
                    }
                }
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "mcp_call")) {
                yield {
                    id: toolOutput.id,
                    type: "server_tool_call",
                    name: "mcp_call",
                    args: toolOutput.input
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "mcp_list_tools")) {
                yield {
                    id: toolOutput.id,
                    type: "server_tool_call",
                    name: "mcp_list_tools",
                    args: toolOutput.input
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "mcp_approval_request")) {
                yield {
                    type: "non_standard",
                    value: toolOutput
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(toolOutput, "image_generation_call")) {
                yield {
                    type: "non_standard",
                    value: toolOutput
                };
                continue;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(toolOutput)) yield {
                type: "non_standard",
                value: toolOutput
            };
        }
    }
    return Array.from(iterateContent());
}
/**
* Converts a ChatOpenAIResponses message chunk to an array of v1 standard content blocks.
*
* This function processes an AI message chunk containing OpenAI-specific content blocks
* and converts them to the standardized v1 content block format. It handles both the
* regular message content and tool call chunks that are specific to streaming responses.
*
* @param message - The AI message chunk containing OpenAI-formatted content blocks
* @returns Array of content blocks in v1 standard format
*
* @example
* ```typescript
* const messageChunk = new AIMessageChunk({
*   content: [{ type: "text", text: "Hello" }],
*   tool_call_chunks: [
*     { id: "call_123", name: "calculator", args: '{"a": 1' }
*   ]
* });
*
* const standardBlocks = convertToV1FromResponsesChunk(messageChunk);
* // Returns:
* // [
* //   { type: "text", text: "Hello" },
* //   { type: "tool_call_chunk", id: "call_123", name: "calculator", args: '{"a": 1' }
* // ]
* ```
*/ function convertToV1FromResponsesChunk(message) {
    function* iterateContent() {
        yield* convertToV1FromResponses(message);
        for (const toolCallChunk of message.tool_call_chunks ?? [])yield {
            type: "tool_call_chunk",
            id: toolCallChunk.id,
            name: toolCallChunk.name,
            args: toolCallChunk.args
        };
    }
    return Array.from(iterateContent());
}
const ChatOpenAITranslator = {
    translateContent: (message)=>{
        if (typeof message.content === "string") return convertToV1FromChatCompletions(message);
        return convertToV1FromResponses(message);
    },
    translateContentChunk: (message)=>{
        if (typeof message.content === "string") return convertToV1FromChatCompletionsChunk(message);
        return convertToV1FromResponsesChunk(message);
    }
};
;
 //# sourceMappingURL=openai.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/message.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/messages/message.ts
/**
* Type guard to check if a value is a valid Message object.
*
* @param message - The value to check
* @returns true if the value is a valid Message object, false otherwise
*/ __turbopack_context__.s([
    "isMessage",
    ()=>isMessage
]);
function isMessage(message) {
    return typeof message === "object" && message !== null && "type" in message && "content" in message && (typeof message.content === "string" || Array.isArray(message.content));
}
;
 //# sourceMappingURL=message.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseMessage",
    ()=>BaseMessage,
    "BaseMessageChunk",
    ()=>BaseMessageChunk,
    "_isMessageFieldWithRole",
    ()=>_isMessageFieldWithRole,
    "_mergeDicts",
    ()=>_mergeDicts,
    "_mergeLists",
    ()=>_mergeLists,
    "_mergeObj",
    ()=>_mergeObj,
    "_mergeStatus",
    ()=>_mergeStatus,
    "isBaseMessage",
    ()=>isBaseMessage,
    "isBaseMessageChunk",
    ()=>isBaseMessageChunk,
    "isOpenAIToolCallArray",
    ()=>isOpenAIToolCallArray,
    "mergeContent",
    ()=>mergeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/serializable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/content/data.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$anthropic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/anthropic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/data.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$openai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/openai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$message$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/message.js [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/messages/base.ts
/** @internal */ const MESSAGE_SYMBOL = Symbol.for("langchain.message");
function mergeContent(firstContent, secondContent) {
    if (typeof firstContent === "string") {
        if (firstContent === "") return secondContent;
        if (typeof secondContent === "string") return firstContent + secondContent;
        else if (Array.isArray(secondContent) && secondContent.some((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDataContentBlock"])(c))) return [
            {
                type: "text",
                source_type: "text",
                text: firstContent
            },
            ...secondContent
        ];
        else return [
            {
                type: "text",
                text: firstContent
            },
            ...secondContent
        ];
    } else if (Array.isArray(secondContent)) return _mergeLists(firstContent, secondContent) ?? [
        ...firstContent,
        ...secondContent
    ];
    else if (secondContent === "") return firstContent;
    else if (Array.isArray(firstContent) && firstContent.some((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDataContentBlock"])(c))) return [
        ...firstContent,
        {
            type: "file",
            source_type: "text",
            text: secondContent
        }
    ];
    else return [
        ...firstContent,
        {
            type: "text",
            text: secondContent
        }
    ];
}
/**
* 'Merge' two statuses. If either value passed is 'error', it will return 'error'. Else
* it will return 'success'.
*
* @param {"success" | "error" | undefined} left The existing value to 'merge' with the new value.
* @param {"success" | "error" | undefined} right The new value to 'merge' with the existing value
* @returns {"success" | "error"} The 'merged' value.
*/ function _mergeStatus(left, right) {
    if (left === "error" || right === "error") return "error";
    return "success";
}
function stringifyWithDepthLimit(obj, depthLimit) {
    function helper(obj$1, currentDepth) {
        if (typeof obj$1 !== "object" || obj$1 === null || obj$1 === void 0) return obj$1;
        if (currentDepth >= depthLimit) {
            if (Array.isArray(obj$1)) return "[Array]";
            return "[Object]";
        }
        if (Array.isArray(obj$1)) return obj$1.map((item)=>helper(item, currentDepth + 1));
        const result = {};
        for (const key of Object.keys(obj$1))result[key] = helper(obj$1[key], currentDepth + 1);
        return result;
    }
    return JSON.stringify(helper(obj, 0), null, 2);
}
/**
* Base class for all types of messages in a conversation. It includes
* properties like `content`, `name`, and `additional_kwargs`. It also
* includes methods like `toDict()` and `_getType()`.
*/ var BaseMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Serializable"] {
    lc_namespace = [
        "langchain_core",
        "messages"
    ];
    lc_serializable = true;
    get lc_aliases() {
        return {
            additional_kwargs: "additional_kwargs",
            response_metadata: "response_metadata"
        };
    }
    [MESSAGE_SYMBOL] = true;
    id;
    name;
    content;
    additional_kwargs;
    response_metadata;
    /**
	* @deprecated Use .getType() instead or import the proper typeguard.
	* For example:
	*
	* ```ts
	* import { isAIMessage } from "@langchain/core/messages";
	*
	* const message = new AIMessage("Hello!");
	* isAIMessage(message); // true
	* ```
	*/ _getType() {
        return this.type;
    }
    /**
	* @deprecated Use .type instead
	* The type of the message.
	*/ getType() {
        return this._getType();
    }
    constructor(arg){
        const fields = typeof arg === "string" || Array.isArray(arg) ? {
            content: arg
        } : arg;
        if (!fields.additional_kwargs) fields.additional_kwargs = {};
        if (!fields.response_metadata) fields.response_metadata = {};
        super(fields);
        this.name = fields.name;
        if (fields.content === void 0 && fields.contentBlocks !== void 0) {
            this.content = fields.contentBlocks;
            this.response_metadata = {
                output_version: "v1",
                ...fields.response_metadata
            };
        } else if (fields.content !== void 0) {
            this.content = fields.content ?? [];
            this.response_metadata = fields.response_metadata;
        } else {
            this.content = [];
            this.response_metadata = fields.response_metadata;
        }
        this.additional_kwargs = fields.additional_kwargs;
        this.id = fields.id;
    }
    /** Get text content of the message. */ get text() {
        if (typeof this.content === "string") return this.content;
        if (!Array.isArray(this.content)) return "";
        return this.content.map((c)=>{
            if (typeof c === "string") return c;
            if (c.type === "text") return c.text;
            return "";
        }).join("");
    }
    get contentBlocks() {
        const blocks = typeof this.content === "string" ? [
            {
                type: "text",
                text: this.content
            }
        ] : this.content;
        const parsingSteps = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToV1FromDataContent"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$openai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToV1FromChatCompletionsInput"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$anthropic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToV1FromAnthropicInput"]
        ];
        const parsedBlocks = parsingSteps.reduce((blocks$1, step)=>step(blocks$1), blocks);
        return parsedBlocks;
    }
    toDict() {
        return {
            type: this.getType(),
            data: this.toJSON().kwargs
        };
    }
    static lc_name() {
        return "BaseMessage";
    }
    get _printableFields() {
        return {
            id: this.id,
            content: this.content,
            name: this.name,
            additional_kwargs: this.additional_kwargs,
            response_metadata: this.response_metadata
        };
    }
    static isInstance(obj) {
        return typeof obj === "object" && obj !== null && MESSAGE_SYMBOL in obj && obj[MESSAGE_SYMBOL] === true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$message$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMessage"])(obj);
    }
    _updateId(value) {
        this.id = value;
        this.lc_kwargs.id = value;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.lc_name();
    }
    [Symbol.for("nodejs.util.inspect.custom")](depth) {
        if (depth === null) return this;
        const printable = stringifyWithDepthLimit(this._printableFields, Math.max(4, depth));
        return `${this.constructor.lc_name()} ${printable}`;
    }
};
function isOpenAIToolCallArray(value) {
    return Array.isArray(value) && value.every((v)=>typeof v.index === "number");
}
function _mergeDicts(left = {}, right = {}) {
    const merged = {
        ...left
    };
    for (const [key, value] of Object.entries(right))if (merged[key] == null) merged[key] = value;
    else if (value == null) continue;
    else if (typeof merged[key] !== typeof value || Array.isArray(merged[key]) !== Array.isArray(value)) throw new Error(`field[${key}] already exists in the message chunk, but with a different type.`);
    else if (typeof merged[key] === "string") if (key === "type") continue;
    else if ([
        "id",
        "name",
        "output_version",
        "model_provider"
    ].includes(key)) merged[key] = value;
    else merged[key] += value;
    else if (typeof merged[key] === "object" && !Array.isArray(merged[key])) merged[key] = _mergeDicts(merged[key], value);
    else if (Array.isArray(merged[key])) merged[key] = _mergeLists(merged[key], value);
    else if (merged[key] === value) continue;
    else console.warn(`field[${key}] already exists in this message chunk and value has unsupported type.`);
    return merged;
}
function _mergeLists(left, right) {
    if (left === void 0 && right === void 0) return void 0;
    else if (left === void 0 || right === void 0) return left || right;
    else {
        const merged = [
            ...left
        ];
        for (const item of right)if (typeof item === "object" && item !== null && "index" in item && typeof item.index === "number") {
            const toMerge = merged.findIndex((leftItem)=>{
                const isObject = typeof leftItem === "object";
                const indiciesMatch = "index" in leftItem && leftItem.index === item.index;
                const idsMatch = "id" in leftItem && "id" in item && leftItem?.id === item?.id;
                const eitherItemMissingID = !("id" in leftItem) || !leftItem?.id || !("id" in item) || !item?.id;
                return isObject && indiciesMatch && (idsMatch || eitherItemMissingID);
            });
            if (toMerge !== -1 && typeof merged[toMerge] === "object" && merged[toMerge] !== null) merged[toMerge] = _mergeDicts(merged[toMerge], item);
            else merged.push(item);
        } else if (typeof item === "object" && item !== null && "text" in item && item.text === "") continue;
        else merged.push(item);
        return merged;
    }
}
function _mergeObj(left, right) {
    if (!left && !right) throw new Error("Cannot merge two undefined objects.");
    if (!left || !right) return left || right;
    else if (typeof left !== typeof right) throw new Error(`Cannot merge objects of different types.\nLeft ${typeof left}\nRight ${typeof right}`);
    else if (typeof left === "string" && typeof right === "string") return left + right;
    else if (Array.isArray(left) && Array.isArray(right)) return _mergeLists(left, right);
    else if (typeof left === "object" && typeof right === "object") return _mergeDicts(left, right);
    else if (left === right) return left;
    else throw new Error(`Can not merge objects of different types.\nLeft ${left}\nRight ${right}`);
}
/**
* Represents a chunk of a message, which can be concatenated with other
* message chunks. It includes a method `_merge_kwargs_dict()` for merging
* additional keyword arguments from another `BaseMessageChunk` into this
* one. It also overrides the `__add__()` method to support concatenation
* of `BaseMessageChunk` instances.
*/ var BaseMessageChunk = class extends BaseMessage {
    static isInstance(obj) {
        return super.isInstance(obj) && "concat" in obj && typeof obj.concat === "function";
    }
};
function _isMessageFieldWithRole(x) {
    return typeof x.role === "string";
}
/**
* @deprecated Use {@link BaseMessage.isInstance} instead
*/ function isBaseMessage(messageLike) {
    return typeof messageLike?._getType === "function";
}
/**
* @deprecated Use {@link BaseMessageChunk.isInstance} instead
*/ function isBaseMessageChunk(messageLike) {
    return isBaseMessage(messageLike) && typeof messageLike.concat === "function";
}
;
 //# sourceMappingURL=base.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/tool.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolMessage",
    ()=>ToolMessage,
    "ToolMessageChunk",
    ()=>ToolMessageChunk,
    "defaultToolCallParser",
    ()=>defaultToolCallParser,
    "isDirectToolOutput",
    ()=>isDirectToolOutput,
    "isToolMessage",
    ()=>isToolMessage,
    "isToolMessageChunk",
    ()=>isToolMessageChunk,
    "tool_exports",
    ()=>tool_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
;
//#region src/messages/tool.ts
var tool_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(tool_exports, {
    ToolMessage: ()=>ToolMessage,
    ToolMessageChunk: ()=>ToolMessageChunk,
    defaultToolCallParser: ()=>defaultToolCallParser,
    isDirectToolOutput: ()=>isDirectToolOutput,
    isToolMessage: ()=>isToolMessage,
    isToolMessageChunk: ()=>isToolMessageChunk
});
function isDirectToolOutput(x) {
    return x != null && typeof x === "object" && "lc_direct_tool_output" in x && x.lc_direct_tool_output === true;
}
/**
* Represents a tool message in a conversation.
*/ var ToolMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    static lc_name() {
        return "ToolMessage";
    }
    get lc_aliases() {
        return {
            tool_call_id: "tool_call_id"
        };
    }
    lc_direct_tool_output = true;
    type = "tool";
    /**
	* Status of the tool invocation.
	* @version 0.2.19
	*/ status;
    tool_call_id;
    metadata;
    /**
	* Artifact of the Tool execution which is not meant to be sent to the model.
	*
	* Should only be specified if it is different from the message content, e.g. if only
	* a subset of the full tool output is being passed as message content but the full
	* output is needed in other parts of the code.
	*/ artifact;
    constructor(fields, tool_call_id, name){
        const toolMessageFields = typeof fields === "string" || Array.isArray(fields) ? {
            content: fields,
            name,
            tool_call_id
        } : fields;
        super(toolMessageFields);
        this.tool_call_id = toolMessageFields.tool_call_id;
        this.artifact = toolMessageFields.artifact;
        this.status = toolMessageFields.status;
        this.metadata = toolMessageFields.metadata;
    }
    static isInstance(message) {
        return super.isInstance(message) && message.type === "tool";
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            tool_call_id: this.tool_call_id,
            artifact: this.artifact
        };
    }
};
/**
* Represents a chunk of a tool message, which can be concatenated
* with other tool message chunks.
*/ var ToolMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    type = "tool";
    tool_call_id;
    /**
	* Status of the tool invocation.
	* @version 0.2.19
	*/ status;
    /**
	* Artifact of the Tool execution which is not meant to be sent to the model.
	*
	* Should only be specified if it is different from the message content, e.g. if only
	* a subset of the full tool output is being passed as message content but the full
	* output is needed in other parts of the code.
	*/ artifact;
    constructor(fields){
        super(fields);
        this.tool_call_id = fields.tool_call_id;
        this.artifact = fields.artifact;
        this.status = fields.status;
    }
    static lc_name() {
        return "ToolMessageChunk";
    }
    concat(chunk) {
        const Cls = this.constructor;
        return new Cls({
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.response_metadata, chunk.response_metadata),
            artifact: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeObj"])(this.artifact, chunk.artifact),
            tool_call_id: this.tool_call_id,
            id: this.id ?? chunk.id,
            status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeStatus"])(this.status, chunk.status)
        });
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            tool_call_id: this.tool_call_id,
            artifact: this.artifact
        };
    }
};
function defaultToolCallParser(rawToolCalls) {
    const toolCalls = [];
    const invalidToolCalls = [];
    for (const toolCall of rawToolCalls)if (!toolCall.function) continue;
    else {
        const functionName = toolCall.function.name;
        try {
            const functionArgs = JSON.parse(toolCall.function.arguments);
            toolCalls.push({
                name: functionName || "",
                args: functionArgs || {},
                id: toolCall.id
            });
        } catch  {
            invalidToolCalls.push({
                name: functionName,
                args: toolCall.function.arguments,
                id: toolCall.id,
                error: "Malformed args."
            });
        }
    }
    return [
        toolCalls,
        invalidToolCalls
    ];
}
/**
* @deprecated Use {@link ToolMessage.isInstance} instead
*/ function isToolMessage(x) {
    return typeof x === "object" && x !== null && "getType" in x && typeof x.getType === "function" && x.getType() === "tool";
}
/**
* @deprecated Use {@link ToolMessageChunk.isInstance} instead
*/ function isToolMessageChunk(x) {
    return x._getType() === "tool";
}
;
 //# sourceMappingURL=tool.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/json.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/json.ts
__turbopack_context__.s([
    "parseJsonMarkdown",
    ()=>parseJsonMarkdown,
    "parsePartialJson",
    ()=>parsePartialJson
]);
function parseJsonMarkdown(s, parser = parsePartialJson) {
    s = s.trim();
    const firstFenceIndex = s.indexOf("```");
    if (firstFenceIndex === -1) return parser(s);
    let contentAfterFence = s.substring(firstFenceIndex + 3);
    if (contentAfterFence.startsWith("json\n")) contentAfterFence = contentAfterFence.substring(5);
    else if (contentAfterFence.startsWith("json")) contentAfterFence = contentAfterFence.substring(4);
    else if (contentAfterFence.startsWith("\n")) contentAfterFence = contentAfterFence.substring(1);
    const closingFenceIndex = contentAfterFence.indexOf("```");
    let finalContent = contentAfterFence;
    if (closingFenceIndex !== -1) finalContent = contentAfterFence.substring(0, closingFenceIndex);
    return parser(finalContent.trim());
}
function parsePartialJson(s) {
    if (typeof s === "undefined") return null;
    try {
        return JSON.parse(s);
    } catch  {}
    let new_s = "";
    const stack = [];
    let isInsideString = false;
    let escaped = false;
    for (let char of s){
        if (isInsideString) if (char === "\"" && !escaped) isInsideString = false;
        else if (char === "\n" && !escaped) char = "\\n";
        else if (char === "\\") escaped = !escaped;
        else escaped = false;
        else if (char === "\"") {
            isInsideString = true;
            escaped = false;
        } else if (char === "{") stack.push("}");
        else if (char === "[") stack.push("]");
        else if (char === "}" || char === "]") if (stack && stack[stack.length - 1] === char) stack.pop();
        else return null;
        new_s += char;
    }
    if (isInsideString) new_s += "\"";
    for(let i = stack.length - 1; i >= 0; i -= 1)new_s += stack[i];
    try {
        return JSON.parse(new_s);
    } catch  {
        return null;
    }
}
;
 //# sourceMappingURL=json.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/bedrock_converse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatBedrockConverseTranslator",
    ()=>ChatBedrockConverseTranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
;
//#region src/messages/block_translators/bedrock_converse.ts
function convertFileFormatToMimeType(format) {
    switch(format){
        case "csv":
            return "text/csv";
        case "doc":
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        case "docx":
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        case "html":
            return "text/html";
        case "md":
            return "text/markdown";
        case "pdf":
            return "application/pdf";
        case "txt":
            return "text/plain";
        case "xls":
            return "application/vnd.ms-excel";
        case "xlsx":
            return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        case "gif":
            return "image/gif";
        case "jpeg":
            return "image/jpeg";
        case "jpg":
            return "image/jpeg";
        case "png":
            return "image/png";
        case "webp":
            return "image/webp";
        case "flv":
            return "video/flv";
        case "mkv":
            return "video/mkv";
        case "mov":
            return "video/mov";
        case "mp4":
            return "video/mp4";
        case "mpeg":
            return "video/mpeg";
        case "mpg":
            return "video/mpg";
        case "three_gp":
            return "video/three_gp";
        case "webm":
            return "video/webm";
        case "wmv":
            return "video/wmv";
        default:
            return "application/octet-stream";
    }
}
function convertConverseDocumentBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document.source)) {
        const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.document.format) ? block.document.format : "";
        const mimeType = convertFileFormatToMimeType(format);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document.source)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document.source.s3Location) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.document.source.s3Location.uri)) return {
                type: "file",
                mimeType,
                fileId: block.document.source.s3Location.uri
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isBytesArray"])(block.document.source.bytes)) return {
                type: "file",
                mimeType,
                data: block.document.source.bytes
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.document.source.text)) return {
                type: "file",
                mimeType,
                data: Buffer.from(block.document.source.text).toString("base64")
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(block.document.source.content)) {
                const data = block.document.source.content.reduce((acc, item)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(item.text)) return acc + item.text;
                    return acc;
                }, "");
                return {
                    type: "file",
                    mimeType,
                    data
                };
            }
        }
    }
    return {
        type: "non_standard",
        value: block
    };
}
function convertConverseImageBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image)) {
        const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.image.format) ? block.image.format : "";
        const mimeType = convertFileFormatToMimeType(format);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image.source)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image.source.s3Location) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.image.source.s3Location.uri)) return {
                type: "image",
                mimeType,
                fileId: block.image.source.s3Location.uri
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isBytesArray"])(block.image.source.bytes)) return {
                type: "image",
                mimeType,
                data: block.image.source.bytes
            };
        }
    }
    return {
        type: "non_standard",
        value: block
    };
}
function convertConverseVideoBlock(block) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "video") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.video)) {
        const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.video) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.video.format) ? block.video.format : "";
        const mimeType = convertFileFormatToMimeType(format);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.video.source)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.video.source.s3Location) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.video.source.s3Location.uri)) return {
                type: "video",
                mimeType,
                fileId: block.video.source.s3Location.uri
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isBytesArray"])(block.video.source.bytes)) return {
                type: "video",
                mimeType,
                data: block.video.source.bytes
            };
        }
    }
    return {
        type: "non_standard",
        value: block
    };
}
function convertToV1FromChatBedrockConverseMessage(message) {
    function* iterateContent() {
        const content = typeof message.content === "string" ? [
            {
                type: "text",
                text: message.content
            }
        ] : message.content;
        for (const block of content){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "cache_point")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "citations_content") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.citationsContent)) {
                const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(block.citationsContent.content) ? block.citationsContent.content.reduce((acc, item)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(item.text)) return acc + item.text;
                    return acc;
                }, "") : "";
                const annotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(block.citationsContent.citations) ? block.citationsContent.citations.reduce((acc, item)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item)) {
                        const citedText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(item.sourceContent) ? item.sourceContent.reduce((acc$1, item$1)=>{
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item$1) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(item$1.text)) return acc$1 + item$1.text;
                            return acc$1;
                        }, "") : "";
                        const properties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])(()=>{
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(item.location)) {
                                const location = item.location.documentChar || item.location.documentPage || item.location.documentChunk;
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(location)) return {
                                    source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(location.documentIndex) ? location.documentIndex.toString() : void 0,
                                    startIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(location.start) ? location.start : void 0,
                                    endIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isNumber"])(location.end) ? location.end : void 0
                                };
                            }
                            return {};
                        });
                        acc.push({
                            type: "citation",
                            citedText,
                            ...properties
                        });
                    }
                    return acc;
                }, []) : [];
                yield {
                    type: "text",
                    text,
                    annotations
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "document") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.document)) {
                yield convertConverseDocumentBlock(block);
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "guard_content")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.image)) {
                yield convertConverseImageBlock(block);
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "reasoning_content") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.reasoningText)) {
                yield {
                    type: "reasoning",
                    reasoning: block.reasoningText
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "text") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.text)) {
                yield {
                    type: "text",
                    text: block.text
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "tool_result")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "tool_call")) continue;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "video") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.video)) {
                yield convertConverseVideoBlock(block);
                continue;
            }
            yield {
                type: "non_standard",
                value: block
            };
        }
    }
    return Array.from(iterateContent());
}
const ChatBedrockConverseTranslator = {
    translateContent: convertToV1FromChatBedrockConverseMessage,
    translateContentChunk: convertToV1FromChatBedrockConverseMessage
};
;
 //# sourceMappingURL=bedrock_converse.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/google_genai.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatGoogleGenAITranslator",
    ()=>ChatGoogleGenAITranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
;
//#region src/messages/block_translators/google_genai.ts
function convertToV1FromChatGoogleMessage(message) {
    function* iterateContent() {
        const content = typeof message.content === "string" ? [
            {
                type: "text",
                text: message.content
            }
        ] : message.content;
        for (const block of content){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "text") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.text)) {
                yield {
                    type: "text",
                    text: block.text
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "inlineData") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.inlineData) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.inlineData.mimeType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.inlineData.data)) {
                yield {
                    type: "file",
                    mimeType: block.inlineData.mimeType,
                    data: block.inlineData.data
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "functionCall") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.functionCall) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.functionCall.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.functionCall.args)) {
                yield {
                    type: "tool_call",
                    id: message.id,
                    name: block.functionCall.name,
                    args: block.functionCall.args
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "functionResponse")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "fileData") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isObject"])(block.fileData) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.fileData.mimeType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.fileData.fileUri)) {
                yield {
                    type: "file",
                    mimeType: block.fileData.mimeType,
                    fileId: block.fileData.fileUri
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "executableCode")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "codeExecutionResult")) {
                yield {
                    type: "non_standard",
                    value: block
                };
                continue;
            }
            yield {
                type: "non_standard",
                value: block
            };
        }
    }
    return Array.from(iterateContent());
}
const ChatGoogleGenAITranslator = {
    translateContent: convertToV1FromChatGoogleMessage,
    translateContentChunk: convertToV1FromChatGoogleMessage
};
;
 //# sourceMappingURL=google_genai.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/google_vertexai.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatVertexTranslator",
    ()=>ChatVertexTranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/utils.js [app-route] (ecmascript)");
;
//#region src/messages/block_translators/google_vertexai.ts
function convertToV1FromChatVertexMessage(message) {
    function* iterateContent() {
        const content = typeof message.content === "string" ? [
            {
                type: "text",
                text: message.content
            }
        ] : message.content;
        for (const block of content){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "reasoning") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.reasoning)) {
                const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iife"])(()=>{
                    const reasoningIndex = content.indexOf(block);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isArray"])(message.additional_kwargs?.signatures) && reasoningIndex >= 0) return message.additional_kwargs.signatures.at(reasoningIndex);
                    return void 0;
                });
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(signature)) yield {
                    type: "reasoning",
                    reasoning: block.reasoning,
                    signature
                };
                else yield {
                    type: "reasoning",
                    reasoning: block.reasoning
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "text") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.text)) {
                yield {
                    type: "text",
                    text: block.text
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "image_url")) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.image_url)) if (block.image_url.startsWith("data:")) {
                    const dataUrlRegex = /^data:([^;]+);base64,(.+)$/;
                    const match = block.image_url.match(dataUrlRegex);
                    if (match) yield {
                        type: "image",
                        data: match[2],
                        mimeType: match[1]
                    };
                    else yield {
                        type: "image",
                        url: block.image_url
                    };
                } else yield {
                    type: "image",
                    url: block.image_url
                };
                continue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isContentBlock"])(block, "media") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.mimeType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isString"])(block.data)) {
                yield {
                    type: "file",
                    mimeType: block.mimeType,
                    data: block.data
                };
                continue;
            }
            yield {
                type: "non_standard",
                value: block
            };
        }
    }
    return Array.from(iterateContent());
}
const ChatVertexTranslator = {
    translateContent: convertToV1FromChatVertexMessage,
    translateContentChunk: convertToV1FromChatVertexMessage
};
;
 //# sourceMappingURL=google_vertexai.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslator",
    ()=>getTranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$anthropic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/anthropic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$openai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/openai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$bedrock_converse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/bedrock_converse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$google_genai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/google_genai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$google_vertexai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/google_vertexai.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/messages/block_translators/index.ts
globalThis.lc_block_translators_registry ??= new Map([
    [
        "anthropic",
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$anthropic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatAnthropicTranslator"]
    ],
    [
        "bedrock-converse",
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$bedrock_converse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatBedrockConverseTranslator"]
    ],
    [
        "google-genai",
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$google_genai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatGoogleGenAITranslator"]
    ],
    [
        "google-vertexai",
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$google_vertexai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatVertexTranslator"]
    ],
    [
        "openai",
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$openai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatOpenAITranslator"]
    ]
]);
function getTranslator(modelProvider) {
    return globalThis.lc_block_translators_registry.get(modelProvider);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/metadata.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeResponseMetadata",
    ()=>mergeResponseMetadata,
    "mergeUsageMetadata",
    ()=>mergeUsageMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/metadata.ts
function mergeResponseMetadata(a, b) {
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(a ?? {}, b ?? {});
    return output;
}
function mergeModalitiesTokenDetails(a, b) {
    const output = {};
    if (a?.audio !== void 0 || b?.audio !== void 0) output.audio = (a?.audio ?? 0) + (b?.audio ?? 0);
    if (a?.image !== void 0 || b?.image !== void 0) output.image = (a?.image ?? 0) + (b?.image ?? 0);
    if (a?.video !== void 0 || b?.video !== void 0) output.video = (a?.video ?? 0) + (b?.video ?? 0);
    if (a?.document !== void 0 || b?.document !== void 0) output.document = (a?.document ?? 0) + (b?.document ?? 0);
    if (a?.text !== void 0 || b?.text !== void 0) output.text = (a?.text ?? 0) + (b?.text ?? 0);
    return output;
}
function mergeInputTokenDetails(a, b) {
    const output = {
        ...mergeModalitiesTokenDetails(a, b)
    };
    if (a?.cache_read !== void 0 || b?.cache_read !== void 0) output.cache_read = (a?.cache_read ?? 0) + (b?.cache_read ?? 0);
    if (a?.cache_creation !== void 0 || b?.cache_creation !== void 0) output.cache_creation = (a?.cache_creation ?? 0) + (b?.cache_creation ?? 0);
    return output;
}
function mergeOutputTokenDetails(a, b) {
    const output = {
        ...mergeModalitiesTokenDetails(a, b)
    };
    if (a?.reasoning !== void 0 || b?.reasoning !== void 0) output.reasoning = (a?.reasoning ?? 0) + (b?.reasoning ?? 0);
    return output;
}
function mergeUsageMetadata(a, b) {
    return {
        input_tokens: (a?.input_tokens ?? 0) + (b?.input_tokens ?? 0),
        output_tokens: (a?.output_tokens ?? 0) + (b?.output_tokens ?? 0),
        total_tokens: (a?.total_tokens ?? 0) + (b?.total_tokens ?? 0),
        input_token_details: mergeInputTokenDetails(a?.input_token_details, b?.input_token_details),
        output_token_details: mergeOutputTokenDetails(a?.output_token_details, b?.output_token_details)
    };
}
;
 //# sourceMappingURL=metadata.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/ai.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIMessage",
    ()=>AIMessage,
    "AIMessageChunk",
    ()=>AIMessageChunk,
    "isAIMessage",
    ()=>isAIMessage,
    "isAIMessageChunk",
    ()=>isAIMessageChunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/json.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/block_translators/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$metadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/metadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/tool.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/messages/ai.ts
var AIMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    type = "ai";
    tool_calls = [];
    invalid_tool_calls = [];
    usage_metadata;
    get lc_aliases() {
        return {
            ...super.lc_aliases,
            tool_calls: "tool_calls",
            invalid_tool_calls: "invalid_tool_calls"
        };
    }
    constructor(fields){
        let initParams;
        if (typeof fields === "string" || Array.isArray(fields)) initParams = {
            content: fields,
            tool_calls: [],
            invalid_tool_calls: [],
            additional_kwargs: {}
        };
        else {
            initParams = fields;
            const rawToolCalls = initParams.additional_kwargs?.tool_calls;
            const toolCalls = initParams.tool_calls;
            if (!(rawToolCalls == null) && rawToolCalls.length > 0 && (toolCalls === void 0 || toolCalls.length === 0)) console.warn([
                "New LangChain packages are available that more efficiently handle",
                "tool calling.\n\nPlease upgrade your packages to versions that set",
                "message tool calls. e.g., `pnpm install @langchain/anthropic`,",
                "pnpm install @langchain/openai`, etc."
            ].join(" "));
            try {
                if (!(rawToolCalls == null) && toolCalls === void 0) {
                    const [toolCalls$1, invalidToolCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultToolCallParser"])(rawToolCalls);
                    initParams.tool_calls = toolCalls$1 ?? [];
                    initParams.invalid_tool_calls = invalidToolCalls ?? [];
                } else {
                    initParams.tool_calls = initParams.tool_calls ?? [];
                    initParams.invalid_tool_calls = initParams.invalid_tool_calls ?? [];
                }
            } catch  {
                initParams.tool_calls = [];
                initParams.invalid_tool_calls = [];
            }
            if (initParams.response_metadata !== void 0 && "output_version" in initParams.response_metadata && initParams.response_metadata.output_version === "v1") {
                initParams.contentBlocks = initParams.content;
                initParams.content = void 0;
            }
            if (initParams.contentBlocks !== void 0) {
                initParams.contentBlocks.push(...initParams.tool_calls.map((toolCall)=>({
                        type: "tool_call",
                        id: toolCall.id,
                        name: toolCall.name,
                        args: toolCall.args
                    })));
                const missingToolCalls = initParams.contentBlocks.filter((block)=>block.type === "tool_call").filter((block)=>!initParams.tool_calls?.some((toolCall)=>toolCall.id === block.id && toolCall.name === block.name));
                if (missingToolCalls.length > 0) initParams.tool_calls = missingToolCalls.map((block)=>({
                        type: "tool_call",
                        id: block.id,
                        name: block.name,
                        args: block.args
                    }));
            }
        }
        super(initParams);
        if (typeof initParams !== "string") {
            this.tool_calls = initParams.tool_calls ?? this.tool_calls;
            this.invalid_tool_calls = initParams.invalid_tool_calls ?? this.invalid_tool_calls;
        }
        this.usage_metadata = initParams.usage_metadata;
    }
    static lc_name() {
        return "AIMessage";
    }
    get contentBlocks() {
        if (this.response_metadata && "output_version" in this.response_metadata && this.response_metadata.output_version === "v1") return this.content;
        if (this.response_metadata && "model_provider" in this.response_metadata && typeof this.response_metadata.model_provider === "string") {
            const translator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslator"])(this.response_metadata.model_provider);
            if (translator) return translator.translateContent(this);
        }
        const blocks = super.contentBlocks;
        if (this.tool_calls) {
            const missingToolCalls = this.tool_calls.filter((block)=>!blocks.some((b)=>b.id === block.id && b.name === block.name));
            blocks.push(...missingToolCalls.map((block)=>({
                    ...block,
                    type: "tool_call",
                    id: block.id,
                    name: block.name,
                    args: block.args
                })));
        }
        return blocks;
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            tool_calls: this.tool_calls,
            invalid_tool_calls: this.invalid_tool_calls,
            usage_metadata: this.usage_metadata
        };
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "ai";
    }
};
/**
* @deprecated Use {@link AIMessage.isInstance} instead
*/ function isAIMessage(x) {
    return x._getType() === "ai";
}
/**
* @deprecated Use {@link AIMessageChunk.isInstance} instead
*/ function isAIMessageChunk(x) {
    return x._getType() === "ai";
}
/**
* Represents a chunk of an AI message, which can be concatenated with
* other AI message chunks.
*/ var AIMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    type = "ai";
    tool_calls = [];
    invalid_tool_calls = [];
    tool_call_chunks = [];
    usage_metadata;
    constructor(fields){
        let initParams;
        if (typeof fields === "string" || Array.isArray(fields)) initParams = {
            content: fields,
            tool_calls: [],
            invalid_tool_calls: [],
            tool_call_chunks: []
        };
        else if (fields.tool_call_chunks === void 0) initParams = {
            ...fields,
            tool_calls: fields.tool_calls ?? [],
            invalid_tool_calls: [],
            tool_call_chunks: [],
            usage_metadata: fields.usage_metadata !== void 0 ? fields.usage_metadata : void 0
        };
        else {
            const groupedToolCallChunks = fields.tool_call_chunks.reduce((acc, chunk)=>{
                const matchedChunkIndex = acc.findIndex(([match])=>{
                    if ("id" in chunk && chunk.id && "index" in chunk && chunk.index !== void 0) return chunk.id === match.id && chunk.index === match.index;
                    if ("id" in chunk && chunk.id) return chunk.id === match.id;
                    if ("index" in chunk && chunk.index !== void 0) return chunk.index === match.index;
                    return false;
                });
                if (matchedChunkIndex !== -1) acc[matchedChunkIndex].push(chunk);
                else acc.push([
                    chunk
                ]);
                return acc;
            }, []);
            const toolCalls = [];
            const invalidToolCalls = [];
            for (const chunks of groupedToolCallChunks){
                let parsedArgs = null;
                const name = chunks[0]?.name ?? "";
                const joinedArgs = chunks.map((c)=>c.args || "").join("");
                const argsStr = joinedArgs.length ? joinedArgs : "{}";
                const id = chunks[0]?.id;
                try {
                    parsedArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePartialJson"])(argsStr);
                    if (!id || parsedArgs === null || typeof parsedArgs !== "object" || Array.isArray(parsedArgs)) throw new Error("Malformed tool call chunk args.");
                    toolCalls.push({
                        name,
                        args: parsedArgs,
                        id,
                        type: "tool_call"
                    });
                } catch  {
                    invalidToolCalls.push({
                        name,
                        args: argsStr,
                        id,
                        error: "Malformed args.",
                        type: "invalid_tool_call"
                    });
                }
            }
            initParams = {
                ...fields,
                tool_calls: toolCalls,
                invalid_tool_calls: invalidToolCalls,
                usage_metadata: fields.usage_metadata !== void 0 ? fields.usage_metadata : void 0
            };
        }
        super(initParams);
        this.tool_call_chunks = initParams.tool_call_chunks ?? this.tool_call_chunks;
        this.tool_calls = initParams.tool_calls ?? this.tool_calls;
        this.invalid_tool_calls = initParams.invalid_tool_calls ?? this.invalid_tool_calls;
        this.usage_metadata = initParams.usage_metadata;
    }
    get lc_aliases() {
        return {
            ...super.lc_aliases,
            tool_calls: "tool_calls",
            invalid_tool_calls: "invalid_tool_calls",
            tool_call_chunks: "tool_call_chunks"
        };
    }
    static lc_name() {
        return "AIMessageChunk";
    }
    get contentBlocks() {
        if (this.response_metadata && "output_version" in this.response_metadata && this.response_metadata.output_version === "v1") return this.content;
        if (this.response_metadata && "model_provider" in this.response_metadata && typeof this.response_metadata.model_provider === "string") {
            const translator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$block_translators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTranslator"])(this.response_metadata.model_provider);
            if (translator) return translator.translateContent(this);
        }
        const blocks = super.contentBlocks;
        if (this.tool_calls) {
            if (typeof this.content !== "string") {
                const contentToolCalls = this.content.filter((block)=>block.type === "tool_call").map((block)=>block.id);
                for (const toolCall of this.tool_calls)if (toolCall.id && !contentToolCalls.includes(toolCall.id)) blocks.push({
                    ...toolCall,
                    type: "tool_call",
                    id: toolCall.id,
                    name: toolCall.name,
                    args: toolCall.args
                });
            }
        }
        return blocks;
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            tool_calls: this.tool_calls,
            tool_call_chunks: this.tool_call_chunks,
            invalid_tool_calls: this.invalid_tool_calls,
            usage_metadata: this.usage_metadata
        };
    }
    concat(chunk) {
        const combinedFields = {
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$metadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeResponseMetadata"])(this.response_metadata, chunk.response_metadata),
            tool_call_chunks: [],
            id: this.id ?? chunk.id
        };
        if (this.tool_call_chunks !== void 0 || chunk.tool_call_chunks !== void 0) {
            const rawToolCalls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeLists"])(this.tool_call_chunks, chunk.tool_call_chunks);
            if (rawToolCalls !== void 0 && rawToolCalls.length > 0) combinedFields.tool_call_chunks = rawToolCalls;
        }
        if (this.usage_metadata !== void 0 || chunk.usage_metadata !== void 0) combinedFields.usage_metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$metadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeUsageMetadata"])(this.usage_metadata, chunk.usage_metadata);
        const Cls = this.constructor;
        return new Cls(combinedFields);
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "ai";
    }
};
;
 //# sourceMappingURL=ai.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/chat.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessage",
    ()=>ChatMessage,
    "ChatMessageChunk",
    ()=>ChatMessageChunk,
    "isChatMessage",
    ()=>isChatMessage,
    "isChatMessageChunk",
    ()=>isChatMessageChunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/chat.ts
/**
* Represents a chat message in a conversation.
*/ var ChatMessage = class ChatMessage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    static lc_name() {
        return "ChatMessage";
    }
    type = "generic";
    role;
    static _chatMessageClass() {
        return ChatMessage;
    }
    constructor(fields, role){
        if (typeof fields === "string" || Array.isArray(fields)) fields = {
            content: fields,
            role
        };
        super(fields);
        this.role = fields.role;
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "generic";
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            role: this.role
        };
    }
};
/**
* Represents a chunk of a chat message, which can be concatenated with
* other chat message chunks.
*/ var ChatMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    static lc_name() {
        return "ChatMessageChunk";
    }
    type = "generic";
    role;
    constructor(fields, role){
        if (typeof fields === "string" || Array.isArray(fields)) fields = {
            content: fields,
            role
        };
        super(fields);
        this.role = fields.role;
    }
    concat(chunk) {
        const Cls = this.constructor;
        return new Cls({
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.response_metadata, chunk.response_metadata),
            role: this.role,
            id: this.id ?? chunk.id
        });
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "generic";
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            role: this.role
        };
    }
};
/**
* @deprecated Use {@link ChatMessage.isInstance} instead
*/ function isChatMessage(x) {
    return x._getType() === "generic";
}
/**
* @deprecated Use {@link ChatMessageChunk.isInstance} instead
*/ function isChatMessageChunk(x) {
    return x._getType() === "generic";
}
;
 //# sourceMappingURL=chat.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/function.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionMessage",
    ()=>FunctionMessage,
    "FunctionMessageChunk",
    ()=>FunctionMessageChunk,
    "isFunctionMessage",
    ()=>isFunctionMessage,
    "isFunctionMessageChunk",
    ()=>isFunctionMessageChunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/function.ts
/**
* Represents a function message in a conversation.
*/ var FunctionMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    static lc_name() {
        return "FunctionMessage";
    }
    type = "function";
    name;
    constructor(fields){
        super(fields);
        this.name = fields.name;
    }
};
/**
* Represents a chunk of a function message, which can be concatenated
* with other function message chunks.
*/ var FunctionMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    static lc_name() {
        return "FunctionMessageChunk";
    }
    type = "function";
    concat(chunk) {
        const Cls = this.constructor;
        return new Cls({
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.response_metadata, chunk.response_metadata),
            name: this.name ?? "",
            id: this.id ?? chunk.id
        });
    }
};
function isFunctionMessage(x) {
    return x._getType() === "function";
}
function isFunctionMessageChunk(x) {
    return x._getType() === "function";
}
;
 //# sourceMappingURL=function.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/human.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HumanMessage",
    ()=>HumanMessage,
    "HumanMessageChunk",
    ()=>HumanMessageChunk,
    "isHumanMessage",
    ()=>isHumanMessage,
    "isHumanMessageChunk",
    ()=>isHumanMessageChunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/human.ts
/**
* Represents a human message in a conversation.
*/ var HumanMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    static lc_name() {
        return "HumanMessage";
    }
    type = "human";
    constructor(fields){
        super(fields);
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "human";
    }
};
/**
* Represents a chunk of a human message, which can be concatenated with
* other human message chunks.
*/ var HumanMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    static lc_name() {
        return "HumanMessageChunk";
    }
    type = "human";
    constructor(fields){
        super(fields);
    }
    concat(chunk) {
        const Cls = this.constructor;
        return new Cls({
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.response_metadata, chunk.response_metadata),
            id: this.id ?? chunk.id
        });
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "human";
    }
};
/**
* @deprecated Use {@link HumanMessage.isInstance} instead
*/ function isHumanMessage(x) {
    return x.getType() === "human";
}
/**
* @deprecated Use {@link HumanMessageChunk.isInstance} instead
*/ function isHumanMessageChunk(x) {
    return x.getType() === "human";
}
;
 //# sourceMappingURL=human.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/system.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemMessage",
    ()=>SystemMessage,
    "SystemMessageChunk",
    ()=>SystemMessageChunk,
    "isSystemMessage",
    ()=>isSystemMessage,
    "isSystemMessageChunk",
    ()=>isSystemMessageChunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/system.ts
/**
* Represents a system message in a conversation.
*/ var SystemMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    static lc_name() {
        return "SystemMessage";
    }
    type = "system";
    constructor(fields){
        super(fields);
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "system";
    }
};
/**
* Represents a chunk of a system message, which can be concatenated with
* other system message chunks.
*/ var SystemMessageChunk = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessageChunk"] {
    static lc_name() {
        return "SystemMessageChunk";
    }
    type = "system";
    constructor(fields){
        super(fields);
    }
    concat(chunk) {
        const Cls = this.constructor;
        return new Cls({
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeContent"])(this.content, chunk.content),
            additional_kwargs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.additional_kwargs, chunk.additional_kwargs),
            response_metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_mergeDicts"])(this.response_metadata, chunk.response_metadata),
            id: this.id ?? chunk.id
        });
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "system";
    }
};
/**
* @deprecated Use {@link SystemMessage.isInstance} instead
*/ function isSystemMessage(x) {
    return x._getType() === "system";
}
/**
* @deprecated Use {@link SystemMessageChunk.isInstance} instead
*/ function isSystemMessageChunk(x) {
    return x._getType() === "system";
}
;
 //# sourceMappingURL=system.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/errors/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/errors/index.ts
__turbopack_context__.s([
    "addLangChainErrorFields",
    ()=>addLangChainErrorFields
]);
function addLangChainErrorFields(error, lc_error_code) {
    error.lc_error_code = lc_error_code;
    error.message = `${error.message}\n\nTroubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/${lc_error_code}/\n`;
    return error;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/modifier.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveMessage",
    ()=>RemoveMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
;
//#region src/messages/modifier.ts
/**
* Message responsible for deleting other messages.
*/ var RemoveMessage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseMessage"] {
    type = "remove";
    /**
	* The ID of the message to remove.
	*/ id;
    constructor(fields){
        super({
            ...fields,
            content: []
        });
        this.id = fields.id;
    }
    get _printableFields() {
        return {
            ...super._printableFields,
            id: this.id
        };
    }
    static isInstance(obj) {
        return super.isInstance(obj) && obj.type === "remove";
    }
};
;
 //# sourceMappingURL=modifier.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coerceMessageLikeToMessage",
    ()=>coerceMessageLikeToMessage,
    "convertToChunk",
    ()=>convertToChunk,
    "getBufferString",
    ()=>getBufferString,
    "iife",
    ()=>iife,
    "mapChatMessagesToStoredMessages",
    ()=>mapChatMessagesToStoredMessages,
    "mapStoredMessageToChatMessage",
    ()=>mapStoredMessageToChatMessage,
    "mapStoredMessagesToChatMessages",
    ()=>mapStoredMessagesToChatMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/tool.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/ai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/chat.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/function.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/human.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/system.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/errors/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tools/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/modifier.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
//#region src/messages/utils.ts
/**
* Immediately-invoked function expression.
*
* @param fn - The function to execute
* @returns The result of the function
*/ const iife = (fn)=>fn();
function _coerceToolCall(toolCall) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isToolCall"])(toolCall)) return toolCall;
    else if (typeof toolCall.id === "string" && toolCall.type === "function" && typeof toolCall.function === "object" && toolCall.function !== null && "arguments" in toolCall.function && typeof toolCall.function.arguments === "string" && "name" in toolCall.function && typeof toolCall.function.name === "string") return {
        id: toolCall.id,
        args: JSON.parse(toolCall.function.arguments),
        name: toolCall.function.name,
        type: "tool_call"
    };
    else return toolCall;
}
function isSerializedConstructor(x) {
    return typeof x === "object" && x != null && x.lc === 1 && Array.isArray(x.id) && x.kwargs != null && typeof x.kwargs === "object";
}
function _constructMessageFromParams(params) {
    let type;
    let rest;
    if (isSerializedConstructor(params)) {
        const className = params.id.at(-1);
        if (className === "HumanMessage" || className === "HumanMessageChunk") type = "user";
        else if (className === "AIMessage" || className === "AIMessageChunk") type = "assistant";
        else if (className === "SystemMessage" || className === "SystemMessageChunk") type = "system";
        else if (className === "FunctionMessage" || className === "FunctionMessageChunk") type = "function";
        else if (className === "ToolMessage" || className === "ToolMessageChunk") type = "tool";
        else type = "unknown";
        rest = params.kwargs;
    } else {
        const { type: extractedType, ...otherParams } = params;
        type = extractedType;
        rest = otherParams;
    }
    if (type === "human" || type === "user") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HumanMessage"](rest);
    else if (type === "ai" || type === "assistant") {
        const { tool_calls: rawToolCalls, ...other } = rest;
        if (!Array.isArray(rawToolCalls)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessage"](rest);
        const tool_calls = rawToolCalls.map(_coerceToolCall);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessage"]({
            ...other,
            tool_calls
        });
    } else if (type === "system") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SystemMessage"](rest);
    else if (type === "developer") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SystemMessage"]({
        ...rest,
        additional_kwargs: {
            ...rest.additional_kwargs,
            __openai_role__: "developer"
        }
    });
    else if (type === "tool" && "tool_call_id" in rest) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToolMessage"]({
        ...rest,
        content: rest.content,
        tool_call_id: rest.tool_call_id,
        name: rest.name
    });
    else if (type === "remove" && "id" in rest && typeof rest.id === "string") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemoveMessage"]({
        ...rest,
        id: rest.id
    });
    else {
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$errors$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addLangChainErrorFields"])(/* @__PURE__ */ new Error(`Unable to coerce message from array: only human, AI, system, developer, or tool message coercion is currently supported.\n\nReceived: ${JSON.stringify(params, null, 2)}`), "MESSAGE_COERCION_FAILURE");
        throw error;
    }
}
function coerceMessageLikeToMessage(messageLike) {
    if (typeof messageLike === "string") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HumanMessage"](messageLike);
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(messageLike)) return messageLike;
    if (Array.isArray(messageLike)) {
        const [type, content] = messageLike;
        return _constructMessageFromParams({
            type,
            content
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isMessageFieldWithRole"])(messageLike)) {
        const { role: type, ...rest } = messageLike;
        return _constructMessageFromParams({
            ...rest,
            type
        });
    } else return _constructMessageFromParams(messageLike);
}
/**
* This function is used by memory classes to get a string representation
* of the chat message history, based on the message content and role.
*/ function getBufferString(messages, humanPrefix = "Human", aiPrefix = "AI") {
    const string_messages = [];
    for (const m of messages){
        let role;
        if (m._getType() === "human") role = humanPrefix;
        else if (m._getType() === "ai") role = aiPrefix;
        else if (m._getType() === "system") role = "System";
        else if (m._getType() === "tool") role = "Tool";
        else if (m._getType() === "generic") role = m.role;
        else throw new Error(`Got unsupported message type: ${m._getType()}`);
        const nameStr = m.name ? `${m.name}, ` : "";
        const readableContent = typeof m.content === "string" ? m.content : JSON.stringify(m.content, null, 2);
        string_messages.push(`${role}: ${nameStr}${readableContent}`);
    }
    return string_messages.join("\n");
}
/**
* Maps messages from an older format (V1) to the current `StoredMessage`
* format. If the message is already in the `StoredMessage` format, it is
* returned as is. Otherwise, it transforms the V1 message into a
* `StoredMessage`. This function is important for maintaining
* compatibility with older message formats.
*/ function mapV1MessageToStoredMessage(message) {
    if (message.data !== void 0) return message;
    else {
        const v1Message = message;
        return {
            type: v1Message.type,
            data: {
                content: v1Message.text,
                role: v1Message.role,
                name: void 0,
                tool_call_id: void 0
            }
        };
    }
}
function mapStoredMessageToChatMessage(message) {
    const storedMessage = mapV1MessageToStoredMessage(message);
    switch(storedMessage.type){
        case "human":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HumanMessage"](storedMessage.data);
        case "ai":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessage"](storedMessage.data);
        case "system":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SystemMessage"](storedMessage.data);
        case "function":
            if (storedMessage.data.name === void 0) throw new Error("Name must be defined for function messages");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FunctionMessage"](storedMessage.data);
        case "tool":
            if (storedMessage.data.tool_call_id === void 0) throw new Error("Tool call ID must be defined for tool messages");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToolMessage"](storedMessage.data);
        case "generic":
            if (storedMessage.data.role === void 0) throw new Error("Role must be defined for chat messages");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatMessage"](storedMessage.data);
        default:
            throw new Error(`Got unexpected type: ${storedMessage.type}`);
    }
}
/**
* Transforms an array of `StoredMessage` instances into an array of
* `BaseMessage` instances. It uses the `mapV1MessageToStoredMessage`
* function to ensure all messages are in the `StoredMessage` format, then
* creates new instances of the appropriate `BaseMessage` subclass based
* on the type of each message. This function is used to prepare stored
* messages for use in a chat context.
*/ function mapStoredMessagesToChatMessages(messages) {
    return messages.map(mapStoredMessageToChatMessage);
}
/**
* Transforms an array of `BaseMessage` instances into an array of
* `StoredMessage` instances. It does this by calling the `toDict` method
* on each `BaseMessage`, which returns a `StoredMessage`. This function
* is used to prepare chat messages for storage.
*/ function mapChatMessagesToStoredMessages(messages) {
    return messages.map((message)=>message.toDict());
}
function convertToChunk(message) {
    const type = message._getType();
    if (type === "human") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$human$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HumanMessageChunk"]({
        ...message
    });
    else if (type === "ai") {
        let aiChunkFields = {
            ...message
        };
        if ("tool_calls" in aiChunkFields) aiChunkFields = {
            ...aiChunkFields,
            tool_call_chunks: aiChunkFields.tool_calls?.map((tc)=>({
                    ...tc,
                    type: "tool_call_chunk",
                    index: void 0,
                    args: JSON.stringify(tc.args)
                }))
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
            ...aiChunkFields
        });
    } else if (type === "system") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$system$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SystemMessageChunk"]({
        ...message
    });
    else if (type === "function") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FunctionMessageChunk"]({
        ...message
    });
    else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatMessage"].isInstance(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatMessageChunk"]({
        ...message
    });
    else throw new Error("Unknown message type.");
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env_exports",
    ()=>env_exports,
    "getEnv",
    ()=>getEnv,
    "getEnvironmentVariable",
    ()=>getEnvironmentVariable,
    "getRuntimeEnvironment",
    ()=>getRuntimeEnvironment,
    "isBrowser",
    ()=>isBrowser,
    "isDeno",
    ()=>isDeno,
    "isJsDom",
    ()=>isJsDom,
    "isNode",
    ()=>isNode,
    "isWebWorker",
    ()=>isWebWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
;
//#region src/utils/env.ts
var env_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(env_exports, {
    getEnv: ()=>getEnv,
    getEnvironmentVariable: ()=>getEnvironmentVariable,
    getRuntimeEnvironment: ()=>getRuntimeEnvironment,
    isBrowser: ()=>isBrowser,
    isDeno: ()=>isDeno,
    isJsDom: ()=>isJsDom,
    isNode: ()=>isNode,
    isWebWorker: ()=>isWebWorker
});
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof window.document !== "undefined";
const isWebWorker = ()=>typeof globalThis === "object" && globalThis.constructor && globalThis.constructor.name === "DedicatedWorkerGlobalScope";
const isJsDom = ()=>("TURBOPACK compile-time value", "undefined") !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom");
const isDeno = ()=>typeof Deno !== "undefined";
const isNode = ()=>typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined" && !isDeno();
const getEnv = ()=>{
    let env;
    if (isBrowser()) env = "browser";
    else if (isNode()) env = "node";
    else if (isWebWorker()) env = "webworker";
    else if (isJsDom()) env = "jsdom";
    else if (isDeno()) env = "deno";
    else env = "other";
    return env;
};
let runtimeEnvironment;
function getRuntimeEnvironment() {
    if (runtimeEnvironment === void 0) {
        const env = getEnv();
        runtimeEnvironment = {
            library: "langchain-js",
            runtime: env
        };
    }
    return runtimeEnvironment;
}
function getEnvironmentVariable(name) {
    try {
        if (typeof process !== "undefined") return process.env?.[name];
        else if (isDeno()) return Deno?.env.get(name);
        else return void 0;
    } catch  {
        return void 0;
    }
}
;
 //# sourceMappingURL=env.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseCallbackHandler",
    ()=>BaseCallbackHandler,
    "base_exports",
    ()=>base_exports,
    "callbackHandlerPrefersStreaming",
    ()=>callbackHandlerPrefersStreaming,
    "isBaseCallbackHandler",
    ()=>isBaseCallbackHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/serializable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
;
//#region src/callbacks/base.ts
var base_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(base_exports, {
    BaseCallbackHandler: ()=>BaseCallbackHandler,
    callbackHandlerPrefersStreaming: ()=>callbackHandlerPrefersStreaming,
    isBaseCallbackHandler: ()=>isBaseCallbackHandler
});
/**
* Abstract class that provides a set of optional methods that can be
* overridden in derived classes to handle various events during the
* execution of a LangChain application.
*/ var BaseCallbackHandlerMethodsClass = class {
};
function callbackHandlerPrefersStreaming(x) {
    return "lc_prefer_streaming" in x && x.lc_prefer_streaming;
}
/**
* Abstract base class for creating callback handlers in the LangChain
* framework. It provides a set of optional methods that can be overridden
* in derived classes to handle various events during the execution of a
* LangChain application.
*/ var BaseCallbackHandler = class extends BaseCallbackHandlerMethodsClass {
    lc_serializable = false;
    get lc_namespace() {
        return [
            "langchain_core",
            "callbacks",
            this.name
        ];
    }
    get lc_secrets() {
        return void 0;
    }
    get lc_attributes() {
        return void 0;
    }
    get lc_aliases() {
        return void 0;
    }
    get lc_serializable_keys() {
        return void 0;
    }
    /**
	* The name of the serializable. Override to provide an alias or
	* to preserve the serialized module name in minified environments.
	*
	* Implemented as a static method to support loading logic.
	*/ static lc_name() {
        return this.name;
    }
    /**
	* The final serialized identifier for the module.
	*/ get lc_id() {
        return [
            ...this.lc_namespace,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["get_lc_unique_name"])(this.constructor)
        ];
    }
    lc_kwargs;
    ignoreLLM = false;
    ignoreChain = false;
    ignoreAgent = false;
    ignoreRetriever = false;
    ignoreCustomEvent = false;
    raiseError = false;
    awaitHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("LANGCHAIN_CALLBACKS_BACKGROUND") === "false";
    constructor(input){
        super();
        this.lc_kwargs = input || {};
        if (input) {
            this.ignoreLLM = input.ignoreLLM ?? this.ignoreLLM;
            this.ignoreChain = input.ignoreChain ?? this.ignoreChain;
            this.ignoreAgent = input.ignoreAgent ?? this.ignoreAgent;
            this.ignoreRetriever = input.ignoreRetriever ?? this.ignoreRetriever;
            this.ignoreCustomEvent = input.ignoreCustomEvent ?? this.ignoreCustomEvent;
            this.raiseError = input.raiseError ?? this.raiseError;
            this.awaitHandlers = this.raiseError || (input._awaitHandler ?? this.awaitHandlers);
        }
    }
    copy() {
        return new this.constructor(this);
    }
    toJSON() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Serializable"].prototype.toJSON.call(this);
    }
    toJSONNotImplemented() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Serializable"].prototype.toJSONNotImplemented.call(this);
    }
    static fromMethods(methods) {
        class Handler extends BaseCallbackHandler {
            name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"]();
            constructor(){
                super();
                Object.assign(this, methods);
            }
        }
        return new Handler();
    }
};
const isBaseCallbackHandler = (x)=>{
    const callbackHandler = x;
    return callbackHandler !== void 0 && typeof callbackHandler.copy === "function" && typeof callbackHandler.name === "string" && typeof callbackHandler.awaitHandlers === "boolean";
};
;
 //# sourceMappingURL=base.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTracer",
    ()=>BaseTracer,
    "base_exports",
    ()=>base_exports,
    "isBaseTracer",
    ()=>isBaseTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/run_trees.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/run_trees.js [app-route] (ecmascript)");
;
;
;
;
//#region src/tracers/base.ts
var base_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(base_exports, {
    BaseTracer: ()=>BaseTracer,
    isBaseTracer: ()=>isBaseTracer
});
const convertRunTreeToRun = (runTree)=>{
    if (!runTree) return void 0;
    runTree.events = runTree.events ?? [];
    runTree.child_runs = runTree.child_runs ?? [];
    return runTree;
};
function convertRunToRunTree(run, parentRun) {
    if (!run) return void 0;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunTree"]({
        ...run,
        start_time: run._serialized_start_time ?? run.start_time,
        parent_run: convertRunToRunTree(parentRun),
        child_runs: run.child_runs.map((r)=>convertRunToRunTree(r)).filter((r)=>r !== void 0),
        extra: {
            ...run.extra,
            runtime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeEnvironment"])()
        },
        tracingEnabled: false
    });
}
function _coerceToDict(value, defaultKey) {
    return value && !Array.isArray(value) && typeof value === "object" ? value : {
        [defaultKey]: value
    };
}
function isBaseTracer(x) {
    return typeof x._addRunToRunMap === "function";
}
var BaseTracer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCallbackHandler"] {
    /** @deprecated Use `runTreeMap` instead. */ runMap = /* @__PURE__ */ new Map();
    runTreeMap = /* @__PURE__ */ new Map();
    usesRunTreeMap = false;
    constructor(_fields){
        super(...arguments);
    }
    copy() {
        return this;
    }
    getRunById(runId) {
        if (runId === void 0) return void 0;
        return this.usesRunTreeMap ? convertRunTreeToRun(this.runTreeMap.get(runId)) : this.runMap.get(runId);
    }
    stringifyError(error) {
        if (error instanceof Error) return error.message + (error?.stack ? `\n\n${error.stack}` : "");
        if (typeof error === "string") return error;
        return `${error}`;
    }
    _addChildRun(parentRun, childRun) {
        parentRun.child_runs.push(childRun);
    }
    _addRunToRunMap(run) {
        const { dottedOrder: currentDottedOrder, microsecondPrecisionDatestring } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToDottedOrderFormat"])(new Date(run.start_time).getTime(), run.id, run.execution_order);
        const storedRun = {
            ...run
        };
        const parentRun = this.getRunById(storedRun.parent_run_id);
        if (storedRun.parent_run_id !== void 0) {
            if (parentRun) {
                this._addChildRun(parentRun, storedRun);
                parentRun.child_execution_order = Math.max(parentRun.child_execution_order, storedRun.child_execution_order);
                storedRun.trace_id = parentRun.trace_id;
                if (parentRun.dotted_order !== void 0) {
                    storedRun.dotted_order = [
                        parentRun.dotted_order,
                        currentDottedOrder
                    ].join(".");
                    storedRun._serialized_start_time = microsecondPrecisionDatestring;
                }
            }
        } else {
            storedRun.trace_id = storedRun.id;
            storedRun.dotted_order = currentDottedOrder;
            storedRun._serialized_start_time = microsecondPrecisionDatestring;
        }
        if (this.usesRunTreeMap) {
            const runTree = convertRunToRunTree(storedRun, parentRun);
            if (runTree !== void 0) this.runTreeMap.set(storedRun.id, runTree);
        } else this.runMap.set(storedRun.id, storedRun);
        return storedRun;
    }
    async _endTrace(run) {
        const parentRun = run.parent_run_id !== void 0 && this.getRunById(run.parent_run_id);
        if (parentRun) parentRun.child_execution_order = Math.max(parentRun.child_execution_order, run.child_execution_order);
        else await this.persistRun(run);
        await this.onRunUpdate?.(run);
        if (this.usesRunTreeMap) this.runTreeMap.delete(run.id);
        else this.runMap.delete(run.id);
    }
    _getExecutionOrder(parentRunId) {
        const parentRun = parentRunId !== void 0 && this.getRunById(parentRunId);
        if (!parentRun) return 1;
        return parentRun.child_execution_order + 1;
    }
    /**
	* Create and add a run to the run map for LLM start events.
	* This must sometimes be done synchronously to avoid race conditions
	* when callbacks are backgrounded, so we expose it as a separate method here.
	*/ _createRunForLLMStart(llm, prompts, runId, parentRunId, extraParams, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const finalExtraParams = metadata ? {
            ...extraParams,
            metadata
        } : extraParams;
        const run = {
            id: runId,
            name: name ?? llm.id[llm.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: llm,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString()
                }
            ],
            inputs: {
                prompts
            },
            execution_order,
            child_runs: [],
            child_execution_order: execution_order,
            run_type: "llm",
            extra: finalExtraParams ?? {},
            tags: tags || []
        };
        return this._addRunToRunMap(run);
    }
    async handleLLMStart(llm, prompts, runId, parentRunId, extraParams, tags, metadata, name) {
        const run = this.getRunById(runId) ?? this._createRunForLLMStart(llm, prompts, runId, parentRunId, extraParams, tags, metadata, name);
        await this.onRunCreate?.(run);
        await this.onLLMStart?.(run);
        return run;
    }
    /**
	* Create and add a run to the run map for chat model start events.
	* This must sometimes be done synchronously to avoid race conditions
	* when callbacks are backgrounded, so we expose it as a separate method here.
	*/ _createRunForChatModelStart(llm, messages, runId, parentRunId, extraParams, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const finalExtraParams = metadata ? {
            ...extraParams,
            metadata
        } : extraParams;
        const run = {
            id: runId,
            name: name ?? llm.id[llm.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: llm,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString()
                }
            ],
            inputs: {
                messages
            },
            execution_order,
            child_runs: [],
            child_execution_order: execution_order,
            run_type: "llm",
            extra: finalExtraParams ?? {},
            tags: tags || []
        };
        return this._addRunToRunMap(run);
    }
    async handleChatModelStart(llm, messages, runId, parentRunId, extraParams, tags, metadata, name) {
        const run = this.getRunById(runId) ?? this._createRunForChatModelStart(llm, messages, runId, parentRunId, extraParams, tags, metadata, name);
        await this.onRunCreate?.(run);
        await this.onLLMStart?.(run);
        return run;
    }
    async handleLLMEnd(output, runId, _parentRunId, _tags, extraParams) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "llm") throw new Error("No LLM run to end.");
        run.end_time = Date.now();
        run.outputs = output;
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString()
        });
        run.extra = {
            ...run.extra,
            ...extraParams
        };
        await this.onLLMEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleLLMError(error, runId, _parentRunId, _tags, extraParams) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "llm") throw new Error("No LLM run to end.");
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString()
        });
        run.extra = {
            ...run.extra,
            ...extraParams
        };
        await this.onLLMError?.(run);
        await this._endTrace(run);
        return run;
    }
    /**
	* Create and add a run to the run map for chain start events.
	* This must sometimes be done synchronously to avoid race conditions
	* when callbacks are backgrounded, so we expose it as a separate method here.
	*/ _createRunForChainStart(chain, inputs, runId, parentRunId, tags, metadata, runType, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? chain.id[chain.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: chain,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString()
                }
            ],
            inputs,
            execution_order,
            child_execution_order: execution_order,
            run_type: runType ?? "chain",
            child_runs: [],
            extra: metadata ? {
                metadata
            } : {},
            tags: tags || []
        };
        return this._addRunToRunMap(run);
    }
    async handleChainStart(chain, inputs, runId, parentRunId, tags, metadata, runType, name) {
        const run = this.getRunById(runId) ?? this._createRunForChainStart(chain, inputs, runId, parentRunId, tags, metadata, runType, name);
        await this.onRunCreate?.(run);
        await this.onChainStart?.(run);
        return run;
    }
    async handleChainEnd(outputs, runId, _parentRunId, _tags, kwargs) {
        const run = this.getRunById(runId);
        if (!run) throw new Error("No chain run to end.");
        run.end_time = Date.now();
        run.outputs = _coerceToDict(outputs, "output");
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString()
        });
        if (kwargs?.inputs !== void 0) run.inputs = _coerceToDict(kwargs.inputs, "input");
        await this.onChainEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleChainError(error, runId, _parentRunId, _tags, kwargs) {
        const run = this.getRunById(runId);
        if (!run) throw new Error("No chain run to end.");
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString()
        });
        if (kwargs?.inputs !== void 0) run.inputs = _coerceToDict(kwargs.inputs, "input");
        await this.onChainError?.(run);
        await this._endTrace(run);
        return run;
    }
    /**
	* Create and add a run to the run map for tool start events.
	* This must sometimes be done synchronously to avoid race conditions
	* when callbacks are backgrounded, so we expose it as a separate method here.
	*/ _createRunForToolStart(tool, input, runId, parentRunId, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? tool.id[tool.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: tool,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString()
                }
            ],
            inputs: {
                input
            },
            execution_order,
            child_execution_order: execution_order,
            run_type: "tool",
            child_runs: [],
            extra: metadata ? {
                metadata
            } : {},
            tags: tags || []
        };
        return this._addRunToRunMap(run);
    }
    async handleToolStart(tool, input, runId, parentRunId, tags, metadata, name) {
        const run = this.getRunById(runId) ?? this._createRunForToolStart(tool, input, runId, parentRunId, tags, metadata, name);
        await this.onRunCreate?.(run);
        await this.onToolStart?.(run);
        return run;
    }
    async handleToolEnd(output, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "tool") throw new Error("No tool run to end");
        run.end_time = Date.now();
        run.outputs = {
            output
        };
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString()
        });
        await this.onToolEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleToolError(error, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "tool") throw new Error("No tool run to end");
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString()
        });
        await this.onToolError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleAgentAction(action, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "chain") return;
        const agentRun = run;
        agentRun.actions = agentRun.actions || [];
        agentRun.actions.push(action);
        agentRun.events.push({
            name: "agent_action",
            time: /* @__PURE__ */ new Date().toISOString(),
            kwargs: {
                action
            }
        });
        await this.onAgentAction?.(run);
    }
    async handleAgentEnd(action, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "chain") return;
        run.events.push({
            name: "agent_end",
            time: /* @__PURE__ */ new Date().toISOString(),
            kwargs: {
                action
            }
        });
        await this.onAgentEnd?.(run);
    }
    /**
	* Create and add a run to the run map for retriever start events.
	* This must sometimes be done synchronously to avoid race conditions
	* when callbacks are backgrounded, so we expose it as a separate method here.
	*/ _createRunForRetrieverStart(retriever, query, runId, parentRunId, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? retriever.id[retriever.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: retriever,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString()
                }
            ],
            inputs: {
                query
            },
            execution_order,
            child_execution_order: execution_order,
            run_type: "retriever",
            child_runs: [],
            extra: metadata ? {
                metadata
            } : {},
            tags: tags || []
        };
        return this._addRunToRunMap(run);
    }
    async handleRetrieverStart(retriever, query, runId, parentRunId, tags, metadata, name) {
        const run = this.getRunById(runId) ?? this._createRunForRetrieverStart(retriever, query, runId, parentRunId, tags, metadata, name);
        await this.onRunCreate?.(run);
        await this.onRetrieverStart?.(run);
        return run;
    }
    async handleRetrieverEnd(documents, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "retriever") throw new Error("No retriever run to end");
        run.end_time = Date.now();
        run.outputs = {
            documents
        };
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString()
        });
        await this.onRetrieverEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleRetrieverError(error, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "retriever") throw new Error("No retriever run to end");
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString()
        });
        await this.onRetrieverError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleText(text, runId) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "chain") return;
        run.events.push({
            name: "text",
            time: /* @__PURE__ */ new Date().toISOString(),
            kwargs: {
                text
            }
        });
        await this.onText?.(run);
    }
    async handleLLMNewToken(token, idx, runId, _parentRunId, _tags, fields) {
        const run = this.getRunById(runId);
        if (!run || run?.run_type !== "llm") throw new Error(`Invalid "runId" provided to "handleLLMNewToken" callback.`);
        run.events.push({
            name: "new_token",
            time: /* @__PURE__ */ new Date().toISOString(),
            kwargs: {
                token,
                idx,
                chunk: fields?.chunk
            }
        });
        await this.onLLMNewToken?.(run, token, {
            chunk: fields?.chunk
        });
        return run;
    }
};
;
 //# sourceMappingURL=base.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/console.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleCallbackHandler",
    ()=>ConsoleCallbackHandler,
    "console_exports",
    ()=>console_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ansi$2d$styles$40$5$2e$2$2e$0$2f$node_modules$2f$ansi$2d$styles$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ansi-styles@5.2.0/node_modules/ansi-styles/index.js [app-route] (ecmascript)");
;
;
;
//#region src/tracers/console.ts
var console_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(console_exports, {
    ConsoleCallbackHandler: ()=>ConsoleCallbackHandler
});
function wrap(style, text) {
    return `${style.open}${text}${style.close}`;
}
function tryJsonStringify(obj, fallback) {
    try {
        return JSON.stringify(obj, null, 2);
    } catch  {
        return fallback;
    }
}
function formatKVMapItem(value) {
    if (typeof value === "string") return value.trim();
    if (value === null || value === void 0) return value;
    return tryJsonStringify(value, value.toString());
}
function elapsed(run) {
    if (!run.end_time) return "";
    const elapsed$1 = run.end_time - run.start_time;
    if (elapsed$1 < 1e3) return `${elapsed$1}ms`;
    return `${(elapsed$1 / 1e3).toFixed(2)}s`;
}
const { color } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ansi$2d$styles$40$5$2e$2$2e$0$2f$node_modules$2f$ansi$2d$styles$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
/**
* A tracer that logs all events to the console. It extends from the
* `BaseTracer` class and overrides its methods to provide custom logging
* functionality.
* @example
* ```typescript
*
* const llm = new ChatAnthropic({
*   temperature: 0,
*   tags: ["example", "callbacks", "constructor"],
*   callbacks: [new ConsoleCallbackHandler()],
* });
*
* ```
*/ var ConsoleCallbackHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseTracer"] {
    name = "console_callback_handler";
    /**
	* Method used to persist the run. In this case, it simply returns a
	* resolved promise as there's no persistence logic.
	* @param _run The run to persist.
	* @returns A resolved promise.
	*/ persistRun(_run) {
        return Promise.resolve();
    }
    /**
	* Method used to get all the parent runs of a given run.
	* @param run The run whose parents are to be retrieved.
	* @returns An array of parent runs.
	*/ getParents(run) {
        const parents = [];
        let currentRun = run;
        while(currentRun.parent_run_id){
            const parent = this.runMap.get(currentRun.parent_run_id);
            if (parent) {
                parents.push(parent);
                currentRun = parent;
            } else break;
        }
        return parents;
    }
    /**
	* Method used to get a string representation of the run's lineage, which
	* is used in logging.
	* @param run The run whose lineage is to be retrieved.
	* @returns A string representation of the run's lineage.
	*/ getBreadcrumbs(run) {
        const parents = this.getParents(run).reverse();
        const string = [
            ...parents,
            run
        ].map((parent, i, arr)=>{
            const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`;
            return i === arr.length - 1 ? wrap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ansi$2d$styles$40$5$2e$2$2e$0$2f$node_modules$2f$ansi$2d$styles$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].bold, name) : name;
        }).join(" > ");
        return wrap(color.grey, string);
    }
    /**
	* Method used to log the start of a chain run.
	* @param run The chain run that has started.
	* @returns void
	*/ onChainStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[chain/start]")} [${crumbs}] Entering Chain run with input: ${tryJsonStringify(run.inputs, "[inputs]")}`);
    }
    /**
	* Method used to log the end of a chain run.
	* @param run The chain run that has ended.
	* @returns void
	*/ onChainEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[chain/end]")} [${crumbs}] [${elapsed(run)}] Exiting Chain run with output: ${tryJsonStringify(run.outputs, "[outputs]")}`);
    }
    /**
	* Method used to log any errors of a chain run.
	* @param run The chain run that has errored.
	* @returns void
	*/ onChainError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[chain/error]")} [${crumbs}] [${elapsed(run)}] Chain run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
	* Method used to log the start of an LLM run.
	* @param run The LLM run that has started.
	* @returns void
	*/ onLLMStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        const inputs = "prompts" in run.inputs ? {
            prompts: run.inputs.prompts.map((p)=>p.trim())
        } : run.inputs;
        console.log(`${wrap(color.green, "[llm/start]")} [${crumbs}] Entering LLM run with input: ${tryJsonStringify(inputs, "[inputs]")}`);
    }
    /**
	* Method used to log the end of an LLM run.
	* @param run The LLM run that has ended.
	* @returns void
	*/ onLLMEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[llm/end]")} [${crumbs}] [${elapsed(run)}] Exiting LLM run with output: ${tryJsonStringify(run.outputs, "[response]")}`);
    }
    /**
	* Method used to log any errors of an LLM run.
	* @param run The LLM run that has errored.
	* @returns void
	*/ onLLMError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[llm/error]")} [${crumbs}] [${elapsed(run)}] LLM run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
	* Method used to log the start of a tool run.
	* @param run The tool run that has started.
	* @returns void
	*/ onToolStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[tool/start]")} [${crumbs}] Entering Tool run with input: "${formatKVMapItem(run.inputs.input)}"`);
    }
    /**
	* Method used to log the end of a tool run.
	* @param run The tool run that has ended.
	* @returns void
	*/ onToolEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[tool/end]")} [${crumbs}] [${elapsed(run)}] Exiting Tool run with output: "${formatKVMapItem(run.outputs?.output)}"`);
    }
    /**
	* Method used to log any errors of a tool run.
	* @param run The tool run that has errored.
	* @returns void
	*/ onToolError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[tool/error]")} [${crumbs}] [${elapsed(run)}] Tool run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
	* Method used to log the start of a retriever run.
	* @param run The retriever run that has started.
	* @returns void
	*/ onRetrieverStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[retriever/start]")} [${crumbs}] Entering Retriever run with input: ${tryJsonStringify(run.inputs, "[inputs]")}`);
    }
    /**
	* Method used to log the end of a retriever run.
	* @param run The retriever run that has ended.
	* @returns void
	*/ onRetrieverEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[retriever/end]")} [${crumbs}] [${elapsed(run)}] Exiting Retriever run with output: ${tryJsonStringify(run.outputs, "[outputs]")}`);
    }
    /**
	* Method used to log any errors of a retriever run.
	* @param run The retriever run that has errored.
	* @returns void
	*/ onRetrieverError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[retriever/error]")} [${crumbs}] [${elapsed(run)}] Retriever run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
	* Method used to log the action selected by the agent.
	* @param run The run in which the agent action occurred.
	* @returns void
	*/ onAgentAction(run) {
        const agentRun = run;
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.blue, "[agent/action]")} [${crumbs}] Agent selected action: ${tryJsonStringify(agentRun.actions[agentRun.actions.length - 1], "[action]")}`);
    }
};
;
 //# sourceMappingURL=console.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/tracer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultLangChainClientSingleton",
    ()=>getDefaultLangChainClientSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/index.js [app-route] (ecmascript)");
;
;
//#region src/singletons/tracer.ts
let client;
const getDefaultLangChainClientSingleton = ()=>{
    if (client === void 0) {
        const clientParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("LANGCHAIN_CALLBACKS_BACKGROUND") === "false" ? {
            blockOnRootRunFinalization: true
        } : {};
        client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"](clientParams);
    }
    return client;
};
;
 //# sourceMappingURL=tracer.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/tracer_langchain.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangChainTracer",
    ()=>LangChainTracer,
    "tracer_langchain_exports",
    ()=>tracer_langchain_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/tracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/singletons/traceable.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/singletons/traceable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/run_trees.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/run_trees.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/tracers/tracer_langchain.ts
var tracer_langchain_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(tracer_langchain_exports, {
    LangChainTracer: ()=>LangChainTracer
});
var LangChainTracer = class LangChainTracer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseTracer"] {
    name = "langchain_tracer";
    projectName;
    exampleId;
    client;
    replicas;
    usesRunTreeMap = true;
    constructor(fields = {}){
        super(fields);
        const { exampleId, projectName, client, replicas } = fields;
        this.projectName = projectName ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultProjectName"])();
        this.replicas = replicas;
        this.exampleId = exampleId;
        this.client = client ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultLangChainClientSingleton"])();
        const traceableTree = LangChainTracer.getTraceableRunTree();
        if (traceableTree) this.updateFromRunTree(traceableTree);
    }
    async persistRun(_run) {}
    async onRunCreate(run) {
        const runTree = this.getRunTreeWithTracingConfig(run.id);
        await runTree?.postRun();
    }
    async onRunUpdate(run) {
        const runTree = this.getRunTreeWithTracingConfig(run.id);
        await runTree?.patchRun();
    }
    getRun(id) {
        return this.runTreeMap.get(id);
    }
    updateFromRunTree(runTree) {
        this.runTreeMap.set(runTree.id, runTree);
        let rootRun = runTree;
        const visited = /* @__PURE__ */ new Set();
        while(rootRun.parent_run){
            if (visited.has(rootRun.id)) break;
            visited.add(rootRun.id);
            if (!rootRun.parent_run) break;
            rootRun = rootRun.parent_run;
        }
        visited.clear();
        const queue = [
            rootRun
        ];
        while(queue.length > 0){
            const current = queue.shift();
            if (!current || visited.has(current.id)) continue;
            visited.add(current.id);
            this.runTreeMap.set(current.id, current);
            if (current.child_runs) queue.push(...current.child_runs);
        }
        this.client = runTree.client ?? this.client;
        this.replicas = runTree.replicas ?? this.replicas;
        this.projectName = runTree.project_name ?? this.projectName;
        this.exampleId = runTree.reference_example_id ?? this.exampleId;
    }
    getRunTreeWithTracingConfig(id) {
        const runTree = this.runTreeMap.get(id);
        if (!runTree) return void 0;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunTree"]({
            ...runTree,
            client: this.client,
            project_name: this.projectName,
            replicas: this.replicas,
            reference_example_id: this.exampleId,
            tracingEnabled: true
        });
    }
    static getTraceableRunTree() {
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentRunTree"])(true);
        } catch  {
            return void 0;
        }
    }
};
;
 //# sourceMappingURL=tracer_langchain.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/callbacks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "awaitAllCallbacks",
    ()=>awaitAllCallbacks,
    "consumeCallback",
    ()=>consumeCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/tracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/p-queue@6.6.2/node_modules/p-queue/dist/index.js [app-route] (ecmascript)");
;
;
;
//#region src/singletons/callbacks.ts
let queue;
/**
* Creates a queue using the p-queue library. The queue is configured to
* auto-start and has a concurrency of 1, meaning it will process tasks
* one at a time.
*/ function createQueue() {
    const PQueue = "default" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
    return new PQueue({
        autoStart: true,
        concurrency: 1
    });
}
function getQueue() {
    if (typeof queue === "undefined") queue = createQueue();
    return queue;
}
/**
* Consume a promise, either adding it to the queue or waiting for it to resolve
* @param promiseFn Promise to consume
* @param wait Whether to wait for the promise to resolve or resolve immediately
*/ async function consumeCallback(promiseFn, wait) {
    if (wait === true) {
        const asyncLocalStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])();
        if (asyncLocalStorageInstance !== void 0) await asyncLocalStorageInstance.run(void 0, async ()=>promiseFn());
        else await promiseFn();
    } else {
        queue = getQueue();
        queue.add(async ()=>{
            const asyncLocalStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])();
            if (asyncLocalStorageInstance !== void 0) await asyncLocalStorageInstance.run(void 0, async ()=>promiseFn());
            else await promiseFn();
        });
    }
}
/**
* Waits for all promises in the queue to resolve. If the queue is
* undefined, it immediately resolves a promise.
*/ async function awaitAllCallbacks() {
    const defaultClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultLangChainClientSingleton"])();
    await Promise.allSettled([
        typeof queue !== "undefined" ? queue.onIdle() : Promise.resolve(),
        defaultClient.awaitPendingTraceBatches()
    ]);
}
;
 //# sourceMappingURL=callbacks.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/promises.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promises_exports",
    ()=>promises_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/callbacks.js [app-route] (ecmascript)");
;
;
//#region src/callbacks/promises.ts
var promises_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(promises_exports, {
    awaitAllCallbacks: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awaitAllCallbacks"],
    consumeCallback: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"]
});
;
 //# sourceMappingURL=promises.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/callbacks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTracingEnabled",
    ()=>isTracingEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)");
;
//#region src/utils/callbacks.ts
const isTracingEnabled = (tracingEnabled)=>{
    if (tracingEnabled !== void 0) return tracingEnabled;
    const envVars = [
        "LANGSMITH_TRACING_V2",
        "LANGCHAIN_TRACING_V2",
        "LANGSMITH_TRACING",
        "LANGCHAIN_TRACING"
    ];
    return !!envVars.find((envVar)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])(envVar) === "true");
};
;
 //# sourceMappingURL=callbacks.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_getConfigureHooks",
    ()=>_getConfigureHooks,
    "getContextVariable",
    ()=>getContextVariable,
    "registerConfigureHook",
    ()=>registerConfigureHook,
    "setContextVariable",
    ()=>setContextVariable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/run_trees.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/run_trees.js [app-route] (ecmascript)");
;
;
//#region src/singletons/async_local_storage/context.ts
/**
* Set a context variable. Context variables are scoped to any
* child runnables called by the current runnable, or globally if set outside
* of any runnable.
*
* @remarks
* This function is only supported in environments that support AsyncLocalStorage,
* including Node.js, Deno, and Cloudflare Workers.
*
* @example
* ```ts
* import { RunnableLambda } from "@langchain/core/runnables";
* import {
*   getContextVariable,
*   setContextVariable
* } from "@langchain/core/context";
*
* const nested = RunnableLambda.from(() => {
*   // "bar" because it was set by a parent
*   console.log(getContextVariable("foo"));
*
*   // Override to "baz", but only for child runnables
*   setContextVariable("foo", "baz");
*
*   // Now "baz", but only for child runnables
*   return getContextVariable("foo");
* });
*
* const runnable = RunnableLambda.from(async () => {
*   // Set a context variable named "foo"
*   setContextVariable("foo", "bar");
*
*   const res = await nested.invoke({});
*
*   // Still "bar" since child changes do not affect parents
*   console.log(getContextVariable("foo"));
*
*   return res;
* });
*
* // undefined, because context variable has not been set yet
* console.log(getContextVariable("foo"));
*
* // Final return value is "baz"
* const result = await runnable.invoke({});
* ```
*
* @param name The name of the context variable.
* @param value The value to set.
*/ function setContextVariable(name, value) {
    const asyncLocalStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])();
    if (asyncLocalStorageInstance === void 0) throw new Error(`Internal error: Global shared async local storage instance has not been initialized.`);
    const runTree = asyncLocalStorageInstance.getStore();
    const contextVars = {
        ...runTree?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]]
    };
    contextVars[name] = value;
    let newValue = {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRunTree"])(runTree)) newValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$run_trees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunTree"](runTree);
    newValue[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]] = contextVars;
    asyncLocalStorageInstance.enterWith(newValue);
}
/**
* Get the value of a previously set context variable. Context variables
* are scoped to any child runnables called by the current runnable,
* or globally if set outside of any runnable.
*
* @remarks
* This function is only supported in environments that support AsyncLocalStorage,
* including Node.js, Deno, and Cloudflare Workers.
*
* @example
* ```ts
* import { RunnableLambda } from "@langchain/core/runnables";
* import {
*   getContextVariable,
*   setContextVariable
* } from "@langchain/core/context";
*
* const nested = RunnableLambda.from(() => {
*   // "bar" because it was set by a parent
*   console.log(getContextVariable("foo"));
*
*   // Override to "baz", but only for child runnables
*   setContextVariable("foo", "baz");
*
*   // Now "baz", but only for child runnables
*   return getContextVariable("foo");
* });
*
* const runnable = RunnableLambda.from(async () => {
*   // Set a context variable named "foo"
*   setContextVariable("foo", "bar");
*
*   const res = await nested.invoke({});
*
*   // Still "bar" since child changes do not affect parents
*   console.log(getContextVariable("foo"));
*
*   return res;
* });
*
* // undefined, because context variable has not been set yet
* console.log(getContextVariable("foo"));
*
* // Final return value is "baz"
* const result = await runnable.invoke({});
* ```
*
* @param name The name of the context variable.
*/ function getContextVariable(name) {
    const asyncLocalStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])();
    if (asyncLocalStorageInstance === void 0) return void 0;
    const runTree = asyncLocalStorageInstance.getStore();
    return runTree?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]]?.[name];
}
const LC_CONFIGURE_HOOKS_KEY = Symbol("lc:configure_hooks");
const _getConfigureHooks = ()=>getContextVariable(LC_CONFIGURE_HOOKS_KEY) || [];
/**
* Register a callback configure hook to automatically add callback handlers to all runs.
*
* There are two ways to use this:
*
* 1. Using a context variable:
*    - Set `contextVar` to specify the variable name
*    - Use `setContextVariable()` to store your handler instance
*
* 2. Using an environment variable:
*    - Set both `envVar` and `handlerClass`
*    - The handler will be instantiated when the env var is set to "true".
*
* @example
* ```typescript
* // Method 1: Using context variable
* import {
*   registerConfigureHook,
*   setContextVariable
* } from "@langchain/core/context";
*
* const tracer = new MyCallbackHandler();
* registerConfigureHook({
*   contextVar: "my_tracer",
* });
* setContextVariable("my_tracer", tracer);
*
* // ...run code here
*
* // Method 2: Using environment variable
* registerConfigureHook({
*   handlerClass: MyCallbackHandler,
*   envVar: "MY_TRACER_ENABLED",
* });
* process.env.MY_TRACER_ENABLED = "true";
*
* // ...run code here
* ```
*
* @param config Configuration object for the hook
* @param config.contextVar Name of the context variable containing the handler instance
* @param config.inheritable Whether child runs should inherit this handler
* @param config.handlerClass Optional callback handler class (required if using envVar)
* @param config.envVar Optional environment variable name to control handler activation
*/ const registerConfigureHook = (config)=>{
    if (config.envVar && !config.handlerClass) throw new Error("If envVar is set, handlerClass must also be set to a non-None value.");
    setContextVariable(LC_CONFIGURE_HOOKS_KEY, [
        ..._getConfigureHooks(),
        config
    ]);
};
;
 //# sourceMappingURL=context.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/manager.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseCallbackManager",
    ()=>BaseCallbackManager,
    "BaseRunManager",
    ()=>BaseRunManager,
    "CallbackManager",
    ()=>CallbackManager,
    "CallbackManagerForChainRun",
    ()=>CallbackManagerForChainRun,
    "CallbackManagerForLLMRun",
    ()=>CallbackManagerForLLMRun,
    "CallbackManagerForRetrieverRun",
    ()=>CallbackManagerForRetrieverRun,
    "CallbackManagerForToolRun",
    ()=>CallbackManagerForToolRun,
    "ensureHandler",
    ()=>ensureHandler,
    "manager_exports",
    ()=>manager_exports,
    "parseCallbackConfigArg",
    ()=>parseCallbackConfigArg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$console$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/console.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$tracer_langchain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/tracer_langchain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/callbacks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$promises$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/promises.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/callbacks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/context.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/callbacks/manager.ts
var manager_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(manager_exports, {
    BaseCallbackManager: ()=>BaseCallbackManager,
    BaseRunManager: ()=>BaseRunManager,
    CallbackManager: ()=>CallbackManager,
    CallbackManagerForChainRun: ()=>CallbackManagerForChainRun,
    CallbackManagerForLLMRun: ()=>CallbackManagerForLLMRun,
    CallbackManagerForRetrieverRun: ()=>CallbackManagerForRetrieverRun,
    CallbackManagerForToolRun: ()=>CallbackManagerForToolRun,
    ensureHandler: ()=>ensureHandler,
    parseCallbackConfigArg: ()=>parseCallbackConfigArg
});
function parseCallbackConfigArg(arg) {
    if (!arg) return {};
    else if (Array.isArray(arg) || "name" in arg) return {
        callbacks: arg
    };
    else return arg;
}
/**
* Manage callbacks from different components of LangChain.
*/ var BaseCallbackManager = class {
    setHandler(handler) {
        return this.setHandlers([
            handler
        ]);
    }
};
/**
* Base class for run manager in LangChain.
*/ var BaseRunManager = class {
    constructor(runId, handlers, inheritableHandlers, tags, inheritableTags, metadata, inheritableMetadata, _parentRunId){
        this.runId = runId;
        this.handlers = handlers;
        this.inheritableHandlers = inheritableHandlers;
        this.tags = tags;
        this.inheritableTags = inheritableTags;
        this.metadata = metadata;
        this.inheritableMetadata = inheritableMetadata;
        this._parentRunId = _parentRunId;
    }
    get parentRunId() {
        return this._parentRunId;
    }
    async handleText(text) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                try {
                    await handler.handleText?.(text, this.runId, this._parentRunId, this.tags);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleText: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    async handleCustomEvent(eventName, data, _runId, _tags, _metadata) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                try {
                    await handler.handleCustomEvent?.(eventName, data, this.runId, this.tags, this.metadata);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleCustomEvent: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
};
/**
* Manages callbacks for retriever runs.
*/ var CallbackManagerForRetrieverRun = class extends BaseRunManager {
    getChild(tag) {
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) manager.addTags([
            tag
        ], false);
        return manager;
    }
    async handleRetrieverEnd(documents) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreRetriever) try {
                    await handler.handleRetrieverEnd?.(documents, this.runId, this._parentRunId, this.tags);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleRetriever`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    async handleRetrieverError(err) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreRetriever) try {
                    await handler.handleRetrieverError?.(err, this.runId, this._parentRunId, this.tags);
                } catch (error) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleRetrieverError: ${error}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
};
var CallbackManagerForLLMRun = class extends BaseRunManager {
    async handleLLMNewToken(token, idx, _runId, _parentRunId, _tags, fields) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreLLM) try {
                    await handler.handleLLMNewToken?.(token, idx ?? {
                        prompt: 0,
                        completion: 0
                    }, this.runId, this._parentRunId, this.tags, fields);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleLLMNewToken: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    async handleLLMError(err, _runId, _parentRunId, _tags, extraParams) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreLLM) try {
                    await handler.handleLLMError?.(err, this.runId, this._parentRunId, this.tags, extraParams);
                } catch (err$1) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleLLMError: ${err$1}`);
                    if (handler.raiseError) throw err$1;
                }
            }, handler.awaitHandlers)));
    }
    async handleLLMEnd(output, _runId, _parentRunId, _tags, extraParams) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreLLM) try {
                    await handler.handleLLMEnd?.(output, this.runId, this._parentRunId, this.tags, extraParams);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleLLMEnd: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
};
var CallbackManagerForChainRun = class extends BaseRunManager {
    getChild(tag) {
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) manager.addTags([
            tag
        ], false);
        return manager;
    }
    async handleChainError(err, _runId, _parentRunId, _tags, kwargs) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreChain) try {
                    await handler.handleChainError?.(err, this.runId, this._parentRunId, this.tags, kwargs);
                } catch (err$1) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleChainError: ${err$1}`);
                    if (handler.raiseError) throw err$1;
                }
            }, handler.awaitHandlers)));
    }
    async handleChainEnd(output, _runId, _parentRunId, _tags, kwargs) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreChain) try {
                    await handler.handleChainEnd?.(output, this.runId, this._parentRunId, this.tags, kwargs);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleChainEnd: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    async handleAgentAction(action) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreAgent) try {
                    await handler.handleAgentAction?.(action, this.runId, this._parentRunId, this.tags);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleAgentAction: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    async handleAgentEnd(action) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreAgent) try {
                    await handler.handleAgentEnd?.(action, this.runId, this._parentRunId, this.tags);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleAgentEnd: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
};
var CallbackManagerForToolRun = class extends BaseRunManager {
    getChild(tag) {
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) manager.addTags([
            tag
        ], false);
        return manager;
    }
    async handleToolError(err) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreAgent) try {
                    await handler.handleToolError?.(err, this.runId, this._parentRunId, this.tags);
                } catch (err$1) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleToolError: ${err$1}`);
                    if (handler.raiseError) throw err$1;
                }
            }, handler.awaitHandlers)));
    }
    async handleToolEnd(output) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreAgent) try {
                    await handler.handleToolEnd?.(output, this.runId, this._parentRunId, this.tags);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleToolEnd: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
};
/**
* @example
* ```typescript
* const prompt = PromptTemplate.fromTemplate("What is the answer to {question}?");
*
* // Example of using LLMChain with OpenAI and a simple prompt
* const chain = new LLMChain({
*   llm: new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0.9 }),
*   prompt,
* });
*
* // Running the chain with a single question
* const result = await chain.call({
*   question: "What is the airspeed velocity of an unladen swallow?",
* });
* console.log("The answer is:", result);
* ```
*/ var CallbackManager = class CallbackManager extends BaseCallbackManager {
    handlers = [];
    inheritableHandlers = [];
    tags = [];
    inheritableTags = [];
    metadata = {};
    inheritableMetadata = {};
    name = "callback_manager";
    _parentRunId;
    constructor(parentRunId, options){
        super();
        this.handlers = options?.handlers ?? this.handlers;
        this.inheritableHandlers = options?.inheritableHandlers ?? this.inheritableHandlers;
        this.tags = options?.tags ?? this.tags;
        this.inheritableTags = options?.inheritableTags ?? this.inheritableTags;
        this.metadata = options?.metadata ?? this.metadata;
        this.inheritableMetadata = options?.inheritableMetadata ?? this.inheritableMetadata;
        this._parentRunId = parentRunId;
    }
    /**
	* Gets the parent run ID, if any.
	*
	* @returns The parent run ID.
	*/ getParentRunId() {
        return this._parentRunId;
    }
    async handleLLMStart(llm, prompts, runId = void 0, _parentRunId = void 0, extraParams = void 0, _tags = void 0, _metadata = void 0, runName = void 0) {
        return Promise.all(prompts.map(async (prompt, idx)=>{
            const runId_ = idx === 0 && runId ? runId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            await Promise.all(this.handlers.map((handler)=>{
                if (handler.ignoreLLM) return;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseTracer"])(handler)) handler._createRunForLLMStart(llm, [
                    prompt
                ], runId_, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                    try {
                        await handler.handleLLMStart?.(llm, [
                            prompt
                        ], runId_, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                    } catch (err) {
                        const logFunction = handler.raiseError ? console.error : console.warn;
                        logFunction(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                        if (handler.raiseError) throw err;
                    }
                }, handler.awaitHandlers);
            }));
            return new CallbackManagerForLLMRun(runId_, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
        }));
    }
    async handleChatModelStart(llm, messages, runId = void 0, _parentRunId = void 0, extraParams = void 0, _tags = void 0, _metadata = void 0, runName = void 0) {
        return Promise.all(messages.map(async (messageGroup, idx)=>{
            const runId_ = idx === 0 && runId ? runId : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            await Promise.all(this.handlers.map((handler)=>{
                if (handler.ignoreLLM) return;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseTracer"])(handler)) handler._createRunForChatModelStart(llm, [
                    messageGroup
                ], runId_, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                    try {
                        if (handler.handleChatModelStart) await handler.handleChatModelStart?.(llm, [
                            messageGroup
                        ], runId_, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                        else if (handler.handleLLMStart) {
                            const messageString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBufferString"])(messageGroup);
                            await handler.handleLLMStart?.(llm, [
                                messageString
                            ], runId_, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                        }
                    } catch (err) {
                        const logFunction = handler.raiseError ? console.error : console.warn;
                        logFunction(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                        if (handler.raiseError) throw err;
                    }
                }, handler.awaitHandlers);
            }));
            return new CallbackManagerForLLMRun(runId_, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
        }));
    }
    async handleChainStart(chain, inputs, runId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), runType = void 0, _tags = void 0, _metadata = void 0, runName = void 0) {
        await Promise.all(this.handlers.map((handler)=>{
            if (handler.ignoreChain) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseTracer"])(handler)) handler._createRunForChainStart(chain, inputs, runId, this._parentRunId, this.tags, this.metadata, runType, runName);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                try {
                    await handler.handleChainStart?.(chain, inputs, runId, this._parentRunId, this.tags, this.metadata, runType, runName);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleChainStart: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers);
        }));
        return new CallbackManagerForChainRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    async handleToolStart(tool, input, runId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), _parentRunId = void 0, _tags = void 0, _metadata = void 0, runName = void 0) {
        await Promise.all(this.handlers.map((handler)=>{
            if (handler.ignoreAgent) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseTracer"])(handler)) handler._createRunForToolStart(tool, input, runId, this._parentRunId, this.tags, this.metadata, runName);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                try {
                    await handler.handleToolStart?.(tool, input, runId, this._parentRunId, this.tags, this.metadata, runName);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleToolStart: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers);
        }));
        return new CallbackManagerForToolRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    async handleRetrieverStart(retriever, query, runId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), _parentRunId = void 0, _tags = void 0, _metadata = void 0, runName = void 0) {
        await Promise.all(this.handlers.map((handler)=>{
            if (handler.ignoreRetriever) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseTracer"])(handler)) handler._createRunForRetrieverStart(retriever, query, runId, this._parentRunId, this.tags, this.metadata, runName);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                try {
                    await handler.handleRetrieverStart?.(retriever, query, runId, this._parentRunId, this.tags, this.metadata, runName);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleRetrieverStart: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers);
        }));
        return new CallbackManagerForRetrieverRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    async handleCustomEvent(eventName, data, runId, _tags, _metadata) {
        await Promise.all(this.handlers.map((handler)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeCallback"])(async ()=>{
                if (!handler.ignoreCustomEvent) try {
                    await handler.handleCustomEvent?.(eventName, data, runId, this.tags, this.metadata);
                } catch (err) {
                    const logFunction = handler.raiseError ? console.error : console.warn;
                    logFunction(`Error in handler ${handler.constructor.name}, handleCustomEvent: ${err}`);
                    if (handler.raiseError) throw err;
                }
            }, handler.awaitHandlers)));
    }
    addHandler(handler, inherit = true) {
        this.handlers.push(handler);
        if (inherit) this.inheritableHandlers.push(handler);
    }
    removeHandler(handler) {
        this.handlers = this.handlers.filter((_handler)=>_handler !== handler);
        this.inheritableHandlers = this.inheritableHandlers.filter((_handler)=>_handler !== handler);
    }
    setHandlers(handlers, inherit = true) {
        this.handlers = [];
        this.inheritableHandlers = [];
        for (const handler of handlers)this.addHandler(handler, inherit);
    }
    addTags(tags, inherit = true) {
        this.removeTags(tags);
        this.tags.push(...tags);
        if (inherit) this.inheritableTags.push(...tags);
    }
    removeTags(tags) {
        this.tags = this.tags.filter((tag)=>!tags.includes(tag));
        this.inheritableTags = this.inheritableTags.filter((tag)=>!tags.includes(tag));
    }
    addMetadata(metadata, inherit = true) {
        this.metadata = {
            ...this.metadata,
            ...metadata
        };
        if (inherit) this.inheritableMetadata = {
            ...this.inheritableMetadata,
            ...metadata
        };
    }
    removeMetadata(metadata) {
        for (const key of Object.keys(metadata)){
            delete this.metadata[key];
            delete this.inheritableMetadata[key];
        }
    }
    copy(additionalHandlers = [], inherit = true) {
        const manager = new CallbackManager(this._parentRunId);
        for (const handler of this.handlers){
            const inheritable = this.inheritableHandlers.includes(handler);
            manager.addHandler(handler, inheritable);
        }
        for (const tag of this.tags){
            const inheritable = this.inheritableTags.includes(tag);
            manager.addTags([
                tag
            ], inheritable);
        }
        for (const key of Object.keys(this.metadata)){
            const inheritable = Object.keys(this.inheritableMetadata).includes(key);
            manager.addMetadata({
                [key]: this.metadata[key]
            }, inheritable);
        }
        for (const handler of additionalHandlers){
            if (manager.handlers.filter((h)=>h.name === "console_callback_handler").some((h)=>h.name === handler.name)) continue;
            manager.addHandler(handler, inherit);
        }
        return manager;
    }
    static fromHandlers(handlers) {
        class Handler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCallbackHandler"] {
            name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            constructor(){
                super();
                Object.assign(this, handlers);
            }
        }
        const manager = new this();
        manager.addHandler(new Handler());
        return manager;
    }
    static configure(inheritableHandlers, localHandlers, inheritableTags, localTags, inheritableMetadata, localMetadata, options) {
        return this._configureSync(inheritableHandlers, localHandlers, inheritableTags, localTags, inheritableMetadata, localMetadata, options);
    }
    static _configureSync(inheritableHandlers, localHandlers, inheritableTags, localTags, inheritableMetadata, localMetadata, options) {
        let callbackManager;
        if (inheritableHandlers || localHandlers) {
            if (Array.isArray(inheritableHandlers) || !inheritableHandlers) {
                callbackManager = new CallbackManager();
                callbackManager.setHandlers(inheritableHandlers?.map(ensureHandler) ?? [], true);
            } else callbackManager = inheritableHandlers;
            callbackManager = callbackManager.copy(Array.isArray(localHandlers) ? localHandlers.map(ensureHandler) : localHandlers?.handlers, false);
        }
        const verboseEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("LANGCHAIN_VERBOSE") === "true" || options?.verbose;
        const tracingV2Enabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$tracer_langchain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LangChainTracer"].getTraceableRunTree()?.tracingEnabled || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$callbacks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTracingEnabled"])();
        const tracingEnabled = tracingV2Enabled || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("LANGCHAIN_TRACING") ?? false);
        if (verboseEnabled || tracingEnabled) {
            if (!callbackManager) callbackManager = new CallbackManager();
            if (verboseEnabled && !callbackManager.handlers.some((handler)=>handler.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$console$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsoleCallbackHandler"].prototype.name)) {
                const consoleHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$console$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsoleCallbackHandler"]();
                callbackManager.addHandler(consoleHandler, true);
            }
            if (tracingEnabled && !callbackManager.handlers.some((handler)=>handler.name === "langchain_tracer")) {
                if (tracingV2Enabled) {
                    const tracerV2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$tracer_langchain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LangChainTracer"]();
                    callbackManager.addHandler(tracerV2, true);
                }
            }
            if (tracingV2Enabled) {
                const implicitRunTree = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$tracer_langchain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LangChainTracer"].getTraceableRunTree();
                if (implicitRunTree && callbackManager._parentRunId === void 0) {
                    callbackManager._parentRunId = implicitRunTree.id;
                    const tracerV2 = callbackManager.handlers.find((handler)=>handler.name === "langchain_tracer");
                    tracerV2?.updateFromRunTree(implicitRunTree);
                }
            }
        }
        for (const { contextVar, inheritable = true, handlerClass, envVar } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_getConfigureHooks"])()){
            const createIfNotInContext = envVar && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])(envVar) === "true" && handlerClass;
            let handler;
            const contextVarValue = contextVar !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContextVariable"])(contextVar) : void 0;
            if (contextVarValue && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseCallbackHandler"])(contextVarValue)) handler = contextVarValue;
            else if (createIfNotInContext) handler = new handlerClass({});
            if (handler !== void 0) {
                if (!callbackManager) callbackManager = new CallbackManager();
                if (!callbackManager.handlers.some((h)=>h.name === handler.name)) callbackManager.addHandler(handler, inheritable);
            }
        }
        if (inheritableTags || localTags) {
            if (callbackManager) {
                callbackManager.addTags(inheritableTags ?? []);
                callbackManager.addTags(localTags ?? [], false);
            }
        }
        if (inheritableMetadata || localMetadata) {
            if (callbackManager) {
                callbackManager.addMetadata(inheritableMetadata ?? {});
                callbackManager.addMetadata(localMetadata ?? {}, false);
            }
        }
        return callbackManager;
    }
};
function ensureHandler(handler) {
    if ("name" in handler) return handler;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCallbackHandler"].fromMethods(handler);
}
;
 //# sourceMappingURL=manager.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncLocalStorageProviderSingleton",
    ()=>AsyncLocalStorageProviderSingleton,
    "MockAsyncLocalStorage",
    ()=>MockAsyncLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/manager.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/index.js [app-route] (ecmascript)");
;
;
;
//#region src/singletons/async_local_storage/index.ts
var MockAsyncLocalStorage = class {
    getStore() {
        return void 0;
    }
    run(_store, callback) {
        return callback();
    }
    enterWith(_store) {
        return void 0;
    }
};
const mockAsyncLocalStorage = new MockAsyncLocalStorage();
const LC_CHILD_KEY = Symbol.for("lc:child_config");
var AsyncLocalStorageProvider = class {
    getInstance() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])() ?? mockAsyncLocalStorage;
    }
    getRunnableConfig() {
        const storage = this.getInstance();
        return storage.getStore()?.extra?.[LC_CHILD_KEY];
    }
    runWithConfig(config, callback, avoidCreatingRootRunTree) {
        const callbackManager = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CallbackManager"]._configureSync(config?.callbacks, void 0, config?.tags, void 0, config?.metadata);
        const storage = this.getInstance();
        const previousValue = storage.getStore();
        const parentRunId = callbackManager?.getParentRunId();
        const langChainTracer = callbackManager?.handlers?.find((handler)=>handler?.name === "langchain_tracer");
        let runTree;
        if (langChainTracer && parentRunId) runTree = langChainTracer.getRunTreeWithTracingConfig(parentRunId);
        else if (!avoidCreatingRootRunTree) runTree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunTree"]({
            name: "<runnable_lambda>",
            tracingEnabled: false
        });
        if (runTree) runTree.extra = {
            ...runTree.extra,
            [LC_CHILD_KEY]: config
        };
        if (previousValue !== void 0 && previousValue[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]] !== void 0) {
            if (runTree === void 0) runTree = {};
            runTree[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]] = previousValue[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]];
        }
        return storage.run(runTree, callback);
    }
    initializeGlobalInstance(instance) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalAsyncLocalStorageInstance"])() === void 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setGlobalAsyncLocalStorageInstance"])(instance);
    }
};
const AsyncLocalStorageProviderSingleton = new AsyncLocalStorageProvider();
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "singletons_exports",
    ()=>singletons_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/globals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
;
;
;
//#region src/singletons/index.ts
var singletons_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(singletons_exports, {
    AsyncLocalStorageProviderSingleton: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"],
    MockAsyncLocalStorage: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MockAsyncLocalStorage"],
    _CONTEXT_VARIABLES_KEY: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$globals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_CONTEXT_VARIABLES_KEY"]
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_RECURSION_LIMIT",
    ()=>DEFAULT_RECURSION_LIMIT,
    "ensureConfig",
    ()=>ensureConfig,
    "getCallbackManagerForConfig",
    ()=>getCallbackManagerForConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "patchConfig",
    ()=>patchConfig,
    "pickRunnableConfigKeys",
    ()=>pickRunnableConfigKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/callbacks/manager.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
;
;
;
//#region src/runnables/config.ts
const DEFAULT_RECURSION_LIMIT = 25;
async function getCallbackManagerForConfig(config) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CallbackManager"]._configureSync(config?.callbacks, void 0, config?.tags, void 0, config?.metadata);
}
function mergeConfigs(...configs) {
    const copy = {};
    for (const options of configs.filter((c)=>!!c))for (const key of Object.keys(options))if (key === "metadata") copy[key] = {
        ...copy[key],
        ...options[key]
    };
    else if (key === "tags") {
        const baseKeys = copy[key] ?? [];
        copy[key] = [
            ...new Set(baseKeys.concat(options[key] ?? []))
        ];
    } else if (key === "configurable") copy[key] = {
        ...copy[key],
        ...options[key]
    };
    else if (key === "timeout") {
        if (copy.timeout === void 0) copy.timeout = options.timeout;
        else if (options.timeout !== void 0) copy.timeout = Math.min(copy.timeout, options.timeout);
    } else if (key === "signal") {
        if (copy.signal === void 0) copy.signal = options.signal;
        else if (options.signal !== void 0) if ("any" in AbortSignal) copy.signal = AbortSignal.any([
            copy.signal,
            options.signal
        ]);
        else copy.signal = options.signal;
    } else if (key === "callbacks") {
        const baseCallbacks = copy.callbacks;
        const providedCallbacks = options.callbacks;
        if (Array.isArray(providedCallbacks)) if (!baseCallbacks) copy.callbacks = providedCallbacks;
        else if (Array.isArray(baseCallbacks)) copy.callbacks = baseCallbacks.concat(providedCallbacks);
        else {
            const manager = baseCallbacks.copy();
            for (const callback of providedCallbacks)manager.addHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureHandler"])(callback), true);
            copy.callbacks = manager;
        }
        else if (providedCallbacks) if (!baseCallbacks) copy.callbacks = providedCallbacks;
        else if (Array.isArray(baseCallbacks)) {
            const manager = providedCallbacks.copy();
            for (const callback of baseCallbacks)manager.addHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureHandler"])(callback), true);
            copy.callbacks = manager;
        } else copy.callbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CallbackManager"](providedCallbacks._parentRunId, {
            handlers: baseCallbacks.handlers.concat(providedCallbacks.handlers),
            inheritableHandlers: baseCallbacks.inheritableHandlers.concat(providedCallbacks.inheritableHandlers),
            tags: Array.from(new Set(baseCallbacks.tags.concat(providedCallbacks.tags))),
            inheritableTags: Array.from(new Set(baseCallbacks.inheritableTags.concat(providedCallbacks.inheritableTags))),
            metadata: {
                ...baseCallbacks.metadata,
                ...providedCallbacks.metadata
            }
        });
    } else {
        const typedKey = key;
        copy[typedKey] = options[typedKey] ?? copy[typedKey];
    }
    return copy;
}
const PRIMITIVES = new Set([
    "string",
    "number",
    "boolean"
]);
/**
* Ensure that a passed config is an object with all required keys present.
*/ function ensureConfig(config) {
    const implicitConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    let empty = {
        tags: [],
        metadata: {},
        recursionLimit: 25,
        runId: void 0
    };
    if (implicitConfig) {
        const { runId, runName, ...rest } = implicitConfig;
        empty = Object.entries(rest).reduce((currentConfig, [key, value])=>{
            if (value !== void 0) currentConfig[key] = value;
            return currentConfig;
        }, empty);
    }
    if (config) empty = Object.entries(config).reduce((currentConfig, [key, value])=>{
        if (value !== void 0) currentConfig[key] = value;
        return currentConfig;
    }, empty);
    if (empty?.configurable) {
        for (const key of Object.keys(empty.configurable))if (PRIMITIVES.has(typeof empty.configurable[key]) && !empty.metadata?.[key]) {
            if (!empty.metadata) empty.metadata = {};
            empty.metadata[key] = empty.configurable[key];
        }
    }
    if (empty.timeout !== void 0) {
        if (empty.timeout <= 0) throw new Error("Timeout must be a positive number");
        const timeoutSignal = AbortSignal.timeout(empty.timeout);
        if (empty.signal !== void 0) {
            if ("any" in AbortSignal) empty.signal = AbortSignal.any([
                empty.signal,
                timeoutSignal
            ]);
        } else empty.signal = timeoutSignal;
        delete empty.timeout;
    }
    return empty;
}
/**
* Helper function that patches runnable configs with updated properties.
*/ function patchConfig(config = {}, { callbacks, maxConcurrency, recursionLimit, runName, configurable, runId } = {}) {
    const newConfig = ensureConfig(config);
    if (callbacks !== void 0) {
        /**
		* If we're replacing callbacks we need to unset runName
		* since that should apply only to the same run as the original callbacks
		*/ delete newConfig.runName;
        newConfig.callbacks = callbacks;
    }
    if (recursionLimit !== void 0) newConfig.recursionLimit = recursionLimit;
    if (maxConcurrency !== void 0) newConfig.maxConcurrency = maxConcurrency;
    if (runName !== void 0) newConfig.runName = runName;
    if (configurable !== void 0) newConfig.configurable = {
        ...newConfig.configurable,
        ...configurable
    };
    if (runId !== void 0) delete newConfig.runId;
    return newConfig;
}
function pickRunnableConfigKeys(config) {
    return config ? {
        configurable: config.configurable,
        recursionLimit: config.recursionLimit,
        callbacks: config.callbacks,
        tags: config.tags,
        metadata: config.metadata,
        maxConcurrency: config.maxConcurrency,
        timeout: config.timeout,
        signal: config.signal
    } : void 0;
}
;
 //# sourceMappingURL=config.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/signal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/signal.ts
/**
* Race a promise with an abort signal. If the signal is aborted, the promise will
* be rejected with the error from the signal. If the promise is rejected, the signal will be aborted.
*
* @param promise - The promise to race.
* @param signal - The abort signal.
* @returns The result of the promise.
*/ __turbopack_context__.s([
    "getAbortSignalError",
    ()=>getAbortSignalError,
    "raceWithSignal",
    ()=>raceWithSignal
]);
async function raceWithSignal(promise, signal) {
    if (signal === void 0) return promise;
    let listener;
    return Promise.race([
        promise.catch((err)=>{
            if (!signal?.aborted) throw err;
            else return void 0;
        }),
        new Promise((_, reject)=>{
            listener = ()=>{
                reject(getAbortSignalError(signal));
            };
            signal.addEventListener("abort", listener);
            if (signal.aborted) reject(getAbortSignalError(signal));
        })
    ]).finally(()=>signal.removeEventListener("abort", listener));
}
/**
* Get the error from an abort signal. Since you can set the reason to anything,
* we have to do some type gymnastics to get a proper error message.
*
* @param signal - The abort signal.
* @returns The error from the abort signal.
*/ function getAbortSignalError(signal) {
    if (signal?.reason instanceof Error) return signal.reason;
    if (typeof signal?.reason === "string") return new Error(signal.reason);
    return /* @__PURE__ */ new Error("Aborted");
}
;
 //# sourceMappingURL=signal.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncGeneratorWithSetup",
    ()=>AsyncGeneratorWithSetup,
    "IterableReadableStream",
    ()=>IterableReadableStream,
    "atee",
    ()=>atee,
    "concat",
    ()=>concat,
    "pipeGeneratorWithSetup",
    ()=>pipeGeneratorWithSetup,
    "stream_exports",
    ()=>stream_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/signal.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/utils/stream.ts
var stream_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(stream_exports, {
    AsyncGeneratorWithSetup: ()=>AsyncGeneratorWithSetup,
    IterableReadableStream: ()=>IterableReadableStream,
    atee: ()=>atee,
    concat: ()=>concat,
    pipeGeneratorWithSetup: ()=>pipeGeneratorWithSetup
});
var IterableReadableStream = class IterableReadableStream extends ReadableStream {
    reader;
    ensureReader() {
        if (!this.reader) this.reader = this.getReader();
    }
    async next() {
        this.ensureReader();
        try {
            const result = await this.reader.read();
            if (result.done) {
                this.reader.releaseLock();
                return {
                    done: true,
                    value: void 0
                };
            } else return {
                done: false,
                value: result.value
            };
        } catch (e) {
            this.reader.releaseLock();
            throw e;
        }
    }
    async return() {
        this.ensureReader();
        if (this.locked) {
            const cancelPromise = this.reader.cancel();
            this.reader.releaseLock();
            await cancelPromise;
        }
        return {
            done: true,
            value: void 0
        };
    }
    async throw(e) {
        this.ensureReader();
        if (this.locked) {
            const cancelPromise = this.reader.cancel();
            this.reader.releaseLock();
            await cancelPromise;
        }
        throw e;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    async [Symbol.asyncDispose]() {
        await this.return();
    }
    static fromReadableStream(stream) {
        const reader = stream.getReader();
        return new IterableReadableStream({
            start (controller) {
                return pump();
                //TURBOPACK unreachable
                ;
                function pump() {
                    return reader.read().then(({ done, value })=>{
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        return pump();
                    });
                }
            },
            cancel () {
                reader.releaseLock();
            }
        });
    }
    static fromAsyncGenerator(generator) {
        return new IterableReadableStream({
            async pull (controller) {
                const { value, done } = await generator.next();
                if (done) controller.close();
                controller.enqueue(value);
            },
            async cancel (reason) {
                await generator.return(reason);
            }
        });
    }
};
function atee(iter, length = 2) {
    const buffers = Array.from({
        length
    }, ()=>[]);
    return buffers.map(async function* makeIter(buffer) {
        while(true)if (buffer.length === 0) {
            const result = await iter.next();
            for (const buffer$1 of buffers)buffer$1.push(result);
        } else if (buffer[0].done) return;
        else yield buffer.shift().value;
    });
}
function concat(first, second) {
    if (Array.isArray(first) && Array.isArray(second)) return first.concat(second);
    else if (typeof first === "string" && typeof second === "string") return first + second;
    else if (typeof first === "number" && typeof second === "number") return first + second;
    else if ("concat" in first && typeof first.concat === "function") return first.concat(second);
    else if (typeof first === "object" && typeof second === "object") {
        const chunk = {
            ...first
        };
        for (const [key, value] of Object.entries(second))if (key in chunk && !Array.isArray(chunk[key])) chunk[key] = concat(chunk[key], value);
        else chunk[key] = value;
        return chunk;
    } else throw new Error(`Cannot concat ${typeof first} and ${typeof second}`);
}
var AsyncGeneratorWithSetup = class {
    generator;
    setup;
    config;
    signal;
    firstResult;
    firstResultUsed = false;
    constructor(params){
        this.generator = params.generator;
        this.config = params.config;
        this.signal = params.signal ?? this.config?.signal;
        this.setup = new Promise((resolve, reject)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(params.config), async ()=>{
                this.firstResult = params.generator.next();
                if (params.startSetup) this.firstResult.then(params.startSetup).then(resolve, reject);
                else this.firstResult.then((_result)=>resolve(void 0), reject);
            }, true);
        });
    }
    async next(...args) {
        this.signal?.throwIfAborted();
        if (!this.firstResultUsed) {
            this.firstResultUsed = true;
            return this.firstResult;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(this.config), this.signal ? async ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(this.generator.next(...args), this.signal);
        } : async ()=>{
            return this.generator.next(...args);
        }, true);
    }
    async return(value) {
        return this.generator.return(value);
    }
    async throw(e) {
        return this.generator.throw(e);
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    async [Symbol.asyncDispose]() {
        await this.return();
    }
};
async function pipeGeneratorWithSetup(to, generator, startSetup, signal, ...args) {
    const gen = new AsyncGeneratorWithSetup({
        generator,
        startSetup,
        signal
    });
    const setup = await gen.setup;
    return {
        output: to(gen, setup, ...args),
        setup
    };
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/helpers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/fast-json-patch/src/helpers.ts
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2022 Joachim Wester
* MIT licensed
*/ __turbopack_context__.s([
    "PatchError",
    ()=>PatchError,
    "_deepClone",
    ()=>_deepClone,
    "_objectKeys",
    ()=>_objectKeys,
    "escapePathComponent",
    ()=>escapePathComponent,
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "hasUndefined",
    ()=>hasUndefined,
    "isInteger",
    ()=>isInteger,
    "unescapePathComponent",
    ()=>unescapePathComponent
]);
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
function _objectKeys(obj) {
    if (Array.isArray(obj)) {
        const keys$1 = new Array(obj.length);
        for(let k = 0; k < keys$1.length; k++)keys$1[k] = "" + k;
        return keys$1;
    }
    if (Object.keys) return Object.keys(obj);
    let keys = [];
    for(let i in obj)if (hasOwnProperty(obj, i)) keys.push(i);
    return keys;
}
/**
* Deeply clone the object.
* https://jsperf.com/deep-copy-vs-json-stringify-json-parse/25 (recursiveDeepCopy)
* @param  {any} obj value to clone
* @return {any} cloned obj
*/ function _deepClone(obj) {
    switch(typeof obj){
        case "object":
            return JSON.parse(JSON.stringify(obj));
        case "undefined":
            return null;
        default:
            return obj;
    }
}
function isInteger(str) {
    let i = 0;
    const len = str.length;
    let charCode;
    while(i < len){
        charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            i++;
            continue;
        }
        return false;
    }
    return true;
}
/**
* Escapes a json pointer path
* @param path The raw pointer
* @return the Escaped path
*/ function escapePathComponent(path) {
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1) return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
* Unescapes a json pointer path
* @param path The escaped pointer
* @return The unescaped path
*/ function unescapePathComponent(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
/**
* Recursively checks whether an object has any undefined values inside.
*/ function hasUndefined(obj) {
    if (obj === void 0) return true;
    if (obj) {
        if (Array.isArray(obj)) {
            for(let i$1 = 0, len = obj.length; i$1 < len; i$1++)if (hasUndefined(obj[i$1])) return true;
        } else if (typeof obj === "object") {
            const objKeys = _objectKeys(obj);
            const objKeysLength = objKeys.length;
            for(var i = 0; i < objKeysLength; i++)if (hasUndefined(obj[objKeys[i]])) return true;
        }
    }
    return false;
}
function patchErrorMessageFormatter(message, args) {
    const messageParts = [
        message
    ];
    for(const key in args){
        const value = typeof args[key] === "object" ? JSON.stringify(args[key], null, 2) : args[key];
        if (typeof value !== "undefined") messageParts.push(`${key}: ${value}`);
    }
    return messageParts.join("\n");
}
var PatchError = class extends Error {
    constructor(message, name, index, operation, tree){
        super(patchErrorMessageFormatter(message, {
            name,
            index,
            operation,
            tree
        }));
        this.name = name;
        this.index = index;
        this.operation = operation;
        this.tree = tree;
        Object.setPrototypeOf(this, new.target.prototype);
        this.message = patchErrorMessageFormatter(message, {
            name,
            index,
            operation,
            tree
        });
    }
};
;
 //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_areEquals",
    ()=>_areEquals,
    "applyOperation",
    ()=>applyOperation,
    "applyPatch",
    ()=>applyPatch,
    "applyReducer",
    ()=>applyReducer,
    "core_exports",
    ()=>core_exports,
    "getValueByPointer",
    ()=>getValueByPointer,
    "validate",
    ()=>validate,
    "validator",
    ()=>validator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/helpers.js [app-route] (ecmascript)");
;
;
//#region src/utils/fast-json-patch/src/core.ts
var core_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(core_exports, {
    JsonPatchError: ()=>JsonPatchError,
    _areEquals: ()=>_areEquals,
    applyOperation: ()=>applyOperation,
    applyPatch: ()=>applyPatch,
    applyReducer: ()=>applyReducer,
    deepClone: ()=>deepClone,
    getValueByPointer: ()=>getValueByPointer,
    validate: ()=>validate,
    validator: ()=>validator
});
const JsonPatchError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PatchError"];
const deepClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"];
const objOps = {
    add: function(obj, key, document) {
        obj[key] = this.value;
        return {
            newDocument: document
        };
    },
    remove: function(obj, key, document) {
        var removed = obj[key];
        delete obj[key];
        return {
            newDocument: document,
            removed
        };
    },
    replace: function(obj, key, document) {
        var removed = obj[key];
        obj[key] = this.value;
        return {
            newDocument: document,
            removed
        };
    },
    move: function(obj, key, document) {
        let removed = getValueByPointer(document, this.path);
        if (removed) removed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(removed);
        const originalValue = applyOperation(document, {
            op: "remove",
            path: this.from
        }).removed;
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: originalValue
        });
        return {
            newDocument: document,
            removed
        };
    },
    copy: function(obj, key, document) {
        const valueToCopy = getValueByPointer(document, this.from);
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(valueToCopy)
        });
        return {
            newDocument: document
        };
    },
    test: function(obj, key, document) {
        return {
            newDocument: document,
            test: _areEquals(obj[key], this.value)
        };
    },
    _get: function(obj, key, document) {
        this.value = obj[key];
        return {
            newDocument: document
        };
    }
};
var arrOps = {
    add: function(arr, i, document) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(i)) arr.splice(i, 0, this.value);
        else arr[i] = this.value;
        return {
            newDocument: document,
            index: i
        };
    },
    remove: function(arr, i, document) {
        var removedList = arr.splice(i, 1);
        return {
            newDocument: document,
            removed: removedList[0]
        };
    },
    replace: function(arr, i, document) {
        var removed = arr[i];
        arr[i] = this.value;
        return {
            newDocument: document,
            removed
        };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get
};
/**
* Retrieves a value from a JSON document by a JSON pointer.
* Returns the value.
*
* @param document The document to get the value from
* @param pointer an escaped JSON pointer
* @return The retrieved value
*/ function getValueByPointer(document, pointer) {
    if (pointer == "") return document;
    var getOriginalDestination = {
        op: "_get",
        path: pointer
    };
    applyOperation(document, getOriginalDestination);
    return getOriginalDestination.value;
}
/**
* Apply a single JSON Patch Operation on a JSON document.
* Returns the {newDocument, result} of the operation.
* It modifies the `document` and `operation` objects - it gets the values by reference.
* If you would like to avoid touching your values, clone them:
* `jsonpatch.applyOperation(document, jsonpatch._deepClone(operation))`.
*
* @param document The document to patch
* @param operation The operation to apply
* @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
* @param mutateDocument Whether to mutate the original document or clone it before applying
* @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
* @return `{newDocument, result}` after the operation
*/ function applyOperation(document, operation, validateOperation = false, mutateDocument = true, banPrototypeModifications = true, index = 0) {
    if (validateOperation) if (typeof validateOperation == "function") validateOperation(operation, 0, document, operation.path);
    else validator(operation, 0);
    if (operation.path === "") {
        let returnValue = {
            newDocument: document
        };
        if (operation.op === "add") {
            returnValue.newDocument = operation.value;
            return returnValue;
        } else if (operation.op === "replace") {
            returnValue.newDocument = operation.value;
            returnValue.removed = document;
            return returnValue;
        } else if (operation.op === "move" || operation.op === "copy") {
            returnValue.newDocument = getValueByPointer(document, operation.from);
            if (operation.op === "move") returnValue.removed = document;
            return returnValue;
        } else if (operation.op === "test") {
            returnValue.test = _areEquals(document, operation.value);
            if (returnValue.test === false) throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
            returnValue.newDocument = document;
            return returnValue;
        } else if (operation.op === "remove") {
            returnValue.removed = document;
            returnValue.newDocument = null;
            return returnValue;
        } else if (operation.op === "_get") {
            operation.value = document;
            return returnValue;
        } else if (validateOperation) throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document);
        else return returnValue;
    } else {
        if (!mutateDocument) document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document);
        const path = operation.path || "";
        const keys = path.split("/");
        let obj = document;
        let t = 1;
        let len = keys.length;
        let existingPathFragment = void 0;
        let key;
        let validateFunction;
        if (typeof validateOperation == "function") validateFunction = validateOperation;
        else validateFunction = validator;
        while(true){
            key = keys[t];
            if (key && key.indexOf("~") != -1) key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unescapePathComponent"])(key);
            if (banPrototypeModifications && (key == "__proto__" || key == "prototype" && t > 0 && keys[t - 1] == "constructor")) throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
            if (validateOperation) {
                if (existingPathFragment === void 0) {
                    if (obj[key] === void 0) existingPathFragment = keys.slice(0, t).join("/");
                    else if (t == len - 1) existingPathFragment = operation.path;
                    if (existingPathFragment !== void 0) validateFunction(operation, 0, document, existingPathFragment);
                }
            }
            t++;
            if (Array.isArray(obj)) {
                if (key === "-") key = obj.length;
                else if (validateOperation && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(key)) throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document);
                else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(key)) key = ~~key;
                if (t >= len) {
                    if (validateOperation && operation.op === "add" && key > obj.length) throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document);
                    const returnValue = arrOps[operation.op].call(operation, obj, key, document);
                    if (returnValue.test === false) throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
                    return returnValue;
                }
            } else if (t >= len) {
                const returnValue = objOps[operation.op].call(operation, obj, key, document);
                if (returnValue.test === false) throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
                return returnValue;
            }
            obj = obj[key];
            if (validateOperation && t < len && (!obj || typeof obj !== "object")) throw new JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", index, operation, document);
        }
    }
}
/**
* Apply a full JSON Patch array on a JSON document.
* Returns the {newDocument, result} of the patch.
* It modifies the `document` object and `patch` - it gets the values by reference.
* If you would like to avoid touching your values, clone them:
* `jsonpatch.applyPatch(document, jsonpatch._deepClone(patch))`.
*
* @param document The document to patch
* @param patch The patch to apply
* @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
* @param mutateDocument Whether to mutate the original document or clone it before applying
* @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
* @return An array of `{newDocument, result}` after the patch
*/ function applyPatch(document, patch, validateOperation, mutateDocument = true, banPrototypeModifications = true) {
    if (validateOperation) {
        if (!Array.isArray(patch)) throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    }
    if (!mutateDocument) document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document);
    const results = new Array(patch.length);
    for(let i = 0, length = patch.length; i < length; i++){
        results[i] = applyOperation(document, patch[i], validateOperation, true, banPrototypeModifications, i);
        document = results[i].newDocument;
    }
    results.newDocument = document;
    return results;
}
/**
* Apply a single JSON Patch Operation on a JSON document.
* Returns the updated document.
* Suitable as a reducer.
*
* @param document The document to patch
* @param operation The operation to apply
* @return The updated document
*/ function applyReducer(document, operation, index) {
    const operationResult = applyOperation(document, operation);
    if (operationResult.test === false) throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
    return operationResult.newDocument;
}
/**
* Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
* @param {object} operation - operation object (patch)
* @param {number} index - index of operation in the sequence
* @param {object} [document] - object where the operation is supposed to be applied
* @param {string} [existingPathFragment] - comes along with `document`
*/ function validator(operation, index, document, existingPathFragment) {
    if (typeof operation !== "object" || operation === null || Array.isArray(operation)) throw new JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", index, operation, document);
    else if (!objOps[operation.op]) throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document);
    else if (typeof operation.path !== "string") throw new JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", index, operation, document);
    else if (operation.path.indexOf("/") !== 0 && operation.path.length > 0) throw new JsonPatchError("Operation `path` property must start with \"/\"", "OPERATION_PATH_INVALID", index, operation, document);
    else if ((operation.op === "move" || operation.op === "copy") && typeof operation.from !== "string") throw new JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", index, operation, document);
    else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && operation.value === void 0) throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", index, operation, document);
    else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasUndefined"])(operation.value)) throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", index, operation, document);
    else if (document) {
        if (operation.op == "add") {
            var pathLen = operation.path.split("/").length;
            var existingPathLen = existingPathFragment.split("/").length;
            if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) throw new JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", index, operation, document);
        } else if (operation.op === "replace" || operation.op === "remove" || operation.op === "_get") {
            if (operation.path !== existingPathFragment) throw new JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", index, operation, document);
        } else if (operation.op === "move" || operation.op === "copy") {
            var existingValue = {
                op: "_get",
                path: operation.from,
                value: void 0
            };
            var error = validate([
                existingValue
            ], document);
            if (error && error.name === "OPERATION_PATH_UNRESOLVABLE") throw new JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", index, operation, document);
        }
    }
}
/**
* Validates a sequence of operations. If `document` parameter is provided, the sequence is additionally validated against the object document.
* If error is encountered, returns a JsonPatchError object
* @param sequence
* @param document
* @returns {JsonPatchError|undefined}
*/ function validate(sequence, document, externalValidator) {
    try {
        if (!Array.isArray(sequence)) throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
        if (document) applyPatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(sequence), externalValidator || true);
        else {
            externalValidator = externalValidator || validator;
            for(var i = 0; i < sequence.length; i++)externalValidator(sequence[i], i, document, void 0);
        }
    } catch (e) {
        if (e instanceof JsonPatchError) return e;
        else throw e;
    }
}
function _areEquals(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!_areEquals(a[i], b[i])) return false;
            return true;
        }
        if (arrA != arrB) return false;
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!b.hasOwnProperty(keys[i])) return false;
        for(i = length; i-- !== 0;){
            key = keys[i];
            if (!_areEquals(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}
;
 //# sourceMappingURL=core.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/duplex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/helpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js [app-route] (ecmascript)");
;
;
//#region src/utils/fast-json-patch/src/duplex.ts
function _generate(mirror, obj, patches, path, invertible) {
    if (obj === mirror) return;
    if (typeof obj.toJSON === "function") obj = obj.toJSON();
    var newKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_objectKeys"])(obj);
    var oldKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_objectKeys"])(mirror);
    var changed = false;
    var deleted = false;
    for(var t = oldKeys.length - 1; t >= 0; t--){
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasOwnProperty"])(obj, key) && !(obj[key] === void 0 && oldVal !== void 0 && Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null && Array.isArray(oldVal) === Array.isArray(newVal)) _generate(oldVal, newVal, patches, path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key), invertible);
            else if (oldVal !== newVal) {
                changed = true;
                if (invertible) patches.push({
                    op: "test",
                    path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(oldVal)
                });
                patches.push({
                    op: "replace",
                    path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(newVal)
                });
            }
        } else if (Array.isArray(mirror) === Array.isArray(obj)) {
            if (invertible) patches.push({
                op: "test",
                path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(oldVal)
            });
            patches.push({
                op: "remove",
                path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key)
            });
            deleted = true;
        } else {
            if (invertible) patches.push({
                op: "test",
                path,
                value: mirror
            });
            patches.push({
                op: "replace",
                path,
                value: obj
            });
            changed = true;
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) return;
    for(var t = 0; t < newKeys.length; t++){
        var key = newKeys[t];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasOwnProperty"])(mirror, key) && obj[key] !== void 0) patches.push({
            op: "add",
            path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(obj[key])
        });
    }
}
/**
* Create an array of patches from the differences in two objects
*/ function compare(tree1, tree2, invertible = false) {
    var patches = [];
    _generate(tree1, tree2, patches, "", invertible);
    return patches;
}
;
 //# sourceMappingURL=duplex.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/helpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$duplex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/duplex.js [app-route] (ecmascript)");
;
;
;
//#region src/utils/fast-json-patch/index.ts
var fast_json_patch_default = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["core_exports"],
    JsonPatchError: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PatchError"],
    deepClone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"],
    escapePathComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"],
    unescapePathComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unescapePathComponent"]
}; //#endregion
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/log_stream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogStreamCallbackHandler",
    ()=>LogStreamCallbackHandler,
    "RunLog",
    ()=>RunLog,
    "RunLogPatch",
    ()=>RunLogPatch,
    "isLogStreamHandler",
    ()=>isLogStreamHandler,
    "log_stream_exports",
    ()=>log_stream_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/ai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/fast-json-patch/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/tracers/log_stream.ts
var log_stream_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(log_stream_exports, {
    LogStreamCallbackHandler: ()=>LogStreamCallbackHandler,
    RunLog: ()=>RunLog,
    RunLogPatch: ()=>RunLogPatch,
    isLogStreamHandler: ()=>isLogStreamHandler
});
/**
* List of jsonpatch JSONPatchOperations, which describe how to create the run state
* from an empty dict. This is the minimal representation of the log, designed to
* be serialized as JSON and sent over the wire to reconstruct the log on the other
* side. Reconstruction of the state can be done with any jsonpatch-compliant library,
* see https://jsonpatch.com for more information.
*/ var RunLogPatch = class {
    ops;
    constructor(fields){
        this.ops = fields.ops ?? [];
    }
    concat(other) {
        const ops = this.ops.concat(other.ops);
        const states = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])({}, ops);
        return new RunLog({
            ops,
            state: states[states.length - 1].newDocument
        });
    }
};
var RunLog = class RunLog extends RunLogPatch {
    state;
    constructor(fields){
        super(fields);
        this.state = fields.state;
    }
    concat(other) {
        const ops = this.ops.concat(other.ops);
        const states = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])(this.state, other.ops);
        return new RunLog({
            ops,
            state: states[states.length - 1].newDocument
        });
    }
    static fromRunLogPatch(patch) {
        const states = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$fast$2d$json$2d$patch$2f$src$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])({}, patch.ops);
        return new RunLog({
            ops: patch.ops,
            state: states[states.length - 1].newDocument
        });
    }
};
const isLogStreamHandler = (handler)=>handler.name === "log_stream_tracer";
/**
* Extract standardized inputs from a run.
*
* Standardizes the inputs based on the type of the runnable used.
*
* @param run - Run object
* @param schemaFormat - The schema format to use.
*
* @returns Valid inputs are only dict. By conventions, inputs always represented
* invocation using named arguments.
* A null means that the input is not yet known!
*/ async function _getStandardizedInputs(run, schemaFormat) {
    if (schemaFormat === "original") throw new Error("Do not assign inputs with original schema drop the key for now. When inputs are added to streamLog they should be added with standardized schema for streaming events.");
    const { inputs } = run;
    if ([
        "retriever",
        "llm",
        "prompt"
    ].includes(run.run_type)) return inputs;
    if (Object.keys(inputs).length === 1 && inputs?.input === "") return void 0;
    return inputs.input;
}
async function _getStandardizedOutputs(run, schemaFormat) {
    const { outputs } = run;
    if (schemaFormat === "original") return outputs;
    if ([
        "retriever",
        "llm",
        "prompt"
    ].includes(run.run_type)) return outputs;
    if (outputs !== void 0 && Object.keys(outputs).length === 1 && outputs?.output !== void 0) return outputs.output;
    return outputs;
}
function isChatGenerationChunk(x) {
    return x !== void 0 && x.message !== void 0;
}
/**
* Class that extends the `BaseTracer` class from the
* `langchain.callbacks.tracers.base` module. It represents a callback
* handler that logs the execution of runs and emits `RunLog` instances to a
* `RunLogStream`.
*/ var LogStreamCallbackHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseTracer"] {
    autoClose = true;
    includeNames;
    includeTypes;
    includeTags;
    excludeNames;
    excludeTypes;
    excludeTags;
    _schemaFormat = "original";
    rootId;
    keyMapByRunId = {};
    counterMapByRunName = {};
    transformStream;
    writer;
    receiveStream;
    name = "log_stream_tracer";
    lc_prefer_streaming = true;
    constructor(fields){
        super({
            _awaitHandler: true,
            ...fields
        });
        this.autoClose = fields?.autoClose ?? true;
        this.includeNames = fields?.includeNames;
        this.includeTypes = fields?.includeTypes;
        this.includeTags = fields?.includeTags;
        this.excludeNames = fields?.excludeNames;
        this.excludeTypes = fields?.excludeTypes;
        this.excludeTags = fields?.excludeTags;
        this._schemaFormat = fields?._schemaFormat ?? this._schemaFormat;
        this.transformStream = new TransformStream();
        this.writer = this.transformStream.writable.getWriter();
        this.receiveStream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromReadableStream(this.transformStream.readable);
    }
    [Symbol.asyncIterator]() {
        return this.receiveStream;
    }
    async persistRun(_run) {}
    _includeRun(run) {
        if (run.id === this.rootId) return false;
        const runTags = run.tags ?? [];
        let include = this.includeNames === void 0 && this.includeTags === void 0 && this.includeTypes === void 0;
        if (this.includeNames !== void 0) include = include || this.includeNames.includes(run.name);
        if (this.includeTypes !== void 0) include = include || this.includeTypes.includes(run.run_type);
        if (this.includeTags !== void 0) include = include || runTags.find((tag)=>this.includeTags?.includes(tag)) !== void 0;
        if (this.excludeNames !== void 0) include = include && !this.excludeNames.includes(run.name);
        if (this.excludeTypes !== void 0) include = include && !this.excludeTypes.includes(run.run_type);
        if (this.excludeTags !== void 0) include = include && runTags.every((tag)=>!this.excludeTags?.includes(tag));
        return include;
    }
    async *tapOutputIterable(runId, output) {
        for await (const chunk of output){
            if (runId !== this.rootId) {
                const key = this.keyMapByRunId[runId];
                if (key) await this.writer.write(new RunLogPatch({
                    ops: [
                        {
                            op: "add",
                            path: `/logs/${key}/streamed_output/-`,
                            value: chunk
                        }
                    ]
                }));
            }
            yield chunk;
        }
    }
    async onRunCreate(run) {
        if (this.rootId === void 0) {
            this.rootId = run.id;
            await this.writer.write(new RunLogPatch({
                ops: [
                    {
                        op: "replace",
                        path: "",
                        value: {
                            id: run.id,
                            name: run.name,
                            type: run.run_type,
                            streamed_output: [],
                            final_output: void 0,
                            logs: {}
                        }
                    }
                ]
            }));
        }
        if (!this._includeRun(run)) return;
        if (this.counterMapByRunName[run.name] === void 0) this.counterMapByRunName[run.name] = 0;
        this.counterMapByRunName[run.name] += 1;
        const count = this.counterMapByRunName[run.name];
        this.keyMapByRunId[run.id] = count === 1 ? run.name : `${run.name}:${count}`;
        const logEntry = {
            id: run.id,
            name: run.name,
            type: run.run_type,
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            start_time: new Date(run.start_time).toISOString(),
            streamed_output: [],
            streamed_output_str: [],
            final_output: void 0,
            end_time: void 0
        };
        if (this._schemaFormat === "streaming_events") logEntry.inputs = await _getStandardizedInputs(run, this._schemaFormat);
        await this.writer.write(new RunLogPatch({
            ops: [
                {
                    op: "add",
                    path: `/logs/${this.keyMapByRunId[run.id]}`,
                    value: logEntry
                }
            ]
        }));
    }
    async onRunUpdate(run) {
        try {
            const runName = this.keyMapByRunId[run.id];
            if (runName === void 0) return;
            const ops = [];
            if (this._schemaFormat === "streaming_events") ops.push({
                op: "replace",
                path: `/logs/${runName}/inputs`,
                value: await _getStandardizedInputs(run, this._schemaFormat)
            });
            ops.push({
                op: "add",
                path: `/logs/${runName}/final_output`,
                value: await _getStandardizedOutputs(run, this._schemaFormat)
            });
            if (run.end_time !== void 0) ops.push({
                op: "add",
                path: `/logs/${runName}/end_time`,
                value: new Date(run.end_time).toISOString()
            });
            const patch = new RunLogPatch({
                ops
            });
            await this.writer.write(patch);
        } finally{
            if (run.id === this.rootId) {
                const patch = new RunLogPatch({
                    ops: [
                        {
                            op: "replace",
                            path: "/final_output",
                            value: await _getStandardizedOutputs(run, this._schemaFormat)
                        }
                    ]
                });
                await this.writer.write(patch);
                if (this.autoClose) await this.writer.close();
            }
        }
    }
    async onLLMNewToken(run, token, kwargs) {
        const runName = this.keyMapByRunId[run.id];
        if (runName === void 0) return;
        const isChatModel = run.inputs.messages !== void 0;
        let streamedOutputValue;
        if (isChatModel) if (isChatGenerationChunk(kwargs?.chunk)) streamedOutputValue = kwargs?.chunk;
        else streamedOutputValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
            id: `run-${run.id}`,
            content: token
        });
        else streamedOutputValue = token;
        const patch = new RunLogPatch({
            ops: [
                {
                    op: "add",
                    path: `/logs/${runName}/streamed_output_str/-`,
                    value: token
                },
                {
                    op: "add",
                    path: `/logs/${runName}/streamed_output/-`,
                    value: streamedOutputValue
                }
            ]
        });
        await this.writer.write(patch);
    }
};
;
 //# sourceMappingURL=log_stream.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/outputs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatGenerationChunk",
    ()=>ChatGenerationChunk,
    "GenerationChunk",
    ()=>GenerationChunk,
    "RUN_KEY",
    ()=>RUN_KEY,
    "outputs_exports",
    ()=>outputs_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
;
//#region src/outputs.ts
var outputs_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(outputs_exports, {
    ChatGenerationChunk: ()=>ChatGenerationChunk,
    GenerationChunk: ()=>GenerationChunk,
    RUN_KEY: ()=>RUN_KEY
});
const RUN_KEY = "__run";
/**
* Chunk of a single generation. Used for streaming.
*/ var GenerationChunk = class GenerationChunk {
    text;
    generationInfo;
    constructor(fields){
        this.text = fields.text;
        this.generationInfo = fields.generationInfo;
    }
    concat(chunk) {
        return new GenerationChunk({
            text: this.text + chunk.text,
            generationInfo: {
                ...this.generationInfo,
                ...chunk.generationInfo
            }
        });
    }
};
var ChatGenerationChunk = class ChatGenerationChunk extends GenerationChunk {
    message;
    constructor(fields){
        super(fields);
        this.message = fields.message;
    }
    concat(chunk) {
        return new ChatGenerationChunk({
            text: this.text + chunk.text,
            generationInfo: {
                ...this.generationInfo,
                ...chunk.generationInfo
            },
            message: this.message.concat(chunk.message)
        });
    }
};
;
 //# sourceMappingURL=outputs.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/event_stream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamCallbackHandler",
    ()=>EventStreamCallbackHandler,
    "isStreamEventsHandler",
    ()=>isStreamEventsHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/messages/ai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/outputs.js [app-route] (ecmascript)");
;
;
;
;
//#region src/tracers/event_stream.ts
function assignName({ name, serialized }) {
    if (name !== void 0) return name;
    if (serialized?.name !== void 0) return serialized.name;
    else if (serialized?.id !== void 0 && Array.isArray(serialized?.id)) return serialized.id[serialized.id.length - 1];
    return "Unnamed";
}
const isStreamEventsHandler = (handler)=>handler.name === "event_stream_tracer";
/**
* Class that extends the `BaseTracer` class from the
* `langchain.callbacks.tracers.base` module. It represents a callback
* handler that logs the execution of runs and emits `RunLog` instances to a
* `RunLogStream`.
*/ var EventStreamCallbackHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseTracer"] {
    autoClose = true;
    includeNames;
    includeTypes;
    includeTags;
    excludeNames;
    excludeTypes;
    excludeTags;
    runInfoMap = /* @__PURE__ */ new Map();
    tappedPromises = /* @__PURE__ */ new Map();
    transformStream;
    writer;
    receiveStream;
    name = "event_stream_tracer";
    lc_prefer_streaming = true;
    constructor(fields){
        super({
            _awaitHandler: true,
            ...fields
        });
        this.autoClose = fields?.autoClose ?? true;
        this.includeNames = fields?.includeNames;
        this.includeTypes = fields?.includeTypes;
        this.includeTags = fields?.includeTags;
        this.excludeNames = fields?.excludeNames;
        this.excludeTypes = fields?.excludeTypes;
        this.excludeTags = fields?.excludeTags;
        this.transformStream = new TransformStream();
        this.writer = this.transformStream.writable.getWriter();
        this.receiveStream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromReadableStream(this.transformStream.readable);
    }
    [Symbol.asyncIterator]() {
        return this.receiveStream;
    }
    async persistRun(_run) {}
    _includeRun(run) {
        const runTags = run.tags ?? [];
        let include = this.includeNames === void 0 && this.includeTags === void 0 && this.includeTypes === void 0;
        if (this.includeNames !== void 0) include = include || this.includeNames.includes(run.name);
        if (this.includeTypes !== void 0) include = include || this.includeTypes.includes(run.runType);
        if (this.includeTags !== void 0) include = include || runTags.find((tag)=>this.includeTags?.includes(tag)) !== void 0;
        if (this.excludeNames !== void 0) include = include && !this.excludeNames.includes(run.name);
        if (this.excludeTypes !== void 0) include = include && !this.excludeTypes.includes(run.runType);
        if (this.excludeTags !== void 0) include = include && runTags.every((tag)=>!this.excludeTags?.includes(tag));
        return include;
    }
    async *tapOutputIterable(runId, outputStream) {
        const firstChunk = await outputStream.next();
        if (firstChunk.done) return;
        const runInfo = this.runInfoMap.get(runId);
        if (runInfo === void 0) {
            yield firstChunk.value;
            return;
        }
        function _formatOutputChunk(eventType, data) {
            if (eventType === "llm" && typeof data === "string") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenerationChunk"]({
                text: data
            });
            return data;
        }
        let tappedPromise = this.tappedPromises.get(runId);
        if (tappedPromise === void 0) {
            let tappedPromiseResolver;
            tappedPromise = new Promise((resolve)=>{
                tappedPromiseResolver = resolve;
            });
            this.tappedPromises.set(runId, tappedPromise);
            try {
                const event = {
                    event: `on_${runInfo.runType}_stream`,
                    run_id: runId,
                    name: runInfo.name,
                    tags: runInfo.tags,
                    metadata: runInfo.metadata,
                    data: {}
                };
                await this.send({
                    ...event,
                    data: {
                        chunk: _formatOutputChunk(runInfo.runType, firstChunk.value)
                    }
                }, runInfo);
                yield firstChunk.value;
                for await (const chunk of outputStream){
                    if (runInfo.runType !== "tool" && runInfo.runType !== "retriever") await this.send({
                        ...event,
                        data: {
                            chunk: _formatOutputChunk(runInfo.runType, chunk)
                        }
                    }, runInfo);
                    yield chunk;
                }
            } finally{
                tappedPromiseResolver?.();
            }
        } else {
            yield firstChunk.value;
            for await (const chunk of outputStream)yield chunk;
        }
    }
    async send(payload, run) {
        if (this._includeRun(run)) await this.writer.write(payload);
    }
    async sendEndEvent(payload, run) {
        const tappedPromise = this.tappedPromises.get(payload.run_id);
        if (tappedPromise !== void 0) tappedPromise.then(()=>{
            this.send(payload, run);
        });
        else await this.send(payload, run);
    }
    async onLLMStart(run) {
        const runName = assignName(run);
        const runType = run.inputs.messages !== void 0 ? "chat_model" : "llm";
        const runInfo = {
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            name: runName,
            runType,
            inputs: run.inputs
        };
        this.runInfoMap.set(run.id, runInfo);
        const eventName = `on_${runType}_start`;
        await this.send({
            event: eventName,
            data: {
                input: run.inputs
            },
            name: runName,
            tags: run.tags ?? [],
            run_id: run.id,
            metadata: run.extra?.metadata ?? {}
        }, runInfo);
    }
    async onLLMNewToken(run, token, kwargs) {
        const runInfo = this.runInfoMap.get(run.id);
        let chunk;
        let eventName;
        if (runInfo === void 0) throw new Error(`onLLMNewToken: Run ID ${run.id} not found in run map.`);
        if (this.runInfoMap.size === 1) return;
        if (runInfo.runType === "chat_model") {
            eventName = "on_chat_model_stream";
            if (kwargs?.chunk === void 0) chunk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
                content: token,
                id: `run-${run.id}`
            });
            else chunk = kwargs.chunk.message;
        } else if (runInfo.runType === "llm") {
            eventName = "on_llm_stream";
            if (kwargs?.chunk === void 0) chunk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenerationChunk"]({
                text: token
            });
            else chunk = kwargs.chunk;
        } else throw new Error(`Unexpected run type ${runInfo.runType}`);
        await this.send({
            event: eventName,
            data: {
                chunk
            },
            run_id: run.id,
            name: runInfo.name,
            tags: runInfo.tags,
            metadata: runInfo.metadata
        }, runInfo);
    }
    async onLLMEnd(run) {
        const runInfo = this.runInfoMap.get(run.id);
        this.runInfoMap.delete(run.id);
        let eventName;
        if (runInfo === void 0) throw new Error(`onLLMEnd: Run ID ${run.id} not found in run map.`);
        const generations = run.outputs?.generations;
        let output;
        if (runInfo.runType === "chat_model") {
            for (const generation of generations ?? []){
                if (output !== void 0) break;
                output = generation[0]?.message;
            }
            eventName = "on_chat_model_end";
        } else if (runInfo.runType === "llm") {
            output = {
                generations: generations?.map((generation)=>{
                    return generation.map((chunk)=>{
                        return {
                            text: chunk.text,
                            generationInfo: chunk.generationInfo
                        };
                    });
                }),
                llmOutput: run.outputs?.llmOutput ?? {}
            };
            eventName = "on_llm_end";
        } else throw new Error(`onLLMEnd: Unexpected run type: ${runInfo.runType}`);
        await this.sendEndEvent({
            event: eventName,
            data: {
                output,
                input: runInfo.inputs
            },
            run_id: run.id,
            name: runInfo.name,
            tags: runInfo.tags,
            metadata: runInfo.metadata
        }, runInfo);
    }
    async onChainStart(run) {
        const runName = assignName(run);
        const runType = run.run_type ?? "chain";
        const runInfo = {
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            name: runName,
            runType: run.run_type
        };
        let eventData = {};
        if (run.inputs.input === "" && Object.keys(run.inputs).length === 1) {
            eventData = {};
            runInfo.inputs = {};
        } else if (run.inputs.input !== void 0) {
            eventData.input = run.inputs.input;
            runInfo.inputs = run.inputs.input;
        } else {
            eventData.input = run.inputs;
            runInfo.inputs = run.inputs;
        }
        this.runInfoMap.set(run.id, runInfo);
        await this.send({
            event: `on_${runType}_start`,
            data: eventData,
            name: runName,
            tags: run.tags ?? [],
            run_id: run.id,
            metadata: run.extra?.metadata ?? {}
        }, runInfo);
    }
    async onChainEnd(run) {
        const runInfo = this.runInfoMap.get(run.id);
        this.runInfoMap.delete(run.id);
        if (runInfo === void 0) throw new Error(`onChainEnd: Run ID ${run.id} not found in run map.`);
        const eventName = `on_${run.run_type}_end`;
        const inputs = run.inputs ?? runInfo.inputs ?? {};
        const outputs = run.outputs?.output ?? run.outputs;
        const data = {
            output: outputs,
            input: inputs
        };
        if (inputs.input && Object.keys(inputs).length === 1) {
            data.input = inputs.input;
            runInfo.inputs = inputs.input;
        }
        await this.sendEndEvent({
            event: eventName,
            data,
            run_id: run.id,
            name: runInfo.name,
            tags: runInfo.tags,
            metadata: runInfo.metadata ?? {}
        }, runInfo);
    }
    async onToolStart(run) {
        const runName = assignName(run);
        const runInfo = {
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            name: runName,
            runType: "tool",
            inputs: run.inputs ?? {}
        };
        this.runInfoMap.set(run.id, runInfo);
        await this.send({
            event: "on_tool_start",
            data: {
                input: run.inputs ?? {}
            },
            name: runName,
            run_id: run.id,
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {}
        }, runInfo);
    }
    async onToolEnd(run) {
        const runInfo = this.runInfoMap.get(run.id);
        this.runInfoMap.delete(run.id);
        if (runInfo === void 0) throw new Error(`onToolEnd: Run ID ${run.id} not found in run map.`);
        if (runInfo.inputs === void 0) throw new Error(`onToolEnd: Run ID ${run.id} is a tool call, and is expected to have traced inputs.`);
        const output = run.outputs?.output === void 0 ? run.outputs : run.outputs.output;
        await this.sendEndEvent({
            event: "on_tool_end",
            data: {
                output,
                input: runInfo.inputs
            },
            run_id: run.id,
            name: runInfo.name,
            tags: runInfo.tags,
            metadata: runInfo.metadata
        }, runInfo);
    }
    async onRetrieverStart(run) {
        const runName = assignName(run);
        const runType = "retriever";
        const runInfo = {
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            name: runName,
            runType,
            inputs: {
                query: run.inputs.query
            }
        };
        this.runInfoMap.set(run.id, runInfo);
        await this.send({
            event: "on_retriever_start",
            data: {
                input: {
                    query: run.inputs.query
                }
            },
            name: runName,
            tags: run.tags ?? [],
            run_id: run.id,
            metadata: run.extra?.metadata ?? {}
        }, runInfo);
    }
    async onRetrieverEnd(run) {
        const runInfo = this.runInfoMap.get(run.id);
        this.runInfoMap.delete(run.id);
        if (runInfo === void 0) throw new Error(`onRetrieverEnd: Run ID ${run.id} not found in run map.`);
        await this.sendEndEvent({
            event: "on_retriever_end",
            data: {
                output: run.outputs?.documents ?? run.outputs,
                input: runInfo.inputs
            },
            run_id: run.id,
            name: runInfo.name,
            tags: runInfo.tags,
            metadata: runInfo.metadata
        }, runInfo);
    }
    async handleCustomEvent(eventName, data, runId) {
        const runInfo = this.runInfoMap.get(runId);
        if (runInfo === void 0) throw new Error(`handleCustomEvent: Run ID ${runId} not found in run map.`);
        await this.send({
            event: "on_custom_event",
            run_id: runId,
            name: eventName,
            tags: runInfo.tags,
            metadata: runInfo.metadata,
            data
        }, runInfo);
    }
    async finish() {
        const pendingPromises = [
            ...this.tappedPromises.values()
        ];
        Promise.all(pendingPromises).finally(()=>{
            this.writer.close();
        });
    }
};
;
 //# sourceMappingURL=event_stream.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/async_caller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncCaller",
    ()=>AsyncCaller,
    "async_caller_exports",
    ()=>async_caller_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/signal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$retry$40$4$2e$6$2e$2$2f$node_modules$2f$p$2d$retry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/p-retry@4.6.2/node_modules/p-retry/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/p-queue@6.6.2/node_modules/p-queue/dist/index.js [app-route] (ecmascript)");
;
;
;
;
//#region src/utils/async_caller.ts
var async_caller_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(async_caller_exports, {
    AsyncCaller: ()=>AsyncCaller
});
const STATUS_NO_RETRY = [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    409
];
const defaultFailedAttemptHandler = (error)=>{
    if (error.message.startsWith("Cancel") || error.message.startsWith("AbortError") || error.name === "AbortError") throw error;
    if (error?.code === "ECONNABORTED") throw error;
    const status = error?.response?.status ?? error?.status;
    if (status && STATUS_NO_RETRY.includes(+status)) throw error;
    if (error?.error?.code === "insufficient_quota") {
        const err = new Error(error?.message);
        err.name = "InsufficientQuotaError";
        throw err;
    }
};
/**
* A class that can be used to make async calls with concurrency and retry logic.
*
* This is useful for making calls to any kind of "expensive" external resource,
* be it because it's rate-limited, subject to network issues, etc.
*
* Concurrent calls are limited by the `maxConcurrency` parameter, which defaults
* to `Infinity`. This means that by default, all calls will be made in parallel.
*
* Retries are limited by the `maxRetries` parameter, which defaults to 6. This
* means that by default, each call will be retried up to 6 times, with an
* exponential backoff between each attempt.
*/ var AsyncCaller = class {
    maxConcurrency;
    maxRetries;
    onFailedAttempt;
    queue;
    constructor(params){
        this.maxConcurrency = params.maxConcurrency ?? Infinity;
        this.maxRetries = params.maxRetries ?? 6;
        this.onFailedAttempt = params.onFailedAttempt ?? defaultFailedAttemptHandler;
        const PQueue = "default" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$queue$40$6$2e$6$2e$2$2f$node_modules$2f$p$2d$queue$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        this.queue = new PQueue({
            concurrency: this.maxConcurrency
        });
    }
    call(callable, ...args) {
        return this.queue.add(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$retry$40$4$2e$6$2e$2$2f$node_modules$2f$p$2d$retry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(()=>callable(...args).catch((error)=>{
                    if (error instanceof Error) throw error;
                    else throw new Error(error);
                }), {
                onFailedAttempt: this.onFailedAttempt,
                retries: this.maxRetries,
                randomize: true
            }), {
            throwOnTimeout: true
        });
    }
    callWithOptions(options, callable, ...args) {
        if (options.signal) return Promise.race([
            this.call(callable, ...args),
            new Promise((_, reject)=>{
                options.signal?.addEventListener("abort", ()=>{
                    reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAbortSignalError"])(options.signal));
                });
            })
        ]);
        return this.call(callable, ...args);
    }
    fetch(...args) {
        return this.call(()=>fetch(...args).then((res)=>res.ok ? res : Promise.reject(res)));
    }
};
;
 //# sourceMappingURL=async_caller.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/root_listener.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RootListenersTracer",
    ()=>RootListenersTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/base.js [app-route] (ecmascript)");
;
//#region src/tracers/root_listener.ts
var RootListenersTracer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseTracer"] {
    name = "RootListenersTracer";
    /** The Run's ID. Type UUID */ rootId;
    config;
    argOnStart;
    argOnEnd;
    argOnError;
    constructor({ config, onStart, onEnd, onError }){
        super({
            _awaitHandler: true
        });
        this.config = config;
        this.argOnStart = onStart;
        this.argOnEnd = onEnd;
        this.argOnError = onError;
    }
    /**
	* This is a legacy method only called once for an entire run tree
	* therefore not useful here
	* @param {Run} _ Not used
	*/ persistRun(_) {
        return Promise.resolve();
    }
    async onRunCreate(run) {
        if (this.rootId) return;
        this.rootId = run.id;
        if (this.argOnStart) await this.argOnStart(run, this.config);
    }
    async onRunUpdate(run) {
        if (run.id !== this.rootId) return;
        if (!run.error) {
            if (this.argOnEnd) await this.argOnEnd(run, this.config);
        } else if (this.argOnError) await this.argOnError(run, this.config);
    }
};
;
 //# sourceMappingURL=root_listener.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/runnables/utils.ts
__turbopack_context__.s([
    "_RootEventFilter",
    ()=>_RootEventFilter,
    "isRunnableInterface",
    ()=>isRunnableInterface
]);
function isRunnableInterface(thing) {
    return thing ? thing.lc_runnable : false;
}
/**
* Utility to filter the root event in the streamEvents implementation.
* This is simply binding the arguments to the namespace to make save on
* a bit of typing in the streamEvents implementation.
*
* TODO: Refactor and remove.
*/ var _RootEventFilter = class {
    includeNames;
    includeTypes;
    includeTags;
    excludeNames;
    excludeTypes;
    excludeTags;
    constructor(fields){
        this.includeNames = fields.includeNames;
        this.includeTypes = fields.includeTypes;
        this.includeTags = fields.includeTags;
        this.excludeNames = fields.excludeNames;
        this.excludeTypes = fields.excludeTypes;
        this.excludeTags = fields.excludeTags;
    }
    includeEvent(event, rootType) {
        let include = this.includeNames === void 0 && this.includeTypes === void 0 && this.includeTags === void 0;
        const eventTags = event.tags ?? [];
        if (this.includeNames !== void 0) include = include || this.includeNames.includes(event.name);
        if (this.includeTypes !== void 0) include = include || this.includeTypes.includes(rootType);
        if (this.includeTags !== void 0) include = include || eventTags.some((tag)=>this.includeTags?.includes(tag));
        if (this.excludeNames !== void 0) include = include && !this.excludeNames.includes(event.name);
        if (this.excludeTypes !== void 0) include = include && !this.excludeTypes.includes(rootType);
        if (this.excludeTags !== void 0) include = include && eventTags.every((tag)=>!this.excludeTags?.includes(tag));
        return include;
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendInteropZodObject",
    ()=>extendInteropZodObject,
    "getInteropZodDefaultGetter",
    ()=>getInteropZodDefaultGetter,
    "getInteropZodObjectShape",
    ()=>getInteropZodObjectShape,
    "getSchemaDescription",
    ()=>getSchemaDescription,
    "interopParse",
    ()=>interopParse,
    "interopParseAsync",
    ()=>interopParseAsync,
    "interopSafeParse",
    ()=>interopSafeParse,
    "interopSafeParseAsync",
    ()=>interopSafeParseAsync,
    "interopZodObjectMakeFieldsOptional",
    ()=>interopZodObjectMakeFieldsOptional,
    "interopZodObjectPartial",
    ()=>interopZodObjectPartial,
    "interopZodObjectPassthrough",
    ()=>interopZodObjectPassthrough,
    "interopZodObjectStrict",
    ()=>interopZodObjectStrict,
    "interopZodTransformInputSchema",
    ()=>interopZodTransformInputSchema,
    "isInteropZodLiteral",
    ()=>isInteropZodLiteral,
    "isInteropZodObject",
    ()=>isInteropZodObject,
    "isInteropZodSchema",
    ()=>isInteropZodSchema,
    "isShapelessZodSchema",
    ()=>isShapelessZodSchema,
    "isSimpleStringZodSchema",
    ()=>isSimpleStringZodSchema,
    "isZodArrayV4",
    ()=>isZodArrayV4,
    "isZodLiteralV3",
    ()=>isZodLiteralV3,
    "isZodLiteralV4",
    ()=>isZodLiteralV4,
    "isZodObjectV3",
    ()=>isZodObjectV3,
    "isZodObjectV4",
    ()=>isZodObjectV4,
    "isZodSchema",
    ()=>isZodSchema,
    "isZodSchemaV3",
    ()=>isZodSchemaV3,
    "isZodSchemaV4",
    ()=>isZodSchemaV4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/schemas.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/api.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/registries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/util.js [app-route] (ecmascript) <export * as util>");
;
//#region src/utils/types/zod.ts
function isZodSchemaV4(schema) {
    if (typeof schema !== "object" || schema === null) return false;
    const obj = schema;
    if (!("_zod" in obj)) return false;
    const zod = obj._zod;
    return typeof zod === "object" && zod !== null && "def" in zod;
}
function isZodSchemaV3(schema) {
    if (typeof schema !== "object" || schema === null) return false;
    const obj = schema;
    if (!("_def" in obj) || "_zod" in obj) return false;
    const def = obj._def;
    return typeof def === "object" && def != null && "typeName" in def;
}
/** Backward compatible isZodSchema for Zod 3 */ function isZodSchema(schema) {
    if (isZodSchemaV4(schema)) console.warn("[WARNING] Attempting to use Zod 4 schema in a context where Zod 3 schema is expected. This may cause unexpected behavior.");
    return isZodSchemaV3(schema);
}
/**
* Given either a Zod schema, or plain object, determine if the input is a Zod schema.
*
* @param {unknown} input
* @returns {boolean} Whether or not the provided input is a Zod schema.
*/ function isInteropZodSchema(input) {
    if (!input) return false;
    if (typeof input !== "object") return false;
    if (Array.isArray(input)) return false;
    if (isZodSchemaV4(input) || isZodSchemaV3(input)) return true;
    return false;
}
function isZodLiteralV3(obj) {
    if (typeof obj === "object" && obj !== null && "_def" in obj && typeof obj._def === "object" && obj._def !== null && "typeName" in obj._def && obj._def.typeName === "ZodLiteral") return true;
    return false;
}
function isZodLiteralV4(obj) {
    if (!isZodSchemaV4(obj)) return false;
    if (typeof obj === "object" && obj !== null && "_zod" in obj && typeof obj._zod === "object" && obj._zod !== null && "def" in obj._zod && typeof obj._zod.def === "object" && obj._zod.def !== null && "type" in obj._zod.def && obj._zod.def.type === "literal") return true;
    return false;
}
/**
* Determines if the provided value is an InteropZodLiteral (Zod v3 or v4 literal schema).
*
* @param obj The value to check.
* @returns {boolean} True if the value is a Zod v3 or v4 literal schema, false otherwise.
*/ function isInteropZodLiteral(obj) {
    if (isZodLiteralV3(obj)) return true;
    if (isZodLiteralV4(obj)) return true;
    return false;
}
/**
* Asynchronously parses the input using the provided Zod schema (v3 or v4) and returns a safe parse result.
* This function handles both Zod v3 and v4 schemas, returning a result object indicating success or failure.
*
* @template T - The expected output type of the schema.
* @param {InteropZodType<T>} schema - The Zod schema (v3 or v4) to use for parsing.
* @param {unknown} input - The input value to parse.
* @returns {Promise<InteropZodSafeParseResult<T>>} A promise that resolves to a safe parse result object.
* @throws {Error} If the schema is not a recognized Zod v3 or v4 schema.
*/ async function interopSafeParseAsync(schema, input) {
    if (isZodSchemaV4(schema)) try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAsync"])(schema, input);
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
    if (isZodSchemaV3(schema)) return await schema.safeParseAsync(input);
    throw new Error("Schema must be an instance of z3.ZodType or z4.$ZodType");
}
/**
* Asynchronously parses the input using the provided Zod schema (v3 or v4) and returns the parsed value.
* Throws an error if parsing fails or if the schema is not a recognized Zod v3 or v4 schema.
*
* @template T - The expected output type of the schema.
* @param {InteropZodType<T>} schema - The Zod schema (v3 or v4) to use for parsing.
* @param {unknown} input - The input value to parse.
* @returns {Promise<T>} A promise that resolves to the parsed value.
* @throws {Error} If parsing fails or the schema is not a recognized Zod v3 or v4 schema.
*/ async function interopParseAsync(schema, input) {
    if (isZodSchemaV4(schema)) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAsync"])(schema, input);
    if (isZodSchemaV3(schema)) return await schema.parseAsync(input);
    throw new Error("Schema must be an instance of z3.ZodType or z4.$ZodType");
}
/**
* Safely parses the input using the provided Zod schema (v3 or v4) and returns a result object
* indicating success or failure. This function is compatible with both Zod v3 and v4 schemas.
*
* @template T - The expected output type of the schema.
* @param {InteropZodType<T>} schema - The Zod schema (v3 or v4) to use for parsing.
* @param {unknown} input - The input value to parse.
* @returns {InteropZodSafeParseResult<T>} An object with either the parsed data (on success)
*   or the error (on failure).
* @throws {Error} If the schema is not a recognized Zod v3 or v4 schema.
*/ function interopSafeParse(schema, input) {
    if (isZodSchemaV4(schema)) try {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(schema, input);
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
    if (isZodSchemaV3(schema)) return schema.safeParse(input);
    throw new Error("Schema must be an instance of z3.ZodType or z4.$ZodType");
}
/**
* Parses the input using the provided Zod schema (v3 or v4) and returns the parsed value.
* Throws an error if parsing fails or if the schema is not a recognized Zod v3 or v4 schema.
*
* @template T - The expected output type of the schema.
* @param {InteropZodType<T>} schema - The Zod schema (v3 or v4) to use for parsing.
* @param {unknown} input - The input value to parse.
* @returns {T} The parsed value.
* @throws {Error} If parsing fails or the schema is not a recognized Zod v3 or v4 schema.
*/ function interopParse(schema, input) {
    if (isZodSchemaV4(schema)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(schema, input);
    if (isZodSchemaV3(schema)) return schema.parse(input);
    throw new Error("Schema must be an instance of z3.ZodType or z4.$ZodType");
}
/**
* Retrieves the description from a schema definition (v3, v4, or plain object), if available.
*
* @param {unknown} schema - The schema to extract the description from.
* @returns {string | undefined} The description of the schema, or undefined if not present.
*/ function getSchemaDescription(schema) {
    if (isZodSchemaV4(schema)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(schema)?.description;
    if (isZodSchemaV3(schema)) return schema.description;
    if ("description" in schema && typeof schema.description === "string") return schema.description;
    return void 0;
}
/**
* Determines if the provided Zod schema is "shapeless".
* A shapeless schema is one that does not define any object shape,
* such as ZodString, ZodNumber, ZodBoolean, ZodAny, etc.
* For ZodObject, it must have no shape keys to be considered shapeless.
* ZodRecord schemas are considered shapeless since they define dynamic
* key-value mappings without fixed keys.
*
* @param schema The Zod schema to check.
* @returns {boolean} True if the schema is shapeless, false otherwise.
*/ function isShapelessZodSchema(schema) {
    if (!isInteropZodSchema(schema)) return false;
    if (isZodSchemaV3(schema)) {
        const def = schema._def;
        if (def.typeName === "ZodObject") {
            const obj = schema;
            return !obj.shape || Object.keys(obj.shape).length === 0;
        }
        if (def.typeName === "ZodRecord") return true;
    }
    if (isZodSchemaV4(schema)) {
        const def = schema._zod.def;
        if (def.type === "object") {
            const obj = schema;
            return !obj.shape || Object.keys(obj.shape).length === 0;
        }
        if (def.type === "record") return true;
    }
    if (typeof schema === "object" && schema !== null && !("shape" in schema)) return true;
    return false;
}
/**
* Determines if the provided Zod schema should be treated as a simple string schema
* that maps to DynamicTool. This aligns with the type-level constraint of
* InteropZodType<string | undefined> which only matches basic string schemas.
* If the provided schema is just z.string(), we can make the determination that
* the tool is just a generic string tool that doesn't require any input validation.
*
* This function only returns true for basic ZodString schemas, including:
* - Basic string schemas (z.string())
* - String schemas with validations (z.string().min(1), z.string().email(), etc.)
*
* This function returns false for everything else, including:
* - String schemas with defaults (z.string().default("value"))
* - Branded string schemas (z.string().brand<"UserId">())
* - String schemas with catch operations (z.string().catch("default"))
* - Optional/nullable string schemas (z.string().optional())
* - Transformed schemas (z.string().transform() or z.object().transform())
* - Object or record schemas, even if they're empty
* - Any other schema type
*
* @param schema The Zod schema to check.
* @returns {boolean} True if the schema is a basic ZodString, false otherwise.
*/ function isSimpleStringZodSchema(schema) {
    if (!isInteropZodSchema(schema)) return false;
    if (isZodSchemaV3(schema)) {
        const def = schema._def;
        return def.typeName === "ZodString";
    }
    if (isZodSchemaV4(schema)) {
        const def = schema._zod.def;
        return def.type === "string";
    }
    return false;
}
function isZodObjectV3(obj) {
    if (typeof obj === "object" && obj !== null && "_def" in obj && typeof obj._def === "object" && obj._def !== null && "typeName" in obj._def && obj._def.typeName === "ZodObject") return true;
    return false;
}
function isZodObjectV4(obj) {
    if (!isZodSchemaV4(obj)) return false;
    if (typeof obj === "object" && obj !== null && "_zod" in obj && typeof obj._zod === "object" && obj._zod !== null && "def" in obj._zod && typeof obj._zod.def === "object" && obj._zod.def !== null && "type" in obj._zod.def && obj._zod.def.type === "object") return true;
    return false;
}
function isZodArrayV4(obj) {
    if (!isZodSchemaV4(obj)) return false;
    if (typeof obj === "object" && obj !== null && "_zod" in obj && typeof obj._zod === "object" && obj._zod !== null && "def" in obj._zod && typeof obj._zod.def === "object" && obj._zod.def !== null && "type" in obj._zod.def && obj._zod.def.type === "array") return true;
    return false;
}
/**
* Determines if the provided value is an InteropZodObject (Zod v3 or v4 object schema).
*
* @param obj The value to check.
* @returns {boolean} True if the value is a Zod v3 or v4 object schema, false otherwise.
*/ function isInteropZodObject(obj) {
    if (isZodObjectV3(obj)) return true;
    if (isZodObjectV4(obj)) return true;
    return false;
}
/**
* Retrieves the shape (fields) of a Zod object schema, supporting both Zod v3 and v4.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @returns {InteropZodObjectShape<T>} The shape of the object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function getInteropZodObjectShape(schema) {
    if (isZodSchemaV3(schema)) return schema.shape;
    if (isZodSchemaV4(schema)) return schema._zod.def.shape;
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
/**
* Extends a Zod object schema with additional fields, supporting both Zod v3 and v4.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @param {InteropZodObjectShape} extension - The fields to add to the schema.
* @returns {InteropZodObject} The extended Zod object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function extendInteropZodObject(schema, extension) {
    if (isZodSchemaV3(schema)) return schema.extend(extension);
    if (isZodSchemaV4(schema)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].extend(schema, extension);
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
/**
* Returns a partial version of a Zod object schema, making all fields optional.
* Supports both Zod v3 and v4.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @returns {InteropZodObject} The partial Zod object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function interopZodObjectPartial(schema) {
    if (isZodSchemaV3(schema)) return schema.partial();
    if (isZodSchemaV4(schema)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].partial(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodOptional"], schema, void 0);
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
/**
* Returns a strict version of a Zod object schema, disallowing unknown keys.
* Supports both Zod v3 and v4 object schemas. If `recursive` is true, applies strictness
* recursively to all nested object schemas and arrays of object schemas.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @param {boolean} [recursive=false] - Whether to apply strictness recursively to nested objects/arrays.
* @returns {InteropZodObject} The strict Zod object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function interopZodObjectStrict(schema, recursive = false) {
    if (isZodSchemaV3(schema)) return schema.strict();
    if (isZodObjectV4(schema)) {
        const outputShape = schema._zod.def.shape;
        if (recursive) for (const [key, keySchema] of Object.entries(schema._zod.def.shape)){
            if (isZodObjectV4(keySchema)) {
                const outputSchema = interopZodObjectStrict(keySchema, recursive);
                outputShape[key] = outputSchema;
            } else if (isZodArrayV4(keySchema)) {
                let elementSchema = keySchema._zod.def.element;
                if (isZodObjectV4(elementSchema)) elementSchema = interopZodObjectStrict(elementSchema, recursive);
                outputShape[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(keySchema, {
                    ...keySchema._zod.def,
                    element: elementSchema
                });
            } else outputShape[key] = keySchema;
            const meta$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(keySchema);
            if (meta$1) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(outputShape[key], meta$1);
        }
        const modifiedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(schema, {
            ...schema._zod.def,
            shape: outputShape,
            catchall: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_never"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNever"])
        });
        const meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(schema);
        if (meta) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(modifiedSchema, meta);
        return modifiedSchema;
    }
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
/**
* Returns a passthrough version of a Zod object schema, allowing unknown keys.
* Supports both Zod v3 and v4 object schemas. If `recursive` is true, applies passthrough
* recursively to all nested object schemas and arrays of object schemas.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @param {boolean} [recursive=false] - Whether to apply passthrough recursively to nested objects/arrays.
* @returns {InteropZodObject} The passthrough Zod object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function interopZodObjectPassthrough(schema, recursive = false) {
    if (isZodObjectV3(schema)) return schema.passthrough();
    if (isZodObjectV4(schema)) {
        const outputShape = schema._zod.def.shape;
        if (recursive) for (const [key, keySchema] of Object.entries(schema._zod.def.shape)){
            if (isZodObjectV4(keySchema)) {
                const outputSchema = interopZodObjectPassthrough(keySchema, recursive);
                outputShape[key] = outputSchema;
            } else if (isZodArrayV4(keySchema)) {
                let elementSchema = keySchema._zod.def.element;
                if (isZodObjectV4(elementSchema)) elementSchema = interopZodObjectPassthrough(elementSchema, recursive);
                outputShape[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(keySchema, {
                    ...keySchema._zod.def,
                    element: elementSchema
                });
            } else outputShape[key] = keySchema;
            const meta$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(keySchema);
            if (meta$1) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(outputShape[key], meta$1);
        }
        const modifiedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(schema, {
            ...schema._zod.def,
            shape: outputShape,
            catchall: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_unknown"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"])
        });
        const meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(schema);
        if (meta) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(modifiedSchema, meta);
        return modifiedSchema;
    }
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
/**
* Returns a getter function for the default value of a Zod schema, if one is defined.
* Supports both Zod v3 and v4 schemas. If the schema has a default value,
* the returned function will return that value when called. If no default is defined,
* returns undefined.
*
* @template T - The type of the Zod schema.
* @param {T} schema - The Zod schema instance (either v3 or v4).
* @returns {(() => InferInteropZodOutput<T>) | undefined} A function that returns the default value, or undefined if no default is set.
*/ function getInteropZodDefaultGetter(schema) {
    if (isZodSchemaV3(schema)) try {
        const defaultValue = schema.parse(void 0);
        return ()=>defaultValue;
    } catch  {
        return void 0;
    }
    if (isZodSchemaV4(schema)) try {
        const defaultValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(schema, void 0);
        return ()=>defaultValue;
    } catch  {
        return void 0;
    }
    return void 0;
}
function isZodTransformV3(schema) {
    return isZodSchemaV3(schema) && "typeName" in schema._def && schema._def.typeName === "ZodEffects";
}
function isZodTransformV4(schema) {
    return isZodSchemaV4(schema) && schema._zod.def.type === "pipe";
}
/**
* Returns the input type of a Zod transform schema, for both v3 and v4.
* If the schema is not a transform, returns undefined. If `recursive` is true,
* recursively processes nested object schemas and arrays of object schemas.
*
* @param schema - The Zod schema instance (v3 or v4)
* @param {boolean} [recursive=false] - Whether to recursively process nested objects/arrays.
* @returns The input Zod schema of the transform, or undefined if not a transform
*/ function interopZodTransformInputSchema(schema, recursive = false) {
    if (isZodSchemaV3(schema)) {
        if (isZodTransformV3(schema)) return interopZodTransformInputSchema(schema._def.schema, recursive);
        return schema;
    }
    if (isZodSchemaV4(schema)) {
        let outputSchema = schema;
        if (isZodTransformV4(schema)) outputSchema = interopZodTransformInputSchema(schema._zod.def.in, recursive);
        if (recursive) {
            if (isZodObjectV4(outputSchema)) {
                const outputShape = outputSchema._zod.def.shape;
                for (const [key, keySchema] of Object.entries(outputSchema._zod.def.shape))outputShape[key] = interopZodTransformInputSchema(keySchema, recursive);
                outputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(outputSchema, {
                    ...outputSchema._zod.def,
                    shape: outputShape
                });
            } else if (isZodArrayV4(outputSchema)) {
                const elementSchema = interopZodTransformInputSchema(outputSchema._zod.def.element, recursive);
                outputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(outputSchema, {
                    ...outputSchema._zod.def,
                    element: elementSchema
                });
            }
        }
        const meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(schema);
        if (meta) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(outputSchema, meta);
        return outputSchema;
    }
    throw new Error("Schema must be an instance of z3.ZodType or z4.$ZodType");
}
/**
* Creates a modified version of a Zod object schema where fields matching a predicate are made optional.
* Supports both Zod v3 and v4 schemas and preserves the original schema version.
*
* @template T - The type of the Zod object schema.
* @param {T} schema - The Zod object schema instance (either v3 or v4).
* @param {(key: string, value: InteropZodType) => boolean} predicate - Function to determine which fields should be optional.
* @returns {InteropZodObject} The modified Zod object schema.
* @throws {Error} If the schema is not a Zod v3 or v4 object.
*/ function interopZodObjectMakeFieldsOptional(schema, predicate) {
    if (isZodSchemaV3(schema)) {
        const shape = getInteropZodObjectShape(schema);
        const modifiedShape = {};
        for (const [key, value] of Object.entries(shape))if (predicate(key, value)) modifiedShape[key] = value.optional();
        else modifiedShape[key] = value;
        return schema.extend(modifiedShape);
    }
    if (isZodSchemaV4(schema)) {
        const shape = getInteropZodObjectShape(schema);
        const outputShape = {
            ...schema._zod.def.shape
        };
        for (const [key, value] of Object.entries(shape))if (predicate(key, value)) outputShape[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodOptional"]({
            type: "optional",
            innerType: value
        });
        const modifiedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clone"])(schema, {
            ...schema._zod.def,
            shape: outputShape
        });
        const meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].get(schema);
        if (meta) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalRegistry"].add(modifiedSchema, meta);
        return modifiedSchema;
    }
    throw new Error("Schema must be an instance of z3.ZodObject or z4.$ZodObject");
}
;
 //# sourceMappingURL=zod.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/graph_mermaid.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/runnables/graph_mermaid.ts
__turbopack_context__.s([
    "drawMermaid",
    ()=>drawMermaid,
    "drawMermaidImage",
    ()=>drawMermaidImage
]);
function _escapeNodeLabel(nodeLabel) {
    return nodeLabel.replace(/[^a-zA-Z-_0-9]/g, "_");
}
const MARKDOWN_SPECIAL_CHARS = [
    "*",
    "_",
    "`"
];
function _generateMermaidGraphStyles(nodeColors) {
    let styles = "";
    for (const [className, color] of Object.entries(nodeColors))styles += `\tclassDef ${className} ${color};\n`;
    return styles;
}
/**
* Draws a Mermaid graph using the provided graph data
*/ function drawMermaid(nodes, edges, config) {
    const { firstNode, lastNode, nodeColors, withStyles = true, curveStyle = "linear", wrapLabelNWords = 9 } = config ?? {};
    let mermaidGraph = withStyles ? `%%{init: {'flowchart': {'curve': '${curveStyle}'}}}%%\ngraph TD;\n` : "graph TD;\n";
    if (withStyles) {
        const defaultClassLabel = "default";
        const formatDict = {
            [defaultClassLabel]: "{0}({1})"
        };
        if (firstNode !== void 0) formatDict[firstNode] = "{0}([{1}]):::first";
        if (lastNode !== void 0) formatDict[lastNode] = "{0}([{1}]):::last";
        for (const [key, node] of Object.entries(nodes)){
            const nodeName = node.name.split(":").pop() ?? "";
            const label = MARKDOWN_SPECIAL_CHARS.some((char)=>nodeName.startsWith(char) && nodeName.endsWith(char)) ? `<p>${nodeName}</p>` : nodeName;
            let finalLabel = label;
            if (Object.keys(node.metadata ?? {}).length) finalLabel += `<hr/><small><em>${Object.entries(node.metadata ?? {}).map(([k, v])=>`${k} = ${v}`).join("\n")}</em></small>`;
            const nodeLabel = (formatDict[key] ?? formatDict[defaultClassLabel]).replace("{0}", _escapeNodeLabel(key)).replace("{1}", finalLabel);
            mermaidGraph += `\t${nodeLabel}\n`;
        }
    }
    const edgeGroups = {};
    for (const edge of edges){
        const srcParts = edge.source.split(":");
        const tgtParts = edge.target.split(":");
        const commonPrefix = srcParts.filter((src, i)=>src === tgtParts[i]).join(":");
        if (!edgeGroups[commonPrefix]) edgeGroups[commonPrefix] = [];
        edgeGroups[commonPrefix].push(edge);
    }
    const seenSubgraphs = /* @__PURE__ */ new Set();
    function addSubgraph(edges$1, prefix) {
        const selfLoop = edges$1.length === 1 && edges$1[0].source === edges$1[0].target;
        if (prefix && !selfLoop) {
            const subgraph = prefix.split(":").pop();
            if (seenSubgraphs.has(subgraph)) throw new Error(`Found duplicate subgraph '${subgraph}' -- this likely means that you're reusing a subgraph node with the same name. Please adjust your graph to have subgraph nodes with unique names.`);
            seenSubgraphs.add(subgraph);
            mermaidGraph += `\tsubgraph ${subgraph}\n`;
        }
        for (const edge of edges$1){
            const { source, target, data, conditional } = edge;
            let edgeLabel = "";
            if (data !== void 0) {
                let edgeData = data;
                const words = edgeData.split(" ");
                if (words.length > wrapLabelNWords) edgeData = Array.from({
                    length: Math.ceil(words.length / wrapLabelNWords)
                }, (_, i)=>words.slice(i * wrapLabelNWords, (i + 1) * wrapLabelNWords).join(" ")).join("&nbsp;<br>&nbsp;");
                edgeLabel = conditional ? ` -. &nbsp;${edgeData}&nbsp; .-> ` : ` -- &nbsp;${edgeData}&nbsp; --> `;
            } else edgeLabel = conditional ? " -.-> " : " --> ";
            mermaidGraph += `\t${_escapeNodeLabel(source)}${edgeLabel}${_escapeNodeLabel(target)};\n`;
        }
        for(const nestedPrefix in edgeGroups)if (nestedPrefix.startsWith(`${prefix}:`) && nestedPrefix !== prefix) addSubgraph(edgeGroups[nestedPrefix], nestedPrefix);
        if (prefix && !selfLoop) mermaidGraph += "	end\n";
    }
    addSubgraph(edgeGroups[""] ?? [], "");
    for(const prefix in edgeGroups)if (!prefix.includes(":") && prefix !== "") addSubgraph(edgeGroups[prefix], prefix);
    if (withStyles) mermaidGraph += _generateMermaidGraphStyles(nodeColors ?? {});
    return mermaidGraph;
}
/**
* Renders Mermaid graph using the Mermaid.INK API.
*
* @example
* ```javascript
* const image = await drawMermaidImage(mermaidSyntax, {
*   backgroundColor: "white",
*   imageType: "png",
* });
* fs.writeFileSync("image.png", image);
* ```
*
* @param mermaidSyntax - The Mermaid syntax to render.
* @param config - The configuration for the image.
* @returns The image as a Blob.
*/ async function drawMermaidImage(mermaidSyntax, config) {
    let backgroundColor = config?.backgroundColor ?? "white";
    const imageType = config?.imageType ?? "png";
    const mermaidSyntaxEncoded = btoa(mermaidSyntax);
    if (backgroundColor !== void 0) {
        const hexColorPattern = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (!hexColorPattern.test(backgroundColor)) backgroundColor = `!${backgroundColor}`;
    }
    const imageUrl = `https://mermaid.ink/img/${mermaidSyntaxEncoded}?bgColor=${backgroundColor}&type=${imageType}`;
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error([
        `Failed to render the graph using the Mermaid.INK API.`,
        `Status code: ${res.status}`,
        `Status text: ${res.statusText}`
    ].join("\n"));
    const content = await res.blob();
    return content;
}
;
 //# sourceMappingURL=graph_mermaid.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Options.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/Options.ts
__turbopack_context__.s([
    "defaultOptions",
    ()=>defaultOptions,
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "ignoreOverride",
    ()=>ignoreOverride
]);
const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
    openAiAnyTypeName: "OpenAiAnyType"
};
const getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
;
 //# sourceMappingURL=Options.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Refs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRefs",
    ()=>getRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Options.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/Refs.ts
const getRefs = (options)=>{
    const _options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultOptions"])(options);
    const currentPath = _options.name !== void 0 ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        flags: {
            hasReferencedOpenAiAnyType: false
        },
        currentPath,
        propertyPath: void 0,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    jsonSchema: void 0
                }
            ]))
    };
};
;
 //# sourceMappingURL=Refs.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/getRelativePath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/getRelativePath.ts
__turbopack_context__.s([
    "getRelativePath",
    ()=>getRelativePath
]);
const getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++)if (pathA[i] !== pathB[i]) break;
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
;
 //# sourceMappingURL=getRelativePath.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAnyDef",
    ()=>parseAnyDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/getRelativePath.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/any.ts
function parseAnyDef(refs) {
    if (refs.target !== "openAi") return {};
    const anyDefinitionPath = [
        ...refs.basePath,
        refs.definitionPath,
        refs.openAiAnyTypeName
    ];
    refs.flags.hasReferencedOpenAiAnyType = true;
    return {
        $ref: refs.$refStrategy === "relative" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRelativePath"])(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
    };
}
;
 //# sourceMappingURL=any.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/errorMessages.ts
__turbopack_context__.s([
    "addErrorMessage",
    ()=>addErrorMessage,
    "setResponseValueAndErrors",
    ()=>setResponseValueAndErrors
]);
function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages) return;
    if (errorMessage) res.errorMessage = {
        ...res.errorMessage,
        [key]: errorMessage
    };
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
}
;
 //# sourceMappingURL=errorMessages.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/array.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseArrayDef",
    ()=>parseArrayDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js [app-route] (ecmascript)");
;
;
;
//#region src/utils/zod-to-json-schema/parsers/array.ts
function parseArrayDef(def, refs) {
    const res = {
        type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) res.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    if (def.minLength) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.minLength.value, def.minLength.message, refs);
    if (def.maxLength) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    if (def.exactLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
}
;
 //# sourceMappingURL=array.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/bigint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBigintDef",
    ()=>parseBigintDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/bigint.ts
function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks)switch(check.kind){
        case "min":
            if (refs.target === "jsonSchema7") if (check.inclusive) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
            else {
                if (!check.inclusive) res.exclusiveMinimum = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
            }
            break;
        case "max":
            if (refs.target === "jsonSchema7") if (check.inclusive) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
            else {
                if (!check.inclusive) res.exclusiveMaximum = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
            }
            break;
        case "multipleOf":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
            break;
    }
    return res;
}
;
 //# sourceMappingURL=bigint.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/boolean.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/parsers/boolean.ts
__turbopack_context__.s([
    "parseBooleanDef",
    ()=>parseBooleanDef
]);
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
;
 //# sourceMappingURL=boolean.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/branded.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBrandedDef",
    ()=>parseBrandedDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/branded.ts
function parseBrandedDef(_def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.type._def, refs);
}
;
 //# sourceMappingURL=branded.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/catch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCatchDef",
    ()=>parseCatchDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/catch.ts
const parseCatchDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
;
 //# sourceMappingURL=catch.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/date.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDateDef",
    ()=>parseDateDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/date.ts
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) return {
        anyOf: strategy.map((item)=>parseDateDef(def, refs, item))
    };
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
const integerDateParser = (def, refs)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    if (refs.target === "openApi3") return res;
    for (const check of def.checks)switch(check.kind){
        case "min":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
            break;
        case "max":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
            break;
    }
    return res;
};
;
 //# sourceMappingURL=date.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/default.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDefaultDef",
    ()=>parseDefaultDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/default.ts
function parseDefaultDef(_def, refs) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
;
 //# sourceMappingURL=default.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/effects.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseEffectsDef",
    ()=>parseEffectsDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
//#region src/utils/zod-to-json-schema/parsers/effects.ts
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.schema._def, refs) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
}
;
 //# sourceMappingURL=effects.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/enum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/parsers/enum.ts
__turbopack_context__.s([
    "parseEnumDef",
    ()=>parseEnumDef
]);
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
;
 //# sourceMappingURL=enum.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/intersection.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseIntersectionDef",
    ()=>parseIntersectionDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/intersection.ts
const isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? {
        unevaluatedProperties: false
    } : void 0;
    const mergedAllOf = [];
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
            if (schema.unevaluatedProperties === void 0) unevaluatedProperties = void 0;
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            } else unevaluatedProperties = void 0;
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf,
        ...unevaluatedProperties
    } : void 0;
}
;
 //# sourceMappingURL=intersection.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/literal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/parsers/literal.ts
__turbopack_context__.s([
    "parseLiteralDef",
    ()=>parseLiteralDef
]);
function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return {
        type: Array.isArray(def.value) ? "array" : "object"
    };
    if (refs.target === "openApi3") return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        enum: [
            def.value
        ]
    };
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
;
 //# sourceMappingURL=literal.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStringDef",
    ()=>parseStringDef,
    "zodPatterns",
    ()=>zodPatterns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/string.ts
let emojiRegex = void 0;
/**
* Generated from the regular expressions found here as of 2024-05-22:
* https://github.com/colinhacks/zod/blob/master/src/types.ts.
*
* Expressions with /i flag have been changed accordingly.
*/ const zodPatterns = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: ()=>{
        if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        return emojiRegex;
    },
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) for (const check of def.checks)switch(check.kind){
        case "min":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            break;
        case "max":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
        case "email":
            switch(refs.emailStrategy){
                case "format:email":
                    addFormat(res, "email", check.message, refs);
                    break;
                case "format:idn-email":
                    addFormat(res, "idn-email", check.message, refs);
                    break;
                case "pattern:zod":
                    addPattern(res, zodPatterns.email, check.message, refs);
                    break;
            }
            break;
        case "url":
            addFormat(res, "uri", check.message, refs);
            break;
        case "uuid":
            addFormat(res, "uuid", check.message, refs);
            break;
        case "regex":
            addPattern(res, check.regex, check.message, refs);
            break;
        case "cuid":
            addPattern(res, zodPatterns.cuid, check.message, refs);
            break;
        case "cuid2":
            addPattern(res, zodPatterns.cuid2, check.message, refs);
            break;
        case "startsWith":
            addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
            break;
        case "endsWith":
            addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
            break;
        case "datetime":
            addFormat(res, "date-time", check.message, refs);
            break;
        case "date":
            addFormat(res, "date", check.message, refs);
            break;
        case "time":
            addFormat(res, "time", check.message, refs);
            break;
        case "duration":
            addFormat(res, "duration", check.message, refs);
            break;
        case "length":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
            break;
        case "includes":
            addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
            break;
        case "ip":
            if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
            if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
            break;
        case "base64url":
            addPattern(res, zodPatterns.base64url, check.message, refs);
            break;
        case "jwt":
            addPattern(res, zodPatterns.jwt, check.message, refs);
            break;
        case "cidr":
            if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
            if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
            break;
        case "emoji":
            addPattern(res, zodPatterns.emoji(), check.message, refs);
            break;
        case "ulid":
            addPattern(res, zodPatterns.ulid, check.message, refs);
            break;
        case "base64":
            switch(refs.base64Strategy){
                case "format:binary":
                    addFormat(res, "binary", check.message, refs);
                    break;
                case "contentEncoding:base64":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "contentEncoding", "base64", check.message, refs);
                    break;
                case "pattern:zod":
                    addPattern(res, zodPatterns.base64, check.message, refs);
                    break;
            }
            break;
        case "nanoid":
            addPattern(res, zodPatterns.nanoid, check.message, refs);
            break;
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
            break;
        default:
            /* c8 ignore next */ ((_)=>{})(check);
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
const ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
        result += source[i];
    }
    return result;
}
function addFormat(schema, value, message, refs) {
    if (schema.format || schema.anyOf?.some((x)=>x.format)) {
        if (!schema.anyOf) schema.anyOf = [];
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        format: schema.errorMessage.format
                    }
                }
            });
            delete schema.format;
            if (schema.errorMessage) {
                delete schema.errorMessage.format;
                if (Object.keys(schema.errorMessage).length === 0) delete schema.errorMessage;
            }
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "format", value, message, refs);
}
function addPattern(schema, regex, message, refs) {
    if (schema.pattern || schema.allOf?.some((x)=>x.pattern)) {
        if (!schema.allOf) schema.allOf = [];
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        pattern: schema.errorMessage.pattern
                    }
                }
            });
            delete schema.pattern;
            if (schema.errorMessage) {
                delete schema.errorMessage.pattern;
                if (Object.keys(schema.errorMessage).length === 0) delete schema.errorMessage;
            }
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) return regex.source;
    const flags = {
        i: regex.flags.includes("i"),
        m: regex.flags.includes("m"),
        s: regex.flags.includes("s")
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
                        pattern += source[i];
                        inCharRange = true;
                    } else pattern += `${source[i]}${source[i].toUpperCase()}`;
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r\n]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r\n]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r\n` : `[${source[i]}\r\n]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") isEscaped = true;
        else if (inCharGroup && source[i] === "]") inCharGroup = false;
        else if (!inCharGroup && source[i] === "[") inCharGroup = true;
    }
    try {
        new RegExp(pattern);
    } catch  {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
;
 //# sourceMappingURL=string.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/record.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseRecordDef",
    ()=>parseRecordDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/utils/zod-to-json-schema/parsers/record.ts
function parseRecordDef(def, refs) {
    if (refs.target === "openAi") console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    if (refs.target === "openApi3" && def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) return {
        type: "object",
        required: def.keyType._def.values,
        properties: def.keyType._def.values.reduce((acc, key)=>({
                ...acc,
                [key]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "properties",
                        key
                    ]
                }) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
            }), {}),
        additionalProperties: refs.rejectedAdditionalProperties
    };
    const schema = {
        type: "object",
        additionalProperties: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") return schema;
    if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseStringDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) return {
        ...schema,
        propertyNames: {
            enum: def.keyType._def.values
        }
    };
    else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.type._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
;
 //# sourceMappingURL=record.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/map.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseMapDef",
    ()=>parseMapDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
;
//#region src/utils/zod-to-json-schema/parsers/map.ts
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
;
 //# sourceMappingURL=map.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nativeEnum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/parsers/nativeEnum.ts
__turbopack_context__.s([
    "parseNativeEnumDef",
    ()=>parseNativeEnumDef
]);
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
;
 //# sourceMappingURL=nativeEnum.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/never.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNeverDef",
    ()=>parseNeverDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/never.ts
function parseNeverDef(refs) {
    return refs.target === "openAi" ? void 0 : {
        not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])({
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "not"
            ]
        })
    };
}
;
 //# sourceMappingURL=never.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/null.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/zod-to-json-schema/parsers/null.ts
__turbopack_context__.s([
    "parseNullDef",
    ()=>parseNullDef
]);
function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
        enum: [
            "null"
        ],
        nullable: true
    } : {
        type: "null"
    };
}
;
 //# sourceMappingURL=null.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/union.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUnionDef",
    ()=>parseUnionDef,
    "primitiveMappings",
    ()=>primitiveMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/union.ts
const primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    if (refs.target === "openApi3") return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        const types = options.reduce((types$1, x)=>{
            const type = primitiveMappings[x._def.typeName];
            return type && !types$1.includes(type) ? [
                ...types$1,
                type
            ] : types$1;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                    return acc;
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) return {
        type: "string",
        enum: options.reduce((acc, x)=>[
                ...acc,
                ...x._def.values.filter((x$1)=>!acc.includes(x$1))
            ], [])
    };
    return asAnyOf(def, refs);
}
const asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : void 0;
};
;
 //# sourceMappingURL=union.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nullable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNullableDef",
    ()=>parseNullableDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
//#region src/utils/zod-to-json-schema/parsers/nullable.ts
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
            nullable: true
        };
        return {
            type: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                "null"
            ]
        };
    }
    if (refs.target === "openApi3") {
        const base$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath
            ]
        });
        if (base$1 && "$ref" in base$1) return {
            allOf: [
                base$1
            ],
            nullable: true
        };
        return base$1 && {
            ...base$1,
            nullable: true
        };
    }
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
;
 //# sourceMappingURL=nullable.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/number.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNumberDef",
    ()=>parseNumberDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/number.ts
function parseNumberDef(def, refs) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks)switch(check.kind){
        case "int":
            res.type = "integer";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addErrorMessage"])(res, "type", check.message, refs);
            break;
        case "min":
            if (refs.target === "jsonSchema7") if (check.inclusive) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
            else {
                if (!check.inclusive) res.exclusiveMinimum = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
            }
            break;
        case "max":
            if (refs.target === "jsonSchema7") if (check.inclusive) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
            else {
                if (!check.inclusive) res.exclusiveMaximum = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
            }
            break;
        case "multipleOf":
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
            break;
    }
    return res;
}
;
 //# sourceMappingURL=number.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseObjectDef",
    ()=>parseObjectDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/object.ts
function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === void 0 || propDef._def === void 0) continue;
        let propOptional = safeIsOptional(propDef);
        if (propOptional && forceOptionalIntoNullable) {
            if (propDef._def.typeName === "ZodOptional") propDef = propDef._def.innerType;
            if (!propDef.isNullable()) propDef = propDef.nullable();
            propOptional = false;
        }
        const parsedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === void 0) continue;
        result.properties[propName] = parsedDef;
        if (!propOptional) required.push(propName);
    }
    if (required.length) result.required = required;
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.catchall._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "additionalProperties"
        ]
    });
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch  {
        return true;
    }
}
;
 //# sourceMappingURL=object.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/optional.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOptionalDef",
    ()=>parseOptionalDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
//#region src/utils/zod-to-json-schema/parsers/optional.ts
const parseOptionalDef = (def, refs)=>{
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
    const innerSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
            },
            innerSchema
        ]
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
};
;
 //# sourceMappingURL=optional.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/pipeline.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePipelineDef",
    ()=>parsePipelineDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/pipeline.ts
const parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, refs);
    else if (refs.pipeStrategy === "output") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, refs);
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== void 0)
    };
};
;
 //# sourceMappingURL=pipeline.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePromiseDef",
    ()=>parsePromiseDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/promise.ts
function parsePromiseDef(def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, refs);
}
;
 //# sourceMappingURL=promise.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/set.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSetDef",
    ()=>parseSetDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
//#region src/utils/zod-to-json-schema/parsers/set.ts
function parseSetDef(def, refs) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    if (def.maxSize) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    return schema;
}
;
 //# sourceMappingURL=set.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/tuple.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseTupleDef",
    ()=>parseTupleDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/tuple.ts
function parseTupleDef(def, refs) {
    if (def.rest) return {
        type: "array",
        minItems: def.items.length,
        items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "items",
                    `${i}`
                ]
            })).reduce((acc, x)=>x === void 0 ? acc : [
                ...acc,
                x
            ], []),
        additionalItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.rest._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalItems"
            ]
        })
    };
    else return {
        type: "array",
        minItems: def.items.length,
        maxItems: def.items.length,
        items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "items",
                    `${i}`
                ]
            })).reduce((acc, x)=>x === void 0 ? acc : [
                ...acc,
                x
            ], [])
    };
}
;
 //# sourceMappingURL=tuple.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/undefined.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUndefinedDef",
    ()=>parseUndefinedDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/undefined.ts
function parseUndefinedDef(refs) {
    return {
        not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
    };
}
;
 //# sourceMappingURL=undefined.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/unknown.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUnknownDef",
    ()=>parseUnknownDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/unknown.ts
function parseUnknownDef(refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
}
;
 //# sourceMappingURL=unknown.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/readonly.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseReadonlyDef",
    ()=>parseReadonlyDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
//#region src/utils/zod-to-json-schema/parsers/readonly.ts
const parseReadonlyDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
;
 //# sourceMappingURL=readonly.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/selectParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectParser",
    ()=>selectParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/bigint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/catch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/default.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/effects.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/literal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/map.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nativeEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/never.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/null.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/tuple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/unknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/readonly.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/utils/zod-to-json-schema/selectParser.ts
const selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseStringDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNumberDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseObjectDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBigintDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBooleanDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDateDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUndefinedDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNullDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseArrayDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseIntersectionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTupleDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseLiteralDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNativeEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNullableDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOptionalDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseMapDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSetDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePromiseDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNeverDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEffectsDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnknownDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDefaultDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseReadonlyDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCatchDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePipelineDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return void 0;
        default:
            /* c8 ignore next */ return ((_)=>void 0)(typeName);
    }
};
;
 //# sourceMappingURL=selectParser.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDef",
    ()=>parseDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/getRelativePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/selectParser.js [app-route] (ecmascript)");
;
;
;
;
//#region src/utils/zod-to-json-schema/parseDef.ts
function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
        if (overrideResult !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ignoreOverride"]) return overrideResult;
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== void 0) return seenSchema;
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: void 0
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["selectParser"])(def, def.typeName, refs);
    const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema) addMeta(def, refs, jsonSchema);
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema, def, refs);
        newItem.jsonSchema = jsonSchema;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
}
const get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRelativePath"])(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
            }
            return refs.$refStrategy === "seen" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs) : void 0;
    }
};
const addMeta = (def, refs, jsonSchema)=>{
    if (def.description) {
        jsonSchema.description = def.description;
        if (refs.markdownDescription) jsonSchema.markdownDescription = def.description;
    }
    return jsonSchema;
};
;
 //# sourceMappingURL=parseDef.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/zodToJsonSchema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodToJsonSchema",
    ()=>zodToJsonSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Refs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
;
;
;
//#region src/utils/zod-to-json-schema/zodToJsonSchema.ts
const zodToJsonSchema = (schema, options)=>{
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRefs"])(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name$1, schema$1])=>({
            ...acc,
            [name$1]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(schema$1._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name$1
                ]
            }, true) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
        }), {}) : void 0;
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, name === void 0 ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) main.title = title;
    if (refs.flags.hasReferencedOpenAiAnyType) {
        if (!definitions) definitions = {};
        if (!definitions[refs.openAiAnyTypeName]) definitions[refs.openAiAnyTypeName] = {
            type: [
                "string",
                "number",
                "integer",
                "boolean",
                "array",
                "null"
            ],
            items: {
                $ref: refs.$refStrategy === "relative" ? "1" : [
                    ...refs.basePath,
                    refs.definitionPath,
                    refs.openAiAnyTypeName
                ].join("/")
            }
        };
    }
    const combined = name === void 0 ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    if (refs.target === "jsonSchema7") combined.$schema = "http://json-schema.org/draft-07/schema#";
    else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    return combined;
};
;
 //# sourceMappingURL=zodToJsonSchema.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/Refs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/getRelativePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/bigint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/catch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/default.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/effects.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/literal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/map.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nativeEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/never.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/null.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/tuple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/unknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parsers/readonly.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/selectParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$zodToJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/zodToJsonSchema.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/json_schema.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "json_schema_exports",
    ()=>json_schema_exports,
    "toJsonSchema",
    ()=>toJsonSchema,
    "validatesOnlyStrings",
    ()=>validatesOnlyStrings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$zodToJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/zodToJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/zod-to-json-schema/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/to-json-schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@cfworker+json-schema@4.1.1/node_modules/@cfworker/json-schema/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@cfworker+json-schema@4.1.1/node_modules/@cfworker/json-schema/dist/esm/validator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@cfworker+json-schema@4.1.1/node_modules/@cfworker/json-schema/dist/esm/deep-compare-strict.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@cfworker+json-schema@4.1.1/node_modules/@cfworker/json-schema/dist/esm/dereference.js [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/utils/json_schema.ts
var json_schema_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(json_schema_exports, {
    Validator: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Validator"],
    deepCompareStrict: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCompareStrict"],
    toJsonSchema: ()=>toJsonSchema,
    validatesOnlyStrings: ()=>validatesOnlyStrings
});
/**
* Converts a Zod schema or JSON schema to a JSON schema.
* @param schema - The schema to convert.
* @returns The converted schema.
*/ function toJsonSchema(schema) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isZodSchemaV4"])(schema)) {
        const inputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopZodTransformInputSchema"])(schema, true);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isZodObjectV4"])(inputSchema)) {
            const strictSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopZodObjectStrict"])(inputSchema, true);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJSONSchema"])(strictSchema);
        } else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJSONSchema"])(schema);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isZodSchemaV3"])(schema)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$zod$2d$to$2d$json$2d$schema$2f$zodToJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zodToJsonSchema"])(schema);
    return schema;
}
/**
* Validates if a JSON schema validates only strings. May return false negatives in some edge cases
* (like recursive or unresolvable refs).
*
* @param schema - The schema to validate.
* @returns `true` if the schema validates only strings, `false` otherwise.
*/ function validatesOnlyStrings(schema) {
    if (!schema || typeof schema !== "object" || Object.keys(schema).length === 0 || Array.isArray(schema)) return false;
    if ("type" in schema) {
        if (typeof schema.type === "string") return schema.type === "string";
        if (Array.isArray(schema.type)) return schema.type.every((t)=>t === "string");
        return false;
    }
    if ("enum" in schema) return Array.isArray(schema.enum) && schema.enum.length > 0 && schema.enum.every((val)=>typeof val === "string");
    if ("const" in schema) return typeof schema.const === "string";
    if ("allOf" in schema && Array.isArray(schema.allOf)) return schema.allOf.some((subschema)=>validatesOnlyStrings(subschema));
    if ("anyOf" in schema && Array.isArray(schema.anyOf) || "oneOf" in schema && Array.isArray(schema.oneOf)) {
        const subschemas = "anyOf" in schema ? schema.anyOf : schema.oneOf;
        return subschemas.length > 0 && subschemas.every((subschema)=>validatesOnlyStrings(subschema));
    }
    if ("not" in schema) return false;
    if ("$ref" in schema && typeof schema.$ref === "string") {
        const ref = schema.$ref;
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$cfworker$2b$json$2d$schema$40$4$2e$1$2e$1$2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dereference"])(schema);
        if (resolved[ref]) return validatesOnlyStrings(resolved[ref]);
        return false;
    }
    return false;
}
;
 //# sourceMappingURL=json_schema.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/graph.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Graph",
    ()=>Graph,
    "graph_exports",
    ()=>graph_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph_mermaid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/graph_mermaid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/json_schema.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript) <export default as validate>");
;
;
;
;
;
//#region src/runnables/graph.ts
var graph_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(graph_exports, {
    Graph: ()=>Graph
});
function nodeDataStr(id, data) {
    if (id !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(id)) return id;
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRunnableInterface"])(data)) try {
        let dataStr = data.getName();
        dataStr = dataStr.startsWith("Runnable") ? dataStr.slice(8) : dataStr;
        return dataStr;
    } catch  {
        return data.getName();
    }
    else return data.name ?? "UnknownSchema";
}
function nodeDataJson(node) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRunnableInterface"])(node.data)) return {
        type: "runnable",
        data: {
            id: node.data.lc_id,
            name: node.data.getName()
        }
    };
    else return {
        type: "schema",
        data: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toJsonSchema"])(node.data.schema),
            title: node.data.name
        }
    };
}
var Graph = class Graph {
    nodes = {};
    edges = [];
    constructor(params){
        this.nodes = params?.nodes ?? this.nodes;
        this.edges = params?.edges ?? this.edges;
    }
    toJSON() {
        const stableNodeIds = {};
        Object.values(this.nodes).forEach((node, i)=>{
            stableNodeIds[node.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(node.id) ? i : node.id;
        });
        return {
            nodes: Object.values(this.nodes).map((node)=>({
                    id: stableNodeIds[node.id],
                    ...nodeDataJson(node)
                })),
            edges: this.edges.map((edge)=>{
                const item = {
                    source: stableNodeIds[edge.source],
                    target: stableNodeIds[edge.target]
                };
                if (typeof edge.data !== "undefined") item.data = edge.data;
                if (typeof edge.conditional !== "undefined") item.conditional = edge.conditional;
                return item;
            })
        };
    }
    addNode(data, id, metadata) {
        if (id !== void 0 && this.nodes[id] !== void 0) throw new Error(`Node with id ${id} already exists`);
        const nodeId = id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        const node = {
            id: nodeId,
            data,
            name: nodeDataStr(id, data),
            metadata
        };
        this.nodes[nodeId] = node;
        return node;
    }
    removeNode(node) {
        delete this.nodes[node.id];
        this.edges = this.edges.filter((edge)=>edge.source !== node.id && edge.target !== node.id);
    }
    addEdge(source, target, data, conditional) {
        if (this.nodes[source.id] === void 0) throw new Error(`Source node ${source.id} not in graph`);
        if (this.nodes[target.id] === void 0) throw new Error(`Target node ${target.id} not in graph`);
        const edge = {
            source: source.id,
            target: target.id,
            data,
            conditional
        };
        this.edges.push(edge);
        return edge;
    }
    firstNode() {
        return _firstNode(this);
    }
    lastNode() {
        return _lastNode(this);
    }
    /**
	* Add all nodes and edges from another graph.
	* Note this doesn't check for duplicates, nor does it connect the graphs.
	*/ extend(graph, prefix = "") {
        let finalPrefix = prefix;
        const nodeIds = Object.values(graph.nodes).map((node)=>node.id);
        if (nodeIds.every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])) finalPrefix = "";
        const prefixed = (id)=>{
            return finalPrefix ? `${finalPrefix}:${id}` : id;
        };
        Object.entries(graph.nodes).forEach(([key, value])=>{
            this.nodes[prefixed(key)] = {
                ...value,
                id: prefixed(key)
            };
        });
        const newEdges = graph.edges.map((edge)=>{
            return {
                ...edge,
                source: prefixed(edge.source),
                target: prefixed(edge.target)
            };
        });
        this.edges = [
            ...this.edges,
            ...newEdges
        ];
        const first = graph.firstNode();
        const last = graph.lastNode();
        return [
            first ? {
                id: prefixed(first.id),
                data: first.data
            } : void 0,
            last ? {
                id: prefixed(last.id),
                data: last.data
            } : void 0
        ];
    }
    trimFirstNode() {
        const firstNode = this.firstNode();
        if (firstNode && _firstNode(this, [
            firstNode.id
        ])) this.removeNode(firstNode);
    }
    trimLastNode() {
        const lastNode = this.lastNode();
        if (lastNode && _lastNode(this, [
            lastNode.id
        ])) this.removeNode(lastNode);
    }
    /**
	* Return a new graph with all nodes re-identified,
	* using their unique, readable names where possible.
	*/ reid() {
        const nodeLabels = Object.fromEntries(Object.values(this.nodes).map((node)=>[
                node.id,
                node.name
            ]));
        const nodeLabelCounts = /* @__PURE__ */ new Map();
        Object.values(nodeLabels).forEach((label)=>{
            nodeLabelCounts.set(label, (nodeLabelCounts.get(label) || 0) + 1);
        });
        const getNodeId = (nodeId)=>{
            const label = nodeLabels[nodeId];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(nodeId) && nodeLabelCounts.get(label) === 1) return label;
            else return nodeId;
        };
        return new Graph({
            nodes: Object.fromEntries(Object.entries(this.nodes).map(([id, node])=>[
                    getNodeId(id),
                    {
                        ...node,
                        id: getNodeId(id)
                    }
                ])),
            edges: this.edges.map((edge)=>({
                    ...edge,
                    source: getNodeId(edge.source),
                    target: getNodeId(edge.target)
                }))
        });
    }
    drawMermaid(params) {
        const { withStyles, curveStyle, nodeColors = {
            default: "fill:#f2f0ff,line-height:1.2",
            first: "fill-opacity:0",
            last: "fill:#bfb6fc"
        }, wrapLabelNWords } = params ?? {};
        const graph = this.reid();
        const firstNode = graph.firstNode();
        const lastNode = graph.lastNode();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph_mermaid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drawMermaid"])(graph.nodes, graph.edges, {
            firstNode: firstNode?.id,
            lastNode: lastNode?.id,
            withStyles,
            curveStyle,
            nodeColors,
            wrapLabelNWords
        });
    }
    async drawMermaidPng(params) {
        const mermaidSyntax = this.drawMermaid(params);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph_mermaid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drawMermaidImage"])(mermaidSyntax, {
            backgroundColor: params?.backgroundColor
        });
    }
};
/**
* Find the single node that is not a target of any edge.
* Exclude nodes/sources with ids in the exclude list.
* If there is no such node, or there are multiple, return undefined.
* When drawing the graph, this node would be the origin.
*/ function _firstNode(graph, exclude = []) {
    const targets = new Set(graph.edges.filter((edge)=>!exclude.includes(edge.source)).map((edge)=>edge.target));
    const found = [];
    for (const node of Object.values(graph.nodes))if (!exclude.includes(node.id) && !targets.has(node.id)) found.push(node);
    return found.length === 1 ? found[0] : void 0;
}
/**
* Find the single node that is not a source of any edge.
* Exclude nodes/targets with ids in the exclude list.
* If there is no such node, or there are multiple, return undefined.
* When drawing the graph, this node would be the destination.
*/ function _lastNode(graph, exclude = []) {
    const sources = new Set(graph.edges.filter((edge)=>!exclude.includes(edge.target)).map((edge)=>edge.source));
    const found = [];
    for (const node of Object.values(graph.nodes))if (!exclude.includes(node.id) && !sources.has(node.id)) found.push(node);
    return found.length === 1 ? found[0] : void 0;
}
;
 //# sourceMappingURL=graph.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/wrappers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToHttpEventStream",
    ()=>convertToHttpEventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)");
;
//#region src/runnables/wrappers.ts
function convertToHttpEventStream(stream) {
    const encoder = new TextEncoder();
    const finalStream = new ReadableStream({
        async start (controller) {
            for await (const chunk of stream)controller.enqueue(encoder.encode(`event: data\ndata: ${JSON.stringify(chunk)}\n\n`));
            controller.enqueue(encoder.encode("event: end\n\n"));
            controller.close();
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromReadableStream(finalStream);
}
;
 //# sourceMappingURL=wrappers.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/iter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "consumeAsyncIterableInContext",
    ()=>consumeAsyncIterableInContext,
    "consumeIteratorInContext",
    ()=>consumeIteratorInContext,
    "isAsyncIterable",
    ()=>isAsyncIterable,
    "isIterableIterator",
    ()=>isIterableIterator,
    "isIterator",
    ()=>isIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
;
;
;
//#region src/runnables/iter.ts
function isIterableIterator(thing) {
    return typeof thing === "object" && thing !== null && typeof thing[Symbol.iterator] === "function" && typeof thing.next === "function";
}
const isIterator = (x)=>x != null && typeof x === "object" && "next" in x && typeof x.next === "function";
function isAsyncIterable(thing) {
    return typeof thing === "object" && thing !== null && typeof thing[Symbol.asyncIterator] === "function";
}
function* consumeIteratorInContext(context, iter) {
    while(true){
        const { value, done } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(context), iter.next.bind(iter), true);
        if (done) break;
        else yield value;
    }
}
async function* consumeAsyncIterableInContext(context, iter) {
    const iterator = iter[Symbol.asyncIterator]();
    while(true){
        const { value, done } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(context), iterator.next.bind(iter), true);
        if (done) break;
        else yield value;
    }
}
;
 //# sourceMappingURL=iter.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Runnable",
    ()=>Runnable,
    "RunnableAssign",
    ()=>RunnableAssign,
    "RunnableBinding",
    ()=>RunnableBinding,
    "RunnableEach",
    ()=>RunnableEach,
    "RunnableLambda",
    ()=>RunnableLambda,
    "RunnableMap",
    ()=>RunnableMap,
    "RunnableParallel",
    ()=>RunnableParallel,
    "RunnablePick",
    ()=>RunnablePick,
    "RunnableRetry",
    ()=>RunnableRetry,
    "RunnableSequence",
    ()=>RunnableSequence,
    "RunnableToolLike",
    ()=>RunnableToolLike,
    "RunnableWithFallbacks",
    ()=>RunnableWithFallbacks,
    "_coerceToDict",
    ()=>_coerceToDict,
    "_coerceToRunnable",
    ()=>_coerceToRunnable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/load/serializable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tools/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/signal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/log_stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$event_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/event_stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$async_caller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/async_caller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$root_listener$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/tracers/root_listener.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$wrappers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/wrappers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/iter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$retry$40$4$2e$6$2e$2$2f$node_modules$2f$p$2d$retry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/p-retry@4.6.2/node_modules/p-retry/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/singletons/traceable.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/langsmith@0.3.74_@opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8/node_modules/langsmith/dist/singletons/traceable.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/runnables/base.ts
function _coerceToDict(value, defaultKey) {
    return value && !Array.isArray(value) && !(value instanceof Date) && typeof value === "object" ? value : {
        [defaultKey]: value
    };
}
/**
* A Runnable is a generic unit of work that can be invoked, batched, streamed, and/or
* transformed.
*/ var Runnable = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$load$2f$serializable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Serializable"] {
    lc_runnable = true;
    name;
    getName(suffix) {
        const name = this.name ?? this.constructor.lc_name() ?? this.constructor.name;
        return suffix ? `${name}${suffix}` : name;
    }
    /**
	* Add retry logic to an existing runnable.
	* @param fields.stopAfterAttempt The number of attempts to retry.
	* @param fields.onFailedAttempt A function that is called when a retry fails.
	* @returns A new RunnableRetry that, when invoked, will retry according to the parameters.
	*/ withRetry(fields) {
        return new RunnableRetry({
            bound: this,
            kwargs: {},
            config: {},
            maxAttemptNumber: fields?.stopAfterAttempt,
            ...fields
        });
    }
    /**
	* Bind config to a Runnable, returning a new Runnable.
	* @param config New configuration parameters to attach to the new runnable.
	* @returns A new RunnableBinding with a config matching what's passed.
	*/ withConfig(config) {
        return new RunnableBinding({
            bound: this,
            config,
            kwargs: {}
        });
    }
    /**
	* Create a new runnable from the current one that will try invoking
	* other passed fallback runnables if the initial invocation fails.
	* @param fields.fallbacks Other runnables to call if the runnable errors.
	* @returns A new RunnableWithFallbacks.
	*/ withFallbacks(fields) {
        const fallbacks = Array.isArray(fields) ? fields : fields.fallbacks;
        return new RunnableWithFallbacks({
            runnable: this,
            fallbacks
        });
    }
    _getOptionsList(options, length = 0) {
        if (Array.isArray(options) && options.length !== length) throw new Error(`Passed "options" must be an array with the same length as the inputs, but got ${options.length} options for ${length} inputs`);
        if (Array.isArray(options)) return options.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"]);
        if (length > 1 && !Array.isArray(options) && options.runId) {
            console.warn("Provided runId will be used only for the first element of the batch.");
            const subsequent = Object.fromEntries(Object.entries(options).filter(([key])=>key !== "runId"));
            return Array.from({
                length
            }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(i === 0 ? options : subsequent));
        }
        return Array.from({
            length
        }, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options));
    }
    async batch(inputs, options, batchOptions) {
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const maxConcurrency = configList[0]?.maxConcurrency ?? batchOptions?.maxConcurrency;
        const caller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$async_caller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncCaller"]({
            maxConcurrency,
            onFailedAttempt: (e)=>{
                throw e;
            }
        });
        const batchCalls = inputs.map((input, i)=>caller.call(async ()=>{
                try {
                    const result = await this.invoke(input, configList[i]);
                    return result;
                } catch (e) {
                    if (batchOptions?.returnExceptions) return e;
                    throw e;
                }
            }));
        return Promise.all(batchCalls);
    }
    /**
	* Default streaming implementation.
	* Subclasses should override this method if they support streaming output.
	* @param input
	* @param options
	*/ async *_streamIterator(input, options) {
        yield this.invoke(input, options);
    }
    /**
	* Stream output in chunks.
	* @param input
	* @param options
	* @returns A readable stream that is also an iterable.
	*/ async stream(input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const wrappedGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncGeneratorWithSetup"]({
            generator: this._streamIterator(input, config),
            config
        });
        await wrappedGenerator.setup;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(wrappedGenerator);
    }
    _separateRunnableConfigFromCallOptions(options) {
        let runnableConfig;
        if (options === void 0) runnableConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        else runnableConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])({
            callbacks: options.callbacks,
            tags: options.tags,
            metadata: options.metadata,
            runName: options.runName,
            configurable: options.configurable,
            recursionLimit: options.recursionLimit,
            maxConcurrency: options.maxConcurrency,
            runId: options.runId,
            timeout: options.timeout,
            signal: options.signal
        });
        const callOptions = {
            ...options
        };
        delete callOptions.callbacks;
        delete callOptions.tags;
        delete callOptions.metadata;
        delete callOptions.runName;
        delete callOptions.configurable;
        delete callOptions.recursionLimit;
        delete callOptions.maxConcurrency;
        delete callOptions.runId;
        delete callOptions.timeout;
        delete callOptions.signal;
        return [
            runnableConfig,
            callOptions
        ];
    }
    async _callWithConfig(func, input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), config.runId, config?.runType, void 0, void 0, config?.runName ?? this.getName());
        delete config.runId;
        let output;
        try {
            const promise = func.call(this, input, config, runManager);
            output = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, options?.signal);
        } catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(output, "output"));
        return output;
    }
    /**
	* Internal method that handles batching and configuration for a runnable
	* It takes a function, input values, and optional configuration, and
	* returns a promise that resolves to the output values.
	* @param func The function to be executed for each input value.
	* @param input The input values to be processed.
	* @param config Optional configuration for the function execution.
	* @returns A promise that resolves to the output values.
	*/ async _batchWithConfig(func, inputs, options, batchOptions) {
        const optionsList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(optionsList.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"]));
        const runManagers = await Promise.all(callbackManagers.map(async (callbackManager, i)=>{
            const handleStartRes = await callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), optionsList[i].runId, optionsList[i].runType, void 0, void 0, optionsList[i].runName ?? this.getName());
            delete optionsList[i].runId;
            return handleStartRes;
        }));
        let outputs;
        try {
            const promise = func.call(this, inputs, optionsList, runManagers, batchOptions);
            outputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, optionsList?.[0]?.signal);
        } catch (e) {
            await Promise.all(runManagers.map((runManager)=>runManager?.handleChainError(e)));
            throw e;
        }
        await Promise.all(runManagers.map((runManager)=>runManager?.handleChainEnd(_coerceToDict(outputs, "output"))));
        return outputs;
    }
    /** @internal */ _concatOutputChunks(first, second) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(first, second);
    }
    /**
	* Helper method to transform an Iterator of Input values into an Iterator of
	* Output values, with callbacks.
	* Use this to implement `stream()` or `transform()` in Runnable subclasses.
	*/ async *_transformStreamWithConfig(inputGenerator, transformer, options) {
        let finalInput;
        let finalInputSupported = true;
        let finalOutput;
        let finalOutputSupported = true;
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const outerThis = this;
        async function* wrapInputForTracing() {
            for await (const chunk of inputGenerator){
                if (finalInputSupported) if (finalInput === void 0) finalInput = chunk;
                else try {
                    finalInput = outerThis._concatOutputChunks(finalInput, chunk);
                } catch  {
                    finalInput = void 0;
                    finalInputSupported = false;
                }
                yield chunk;
            }
        }
        let runManager;
        try {
            const pipe = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeGeneratorWithSetup"])(transformer.bind(this), wrapInputForTracing(), async ()=>callbackManager_?.handleChainStart(this.toJSON(), {
                    input: ""
                }, config.runId, config.runType, void 0, void 0, config.runName ?? this.getName()), options?.signal, config);
            delete config.runId;
            runManager = pipe.setup;
            const streamEventsHandler = runManager?.handlers.find(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$event_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStreamEventsHandler"]);
            let iterator = pipe.output;
            if (streamEventsHandler !== void 0 && runManager !== void 0) iterator = streamEventsHandler.tapOutputIterable(runManager.runId, iterator);
            const streamLogHandler = runManager?.handlers.find(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLogStreamHandler"]);
            if (streamLogHandler !== void 0 && runManager !== void 0) iterator = streamLogHandler.tapOutputIterable(runManager.runId, iterator);
            for await (const chunk of iterator){
                yield chunk;
                if (finalOutputSupported) if (finalOutput === void 0) finalOutput = chunk;
                else try {
                    finalOutput = this._concatOutputChunks(finalOutput, chunk);
                } catch  {
                    finalOutput = void 0;
                    finalOutputSupported = false;
                }
            }
        } catch (e) {
            await runManager?.handleChainError(e, void 0, void 0, void 0, {
                inputs: _coerceToDict(finalInput, "input")
            });
            throw e;
        }
        await runManager?.handleChainEnd(finalOutput ?? {}, void 0, void 0, void 0, {
            inputs: _coerceToDict(finalInput, "input")
        });
    }
    getGraph(_) {
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Graph"]();
        const inputNode = graph.addNode({
            name: `${this.getName()}Input`,
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
        });
        const runnableNode = graph.addNode(this);
        const outputNode = graph.addNode({
            name: `${this.getName()}Output`,
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
        });
        graph.addEdge(inputNode, runnableNode);
        graph.addEdge(runnableNode, outputNode);
        return graph;
    }
    /**
	* Create a new runnable sequence that runs each individual runnable in series,
	* piping the output of one runnable into another runnable or runnable-like.
	* @param coerceable A runnable, function, or object whose values are functions or runnables.
	* @returns A new runnable sequence.
	*/ pipe(coerceable) {
        return new RunnableSequence({
            first: this,
            last: _coerceToRunnable(coerceable)
        });
    }
    /**
	* Pick keys from the dict output of this runnable. Returns a new runnable.
	*/ pick(keys) {
        return this.pipe(new RunnablePick(keys));
    }
    /**
	* Assigns new fields to the dict output of this runnable. Returns a new runnable.
	*/ assign(mapping) {
        return this.pipe(new RunnableAssign(new RunnableMap({
            steps: mapping
        })));
    }
    /**
	* Default implementation of transform, which buffers input and then calls stream.
	* Subclasses should override this method if they can start producing output while
	* input is still being generated.
	* @param generator
	* @param options
	*/ async *transform(generator, options) {
        let finalChunk;
        for await (const chunk of generator)if (finalChunk === void 0) finalChunk = chunk;
        else finalChunk = this._concatOutputChunks(finalChunk, chunk);
        yield* this._streamIterator(finalChunk, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options));
    }
    /**
	* Stream all output from a runnable, as reported to the callback system.
	* This includes all inner runs of LLMs, Retrievers, Tools, etc.
	* Output is streamed as Log objects, which include a list of
	* jsonpatch ops that describe how the state of the run has changed in each
	* step, and the final state of the run.
	* The jsonpatch ops can be applied in order to construct state.
	* @param input
	* @param options
	* @param streamOptions
	*/ async *streamLog(input, options, streamOptions) {
        const logStreamCallbackHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LogStreamCallbackHandler"]({
            ...streamOptions,
            autoClose: false,
            _schemaFormat: "original"
        });
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        yield* this._streamLog(input, logStreamCallbackHandler, config);
    }
    async *_streamLog(input, logStreamCallbackHandler, config) {
        const { callbacks } = config;
        if (callbacks === void 0) config.callbacks = [
            logStreamCallbackHandler
        ];
        else if (Array.isArray(callbacks)) config.callbacks = callbacks.concat([
            logStreamCallbackHandler
        ]);
        else {
            const copiedCallbacks = callbacks.copy();
            copiedCallbacks.addHandler(logStreamCallbackHandler, true);
            config.callbacks = copiedCallbacks;
        }
        const runnableStreamPromise = this.stream(input, config);
        async function consumeRunnableStream() {
            try {
                const runnableStream = await runnableStreamPromise;
                for await (const chunk of runnableStream){
                    const patch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunLogPatch"]({
                        ops: [
                            {
                                op: "add",
                                path: "/streamed_output/-",
                                value: chunk
                            }
                        ]
                    });
                    await logStreamCallbackHandler.writer.write(patch);
                }
            } finally{
                await logStreamCallbackHandler.writer.close();
            }
        }
        const runnableStreamConsumePromise = consumeRunnableStream();
        try {
            for await (const log of logStreamCallbackHandler)yield log;
        } finally{
            await runnableStreamConsumePromise;
        }
    }
    streamEvents(input, options, streamOptions) {
        let stream;
        if (options.version === "v1") stream = this._streamEventsV1(input, options, streamOptions);
        else if (options.version === "v2") stream = this._streamEventsV2(input, options, streamOptions);
        else throw new Error(`Only versions "v1" and "v2" of the schema are currently supported.`);
        if (options.encoding === "text/event-stream") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$wrappers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToHttpEventStream"])(stream);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(stream);
    }
    async *_streamEventsV2(input, options, streamOptions) {
        const eventStreamer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$event_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamCallbackHandler"]({
            ...streamOptions,
            autoClose: false
        });
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const runId = config.runId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        config.runId = runId;
        const callbacks = config.callbacks;
        if (callbacks === void 0) config.callbacks = [
            eventStreamer
        ];
        else if (Array.isArray(callbacks)) config.callbacks = callbacks.concat(eventStreamer);
        else {
            const copiedCallbacks = callbacks.copy();
            copiedCallbacks.addHandler(eventStreamer, true);
            config.callbacks = copiedCallbacks;
        }
        const abortController = new AbortController();
        const outerThis = this;
        async function consumeRunnableStream() {
            let signal;
            let listener = null;
            try {
                if (options?.signal) if ("any" in AbortSignal) signal = AbortSignal.any([
                    abortController.signal,
                    options.signal
                ]);
                else {
                    signal = options.signal;
                    listener = ()=>{
                        abortController.abort();
                    };
                    options.signal.addEventListener("abort", listener, {
                        once: true
                    });
                }
                else signal = abortController.signal;
                const runnableStream = await outerThis.stream(input, {
                    ...config,
                    signal
                });
                const tappedStream = eventStreamer.tapOutputIterable(runId, runnableStream);
                for await (const _ of tappedStream)if (abortController.signal.aborted) break;
            } finally{
                await eventStreamer.finish();
                if (signal && listener) signal.removeEventListener("abort", listener);
            }
        }
        const runnableStreamConsumePromise = consumeRunnableStream();
        let firstEventSent = false;
        let firstEventRunId;
        try {
            for await (const event of eventStreamer){
                if (!firstEventSent) {
                    event.data.input = input;
                    firstEventSent = true;
                    firstEventRunId = event.run_id;
                    yield event;
                    continue;
                }
                if (event.run_id === firstEventRunId && event.event.endsWith("_end")) {
                    if (event.data?.input) delete event.data.input;
                }
                yield event;
            }
        } finally{
            abortController.abort();
            await runnableStreamConsumePromise;
        }
    }
    async *_streamEventsV1(input, options, streamOptions) {
        let runLog;
        let hasEncounteredStartEvent = false;
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const rootTags = config.tags ?? [];
        const rootMetadata = config.metadata ?? {};
        const rootName = config.runName ?? this.getName();
        const logStreamCallbackHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LogStreamCallbackHandler"]({
            ...streamOptions,
            autoClose: false,
            _schemaFormat: "streaming_events"
        });
        const rootEventFilter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_RootEventFilter"]({
            ...streamOptions
        });
        const logStream = this._streamLog(input, logStreamCallbackHandler, config);
        for await (const log of logStream){
            if (!runLog) runLog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$log_stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunLog"].fromRunLogPatch(log);
            else runLog = runLog.concat(log);
            if (runLog.state === void 0) throw new Error(`Internal error: "streamEvents" state is missing. Please open a bug report.`);
            if (!hasEncounteredStartEvent) {
                hasEncounteredStartEvent = true;
                const state$2 = {
                    ...runLog.state
                };
                const event = {
                    run_id: state$2.id,
                    event: `on_${state$2.type}_start`,
                    name: rootName,
                    tags: rootTags,
                    metadata: rootMetadata,
                    data: {
                        input
                    }
                };
                if (rootEventFilter.includeEvent(event, state$2.type)) yield event;
            }
            const paths = log.ops.filter((op)=>op.path.startsWith("/logs/")).map((op)=>op.path.split("/")[2]);
            const dedupedPaths = [
                ...new Set(paths)
            ];
            for (const path of dedupedPaths){
                let eventType;
                let data = {};
                const logEntry = runLog.state.logs[path];
                if (logEntry.end_time === void 0) if (logEntry.streamed_output.length > 0) eventType = "stream";
                else eventType = "start";
                else eventType = "end";
                if (eventType === "start") {
                    if (logEntry.inputs !== void 0) data.input = logEntry.inputs;
                } else if (eventType === "end") {
                    if (logEntry.inputs !== void 0) data.input = logEntry.inputs;
                    data.output = logEntry.final_output;
                } else if (eventType === "stream") {
                    const chunkCount = logEntry.streamed_output.length;
                    if (chunkCount !== 1) throw new Error(`Expected exactly one chunk of streamed output, got ${chunkCount} instead. Encountered in: "${logEntry.name}"`);
                    data = {
                        chunk: logEntry.streamed_output[0]
                    };
                    logEntry.streamed_output = [];
                }
                yield {
                    event: `on_${logEntry.type}_${eventType}`,
                    name: logEntry.name,
                    run_id: logEntry.id,
                    tags: logEntry.tags,
                    metadata: logEntry.metadata,
                    data
                };
            }
            const { state: state$1 } = runLog;
            if (state$1.streamed_output.length > 0) {
                const chunkCount = state$1.streamed_output.length;
                if (chunkCount !== 1) throw new Error(`Expected exactly one chunk of streamed output, got ${chunkCount} instead. Encountered in: "${state$1.name}"`);
                const data = {
                    chunk: state$1.streamed_output[0]
                };
                state$1.streamed_output = [];
                const event = {
                    event: `on_${state$1.type}_stream`,
                    run_id: state$1.id,
                    tags: rootTags,
                    metadata: rootMetadata,
                    name: rootName,
                    data
                };
                if (rootEventFilter.includeEvent(event, state$1.type)) yield event;
            }
        }
        const state = runLog?.state;
        if (state !== void 0) {
            const event = {
                event: `on_${state.type}_end`,
                name: rootName,
                run_id: state.id,
                tags: rootTags,
                metadata: rootMetadata,
                data: {
                    output: state.final_output
                }
            };
            if (rootEventFilter.includeEvent(event, state.type)) yield event;
        }
    }
    static isRunnable(thing) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isRunnableInterface"])(thing);
    }
    /**
	* Bind lifecycle listeners to a Runnable, returning a new Runnable.
	* The Run object contains information about the run, including its id,
	* type, input, output, error, startTime, endTime, and any tags or metadata
	* added to the run.
	*
	* @param {Object} params - The object containing the callback functions.
	* @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
	* @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
	* @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
	*/ withListeners({ onStart, onEnd, onError }) {
        return new RunnableBinding({
            bound: this,
            config: {},
            configFactories: [
                (config)=>({
                        callbacks: [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$root_listener$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootListenersTracer"]({
                                config,
                                onStart,
                                onEnd,
                                onError
                            })
                        ]
                    })
            ]
        });
    }
    /**
	* Convert a runnable to a tool. Return a new instance of `RunnableToolLike`
	* which contains the runnable, name, description and schema.
	*
	* @template {T extends RunInput = RunInput} RunInput - The input type of the runnable. Should be the same as the `RunInput` type of the runnable.
	*
	* @param fields
	* @param {string | undefined} [fields.name] The name of the tool. If not provided, it will default to the name of the runnable.
	* @param {string | undefined} [fields.description] The description of the tool. Falls back to the description on the Zod schema if not provided, or undefined if neither are provided.
	* @param {z.ZodType<T>} [fields.schema] The Zod schema for the input of the tool. Infers the Zod type from the input type of the runnable.
	* @returns {RunnableToolLike<z.ZodType<T>, RunOutput>} An instance of `RunnableToolLike` which is a runnable that can be used as a tool.
	*/ asTool(fields) {
        return convertRunnableToTool(this, fields);
    }
};
/**
* Wraps a runnable and applies partial config upon invocation.
*
* @example
* ```typescript
* import {
*   type RunnableConfig,
*   RunnableLambda,
* } from "@langchain/core/runnables";
*
* const enhanceProfile = (
*   profile: Record<string, any>,
*   config?: RunnableConfig
* ) => {
*   if (config?.configurable?.role) {
*     return { ...profile, role: config.configurable.role };
*   }
*   return profile;
* };
*
* const runnable = RunnableLambda.from(enhanceProfile);
*
* // Bind configuration to the runnable to set the user's role dynamically
* const adminRunnable = runnable.withConfig({ configurable: { role: "Admin" } });
* const userRunnable = runnable.withConfig({ configurable: { role: "User" } });
*
* const result1 = await adminRunnable.invoke({
*   name: "Alice",
*   email: "alice@example.com"
* });
*
* // { name: "Alice", email: "alice@example.com", role: "Admin" }
*
* const result2 = await userRunnable.invoke({
*   name: "Bob",
*   email: "bob@example.com"
* });
*
* // { name: "Bob", email: "bob@example.com", role: "User" }
* ```
*/ var RunnableBinding = class RunnableBinding extends Runnable {
    static lc_name() {
        return "RunnableBinding";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    lc_serializable = true;
    bound;
    config;
    kwargs;
    configFactories;
    constructor(fields){
        super(fields);
        this.bound = fields.bound;
        this.kwargs = fields.kwargs;
        this.config = fields.config;
        this.configFactories = fields.configFactories;
    }
    getName(suffix) {
        return this.bound.getName(suffix);
    }
    async _mergeConfig(...options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, ...options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(config, ...this.configFactories ? await Promise.all(this.configFactories.map(async (configFactory)=>await configFactory(config))) : []);
    }
    withConfig(config) {
        return new this.constructor({
            bound: this.bound,
            kwargs: this.kwargs,
            config: {
                ...this.config,
                ...config
            }
        });
    }
    withRetry(fields) {
        return new RunnableRetry({
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            maxAttemptNumber: fields?.stopAfterAttempt,
            ...fields
        });
    }
    async invoke(input, options) {
        return this.bound.invoke(input, await this._mergeConfig(options, this.kwargs));
    }
    async batch(inputs, options, batchOptions) {
        const mergedOptions = Array.isArray(options) ? await Promise.all(options.map(async (individualOption)=>this._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(individualOption), this.kwargs))) : await this._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options), this.kwargs);
        return this.bound.batch(inputs, mergedOptions, batchOptions);
    }
    /** @internal */ _concatOutputChunks(first, second) {
        return this.bound._concatOutputChunks(first, second);
    }
    async *_streamIterator(input, options) {
        yield* this.bound._streamIterator(input, await this._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options), this.kwargs));
    }
    async stream(input, options) {
        return this.bound.stream(input, await this._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options), this.kwargs));
    }
    async *transform(generator, options) {
        yield* this.bound.transform(generator, await this._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options), this.kwargs));
    }
    streamEvents(input, options, streamOptions) {
        const outerThis = this;
        const generator = async function*() {
            yield* outerThis.bound.streamEvents(input, {
                ...await outerThis._mergeConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options), outerThis.kwargs),
                version: options.version
            }, streamOptions);
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(generator());
    }
    static isRunnableBinding(thing) {
        return thing.bound && Runnable.isRunnable(thing.bound);
    }
    /**
	* Bind lifecycle listeners to a Runnable, returning a new Runnable.
	* The Run object contains information about the run, including its id,
	* type, input, output, error, startTime, endTime, and any tags or metadata
	* added to the run.
	*
	* @param {Object} params - The object containing the callback functions.
	* @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
	* @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
	* @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
	*/ withListeners({ onStart, onEnd, onError }) {
        return new RunnableBinding({
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            configFactories: [
                (config)=>({
                        callbacks: [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tracers$2f$root_listener$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootListenersTracer"]({
                                config,
                                onStart,
                                onEnd,
                                onError
                            })
                        ]
                    })
            ]
        });
    }
};
/**
* A runnable that delegates calls to another runnable
* with each element of the input sequence.
* @example
* ```typescript
* import { RunnableEach, RunnableLambda } from "@langchain/core/runnables";
*
* const toUpperCase = (input: string): string => input.toUpperCase();
* const addGreeting = (input: string): string => `Hello, ${input}!`;
*
* const upperCaseLambda = RunnableLambda.from(toUpperCase);
* const greetingLambda = RunnableLambda.from(addGreeting);
*
* const chain = new RunnableEach({
*   bound: upperCaseLambda.pipe(greetingLambda),
* });
*
* const result = await chain.invoke(["alice", "bob", "carol"])
*
* // ["Hello, ALICE!", "Hello, BOB!", "Hello, CAROL!"]
* ```
*/ var RunnableEach = class RunnableEach extends Runnable {
    static lc_name() {
        return "RunnableEach";
    }
    lc_serializable = true;
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    bound;
    constructor(fields){
        super(fields);
        this.bound = fields.bound;
    }
    /**
	* Invokes the runnable with the specified input and configuration.
	* @param input The input to invoke the runnable with.
	* @param config The configuration to invoke the runnable with.
	* @returns A promise that resolves to the output of the runnable.
	*/ async invoke(inputs, config) {
        return this._callWithConfig(this._invoke.bind(this), inputs, config);
    }
    /**
	* A helper method that is used to invoke the runnable with the specified input and configuration.
	* @param input The input to invoke the runnable with.
	* @param config The configuration to invoke the runnable with.
	* @returns A promise that resolves to the output of the runnable.
	*/ async _invoke(inputs, config, runManager) {
        return this.bound.batch(inputs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
            callbacks: runManager?.getChild()
        }));
    }
    /**
	* Bind lifecycle listeners to a Runnable, returning a new Runnable.
	* The Run object contains information about the run, including its id,
	* type, input, output, error, startTime, endTime, and any tags or metadata
	* added to the run.
	*
	* @param {Object} params - The object containing the callback functions.
	* @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
	* @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
	* @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
	*/ withListeners({ onStart, onEnd, onError }) {
        return new RunnableEach({
            bound: this.bound.withListeners({
                onStart,
                onEnd,
                onError
            })
        });
    }
};
/**
* Base class for runnables that can be retried a
* specified number of times.
* @example
* ```typescript
* import {
*   RunnableLambda,
*   RunnableRetry,
* } from "@langchain/core/runnables";
*
* // Simulate an API call that fails
* const simulateApiCall = (input: string): string => {
*   console.log(`Attempting API call with input: ${input}`);
*   throw new Error("API call failed due to network issue");
* };
*
* const apiCallLambda = RunnableLambda.from(simulateApiCall);
*
* // Apply retry logic using the .withRetry() method
* const apiCallWithRetry = apiCallLambda.withRetry({ stopAfterAttempt: 3 });
*
* // Alternatively, create a RunnableRetry instance manually
* const manualRetry = new RunnableRetry({
*   bound: apiCallLambda,
*   maxAttemptNumber: 3,
*   config: {},
* });
*
* // Example invocation using the .withRetry() method
* const res = await apiCallWithRetry
*   .invoke("Request 1")
*   .catch((error) => {
*     console.error("Failed after multiple retries:", error.message);
*   });
*
* // Example invocation using the manual retry instance
* const res2 = await manualRetry
*   .invoke("Request 2")
*   .catch((error) => {
*     console.error("Failed after multiple retries:", error.message);
*   });
* ```
*/ var RunnableRetry = class extends RunnableBinding {
    static lc_name() {
        return "RunnableRetry";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    maxAttemptNumber = 3;
    onFailedAttempt = ()=>{};
    constructor(fields){
        super(fields);
        this.maxAttemptNumber = fields.maxAttemptNumber ?? this.maxAttemptNumber;
        this.onFailedAttempt = fields.onFailedAttempt ?? this.onFailedAttempt;
    }
    _patchConfigForRetry(attempt, config, runManager) {
        const tag = attempt > 1 ? `retry:attempt:${attempt}` : void 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
            callbacks: runManager?.getChild(tag)
        });
    }
    async _invoke(input, config, runManager) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$retry$40$4$2e$6$2e$2$2f$node_modules$2f$p$2d$retry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])((attemptNumber)=>super.invoke(input, this._patchConfigForRetry(attemptNumber, config, runManager)), {
            onFailedAttempt: (error)=>this.onFailedAttempt(error, input),
            retries: Math.max(this.maxAttemptNumber - 1, 0),
            randomize: true
        });
    }
    /**
	* Method that invokes the runnable with the specified input, run manager,
	* and config. It handles the retry logic by catching any errors and
	* recursively invoking itself with the updated config for the next retry
	* attempt.
	* @param input The input for the runnable.
	* @param runManager The run manager for the runnable.
	* @param config The config for the runnable.
	* @returns A promise that resolves to the output of the runnable.
	*/ async invoke(input, config) {
        return this._callWithConfig(this._invoke.bind(this), input, config);
    }
    async _batch(inputs, configs, runManagers, batchOptions) {
        const resultsMap = {};
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$p$2d$retry$40$4$2e$6$2e$2$2f$node_modules$2f$p$2d$retry$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(async (attemptNumber)=>{
                const remainingIndexes = inputs.map((_, i)=>i).filter((i)=>resultsMap[i.toString()] === void 0 || resultsMap[i.toString()] instanceof Error);
                const remainingInputs = remainingIndexes.map((i)=>inputs[i]);
                const patchedConfigs = remainingIndexes.map((i)=>this._patchConfigForRetry(attemptNumber, configs?.[i], runManagers?.[i]));
                const results = await super.batch(remainingInputs, patchedConfigs, {
                    ...batchOptions,
                    returnExceptions: true
                });
                let firstException;
                for(let i = 0; i < results.length; i += 1){
                    const result = results[i];
                    const resultMapIndex = remainingIndexes[i];
                    if (result instanceof Error) {
                        if (firstException === void 0) {
                            firstException = result;
                            firstException.input = remainingInputs[i];
                        }
                    }
                    resultsMap[resultMapIndex.toString()] = result;
                }
                if (firstException) throw firstException;
                return results;
            }, {
                onFailedAttempt: (error)=>this.onFailedAttempt(error, error.input),
                retries: Math.max(this.maxAttemptNumber - 1, 0),
                randomize: true
            });
        } catch (e) {
            if (batchOptions?.returnExceptions !== true) throw e;
        }
        return Object.keys(resultsMap).sort((a, b)=>parseInt(a, 10) - parseInt(b, 10)).map((key)=>resultsMap[parseInt(key, 10)]);
    }
    async batch(inputs, options, batchOptions) {
        return this._batchWithConfig(this._batch.bind(this), inputs, options, batchOptions);
    }
};
/**
* A sequence of runnables, where the output of each is the input of the next.
* @example
* ```typescript
* const promptTemplate = PromptTemplate.fromTemplate(
*   "Tell me a joke about {topic}",
* );
* const chain = RunnableSequence.from([promptTemplate, new ChatOpenAI({ model: "gpt-4o-mini" })]);
* const result = await chain.invoke({ topic: "bears" });
* ```
*/ var RunnableSequence = class RunnableSequence extends Runnable {
    static lc_name() {
        return "RunnableSequence";
    }
    first;
    middle = [];
    last;
    omitSequenceTags = false;
    lc_serializable = true;
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    constructor(fields){
        super(fields);
        this.first = fields.first;
        this.middle = fields.middle ?? this.middle;
        this.last = fields.last;
        this.name = fields.name;
        this.omitSequenceTags = fields.omitSequenceTags ?? this.omitSequenceTags;
    }
    get steps() {
        return [
            this.first,
            ...this.middle,
            this.last
        ];
    }
    async invoke(input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), config.runId, void 0, void 0, void 0, config?.runName);
        delete config.runId;
        let nextStepInput = input;
        let finalOutput;
        try {
            const initialSteps = [
                this.first,
                ...this.middle
            ];
            for(let i = 0; i < initialSteps.length; i += 1){
                const step = initialSteps[i];
                const promise = step.invoke(nextStepInput, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
                    callbacks: runManager?.getChild(this.omitSequenceTags ? void 0 : `seq:step:${i + 1}`)
                }));
                nextStepInput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, options?.signal);
            }
            if (options?.signal?.aborted) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAbortSignalError"])(options.signal);
            finalOutput = await this.last.invoke(nextStepInput, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
                callbacks: runManager?.getChild(this.omitSequenceTags ? void 0 : `seq:step:${this.steps.length}`)
            }));
        } catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(finalOutput, "output"));
        return finalOutput;
    }
    async batch(inputs, options, batchOptions) {
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(configList.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"]));
        const runManagers = await Promise.all(callbackManagers.map(async (callbackManager, i)=>{
            const handleStartRes = await callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), configList[i].runId, void 0, void 0, void 0, configList[i].runName);
            delete configList[i].runId;
            return handleStartRes;
        }));
        let nextStepInputs = inputs;
        try {
            for(let i = 0; i < this.steps.length; i += 1){
                const step = this.steps[i];
                const promise = step.batch(nextStepInputs, runManagers.map((runManager, j)=>{
                    const childRunManager = runManager?.getChild(this.omitSequenceTags ? void 0 : `seq:step:${i + 1}`);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(configList[j], {
                        callbacks: childRunManager
                    });
                }), batchOptions);
                nextStepInputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, configList[0]?.signal);
            }
        } catch (e) {
            await Promise.all(runManagers.map((runManager)=>runManager?.handleChainError(e)));
            throw e;
        }
        await Promise.all(runManagers.map((runManager)=>runManager?.handleChainEnd(_coerceToDict(nextStepInputs, "output"))));
        return nextStepInputs;
    }
    /** @internal */ _concatOutputChunks(first, second) {
        return this.last._concatOutputChunks(first, second);
    }
    async *_streamIterator(input, options) {
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(options);
        const { runId, ...otherOptions } = options ?? {};
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), runId, void 0, void 0, void 0, otherOptions?.runName);
        const steps = [
            this.first,
            ...this.middle,
            this.last
        ];
        let concatSupported = true;
        let finalOutput;
        async function* inputGenerator() {
            yield input;
        }
        try {
            let finalGenerator = steps[0].transform(inputGenerator(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(otherOptions, {
                callbacks: runManager?.getChild(this.omitSequenceTags ? void 0 : `seq:step:1`)
            }));
            for(let i = 1; i < steps.length; i += 1){
                const step = steps[i];
                finalGenerator = await step.transform(finalGenerator, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(otherOptions, {
                    callbacks: runManager?.getChild(this.omitSequenceTags ? void 0 : `seq:step:${i + 1}`)
                }));
            }
            for await (const chunk of finalGenerator){
                options?.signal?.throwIfAborted();
                yield chunk;
                if (concatSupported) if (finalOutput === void 0) finalOutput = chunk;
                else try {
                    finalOutput = this._concatOutputChunks(finalOutput, chunk);
                } catch  {
                    finalOutput = void 0;
                    concatSupported = false;
                }
            }
        } catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(finalOutput, "output"));
    }
    getGraph(config) {
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Graph"]();
        let currentLastNode = null;
        this.steps.forEach((step, index)=>{
            const stepGraph = step.getGraph(config);
            if (index !== 0) stepGraph.trimFirstNode();
            if (index !== this.steps.length - 1) stepGraph.trimLastNode();
            graph.extend(stepGraph);
            const stepFirstNode = stepGraph.firstNode();
            if (!stepFirstNode) throw new Error(`Runnable ${step} has no first node`);
            if (currentLastNode) graph.addEdge(currentLastNode, stepFirstNode);
            currentLastNode = stepGraph.lastNode();
        });
        return graph;
    }
    pipe(coerceable) {
        if (RunnableSequence.isRunnableSequence(coerceable)) return new RunnableSequence({
            first: this.first,
            middle: this.middle.concat([
                this.last,
                coerceable.first,
                ...coerceable.middle
            ]),
            last: coerceable.last,
            name: this.name ?? coerceable.name
        });
        else return new RunnableSequence({
            first: this.first,
            middle: [
                ...this.middle,
                this.last
            ],
            last: _coerceToRunnable(coerceable),
            name: this.name
        });
    }
    static isRunnableSequence(thing) {
        return Array.isArray(thing.middle) && Runnable.isRunnable(thing);
    }
    static from([first, ...runnables], nameOrFields) {
        let extra = {};
        if (typeof nameOrFields === "string") extra.name = nameOrFields;
        else if (nameOrFields !== void 0) extra = nameOrFields;
        return new RunnableSequence({
            ...extra,
            first: _coerceToRunnable(first),
            middle: runnables.slice(0, -1).map(_coerceToRunnable),
            last: _coerceToRunnable(runnables[runnables.length - 1])
        });
    }
};
/**
* A runnable that runs a mapping of runnables in parallel,
* and returns a mapping of their outputs.
* @example
* ```typescript
* const mapChain = RunnableMap.from({
*   joke: PromptTemplate.fromTemplate("Tell me a joke about {topic}").pipe(
*     new ChatAnthropic({}),
*   ),
*   poem: PromptTemplate.fromTemplate("write a 2-line poem about {topic}").pipe(
*     new ChatAnthropic({}),
*   ),
* });
* const result = await mapChain.invoke({ topic: "bear" });
* ```
*/ var RunnableMap = class RunnableMap extends Runnable {
    static lc_name() {
        return "RunnableMap";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    lc_serializable = true;
    steps;
    getStepsKeys() {
        return Object.keys(this.steps);
    }
    constructor(fields){
        super(fields);
        this.steps = {};
        for (const [key, value] of Object.entries(fields.steps))this.steps[key] = _coerceToRunnable(value);
    }
    static from(steps) {
        return new RunnableMap({
            steps
        });
    }
    async invoke(input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), {
            input
        }, config.runId, void 0, void 0, void 0, config?.runName);
        delete config.runId;
        const output = {};
        try {
            const promises = Object.entries(this.steps).map(async ([key, runnable])=>{
                output[key] = await runnable.invoke(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
                    callbacks: runManager?.getChild(`map:key:${key}`)
                }));
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(Promise.all(promises), options?.signal);
        } catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(output);
        return output;
    }
    async *_transform(generator, runManager, options) {
        const steps = {
            ...this.steps
        };
        const inputCopies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["atee"])(generator, Object.keys(steps).length);
        const tasks = new Map(Object.entries(steps).map(([key, runnable], i)=>{
            const gen = runnable.transform(inputCopies[i], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(options, {
                callbacks: runManager?.getChild(`map:key:${key}`)
            }));
            return [
                key,
                gen.next().then((result)=>({
                        key,
                        gen,
                        result
                    }))
            ];
        }));
        while(tasks.size){
            const promise = Promise.race(tasks.values());
            const { key, result, gen } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, options?.signal);
            tasks.delete(key);
            if (!result.done) {
                yield {
                    [key]: result.value
                };
                tasks.set(key, gen.next().then((result$1)=>({
                        key,
                        gen,
                        result: result$1
                    })));
            }
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const wrappedGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncGeneratorWithSetup"]({
            generator: this.transform(generator(), config),
            config
        });
        await wrappedGenerator.setup;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(wrappedGenerator);
    }
};
/**
* A runnable that wraps a traced LangSmith function.
*/ var RunnableTraceable = class RunnableTraceable extends Runnable {
    lc_serializable = false;
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    func;
    constructor(fields){
        super(fields);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTraceableFunction"])(fields.func)) throw new Error("RunnableTraceable requires a function that is wrapped in traceable higher-order function");
        this.func = fields.func;
    }
    async invoke(input, options) {
        const [config] = this._getOptionsList(options ?? {}, 1);
        const callbacks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const promise = this.func((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
            callbacks
        }), input);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$signal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raceWithSignal"])(promise, config?.signal);
    }
    async *_streamIterator(input, options) {
        const [config] = this._getOptionsList(options ?? {}, 1);
        const result = await this.invoke(input, options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result)) {
            for await (const item of result){
                config?.signal?.throwIfAborted();
                yield item;
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIterator"])(result)) {
            while(true){
                config?.signal?.throwIfAborted();
                const state = result.next();
                if (state.done) break;
                yield state.value;
            }
            return;
        }
        yield result;
    }
    static from(func) {
        return new RunnableTraceable({
            func
        });
    }
};
function assertNonTraceableFunction(func) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTraceableFunction"])(func)) throw new Error("RunnableLambda requires a function that is not wrapped in traceable higher-order function. This shouldn't happen.");
}
/**
* A runnable that wraps an arbitrary function that takes a single argument.
* @example
* ```typescript
* import { RunnableLambda } from "@langchain/core/runnables";
*
* const add = (input: { x: number; y: number }) => input.x + input.y;
*
* const multiply = (input: { value: number; multiplier: number }) =>
*   input.value * input.multiplier;
*
* // Create runnables for the functions
* const addLambda = RunnableLambda.from(add);
* const multiplyLambda = RunnableLambda.from(multiply);
*
* // Chain the lambdas for a mathematical operation
* const chainedLambda = addLambda.pipe((result) =>
*   multiplyLambda.invoke({ value: result, multiplier: 2 })
* );
*
* // Example invocation of the chainedLambda
* const result = await chainedLambda.invoke({ x: 2, y: 3 });
*
* // Will log "10" (since (2 + 3) * 2 = 10)
* ```
*/ var RunnableLambda = class RunnableLambda extends Runnable {
    static lc_name() {
        return "RunnableLambda";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    func;
    constructor(fields){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langsmith$40$0$2e$3$2e$74_$40$opentelem_0ac6fe5cdbbbb0aa84dc480e19be1cc8$2f$node_modules$2f$langsmith$2f$dist$2f$singletons$2f$traceable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTraceableFunction"])(fields.func)) return RunnableTraceable.from(fields.func);
        super(fields);
        assertNonTraceableFunction(fields.func);
        this.func = fields.func;
    }
    static from(func) {
        return new RunnableLambda({
            func
        });
    }
    async _invoke(input, config, runManager) {
        return new Promise((resolve, reject)=>{
            const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
                callbacks: runManager?.getChild(),
                recursionLimit: (config?.recursionLimit ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_RECURSION_LIMIT"]) - 1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(childConfig), async ()=>{
                try {
                    let output = await this.func(input, {
                        ...childConfig
                    });
                    if (output && Runnable.isRunnable(output)) {
                        if (config?.recursionLimit === 0) throw new Error("Recursion limit reached.");
                        output = await output.invoke(input, {
                            ...childConfig,
                            recursionLimit: (childConfig.recursionLimit ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_RECURSION_LIMIT"]) - 1
                        });
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(output)) {
                        let finalOutput;
                        for await (const chunk of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeAsyncIterableInContext"])(childConfig, output)){
                            config?.signal?.throwIfAborted();
                            if (finalOutput === void 0) finalOutput = chunk;
                            else try {
                                finalOutput = this._concatOutputChunks(finalOutput, chunk);
                            } catch  {
                                finalOutput = chunk;
                            }
                        }
                        output = finalOutput;
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIterableIterator"])(output)) {
                        let finalOutput;
                        for (const chunk of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeIteratorInContext"])(childConfig, output)){
                            config?.signal?.throwIfAborted();
                            if (finalOutput === void 0) finalOutput = chunk;
                            else try {
                                finalOutput = this._concatOutputChunks(finalOutput, chunk);
                            } catch  {
                                finalOutput = chunk;
                            }
                        }
                        output = finalOutput;
                    }
                    resolve(output);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    async invoke(input, options) {
        return this._callWithConfig(this._invoke.bind(this), input, options);
    }
    async *_transform(generator, runManager, config) {
        let finalChunk;
        for await (const chunk of generator)if (finalChunk === void 0) finalChunk = chunk;
        else try {
            finalChunk = this._concatOutputChunks(finalChunk, chunk);
        } catch  {
            finalChunk = chunk;
        }
        const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
            callbacks: runManager?.getChild(),
            recursionLimit: (config?.recursionLimit ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_RECURSION_LIMIT"]) - 1
        });
        const output = await new Promise((resolve, reject)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickRunnableConfigKeys"])(childConfig), async ()=>{
                try {
                    const res = await this.func(finalChunk, {
                        ...childConfig,
                        config: childConfig
                    });
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
        });
        if (output && Runnable.isRunnable(output)) {
            if (config?.recursionLimit === 0) throw new Error("Recursion limit reached.");
            const stream = await output.stream(finalChunk, childConfig);
            for await (const chunk of stream)yield chunk;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(output)) for await (const chunk of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeAsyncIterableInContext"])(childConfig, output)){
            config?.signal?.throwIfAborted();
            yield chunk;
        }
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIterableIterator"])(output)) for (const chunk of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeIteratorInContext"])(childConfig, output)){
            config?.signal?.throwIfAborted();
            yield chunk;
        }
        else yield output;
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const wrappedGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncGeneratorWithSetup"]({
            generator: this.transform(generator(), config),
            config
        });
        await wrappedGenerator.setup;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(wrappedGenerator);
    }
};
/**
* A runnable that runs a mapping of runnables in parallel,
* and returns a mapping of their outputs.
* @example
* ```typescript
* import {
*   RunnableLambda,
*   RunnableParallel,
* } from "@langchain/core/runnables";
*
* const addYears = (age: number): number => age + 5;
* const yearsToFifty = (age: number): number => 50 - age;
* const yearsToHundred = (age: number): number => 100 - age;
*
* const addYearsLambda = RunnableLambda.from(addYears);
* const milestoneFiftyLambda = RunnableLambda.from(yearsToFifty);
* const milestoneHundredLambda = RunnableLambda.from(yearsToHundred);
*
* // Pipe will coerce objects into RunnableParallel by default, but we
* // explicitly instantiate one here to demonstrate
* const sequence = addYearsLambda.pipe(
*   RunnableParallel.from({
*     years_to_fifty: milestoneFiftyLambda,
*     years_to_hundred: milestoneHundredLambda,
*   })
* );
*
* // Invoke the sequence with a single age input
* const res = await sequence.invoke(25);
*
* // { years_to_fifty: 20, years_to_hundred: 70 }
* ```
*/ var RunnableParallel = class extends RunnableMap {
};
/**
* A Runnable that can fallback to other Runnables if it fails.
* External APIs (e.g., APIs for a language model) may at times experience
* degraded performance or even downtime.
*
* In these cases, it can be useful to have a fallback Runnable that can be
* used in place of the original Runnable (e.g., fallback to another LLM provider).
*
* Fallbacks can be defined at the level of a single Runnable, or at the level
* of a chain of Runnables. Fallbacks are tried in order until one succeeds or
* all fail.
*
* While you can instantiate a `RunnableWithFallbacks` directly, it is usually
* more convenient to use the `withFallbacks` method on an existing Runnable.
*
* When streaming, fallbacks will only be called on failures during the initial
* stream creation. Errors that occur after a stream starts will not fallback
* to the next Runnable.
*
* @example
* ```typescript
* import {
*   RunnableLambda,
*   RunnableWithFallbacks,
* } from "@langchain/core/runnables";
*
* const primaryOperation = (input: string): string => {
*   if (input !== "safe") {
*     throw new Error("Primary operation failed due to unsafe input");
*   }
*   return `Processed: ${input}`;
* };
*
* // Define a fallback operation that processes the input differently
* const fallbackOperation = (input: string): string =>
*   `Fallback processed: ${input}`;
*
* const primaryRunnable = RunnableLambda.from(primaryOperation);
* const fallbackRunnable = RunnableLambda.from(fallbackOperation);
*
* // Apply the fallback logic using the .withFallbacks() method
* const runnableWithFallback = primaryRunnable.withFallbacks([fallbackRunnable]);
*
* // Alternatively, create a RunnableWithFallbacks instance manually
* const manualFallbackChain = new RunnableWithFallbacks({
*   runnable: primaryRunnable,
*   fallbacks: [fallbackRunnable],
* });
*
* // Example invocation using .withFallbacks()
* const res = await runnableWithFallback
*   .invoke("unsafe input")
*   .catch((error) => {
*     console.error("Failed after all attempts:", error.message);
*   });
*
* // "Fallback processed: unsafe input"
*
* // Example invocation using manual instantiation
* const res = await manualFallbackChain
*   .invoke("safe")
*   .catch((error) => {
*     console.error("Failed after all attempts:", error.message);
*   });
*
* // "Processed: safe"
* ```
*/ var RunnableWithFallbacks = class extends Runnable {
    static lc_name() {
        return "RunnableWithFallbacks";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    lc_serializable = true;
    runnable;
    fallbacks;
    constructor(fields){
        super(fields);
        this.runnable = fields.runnable;
        this.fallbacks = fields.fallbacks;
    }
    *runnables() {
        yield this.runnable;
        for (const fallback of this.fallbacks)yield fallback;
    }
    async invoke(input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const { runId, ...otherConfigFields } = config;
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), runId, void 0, void 0, void 0, otherConfigFields?.runName);
        const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(otherConfigFields, {
            callbacks: runManager?.getChild()
        });
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig(childConfig, async ()=>{
            let firstError;
            for (const runnable of this.runnables()){
                config?.signal?.throwIfAborted();
                try {
                    const output = await runnable.invoke(input, childConfig);
                    await runManager?.handleChainEnd(_coerceToDict(output, "output"));
                    return output;
                } catch (e) {
                    if (firstError === void 0) firstError = e;
                }
            }
            if (firstError === void 0) throw new Error("No error stored at end of fallback.");
            await runManager?.handleChainError(firstError);
            throw firstError;
        });
        return res;
    }
    async *_streamIterator(input, options) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const callbackManager_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config);
        const { runId, ...otherConfigFields } = config;
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), runId, void 0, void 0, void 0, otherConfigFields?.runName);
        let firstError;
        let stream;
        for (const runnable of this.runnables()){
            config?.signal?.throwIfAborted();
            const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(otherConfigFields, {
                callbacks: runManager?.getChild()
            });
            try {
                const originalStream = await runnable.stream(input, childConfig);
                stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$iter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consumeAsyncIterableInContext"])(childConfig, originalStream);
                break;
            } catch (e) {
                if (firstError === void 0) firstError = e;
            }
        }
        if (stream === void 0) {
            const error = firstError ?? /* @__PURE__ */ new Error("No error stored at end of fallback.");
            await runManager?.handleChainError(error);
            throw error;
        }
        let output;
        try {
            for await (const chunk of stream){
                yield chunk;
                try {
                    output = output === void 0 ? output : this._concatOutputChunks(output, chunk);
                } catch  {
                    output = void 0;
                }
            }
        } catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(output, "output"));
    }
    async batch(inputs, options, batchOptions) {
        if (batchOptions?.returnExceptions) throw new Error("Not implemented.");
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(configList.map((config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCallbackManagerForConfig"])(config)));
        const runManagers = await Promise.all(callbackManagers.map(async (callbackManager, i)=>{
            const handleStartRes = await callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), configList[i].runId, void 0, void 0, void 0, configList[i].runName);
            delete configList[i].runId;
            return handleStartRes;
        }));
        let firstError;
        for (const runnable of this.runnables()){
            configList[0].signal?.throwIfAborted();
            try {
                const outputs = await runnable.batch(inputs, runManagers.map((runManager, j)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(configList[j], {
                        callbacks: runManager?.getChild()
                    })), batchOptions);
                await Promise.all(runManagers.map((runManager, i)=>runManager?.handleChainEnd(_coerceToDict(outputs[i], "output"))));
                return outputs;
            } catch (e) {
                if (firstError === void 0) firstError = e;
            }
        }
        if (!firstError) throw new Error("No error stored at end of fallbacks.");
        await Promise.all(runManagers.map((runManager)=>runManager?.handleChainError(firstError)));
        throw firstError;
    }
};
function _coerceToRunnable(coerceable) {
    if (typeof coerceable === "function") return new RunnableLambda({
        func: coerceable
    });
    else if (Runnable.isRunnable(coerceable)) return coerceable;
    else if (!Array.isArray(coerceable) && typeof coerceable === "object") {
        const runnables = {};
        for (const [key, value] of Object.entries(coerceable))runnables[key] = _coerceToRunnable(value);
        return new RunnableMap({
            steps: runnables
        });
    } else throw new Error(`Expected a Runnable, function or object.\nInstead got an unsupported type.`);
}
/**
* A runnable that assigns key-value pairs to inputs of type `Record<string, unknown>`.
* @example
* ```typescript
* import {
*   RunnableAssign,
*   RunnableLambda,
*   RunnableParallel,
* } from "@langchain/core/runnables";
*
* const calculateAge = (x: { birthYear: number }): { age: number } => {
*   const currentYear = new Date().getFullYear();
*   return { age: currentYear - x.birthYear };
* };
*
* const createGreeting = (x: { name: string }): { greeting: string } => {
*   return { greeting: `Hello, ${x.name}!` };
* };
*
* const mapper = RunnableParallel.from({
*   age_step: RunnableLambda.from(calculateAge),
*   greeting_step: RunnableLambda.from(createGreeting),
* });
*
* const runnableAssign = new RunnableAssign({ mapper });
*
* const res = await runnableAssign.invoke({ name: "Alice", birthYear: 1990 });
*
* // { name: "Alice", birthYear: 1990, age_step: { age: 34 }, greeting_step: { greeting: "Hello, Alice!" } }
* ```
*/ var RunnableAssign = class extends Runnable {
    static lc_name() {
        return "RunnableAssign";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    lc_serializable = true;
    mapper;
    constructor(fields){
        if (fields instanceof RunnableMap) fields = {
            mapper: fields
        };
        super(fields);
        this.mapper = fields.mapper;
    }
    async invoke(input, options) {
        const mapperResult = await this.mapper.invoke(input, options);
        return {
            ...input,
            ...mapperResult
        };
    }
    async *_transform(generator, runManager, options) {
        const mapperKeys = this.mapper.getStepsKeys();
        const [forPassthrough, forMapper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["atee"])(generator);
        const mapperOutput = this.mapper.transform(forMapper, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(options, {
            callbacks: runManager?.getChild()
        }));
        const firstMapperChunkPromise = mapperOutput.next();
        for await (const chunk of forPassthrough){
            if (typeof chunk !== "object" || Array.isArray(chunk)) throw new Error(`RunnableAssign can only be used with objects as input, got ${typeof chunk}`);
            const filtered = Object.fromEntries(Object.entries(chunk).filter(([key])=>!mapperKeys.includes(key)));
            if (Object.keys(filtered).length > 0) yield filtered;
        }
        yield (await firstMapperChunkPromise).value;
        for await (const chunk of mapperOutput)yield chunk;
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const wrappedGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncGeneratorWithSetup"]({
            generator: this.transform(generator(), config),
            config
        });
        await wrappedGenerator.setup;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(wrappedGenerator);
    }
};
/**
* A runnable that assigns key-value pairs to inputs of type `Record<string, unknown>`.
* Useful for streaming, can be automatically created and chained by calling `runnable.pick();`.
* @example
* ```typescript
* import { RunnablePick } from "@langchain/core/runnables";
*
* const inputData = {
*   name: "John",
*   age: 30,
*   city: "New York",
*   country: "USA",
*   email: "john.doe@example.com",
*   phone: "+1234567890",
* };
*
* const basicInfoRunnable = new RunnablePick(["name", "city"]);
*
* // Example invocation
* const res = await basicInfoRunnable.invoke(inputData);
*
* // { name: 'John', city: 'New York' }
* ```
*/ var RunnablePick = class extends Runnable {
    static lc_name() {
        return "RunnablePick";
    }
    lc_namespace = [
        "langchain_core",
        "runnables"
    ];
    lc_serializable = true;
    keys;
    constructor(fields){
        if (typeof fields === "string" || Array.isArray(fields)) fields = {
            keys: fields
        };
        super(fields);
        this.keys = fields.keys;
    }
    async _pick(input) {
        if (typeof this.keys === "string") return input[this.keys];
        else {
            const picked = this.keys.map((key)=>[
                    key,
                    input[key]
                ]).filter((v)=>v[1] !== void 0);
            return picked.length === 0 ? void 0 : Object.fromEntries(picked);
        }
    }
    async invoke(input, options) {
        return this._callWithConfig(this._pick.bind(this), input, options);
    }
    async *_transform(generator) {
        for await (const chunk of generator){
            const picked = await this._pick(chunk);
            if (picked !== void 0) yield picked;
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConfig"])(options);
        const wrappedGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncGeneratorWithSetup"]({
            generator: this.transform(generator(), config),
            config
        });
        await wrappedGenerator.setup;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"].fromAsyncGenerator(wrappedGenerator);
    }
};
var RunnableToolLike = class extends RunnableBinding {
    name;
    description;
    schema;
    constructor(fields){
        const sequence = RunnableSequence.from([
            RunnableLambda.from(async (input)=>{
                let toolInput;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isToolCall"])(input)) try {
                    toolInput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopParseAsync"])(this.schema, input.args);
                } catch  {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToolInputParsingException"](`Received tool input did not match expected schema`, JSON.stringify(input.args));
                }
                else toolInput = input;
                return toolInput;
            }).withConfig({
                runName: `${fields.name}:parse_input`
            }),
            fields.bound
        ]).withConfig({
            runName: fields.name
        });
        super({
            bound: sequence,
            config: fields.config ?? {}
        });
        this.name = fields.name;
        this.description = fields.description;
        this.schema = fields.schema;
    }
    static lc_name() {
        return "RunnableToolLike";
    }
};
/**
* Given a runnable and a Zod schema, convert the runnable to a tool.
*
* @template RunInput The input type for the runnable.
* @template RunOutput The output type for the runnable.
*
* @param {Runnable<RunInput, RunOutput>} runnable The runnable to convert to a tool.
* @param fields
* @param {string | undefined} [fields.name] The name of the tool. If not provided, it will default to the name of the runnable.
* @param {string | undefined} [fields.description] The description of the tool. Falls back to the description on the Zod schema if not provided, or undefined if neither are provided.
* @param {InteropZodType<RunInput>} [fields.schema] The Zod schema for the input of the tool. Infers the Zod type from the input type of the runnable.
* @returns {RunnableToolLike<InteropZodType<RunInput>, RunOutput>} An instance of `RunnableToolLike` which is a runnable that can be used as a tool.
*/ function convertRunnableToTool(runnable, fields) {
    const name = fields.name ?? runnable.getName();
    const description = fields.description ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDescription"])(fields.schema);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSimpleStringZodSchema"])(fields.schema)) return new RunnableToolLike({
        name,
        description,
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }).transform((input)=>input.input),
        bound: runnable
    });
    return new RunnableToolLike({
        name,
        description,
        schema: fields.schema,
        bound: runnable
    });
}
;
 //# sourceMappingURL=base.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/documents/transformers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseDocumentTransformer",
    ()=>BaseDocumentTransformer,
    "MappingDocumentTransformer",
    ()=>MappingDocumentTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
;
//#region src/documents/transformers.ts
/**
* Abstract base class for document transformation systems.
*
* A document transformation system takes an array of Documents and returns an
* array of transformed Documents. These arrays do not necessarily have to have
* the same length.
*
* One example of this is a text splitter that splits a large document into
* many smaller documents.
*/ var BaseDocumentTransformer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"] {
    lc_namespace = [
        "langchain_core",
        "documents",
        "transformers"
    ];
    /**
	* Method to invoke the document transformation. This method calls the
	* transformDocuments method with the provided input.
	* @param input The input documents to be transformed.
	* @param _options Optional configuration object to customize the behavior of callbacks.
	* @returns A Promise that resolves to the transformed documents.
	*/ invoke(input, _options) {
        return this.transformDocuments(input);
    }
};
/**
* Class for document transformers that return exactly one transformed document
* for each input document.
*/ var MappingDocumentTransformer = class extends BaseDocumentTransformer {
    async transformDocuments(documents) {
        const newDocuments = [];
        for (const document of documents){
            const transformedDocument = await this._transformDocument(document);
            newDocuments.push(transformedDocument);
        }
        return newDocuments;
    }
};
;
 //# sourceMappingURL=transformers.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/documents/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "documents_exports",
    ()=>documents_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/documents/document.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$transformers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/documents/transformers.js [app-route] (ecmascript)");
;
;
;
//#region src/documents/index.ts
var documents_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(documents_exports, {
    BaseDocumentTransformer: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$transformers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseDocumentTransformer"],
    Document: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Document"],
    MappingDocumentTransformer: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$transformers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MappingDocumentTransformer"]
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/document_loaders/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseDocumentLoader",
    ()=>BaseDocumentLoader,
    "base_exports",
    ()=>base_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.0.1_@open_92766fcc5442500a83119052dfcaf384/node_modules/@langchain/core/dist/_virtual/rolldown_runtime.js [app-route] (ecmascript)");
;
//#region src/document_loaders/base.ts
var base_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$0$2e$1_$40$open_92766fcc5442500a83119052dfcaf384$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])(base_exports, {
    BaseDocumentLoader: ()=>BaseDocumentLoader
});
/**
* Abstract class that provides a default implementation for the
* loadAndSplit() method from the DocumentLoader interface. The load()
* method is left abstract and needs to be implemented by subclasses.
*/ var BaseDocumentLoader = class {
};
;
 //# sourceMappingURL=base.js.map
}),
];

//# sourceMappingURL=d6aa2_%40langchain_core_dist_dbe9b826._.js.map