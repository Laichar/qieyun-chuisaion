/* 切韻崔世安咸水普通話擬音
 * https://zhuanlan.zhihu.com/p/58227457
 *
 * 説明
 * 以下內容為生成 unt 切韻朗讀音的函數體
 * 函數接受音韻地位，返回對應的 unt 切韻朗讀音
 */

const is = x => 音韻地位.屬於(x);

function 聲母規則() {
	if (is('幫母')) return 'b';
	if (is('滂母')) return 'p';
    if (is('並母 平聲')) return 'p';
    if (is('並母 上聲')) return 'p';
    if (is('並母 去聲')) return 'b';
    if (is('並母 入聲')) return 'b';
	if (is('明母')) return 'm';
	if (is('端母')) return 't';
	if (is('透母')) return 'th';
	if (is('定母')) return 'l';
	if (is('泥母')) return 'n';
	if (is('知母')) return 'ts';
	if (is('徹母')) return 'tsh';
	if (is('澄母')) return 'ɖ';
	if (is('孃母')) return 'ɳ';
	if (is('精母')) return 't͡s';
	if (is('清母')) return 't͡sʰ';
	if (is('從母')) return 'd͡z';
	if (is('心母')) return 's';
	if (is('邪母')) return 'z';
	if (is('莊母')) return 't͡ʂ';
	if (is('初母')) return 't͡ʂʰ';
	if (is('崇母')) return 'd͡ʐ';
	if (is('生母')) return 'ʂ';
	if (is('俟母')) return 'ʐ';
	if (is('章母')) return 't͡ɕ';
	if (is('昌母')) return 't͡ɕʰ';
	if (is('常母')) return 'd͡ʑ';
	if (is('書母')) return 'ɕ';
	if (is('船母')) return 'ʑ';
	if (is('見母')) return is('三等') ? 'k' : 'q';
	if (is('溪母')) return is('三等') ? 'kʰ' : 'qʰ';
	if (is('羣母')) return is('三等') ? 'ɡ' : 'ʔ';
	if (is('疑母')) return is('三等') ? 'ŋ' : 'ɴ';
	if (is('影母')) return 'ʔ';
	if (is('曉母')) return is('三等') ? 'h' : 'χ';
	if (is('匣母')) return is('三等') ? 'ɦ' : 'ʁ';
	if (is('云母')) return '';
	if (is('以母')) return 'j';
	if (is('來母')) return 'l';
	if (is('日母')) return 'ɲ';
	throw new Error('無聲母規則');
}

function 韻母規則() {
	// 止攝
	if (is('脂韻 開口')) return 'ʳi';
	if (is('脂韻 合口')) return 'ʳɥi';
	if (is('之韻')) return 'ɨ';
	if (is('支韻 開口')) return 'ʳjɛ';
	if (is('支韻 合口')) return 'ʳɥɛ';
	if (is('微韻 開口')) return 'ɨj';
	if (is('微韻 合口')) return 'ẅɨj';
	// 遇攝
	if (is('模韻')) return 'o';
	if (is('魚韻')) return 'j̈ə';
	if (is('虞韻')) return 'ẅɔ';
	// 蟹攝
	if (is('佳韻 開口')) return 'ɻæ';
	if (is('佳韻 合口')) return 'wɻæ';
	if (is('皆韻 開口')) return 'ɻæj';
	if (is('皆韻 合口')) return 'wɻæj';
	if (is('夬韻 開口')) return 'ɻajɕ';
	if (is('夬韻 合口')) return 'wɻajɕ';
	if (is('齊韻 開口')) return 'ej';
	if (is('齊韻 合口')) return 'wej';
	if (is('祭韻 開口')) return 'ʳjɛjɕ';
	if (is('祭韻 合口')) return 'ʳɥɛjɕ';
	if (is('廢韻 開口')) return 'j̈əjɕ';
	if (is('廢韻 合口')) return 'ẅəjɕ';
	if (is('咍韻')) return 'ɐj';
	if (is('灰韻')) return 'wɔ̞j';
	if (is('泰韻 開口')) return 'ɑjɕ';
	if (is('泰韻 合口')) return 'wɑjɕ';
	// 果攝
	if (is('歌韻')) return 'ɑ';
	if (is('戈韻 一等 合口')) return 'wɑ';
	if (is('戈韻 三等 開口')) return 'j̈ɑ';
	if (is('戈韻 三等 合口')) return 'ẅɑ';
	// 假攝
	if (is('麻韻 二等 開口')) return 'ɻa';
	if (is('麻韻 二等 合口')) return 'wɻa';
	if (is('麻韻 三等 開口')) return 'ja';
	// 臻攝
	if (is('臻韻')) {  // [^1]
		if (is('平入聲')) return 'ɻi˞n';
		if (is('上聲')) return 'ɨn';
		if (is('去聲')) return 'ɻin';
		throw new Error('無韻母規則');
	}
	if (is('眞韻 開口')) return 'ʳin';
	if (is('諄韻')) return 'ʳɥin';  // [^2][^3]
	if (is('眞韻 合口')) return 'ɻɥin';
	if (is('欣韻')) return 'ɨn';
	if (is('文韻')) return 'ẅun';
	if (is('痕韻')) return 'ɘn';
	if (is('魂韻')) return 'won';
	if (is('元韻 開口')) return 'j̈ən';
	if (is('元韻 合口')) return 'ẅən';
	// 山攝
	if (is('先韻 開口')) return 'en';
	if (is('先韻 合口')) return 'wen';
	if (is('仙韻 開口')) return 'ʳjɛn';
	if (is('仙韻 合口')) return 'ʳɥɛn';
	if (is('山韻 開口')) return 'ɻæn';
	if (is('山韻 合口')) return 'wɻæn';
	if (is('刪韻 開口')) return 'ɻan';
	if (is('刪韻 合口')) return 'wɻan';
	if (is('寒韻 開口')) return 'ɑn';
	if (is('桓韻 合口')) return 'wɑn';
	// 效攝
	if (is('蕭韻')) return 'ew';
	if (is('宵韻')) return 'ʳjɛw';
	if (is('肴韻')) return 'ɻaw';
	if (is('豪韻')) return 'ɑw';
	// 流攝
	if (is('幽韻')) return 'ɥÿ';
	if (is('尤韻')) return 'ɥ̈u';
	if (is('侯韻')) {  // 根據設定，侯韻幫組為 u，其他為 ɘu
		if (is('幫組'))
			return 'u';
		else
			return 'ɘu';
	}
	// 深攝
	if (is('侵韻')) return 'ʳim';
	// 咸攝
	if (is('添韻 開口')) return 'em';
	if (is('鹽韻 開口')) return 'ʳjɛm';
	if (is('嚴韻 開口')) return 'j̈əm';
	if (is('凡韻 合口')) return 'ẅɞm';
	if (is('咸韻 開口')) return 'ɻæm';
	if (is('銜韻 開口')) return 'ɻam';
	if (is('覃韻 開口')) return 'ɐm';
	if (is('談韻 開口')) return 'ɑm';
	// 曾攝
	if (is('蒸韻 開口')) return 'ʳiŋ';  // [^2]
	if (is('蒸韻 合口')) return 'ʳɥiŋ';  // [^2]
	if (is('登韻 開口')) return 'ɘŋ';
	if (is('登韻 合口')) return 'wɘŋ';
	// 梗攝
	if (is('青韻 開口')) return 'eɲ';
	if (is('青韻 合口')) return 'weɲ';
	if (is('清韻 開口')) return 'ʳjɛɲ';  // [^2]
	if (is('清韻 合口')) return 'ɥɛɲ';
	if (is('耕韻 開口')) return 'ɻæɲ';
	if (is('耕韻 合口')) return 'wɻæɲ';
	if (is('庚韻 二等 開口')) return 'ɻaɲ';
	if (is('庚韻 二等 合口')) return 'wɻaɲ';
	if (is('庚韻 三等 開口')) return 'ɻjaɲ';
	if (is('庚韻 三等 合口')) return 'ɻɥaɲ';
	// 宕攝
	if (is('唐韻 開口')) return 'ɑŋ';
	if (is('唐韻 合口')) return 'wɑŋ';
	if (is('陽韻 開口')) return 'j̈ɐŋ';
	if (is('陽韻 合口')) return 'ẅɐŋ';
	// 江攝
	if (is('江韻')) return 'ɻæŋʷ';
	// 通攝
	if (is('東韻 一等')) return 'uŋʷ';
	if (is('東韻 三等')) return 'ẅuŋʷ';
	if (is('冬韻')) return 'oŋʷ';
	if (is('鍾韻')) return 'ẅɔŋʷ';
	throw new Error('無韻母規則');
}

function 聲調規則() {
	const is清 = is('幫滂端透知徹精清心莊初生章昌書見溪影曉母')
		, is全濁 = is('並定澄從邪崇俟常船羣匣母');
		// 次濁：明泥孃疑云以來日

	if (is('平聲')) return is清 ? '˦' : '˨˩';
	if (is('上聲')) return !is全濁 ? '˦˦˥' : '˨˨˧';
	if (is('去聲')) return is清 ? '˥˩' : '˧˩˨';
	if (is('入聲')) return !is全濁 ? '˥' : '˨˩';
	throw new Error('無聲調規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();
let 聲調 = 聲調規則();

// 處理重紐 [^4]
if (韻母.startsWith('ʳ')) {
	if (is('知莊組'))
		韻母 = 'ɻ' + 韻母.substr(1);  // 無重紐對立，認定為重紐B類
	else if (is('端精章組 或 以來日母'))
		韻母 = 韻母.substr(1);  // 無重紐對立，認定為重紐A類
	else if (is('重紐A類'))
		韻母 = 韻母.substr(1);  // 有重紐對立，默認為重紐A類
	else
		韻母 = 'ɻ' + 韻母.substr(1);  // 有重紐對立，重紐B類
}

// 處理脣音
if (is('幫組')) {
	// 除三等C类外，其他韵母与帮组p相拼时均为开口（不含 [ʷ] 成分）。
	if (韻母.startsWith('ɥ') && !韻母.startsWith('ɥ̈'))
		韻母 = 'j' + 韻母.substr(1);
	else if (韻母.startsWith('w') && !韻母.startsWith('ẅ'))
		韻母 = 韻母.substr(1);
	// 三等C类与帮组p相拼时是ɥ̈，即 [ÿ] 对应的半元音。[^5]
	if (is('三等') && 韻母.startsWith('ẅ'))
		韻母 = 'ɥ̈' + 韻母.substr(2);
}

// 調整 ɻ、w 的顺序 [^6]
if (韻母.startsWith('wɻ') && is('知莊組'))
	韻母 = 'ɻw' + 韻母.substr(2);

// 以母簡化拼式
// 總結：以母三A/三B，以 j 或 ɥ 起始時，省略聲母
if (is('以母 三等 支脂祭眞仙宵諄臻麻清庚蒸侵鹽韻') && (韻母.startsWith('j') || 韻母.startsWith('ɥ')))
	聲母 = '';

// 處理入聲韻
if (is('入聲')) {
	if (韻母.endsWith('m'))
		韻母 = 韻母.slice(0, -1) + 'p';
	else if (韻母.endsWith('n'))
		韻母 = 韻母.slice(0, -1) + 't';
	else if (韻母.endsWith('ɲ'))
		韻母 = 韻母.slice(0, -1) + 'c';
	else if (韻母.endsWith('ŋ'))
		韻母 = 韻母.slice(0, -1) + 'k';
	else if (韻母.endsWith('ŋʷ'))
		韻母 = 韻母.slice(0, -2) + 'kʷ';
}

// 當没有聲母，韻母以 ɨ 起始時，添加聲母 j̈
if (聲母 == '' && 韻母 == 'ɨ')
	聲母 = 'j̈';

return 聲母 + 韻母 + 聲調;