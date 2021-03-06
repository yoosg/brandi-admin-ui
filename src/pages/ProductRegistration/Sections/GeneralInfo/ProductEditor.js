import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setProductDetails } from 'store/actions';
import CKEditor from 'ckeditor4-react';
import { server_url } from '../../../../../config';

const ProductEditor = ({ setProductDetails }) => {
  const [editor, setEditor] = useState({
    data: '',
  });

  const onChange = e => {
    setEditor({
      data: e.target.value,
    });
  };

  const onEditorChange = e => {
    setEditor({
      data: e.editor.getData(),
    });

    setProductDetails(e.editor.getData());
    console.log(editor.data);
  };

  return (
    <>
      <CKEditor
        config={{
          height: '400',
          // filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html',
          // filebrowserImageBrowseUrl:
          //   '/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
          // filebrowserUploadUrl:
          //   '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
          filebrowserImageUploadUrl: `${server_url}/product/original_image`,
          toolbarGroups: [
            { name: 'styles' },
            { name: 'colors', groups: ['colors'] },
            { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
            { name: 'insert' },
            // { name: 'forms' },
            // { name: 'tools' },
            { name: 'paragraph', groups: ['align'] },
            { name: 'document', groups: ['mode', 'document', 'doctools'] },
          ],
          extraPlugins: 'justify,showblocks, colorbutton',
          colorButton: 'colors',
          removeButtons:
            'Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Superscript,Subscript,Underline,RemoveFormat',
        }}
        data={editor.data}
        onChange={onEditorChange}
        onBeforeLoad={CKEDITOR => (CKEDITOR.disableAutoInline = true)}
      >
        <label>
          <textarea defaultValue={editor.data} onChange={onChange} />
        </label>
      </CKEditor>
      {/* filebrowserImageBrowseLinkUrl : String
        이미지 대화 상자 창의 링크 탭 에서 서버 찾아보기 단추를 누를 때 실행되어야하는 외부 파일 관리자의 위치
        filebrowserImageBrowseUrl : String
        이미지 대화 상자 창 에서 서버 찾아보기 단추를 누를 때 실행되어야하는 외부 파일 관리자의 위치 
        filebrowserUploadUrl : String
        파일 업로드를 처리하는 스크립트의 위치 설정하면 업로드 탭이 링크 , 이미지 및 플래시 대화 상자 창에 나타남
      */}
    </>
  );
};

export default connect(null, { setProductDetails })(ProductEditor);
