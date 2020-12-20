export function getSongAudio(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
/**
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
 */
export function parseLyric(lyricStr) {
  const reg = /\[(\d{2}):(\d{2})\.(\d{3})\]/;
  const lines = lyricStr.split('\n');
  const result = [];
  for(let value of lines) {
    if(!value) continue; 
    const match = reg.exec(value);
    if(!match) continue;
    const t1 = match[1] * 60 * 100;
    const t2 = match[2] * 100;
    const t3 = match[3].length === 3 ? match[3] * 1 : match[3] * 10;
    const totalTime = t1 + t2 + t3;
    const content = value.replace(reg,'').trim();
    const lyricObj = {
      totalTime,
      content
    };
    result.push(lyricObj);
  }
  return result;
}