import { IEditor } from '$type/editor';
export const setHeaders = (vditor: IEditor, xhr: XMLHttpRequest) => {
	if (vditor.options.upload?.setHeaders) {
		vditor.options.upload.headers = vditor.options.upload.setHeaders();
	}
	if (vditor.options.upload?.headers) {
		Object.keys(vditor.options.upload.headers).forEach((key) => {
			xhr.setRequestHeader(key, vditor.options.upload!.headers![key]);
		});
	}
};
