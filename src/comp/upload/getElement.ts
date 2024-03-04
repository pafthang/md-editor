import { IEditor } from '$type/editor';
export const getElement = (vditor: IEditor) => {
	switch (vditor.currentMode) {
		case 'ir':
			return vditor.ir?.element;
		case 'wysiwyg':
			return vditor.wysiwyg?.element;
		case 'sv':
			return vditor.sv?.element;
	}
};
