import React from "react";
import TextArea from './TextArea';

export default function Section({ id, d }) {
    return (
        <div id={id} >

            < TextArea
                verseNo={d.AyahNo}
                arabicText={d.OrignalArabicText}
                englishMeaning={d.EnglishTranslation}
            ></TextArea>

        </div>
    );
}
