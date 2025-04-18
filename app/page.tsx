
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const wordList = [
  { word: "bias", meaning: "偏见，偏向" },
  { word: "acknowledge", meaning: "承认，致谢" },
  { word: "allocate", meaning: "分配，拨给" },
  { word: "assemble", meaning: "集合，组装" },
  { word: "collapse", meaning: "倒塌，崩溃" },
  { word: "conform", meaning: "符合，遵守" },
  { word: "controversy", meaning: "争议" },
  { word: "devastate", meaning: "毁灭，使震惊" },
  { word: "diverse", meaning: "多样的" },
  { word: "eliminate", meaning: "消除，淘汰" },
  { word: "exploit", meaning: "剥削，开发" },
  { word: "fluctuate", meaning: "波动，起伏" },
  { word: "implement", meaning: "实施，工具" },
  { word: "inevitable", meaning: "不可避免的" },
  { word: "interpret", meaning: "解释，口译" },
  { word: "justify", meaning: "证明...是正当的" },
  { word: "legitimate", meaning: "合法的，正当的" },
  { word: "manipulate", meaning: "操纵，操作" },
  { word: "notion", meaning: "概念，观念" },
  { word: "obstacle", meaning: "障碍" },
];

export default function VocabQuiz() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const current = wordList[index];

  const handleCheck = () => {
    if (input.trim().toLowerCase() === current.word.toLowerCase()) {
      setResult("✅ 正确！");
    } else {
      setResult(`❌ 错了，是：${current.word}`);
    }
  };

  const handleNext = () => {
    setInput("");
    setResult("");
    setIndex((prev) => (prev + 1) % wordList.length);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-bold">六级词汇自测</h2>
          <p>中文：{current.meaning}</p>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="请输入英文单词"
          />
          <Button onClick={handleCheck}>检查</Button>
          <div>{result}</div>
          <Button variant="secondary" onClick={handleNext}>下一个</Button>
        </CardContent>
      </Card>
    </div>
  );
}
