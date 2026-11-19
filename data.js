window.COURSE_DATA = {
  "meta": {
    "title": "C/C++ 高程知识复习台",
    "subtitle": "按知识点分块练习、判断掌握程度，并自动安排下一轮复习",
    "version": 6,
    "updatedAt": "2026-11-19",
    "sourceNote": "根据 Canvas 课程 118150 的 lesson1-8 课件整理；86 道课件例题均按课件内容录入，统一使用课件中的 using namespace std; 写法；多程序例题分块展示，课件填空保留原位置并在“课件填空答案”中给出答案；知识点卡只保留归纳与练习。"
  },
  "lessons": [
    {
      "id": "lesson1",
      "number": 1,
      "title": "概述",
      "subtitle": "程序结构、编译流程与 C++ 入门"
    },
    {
      "id": "lesson2",
      "number": 2,
      "title": "基本数据类型、运算符和表达式",
      "subtitle": "类型、运算、优先级与类型转换"
    },
    {
      "id": "lesson3",
      "number": 3,
      "title": "结构化程序设计",
      "subtitle": "顺序、选择、循环与常用算法"
    },
    {
      "id": "lesson4",
      "number": 4,
      "title": "数组",
      "subtitle": "一维、二维、字符数组与查找排序"
    },
    {
      "id": "lesson5",
      "number": 5,
      "title": "指针",
      "subtitle": "地址、数组、字符串与动态内存"
    },
    {
      "id": "lesson6",
      "number": 6,
      "title": "函数",
      "subtitle": "定义、参数传递、递归、作用域与复用"
    },
    {
      "id": "lesson7",
      "number": 7,
      "title": "结构和链表",
      "subtitle": "结构体、动态内存与单链表操作"
    },
    {
      "id": "lesson8",
      "number": 8,
      "title": "文件",
      "subtitle": "文件指针、打开方式与各类读写"
    },
    {
      "id": "lesson9",
      "number": 9,
      "title": "期中综合梳理",
      "subtitle": "跨章易错点与常用算法模板"
    }
  ],
  "cards": [
    {
      "id": "l1-ex1-1",
      "lessonId": "lesson1",
      "kind": "example",
      "title": "例1.1 输入圆的半径，求面积",
      "tags": [
        "课件例题",
        "程序骨架",
        "cin/cout"
      ],
      "overview": "课件第一个完整程序：用 #define 定义符号常量 PI，从键盘读入半径 r，计算并输出圆面积。它同时展示了 C++ 程序最基本的骨架。",
      "keyPoints": [
        "#include <iostream> 把输入输出头文件内容插入源文件，cin、cout 才能使用。",
        "using namespace std; 之后可以直接写 cin、cout，不必再加命名空间限定。",
        "#define PI 3.14 是编译预处理中的符号常量，预处理阶段直接把 PI 替换成 3.14。",
        "main 函数是程序入口，int main() 表示返回 int，return 0 表示正常结束。"
      ],
      "pitfalls": [
        "漏写 using namespace std; 时，必须给 cin、cout 加上命名空间限定。",
        "把 #define PI 3.14 后面的分号写上，会把分号也替换进表达式。",
        "system(\"pause\") 需要 <cstdlib>（旧式写法常由 iostream 间接带入），只用于暂停观察结果。"
      ],
      "example": {
        "title": "例1.1 输入圆的半径，求面积",
        "source": "课件 lesson1 · P4",
        "code": "#include <iostream>    // 文件包含命令\nusing namespace std;   // 使用std命名空间\n#define PI 3.14        // 定义符号常量PI\nint main()             // 函数头\n{\n    double r;          // 说明r为double类型的变量\n    cin>>r;            // 从键盘输入数据，送到变量r中\n    double s=PI*r*r;   // 先说明s为double类型的变量，再把计算的圆面积赋值给s\n    cout<<s<<endl;     // 先输出s的值，再输出换行符\n    system(\"pause\");   // 程序暂停执行，按任意一个键继续\n    return 0;          // 返回值为0\n}",
        "output": "输入 2 时输出：12.56",
        "explanation": "这是全课程反复使用的程序骨架：预处理命令 → 命名空间 → 主函数 → 变量说明 → 输入 → 处理 → 输出 → 暂停 → 返回。注意课件把变量 s 的说明和计算写在同一行，并且用 PI*r*r 而不是 3.14*r*r，体现符号常量的作用。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "#include 是编译预处理命令，把 iostream 的内容插入到这一行所在位置；cin、cout 的声明都在其中。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "std 是标准库命名空间。加了这一行，cin、cout 可以直接写；不加就要给标准库对象加命名空间限定。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "符号常量在预处理阶段做文本替换，PI 不是变量，不占存储空间，也不能被赋值。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "r 声明为 double，输入小数时不会像 int 那样被截断。"
          },
          {
            "section": 0,
            "line": 7,
            "text": ">> 后面必须是变量，表示把键盘输入送到 r 的存储单元。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "先说明 s 为 double，再用半径平方乘 PI 计算面积并赋给 s。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "<< 把 s 的值送到标准输出，endl 输出换行并刷新缓冲区。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "让控制台暂停，便于观察结果；这是课件为 Visual Studio 控制台程序加的辅助语句。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "main 返回 0，表示程序正常结束。"
          }
        ]
      },
      "masteryHint": "能不看课件写出这个骨架，并解释每一行的作用。",
      "sourcePages": [
        4
      ]
    },
    {
      "id": "l1-ex1-2",
      "lessonId": "lesson1",
      "kind": "example",
      "title": "例1.2 格式控制符输出示例",
      "tags": [
        "课件例题",
        "格式控制",
        "iomanip"
      ],
      "overview": "用同一个整数 65 和同一个实数 123.456，演示 dec、hex、oct、ends、setprecision、setw、setfill 等格式控制符的效果。",
      "keyPoints": [
        "dec、hex、oct 分别按十、十六、八进制输出整数，设置后一直有效。",
        "setprecision(n) 设置浮点数的有效数字位数，设置后对后续输出持续有效。",
        "setw(n) 只对紧接着的一个输出项生效，默认右对齐、左边补空格。",
        "setfill(c) 设置填充字符，通常与 setw 配合使用。",
        "setprecision、setw、setfill 需要 #include <iomanip>。"
      ],
      "pitfalls": [
        "setw 只作用一次，下一个输出项就恢复默认宽度。",
        "setprecision(4) 是有效数字 4 位，不是小数点后 4 位。",
        "ends 输出的是字符串结束符 '\\0'，不是空格，也不是换行。"
      ],
      "example": {
        "title": "例1.2 格式控制符输出示例",
        "source": "课件 lesson1 · P11",
        "code": "#include \"iostream\"\n#include \"iomanip\"\nusing namespace std;\nint main()\n{\nint x=65;\ndouble f=123.456;\ncout<<\"123456789012345\"<<endl;\ncout<<dec<<x<<' '<<hex<<x<<' '<<oct<<x<<endl;\ncout<<x<<ends<<x<<endl;\ncout<<f<<endl;\ncout<<setprecision(4)<<f<<endl;\ncout<<setw(12)<<f<<endl;\ncout<<setw(12)<<setfill('#')<<f<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "123456789012345\n65 41 101\n65\\065\n123.456\n123.5\n       123.5\n#######123.5",
        "explanation": "课件用第一行 \"123456789012345\" 当标尺，方便数出后面每行占了多少列。65 的十六进制是 41，八进制是 101；setprecision(4) 把 123.456 变成 4 位有效数字 123.5；setw(12) 补空格到 12 列，setfill('#') 后改为补 #。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "格式控制符 setw、setfill、setprecision 定义在 iomanip 中；课件用双引号形式包含。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "dec 设置十进制，hex 设置十六进制，oct 设置八进制；65 分别输出 65、41、101。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "ends 在中间输出一个 '\\0'，所以屏幕上 65 和 65 之间看起来只有一个控制字符。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "4 位有效数字：123.456 → 123.5。注意不是保留 4 位小数。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "setw(12) 只对这一项生效，不足 12 列在左边补空格。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "setfill('#') 把填充字符改为 #，于是左边补 7 个 #，总宽仍为 12。"
          }
        ]
      },
      "masteryHint": "能说出 setw 与 setprecision 的作用范围差别，并预测输出列宽。",
      "sourcePages": [
        11
      ]
    },
    {
      "id": "l1-program-structure",
      "lessonId": "lesson1",
      "title": "C++ 程序的基本结构",
      "tags": [
        "程序骨架",
        "main",
        "编译"
      ],
      "overview": "一个可执行的 C++ 控制台程序通常包含预处理指令、必要的声明和唯一的 main 函数。程序从 main 开始执行，返回 0 通常表示正常结束。",
      "keyPoints": [
        "预处理指令以 # 开头，例如 #include <iostream>。",
        "main 是程序入口，标准写法是 int main()。",
        "语句以分号结束，代码块使用一对花括号。",
        "源文件需要先编译、链接，才能生成可执行程序。"
      ],
      "pitfalls": [
        "把 main 写成 Main；C++ 区分大小写。",
        "忘记写 using namespace std;，却直接使用 cout。",
        "把函数定义写在另一个函数内部。"
      ],
      "exercise": {
        "prompt": "编写一个完整程序，输出 Hello, C++! 后换行，并正常结束。",
        "starter": "#include <iostream>\n\nint main() {\n    // 在这里完成输出\n\n    return 0;\n}",
        "hint": "使用 cout、字符串字面量、<< 和 endl。",
        "checks": [
          {
            "label": "包含 iostream 头文件",
            "pattern": "#\\s*include\\s*<\\s*iostream\\s*>"
          },
          {
            "label": "定义 int main",
            "pattern": "\\bint\\s+main\\s*\\("
          },
          {
            "label": "输出指定文本",
            "pattern": "\\bcout\\s*<<\\s*\"Hello,\\s*C\\+\\+!\""
          },
          {
            "label": "输出后换行",
            "pattern": "(?:endl|['\"]\\\\n['\"])"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}",
        "explanation": "这道题考查程序骨架与最基本的输出。可以写成 endl，也可以在字符串末尾写 \\n。",
        "commonMistakes": [
          "漏写 using namespace std;。",
          "漏掉 main 函数或 return 0。",
          "字符串引号不配对。"
        ]
      },
      "masteryHint": "能独立写出最小程序并解释编译、链接和程序入口。"
    },
    {
      "id": "l1-compile-link",
      "lessonId": "lesson1",
      "title": "源代码、编译与链接",
      "tags": [
        "编译",
        "链接",
        "错误定位"
      ],
      "overview": "编译器先检查语法并把源代码翻译为目标代码，链接器再把多个目标文件与库组合成可执行文件。理解阶段划分有助于定位报错。",
      "keyPoints": [
        "预处理阶段处理 #include、#define 等指令。",
        "编译阶段检查语法与类型，并生成目标代码。",
        "链接阶段解析外部符号，例如库函数或其他源文件中的函数。",
        "缺少函数实现常见于链接错误；语法和类型错误通常在编译阶段出现。"
      ],
      "pitfalls": [
        "把所有错误都归因于“编译器坏了”。",
        "只声明函数却没有提供定义，直到链接时才报未解析外部符号。",
        "混淆运行期逻辑错误与编译期错误。"
      ],
      "exercise": {
        "prompt": "补全一个名为 add 的函数定义，接收两个 int 并返回它们的和；main 已经调用它。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b);\n\n// 在这里补充函数定义\n\nint main() {\n    cout << add(2, 3);\n    return 0;\n}",
        "hint": "函数定义需要返回类型、函数名、参数列表和函数体。",
        "checks": [
          {
            "label": "定义返回 int 的 add",
            "pattern": "\\bint\\s+add\\s*\\([^;{}]*\\)\\s*\\{"
          },
          {
            "label": "返回 a 与 b 的和",
            "pattern": "\\breturn\\s+[^;]*(?:a\\s*\\+\\s*b|b\\s*\\+\\s*a)\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(2, 3);\n    return 0;\n}",
        "explanation": "函数定义提供函数体，使链接器能够找到 add 的实现。返回表达式可以写 a + b 或 b + a。",
        "commonMistakes": [
          "只在声明后加分号，仍然没有函数体。",
          "返回类型写成 void。",
          "函数参数名与函数体中的变量不一致。"
        ]
      },
      "masteryHint": "能区分编译错误、链接错误和运行期错误。"
    },
    {
      "id": "l1-identifiers",
      "lessonId": "lesson1",
      "title": "关键字与标识符命名规则",
      "tags": [
        "关键字",
        "标识符",
        "命名",
        "大小写"
      ],
      "overview": "标识符用于命名变量、函数等实体，只能由字母、数字和下划线组成，首字符不能是数字，也不能使用关键字。",
      "keyPoints": [
        "标识符可包含字母、数字和下划线。",
        "首字符必须是字母或下划线。",
        "C++ 区分大小写，Int 与 int 不是同一个名称。",
        "关键字是语言保留字，不能作为用户标识符。",
        "名称应简洁并表达用途。"
      ],
      "pitfalls": [
        "2A 以数字开头，不合法。",
        "A-B、area of circle 含非法字符。",
        "int 是关键字，不能作为变量名。",
        "把大小写不同的名称当成同一个名称。"
      ],
      "exercise": {
        "prompt": "声明 int 变量 average_score 并赋值为 90，然后输出该变量。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明并输出变量\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "90",
        "hint": "变量名必须完整写成 average_score，输出时不要加双引号。",
        "checks": [
          {
            "label": "声明 int average_score",
            "pattern": "\\bint\\s+average_score\\s*(?:=\\s*90|\\{\\s*90\\s*\\})\\s*;"
          },
          {
            "label": "赋值为 90",
            "pattern": "average_score\\s*(?:=\\s*90|\\{\\s*90\\s*\\})|\\bint\\s+average_score\\s*=\\s*90"
          },
          {
            "label": "输出变量而不是字符串",
            "pattern": "\\bcout\\s*<<\\s*average_score\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int average_score = 90;\n    cout << average_score << endl;\n    return 0;\n}",
        "explanation": "变量名合法并已初始化；cout 输出变量值 90，而不是文字 average_score。",
        "commonMistakes": [
          "写成 int average score，名称中出现空格。",
          "输出 \"average_score\" 字符串。",
          "使用关键字作为变量名。"
        ]
      },
      "masteryHint": "能判断标识符是否合法，并能区分关键字和普通名称。"
    },
    {
      "id": "l1-stream-io",
      "lessonId": "lesson1",
      "title": "cin、cout 与格式控制",
      "tags": [
        "cin",
        "cout",
        "输入输出",
        "iomanip"
      ],
      "overview": "cin 使用 >> 读取数据，cout 使用 << 输出数据；setw、setprecision 等格式控制通常需要 <iomanip>。",
      "keyPoints": [
        "cin >> a >> b; 可以用空白字符分隔多个输入。",
        ">> 后面必须是可写入的对象，不能是常量。",
        "cout 可以连续输出多个表达式。",
        "endl 输出换行并刷新输出流。",
        "fixed 与 setprecision(2) 可固定输出两位小数。"
      ],
      "pitfalls": [
        "把输入运算符和输出运算符写反。",
        "cin >> 3 试图把输入写入常量。",
        "只写 setprecision(2) 而没有 fixed，可能表示有效数字而不是小数位。",
        "使用 setw 却忘记包含 <iomanip>。"
      ],
      "exercise": {
        "prompt": "读取实数半径 r，计算圆面积（PI 取 3.14），保留两位小数输出。",
        "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    // 读取半径并输出面积\n    return 0;\n}",
        "sampleInput": "2",
        "expectedOutput": "12.56",
        "hint": "面积公式是 3.14 * r * r；输出前使用 fixed << setprecision(2)。",
        "checks": [
          {
            "label": "使用 cin 读取半径",
            "pattern": "\\bcin\\s*>>\\s*r\\b"
          },
          {
            "label": "使用圆面积公式",
            "pattern": "3\\.14\\s*\\*\\s*r\\s*\\*\\s*r|3\\.14\\s*\\*\\s*r\\s*\\*\\s*r"
          },
          {
            "label": "固定两位小数",
            "pattern": "\\bfixed\\b[\\s\\S]*\\bsetprecision\\s*\\(\\s*2\\s*\\)"
          },
          {
            "label": "使用 cout 输出",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double r;\n    cin >> r;\n    cout << fixed << setprecision(2) << 3.14 * r * r << endl;\n    return 0;\n}",
        "explanation": "读取 r 后按 PI*r*r 计算；fixed 与 setprecision(2) 保证输出两位小数。",
        "commonMistakes": [
          "把 r 的平方写成 r * 2。",
          "没有使用 fixed，导致 setprecision 的含义不同。",
          "把输入方向写成 cout >> r。"
        ]
      },
      "masteryHint": "能正确选择 >> 与 <<，并控制小数位数。"
    },
    {
      "id": "l1-preprocessor",
      "lessonId": "lesson1",
      "title": "#include、#define 与预处理",
      "tags": [
        "预处理",
        "#include",
        "#define",
        "宏"
      ],
      "overview": "预处理发生在编译之前；#include 插入头文件内容，#define 定义文本替换的符号常量。",
      "keyPoints": [
        "处理流程为预处理、编译、链接、运行。",
        "#include <文件名> 通常查找系统目录。",
        "#include \"文件名\" 通常先查找当前项目目录。",
        "一条 #include 只能包含一个文件。",
        "预处理命令末尾不加分号。",
        "#define PI 3.14 在预处理阶段进行文本替换。"
      ],
      "pitfalls": [
        "写成 #include <iostream>;。",
        "写成 #define PI 3.14;，分号会进入宏替换文本。",
        "把 #define 当成运行时赋值语句。",
        "以为宏定义具有普通变量的类型检查。"
      ],
      "exercise": {
        "prompt": "用 #define 定义 PI 为 3.14159，读取半径 r，输出圆周长。",
        "starter": "#include <iostream>\nusing namespace std;\n\n// 定义 PI\n\nint main() {\n    double r;\n    // 完成输入与输出\n    return 0;\n}",
        "sampleInput": "1",
        "expectedOutput": "6.28318",
        "hint": "#define 行末不要加分号；圆周长公式为 2 * PI * r。",
        "checks": [
          {
            "label": "定义宏 PI",
            "pattern": "#\\s*define\\s+PI\\s+3\\.14159"
          },
          {
            "label": "宏定义行末没有分号",
            "pattern": "#\\s*define\\s+PI\\s+3\\.14159(?!\\s*;)"
          },
          {
            "label": "读取半径",
            "pattern": "\\bcin\\s*>>\\s*r\\b"
          },
          {
            "label": "计算圆周长",
            "pattern": "2\\s*\\*\\s*PI\\s*\\*\\s*r"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n#define PI 3.14159\n\nint main() {\n    double r;\n    cin >> r;\n    cout << 2 * PI * r << endl;\n    return 0;\n}",
        "explanation": "宏 PI 定义在编译前完成文本替换，程序随后读取 r 并按 2*PI*r 输出。",
        "commonMistakes": [
          "在 #define 行末添加分号。",
          "把圆面积公式 PI*r*r 当成长度。",
          "使用宏名 PI 作为普通变量重新赋值。"
        ]
      },
      "masteryHint": "能说明预处理阶段的工作，并正确书写不带分号的预处理命令。"
    },
    {
      "id": "l2-ex2-2",
      "lessonId": "lesson2",
      "kind": "example",
      "title": "例2-2 逻辑与的短路求值",
      "tags": [
        "课件例题",
        "短路求值",
        "自增"
      ],
      "overview": "m=2&&n++ 中，2 为真，逻辑与继续计算右边，n++ 使 n 加 1；若改成 m=0&&n++，左边已经为假，右边不再执行。",
      "keyPoints": [
        "&& 从左到右计算，只要遇到 0 就停止，后面的表达式不执行。",
        "|| 从左到右计算，只要遇到非 0 就停止，后面的表达式不执行。",
        "n++ 作为表达式参与运算，整个表达式的值是 n 加 1 之前的值。",
        "短路不仅影响结果，还会影响 n 是否被加 1，这是考试常考点。"
      ],
      "pitfalls": [
        "以为 && 两边一定会都算一遍。",
        "把 n++ 当成先加再用；单独成句时二者相同，参与表达式时不同。",
        "忽略 m=0&&n++ 时 n 仍然是 10。"
      ],
      "example": {
        "title": "例2-2 逻辑与的短路求值",
        "source": "课件 lesson2 · P20",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{int m,n=10;\n  m=2&&n++;\n cout<<\"m=\" <<m<<\" ,n= \" \n<<n;\n system(\"pause\");\n return 0;\n}",
        "output": "m=1 ,n= 11",
        "explanation": "2 是非 0 值，逻辑与的左边为真，必须继续看右边，于是执行 n++。n++ 的值是 10（非 0，作为逻辑值就是 1），n 自身变成 11，所以 m 得到 1。改成 m=0&&n++ 时，左边为假，右边不执行，m=0、n 仍为 10。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "只给 n 初始化，m 还没有确定值；紧接着的赋值会覆盖 m。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "2 为真，继续算 n++；n++ 的值是 10，逻辑值为 1，所以 m=1，n 变为 11。逻辑与的结果只取 0 或 1，不会把 10 直接赋给 m。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "先输出 m 的值，再输出后面的 n，验证短路是否执行。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "这里没有 endl，输出后不换行，但值仍然是 11。"
          }
        ]
      },
      "masteryHint": "能分别写出 m=2&&n++ 与 m=0&&n++ 执行后 m、n 的值。",
      "sourcePages": [
        20
      ]
    },
    {
      "id": "l2-ex2-3",
      "lessonId": "lesson2",
      "kind": "example",
      "title": "例2-3 用 C 代码表达命题",
      "tags": [
        "课件例题",
        "逻辑表达式",
        "关系运算"
      ],
      "overview": "把两个自然语言命题翻译成 C/C++ 逻辑表达式：m 能且只能被 2 和 3 中的一个整除；ch 是大写字母。",
      "keyPoints": [
        "“能且只能被 2 和 3 中的一个整除”＝两个条件一真一假。",
        "两个条件一真一假，可写成 (条件1) != (条件2)，也可写成 (条件1)+(条件2)==1。",
        "判断大写字母要同时满足 ch>='A' 和 ch<='Z'，中间用 && 连接。",
        "不能写成 'A'<=ch<='Z'，关系运算从左到右结合，结果不是区间判断。"
      ],
      "pitfalls": [
        "把“能被 2 或 3 整除”写成 m%2==0||m%3==0，这包含了同时被 2 和 3 整除的情况。",
        "把区间写成 'A'<=ch<='Z'。",
        "用 = 代替 ==。"
      ],
      "example": {
        "title": "例2-3 用 C 代码表达命题",
        "source": "课件 lesson2 · P30",
        "code": "(m%2==0) != (m%3==0)\n\n(m%2==0) + (m%3==0) == 1\n\nch>='A' && ch<='Z'",
        "output": "课件只给命题，未给完整程序；上面是标准答案。",
        "explanation": "第一题的关键是“且只能一个”：能被 2 整除和被 3 整除这两个条件必须恰好一个成立。C/C++ 中关系运算的结果是 0 或 1，所以可以直接比较两个结果是否不等，或把两个结果相加看是否等于 1。第二题用两个关系表达式与 && 连接，才是数学上的闭区间。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "两个布尔结果不相等，表示恰好一个为真，排除了同时被 2、3 整除。"
          },
          {
            "section": 1,
            "line": 1,
            "text": "关系表达式结果为 0/1，相加等于 1 也表示恰好一个成立。"
          },
          {
            "section": 2,
            "line": 1,
            "text": "大写字母必须同时满足下界和上界，&& 不能省。"
          }
        ],
        "sections": [
          {
            "label": "命题 1：m 能且只能被 2 和 3 中的一个数整除",
            "code": "(m%2==0) != (m%3==0)"
          },
          {
            "label": "等价写法",
            "code": "(m%2==0) + (m%3==0) == 1"
          },
          {
            "label": "命题 2：ch 是大写字母",
            "code": "ch>='A' && ch<='Z'"
          }
        ]
      },
      "masteryHint": "能把“恰好一个成立”翻译成 != 或求和 ==1 两种写法。",
      "sourcePages": [
        30
      ]
    },
    {
      "id": "l2-ex2-4",
      "lessonId": "lesson2",
      "kind": "example",
      "title": "例2-4 求直角三角形另一条直角边、周长和面积",
      "tags": [
        "课件例题",
        "sqrt",
        "setw"
      ],
      "overview": "输入斜边 c 和一条直角边 a，用勾股定理求 b=sqrt(c*c-a*a)，再求周长 l=a+b+c 和面积 s=a*b/2。",
      "keyPoints": [
        "sqrt 是数学库函数，课件只包含了 iostream、iomanip，严格编译时还需要 <cmath>。",
        "b、l、s 中 s 声明为 double，避免整数除法把面积截断。",
        "setw(3)、setw(4)、setw(5) 分别只作用于紧随其后的一个输出项。",
        "输入顺序是 c 再 a，别按题目文字顺序读成 a 再 c。"
      ],
      "pitfalls": [
        "写成 sqrt(c*c-a*a) 时括号漏掉，或把 c、a 输反。",
        "用 int 存 b、l、s，导致小数被截断。",
        "以为 setw 会一直有效。"
      ],
      "example": {
        "title": "例2-4 求直角三角形另一条直角边、周长和面积",
        "source": "课件 lesson2 · P31",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{  \nfloat a,b,c;\ndouble l,s;\ncout<<\" 输入斜边、直角边的长：\";\ncin>>c>>a;\nb=sqrt(c*c-a*a);\nl=a+b+c;\ns=a*b/2;\ncout<<\" 计算结果：\"<<endl;\ncout<<setw(3)<<\"b=\"<<b<<endl<<setw(4)<<\"l=\"<<l<<endl<<setw(5)<<\"s=\"<<s<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 5 3 时：b=4，l=12，s=6（每行前面按 setw 补空格）",
        "explanation": "勾股定理先算另一条直角边，再算周长和面积。课件用 float 存三条边、double 存周长和面积，是为了让结果保留小数。setw 只负责把 \"b=\"、\"l=\"、\"s=\" 这几段文字按指定宽度右对齐，不改变数值本身。",
        "notes": [
          {
            "section": 0,
            "line": 9,
            "text": "先读斜边 c，再读直角边 a，顺序与提示文字一致。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "sqrt 求平方根；c*c-a*a 要先算好再开方，括号不能省。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "a、b 是 float，所以除法是浮点除法，不会像 int 那样丢掉小数。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "setw 只对 \"b=\" 这一项生效，不足 3 列在左边补空格。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "下一个输出项重新指定宽度 4。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "再下一个输出项指定宽度 5。"
          }
        ]
      },
      "masteryHint": "能独立写出勾股定理程序，并解释为什么 s 要用 double。",
      "sourcePages": [
        31
      ]
    },
    {
      "id": "l2-ex2-5",
      "lessonId": "lesson2",
      "kind": "example",
      "title": "例2-5 输出三位整数的符号和各位数字",
      "tags": [
        "课件例题",
        "整数分解",
        "条件运算"
      ],
      "overview": "输入一个三位整数，先取出符号，再取绝对值，然后用 / 和 % 分解出百位、十位、个位，按表格形式输出。",
      "keyPoints": [
        "c4=x>=0?'+':'-' 用条件运算符把符号存成字符。",
        "abs(x) 求整数绝对值，需要 <cstdlib>（或 <cmath>）。",
        "x%10 取个位，x=x/10 去掉个位；再 %10 得十位，再 /10 得百位。",
        "setw(2)、setw(8) 控制表头与数据的对齐。"
      ],
      "pitfalls": [
        "先分解数字再取绝对值，负数的 % 结果可能为负。",
        "把 x=x/10 写成 x=x%10，数字会越取越少。",
        "忘记 abs 的头文件。"
      ],
      "example": {
        "title": "例2-5 输出三位整数的符号和各位数字",
        "source": "课件 lesson2 · P32",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{    int c1,c2,c3;\nchar c4;\nint x;\ncin>>x;\nc4=x>=0?'+':'-'; //x 的符号存入c4\nx=abs(x);\n// 求整型数x 的绝对值\nc3=x%10;\n//x%10 为个位数字\nx=x/10;\nc2=x%10;\nc1=x/10;\ncout<<\"  数符百位数十位数个位数\"<<endl;\ncout<<setw(2)<<c4<<setw(8)<<c1 \n<<setw(8)<<c2<<setw(8)<<c3<<endl;\nsystem(\"pause\");\nreturn 0;  \n }",
        "output": "输入 -123 时，第二行依次输出 -、1、2、3（各列按 setw 对齐）",
        "explanation": "先把符号单独保存，再把 x 变成非负数，后面的 / 和 % 就只处理数字部分。取位顺序是个位 → 十位 → 百位，所以变量名 c3、c2、c1 正好倒着对应。输出时用 setw 把符号和三位数字排成表头对应的列。",
        "notes": [
          {
            "section": 0,
            "line": 9,
            "text": "条件运算符：x>=0 为真取 '+'，否则取 '-'，结果存入 char 变量 c4。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "取绝对值后，-123 变成 123，后续取位不会受负号影响。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "%10 取出当前最低位，第一次得到个位 3。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "整数除法去掉最低位，123 变成 12。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "对 12 取余得到十位 2。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "12/10 得到百位 1。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "符号列宽 2，setw(8) 依次控制后面三列的宽度。"
          }
        ]
      },
      "masteryHint": "能画出 x 在每一步的值，并说出 c1、c2、c3 分别对应哪一位。",
      "sourcePages": [
        32
      ]
    },
    {
      "id": "l2-variable-init",
      "lessonId": "lesson2",
      "title": "变量、声明与初始化",
      "tags": [
        "变量",
        "初始化",
        "作用域"
      ],
      "overview": "变量把类型、名称和存储空间绑定在一起。局部变量应尽量在声明时初始化，避免读取不确定值。",
      "keyPoints": [
        "声明通常包含类型和变量名，例如 int count;。",
        "初始化在创建变量时给出初值，例如 int count = 0;。",
        "花括号初始化 int count{0}; 能防止窄化转换。",
        "局部变量的作用域从声明处开始，到所在代码块结束。"
      ],
      "pitfalls": [
        "读取未初始化的局部变量。",
        "认为所有未初始化变量都会自动变成 0。",
        "在变量作用域之外继续使用它。"
      ],
      "exercise": {
        "prompt": "声明并初始化两个变量：int 类型 score 为 90，double 类型 rate 为 0.5。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明并初始化 score 和 rate\n\n    cout << score << \" \" << rate;\n    return 0;\n}",
        "hint": "可以在变量名后用 = 或花括号初始化。",
        "checks": [
          {
            "label": "声明 int score 并赋值为 90",
            "pattern": "\\bint\\s+score\\s*(?:=\\s*90|\\{\\s*90\\s*\\})\\s*;"
          },
          {
            "label": "声明 double rate 并赋值为 0.5",
            "pattern": "\\bdouble\\s+rate\\s*(?:=\\s*0?\\.5|\\{\\s*0?\\.5\\s*\\})\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score=90;\n    double rate=0.5;\n    cout << score << \" \" << rate;\n    return 0;\n}",
        "explanation": "声明时直接初始化最稳妥。花括号初始化既清晰，也能帮助发现不允许的窄化转换。",
        "commonMistakes": [
          "只声明不赋值，随后直接读取。",
          "把 double 变量声明为 int。",
          "初始化语句末尾漏掉分号。"
        ]
      },
      "masteryHint": "能正确选择类型，并说明初始化与赋值的区别。"
    },
    {
      "id": "l2-types",
      "lessonId": "lesson2",
      "title": "基本数据类型与取值范围",
      "tags": [
        "int",
        "double",
        "char",
        "bool"
      ],
      "overview": "类型决定数据如何解释、可表示的范围以及可参与哪些运算。整数、浮点数、字符和布尔值各有用途。",
      "keyPoints": [
        "int 表示整数；不同平台上的具体宽度可能不同。",
        "double 表示浮点数，适合带小数且允许近似误差的计算。",
        "char 保存字符编码值，字符字面量使用单引号。",
        "bool 只有 true 和 false。",
        "无符号类型不能表示负数，回绕行为容易造成错误。"
      ],
      "pitfalls": [
        "用 double 精确比较两个浮点数是否相等。",
        "把字符字面量 'A' 和字符串字面量 \"A\" 混淆。",
        "把负数存入无符号整数后仍按负数理解。"
      ],
      "exercise": {
        "prompt": "声明 char 变量 grade 为 'A'、bool 变量 passed 为 true、double 变量 ratio 为 0.75，并输出三者。",
        "starter": "#include <iostream>\n\nint main() {\n    // 声明三个变量\n\n    // 输出它们\n    return 0;\n}",
        "hint": "字符使用单引号，布尔值直接写 true。",
        "checks": [
          {
            "label": "char grade 为 'A'",
            "pattern": "\\bchar\\s+grade\\s*(?:=\\s*'A'|\\{\\s*'A'\\s*\\})\\s*;"
          },
          {
            "label": "bool passed 为 true",
            "pattern": "\\bbool\\s+passed\\s*(?:=\\s*true|\\{\\s*true\\s*\\})\\s*;"
          },
          {
            "label": "double ratio 为 0.75",
            "pattern": "\\bdouble\\s+ratio\\s*(?:=\\s*0?\\.75|\\{\\s*0?\\.75\\s*\\})\\s*;"
          },
          {
            "label": "输出三个变量",
            "pattern": "\\bcout\\s*<<[\\s\\S]*(?:grade[\\s\\S]*passed[\\s\\S]*ratio|grade[\\s\\S]*ratio[\\s\\S]*passed|passed[\\s\\S]*grade[\\s\\S]*ratio|passed[\\s\\S]*ratio[\\s\\S]*grade|ratio[\\s\\S]*grade[\\s\\S]*passed|ratio[\\s\\S]*passed[\\s\\S]*grade)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'A';\n    bool passed = true;\n    double ratio = 0.75;\n    cout << grade << \" \" << passed << \" \" << ratio;\n    return 0;\n}",
        "explanation": "类型名称和字面量形式必须匹配：字符用单引号，布尔值写 true/false，浮点数写小数点。",
        "commonMistakes": [
          "把 'A' 写成 \"A\"。",
          "用 int 保存布尔值虽然可转换，但语义不清。",
          "浮点数字面量写成 0,75。"
        ]
      },
      "masteryHint": "能根据取值范围和语义选择合适类型。"
    },
    {
      "id": "l2-const",
      "lessonId": "lesson2",
      "title": "const 与符号常量",
      "tags": [
        "const",
        "符号常量",
        "#define"
      ],
      "overview": "const 定义只读变量，必须在定义时初始化；#define 也可以定义符号常量，预处理时直接替换。",
      "keyPoints": [
        "const 变量在定义时必须初始化，之后不能通过变量名修改。",
        "#define 定义的符号常量在预处理阶段做文本替换。",
        "#define 行末不加分号，符号常量一般用大写字母。",
        "const 变量有类型，编译器可以检查类型错误。"
      ],
      "pitfalls": [
        "先写 const int maxStudents; 再在下一行赋值。",
        "在 const 定义后再次赋值。",
        "把 #define 写成语句并在行末加分号。"
      ],
      "exercise": {
        "prompt": "声明只读 int maxStudents 为 60，以及只读 double passRate 为 0.6。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 完成两个常量声明\n\n    cout << maxStudents << \" \" << passRate;\n    return 0;\n}",
        "hint": "两个变量都用 const，并在定义时初始化。",
        "checks": [
          {
            "label": "maxStudents 使用 const int 且为 60",
            "pattern": "\\bconst\\s+int\\s+maxStudents\\s*=\\s*60\\s*;"
          },
          {
            "label": "passRate 使用 const double 且为 0.6",
            "pattern": "\\bconst\\s+double\\s+passRate\\s*=\\s*0?\\.6\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int maxStudents = 60;\n    const double passRate = 0.6;\n    cout << maxStudents << \" \" << passRate;\n    return 0;\n}",
        "explanation": "const 变量必须在定义时初始化，之后不能再赋值修改。",
        "commonMistakes": [
          "先写 const int maxStudents; 再在下一行赋值。",
          "在 const 定义后再次赋值。",
          "把 #define 写成语句并在行末加分号。"
        ]
      },
      "masteryHint": "能使用 const 和 #define 定义符号常量。"
    },
    {
      "id": "l2-arithmetic",
      "lessonId": "lesson2",
      "title": "算术运算符与整数除法",
      "tags": [
        "+ - * /",
        "整数除法",
        "取模"
      ],
      "overview": "整数相除会丢弃小数部分；取模运算符 % 只能用于整数类型。表达式类型会影响结果，而不是由“想要什么结果”决定。",
      "keyPoints": [
        "两个 int 相除，结果仍是 int。",
        "5 / 2 的结果是 2，不是 2.5。",
        "5 % 2 的结果是 1。",
        "只要有一个操作数是浮点数，通常就会进行浮点运算。",
        "除数为 0 是错误，整数除零尤其危险。"
      ],
      "pitfalls": [
        "用整数除法求平均值却忘记把操作数转成 double。",
        "对 double 使用 %。",
        "认为负数取模在所有语言中的符号规则完全相同。"
      ],
      "exercise": {
        "prompt": "已有 int total 和 int count。请计算 double 类型平均值 average，并输出它。要求结果为浮点除法。",
        "starter": "#include <iostream>\n\nint main() {\n    int total = 7;\n    int count = 2;\n    // 计算 average 并输出\n\n    return 0;\n}",
        "hint": "将 total 或 count 中至少一个先转换为 double。",
        "checks": [
          {
            "label": "声明 double 类型 average",
            "pattern": "\\bdouble\\s+average\\s*="
          },
          {
            "label": "除法前进行浮点转换",
            "pattern": "\\(\\s*double\\s*\\)\\s*\\(?\\s*(?:total|count)\\s*\\)?"
          },
          {
            "label": "用 total 除以 count",
            "pattern": "\\(\\s*double\\s*\\)\\s*\\(?\\s*(?:total|count)\\s*\\)?\\s*/\\s*(?:total|count)"
          },
          {
            "label": "输出 average",
            "pattern": "\\bcout\\s*<<\\s*average\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total = 7;\n    int count = 2;\n    double average = (double)(total) / count;\n    cout << average;\n    return 0;\n}",
        "explanation": "整数除以整数会先按整数规则计算。转换必须发生在除法之前。",
        "commonMistakes": [
          "写成 double average = total / count;，得到 3 后再转为 3.0。",
          "写成 (double)(total / count)，转换时机仍然太晚。",
          "把 count 放在分子导致算成 2/7。"
        ]
      },
      "masteryHint": "能预测表达式类型并正确处理整数除法。"
    },
    {
      "id": "l2-increment",
      "lessonId": "lesson2",
      "title": "自增自减与副作用",
      "tags": [
        "++",
        "--",
        "前置",
        "后置"
      ],
      "overview": "前置 ++x 先修改再返回新值，后置 x++ 先返回旧值再修改。在一个表达式中对同一对象多次产生未排序副作用，可能造成未定义行为。",
      "keyPoints": [
        "前置形式 ++x 的结果是新值。",
        "后置形式 x++ 的结果通常是修改前的值。",
        "自增自减会修改对象，属于副作用。",
        "不要把多个自增自减混在同一表达式中，例如 i + i++。",
        "为了可读性，复杂表达式中应拆分语句。"
      ],
      "pitfalls": [
        "把后置自增当成“最后才自增，整个表达式都不受影响”。",
        "认为 i = i++ 在所有编译器中都有统一结果。",
        "为了写得短而牺牲可读性。"
      ],
      "exercise": {
        "prompt": "已有 int x = 5。请用两条独立语句：先把前置自增结果赋给 int a，再把后置自增结果赋给 int b。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    // 分别创建 a 和 b\n\n    cout << x << \" \" << a << \" \" << b;\n    return 0;\n}",
        "hint": "前置写作 ++x，后置写作 x++。",
        "checks": [
          {
            "label": "用 ++x 初始化 a",
            "pattern": "\\bint\\s+a\\s*=\\s*\\+\\+\\s*x\\s*;"
          },
          {
            "label": "用 x++ 初始化 b",
            "pattern": "\\bint\\s+b\\s*=\\s*x\\s*\\+\\+\\s*;"
          },
          {
            "label": "两条语句相互独立",
            "pattern": "int\\s+a[^;]*;[\\s\\S]*int\\s+b[^;]*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int a = ++x;\n    int b = x++;\n    cout << x << \" \" << a << \" \" << b;\n    return 0;\n}",
        "explanation": "拆分语句后求值顺序清楚，也不会把多个副作用塞进同一个复杂表达式。",
        "commonMistakes": [
          "写成 int a = x++; int b = ++x;，得到不同结果。",
          "把 ++x 写成 x++ 并认为二者总是等价。",
          "在一条表达式中重复修改 x。"
        ]
      },
      "masteryHint": "能根据前置/后置形式追踪变量值的变化顺序。"
    },
    {
      "id": "l2-relational-logical",
      "lessonId": "lesson2",
      "title": "关系运算、逻辑运算与短路",
      "tags": [
        "比较",
        "&&",
        "||",
        "!",
        "短路"
      ],
      "overview": "关系运算产生 bool；逻辑运算组合条件。&& 和 || 采用短路求值，左侧结果已足够时不会计算右侧。",
      "keyPoints": [
        "== 比较是否相等，= 是赋值。",
        "&& 只有两侧都为真才为真。",
        "|| 只要一侧为真就为真。",
        "左侧能决定结果时，&& 与 || 会跳过右侧表达式。",
        "范围判断应写成 x >= 0 && x <= 100，而不是 0 <= x <= 100。"
      ],
      "pitfalls": [
        "把比较写进 if (x = 1)。",
        "用数学链式写法 0 <= x <= 100。",
        "误以为 & 和 | 与 &&、|| 完全等价。"
      ],
      "exercise": {
        "prompt": "已有 int score。请创建 bool passed，当 score 在 0 到 100（含端点）时设为 true。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 88;\n    // 创建 passed\n\n    cout << passed;\n    return 0;\n}",
        "hint": "使用两个比较，并用 && 连接。",
        "checks": [
          {
            "label": "声明 bool passed",
            "pattern": "\\bbool\\s+passed\\s*="
          },
          {
            "label": "检查下界 score >= 0",
            "pattern": "score\\s*>=\\s*0"
          },
          {
            "label": "检查上界 score <= 100",
            "pattern": "score\\s*<=\\s*100"
          },
          {
            "label": "用逻辑与连接两个条件",
            "pattern": "(?:score\\s*>=\\s*0\\s*&&\\s*score\\s*<=\\s*100|score\\s*<=\\s*100\\s*&&\\s*score\\s*>=\\s*0)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 88;\n    bool passed = score >= 0 && score <= 100;\n    cout << passed;\n    return 0;\n}",
        "explanation": "每个比较单独写完整，再通过 && 组合，才能正确表达闭区间。",
        "commonMistakes": [
          "写成 0 <= score <= 100。",
          "把 && 写成 &。",
          "只判断一个边界。"
        ]
      },
      "masteryHint": "能正确组合条件并利用短路求值理解执行顺序。"
    },
    {
      "id": "l2-conversion",
      "lessonId": "lesson2",
      "title": "隐式转换、显式转换与溢出",
      "tags": [
        "类型转换",
        "强制转换",
        "溢出"
      ],
      "overview": "不同类型混合运算时会进行转换。隐式转换方便但可能丢失信息；需要明确意图时使用 C 风格强制转换，例如 (int)value。",
      "keyPoints": [
        "赋值和混合运算可能发生隐式类型转换。",
        "把浮点数转成整数会向零方向截断小数部分。",
        "显式转换应写成 (类型)表达式，并清楚说明转换目的。",
        "超出目标类型范围时结果不可靠。"
      ],
      "pitfalls": [
        "认为 3.9 转 int 会得到 4。",
        "用 int 保存很大的计算结果导致溢出。",
        "把浮点数精度误差误认为编译器随机出错。"
      ],
      "exercise": {
        "prompt": "已有 double value = 3.9。请使用 C 风格强制转换 (int)value 把它显式转换为 int，保存到 whole 并输出。",
        "starter": "#include <iostream>\n\nint main() {\n    double value = 3.9;\n    // 显式转换并输出\n\n    return 0;\n}",
        "hint": "语法是 (int)value，也可以写成 (int)(value)。",
        "checks": [
          {
            "label": "声明 int whole",
            "pattern": "\\bint\\s+whole\\s*="
          },
          {
            "label": "使用 (int) 强制转换 value",
            "pattern": "\\(\\s*int\\s*\\)\\s*\\(?\\s*value\\s*\\)?"
          },
          {
            "label": "输出 whole",
            "pattern": "\\bcout\\s*<<\\s*whole\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double value = 3.9;\n    int whole = (int)(value);\n    cout << whole;\n    return 0;\n}",
        "explanation": "显式转换让读者知道这里故意把浮点数转成整数，并接受小数部分被截断。",
        "commonMistakes": [
          "使用 round 却声称发生了截断。",
          "转换语法写成 (int value)，漏掉右括号。",
          "认为输出会是 4。"
        ]
      },
      "masteryHint": "能预测常见转换结果，并识别溢出风险。"
    },
    {
      "id": "l2-precedence",
      "lessonId": "lesson2",
      "title": "运算符优先级与表达式可读性",
      "tags": [
        "优先级",
        "结合性",
        "括号"
      ],
      "overview": "优先级决定不同运算符的计算次序，结合性处理同级运算。不要依赖记忆所有细节；复杂表达式应加括号或拆成多步。",
      "keyPoints": [
        "乘除和取模优先于加减。",
        "比较运算通常优先于逻辑与、逻辑或。",
        "括号可以明确意图，优先级正确的代码也应保持可读。",
        "赋值运算符优先级较低，所以 a = b + c 会先计算右侧。",
        "同一条表达式中的多个副作用可能使求值顺序不清楚。"
      ],
      "pitfalls": [
        "只凭直觉猜优先级。",
        "把 !x == 0 理解成 !(x == 0)。",
        "把位运算与逻辑运算的优先级混淆。"
      ],
      "exercise": {
        "prompt": "已有 a、b、c。请计算 (a + b) * c，保存到 int result。必须显式表达先加后乘。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 2;\n    int b = 3;\n    int c = 4;\n    // 计算 result\n\n    cout << result;\n    return 0;\n}",
        "hint": "括号会提高 a + b 的计算优先级。",
        "checks": [
          {
            "label": "声明 int result",
            "pattern": "\\bint\\s+result\\s*="
          },
          {
            "label": "先计算 a + b",
            "pattern": "\\(\\s*a\\s*\\+\\s*b\\s*\\)"
          },
          {
            "label": "再乘以 c",
            "pattern": "\\(\\s*a\\s*\\+\\s*b\\s*\\)\\s*\\*\\s*c"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 2;\n    int b = 3;\n    int c = 4;\n    int result = (a + b) * c;\n    cout << result;\n    return 0;\n}",
        "explanation": "括号强制先算 a + b，再乘 c，得到 20。",
        "commonMistakes": [
          "写成 a + b * c，得到 14。",
          "括号放错成 a + (b * c)。",
          "声明类型写成 double 但题目要求 int。"
        ]
      },
      "masteryHint": "能拆解表达式并主动用括号表达计算顺序。"
    },
    {
      "id": "l2-conditional-compound",
      "lessonId": "lesson2",
      "title": "条件运算符、复合赋值与连续赋值",
      "tags": [
        "?:",
        "复合赋值",
        "赋值结合性",
        "副作用"
      ],
      "overview": "条件运算符根据条件二选一，复合赋值把运算和写回合并，赋值运算符从右向左结合。三者都常出现在期中改错题和表达式求值题中。",
      "keyPoints": [
        "a += a * 2 等价于 a = a + a * 2，右侧表达式先整体求值。",
        "条件表达式 条件 ? 表达式1 : 表达式2 只计算被选中的分支。",
        "赋值运算符右结合，a=b=c 等价于 a=(b=c)。",
        "声明 int a=b=c=0 通常错误，因为 b、c 在声明时还没有定义。",
        "自增自减具有副作用，求值时必须按执行顺序追踪变量。"
      ],
      "pitfalls": [
        "把 a += a * 2 误展开成 a = a * 2。",
        "条件为假时仍让冒号后的分支产生副作用。",
        "在一条声明中使用了尚未声明的变量。",
        "只计算最终值，忘记中间变量已经改变。"
      ],
      "exercise": {
        "prompt": "令 a=3，执行 a += a*2；再令 x=5、p=4、q=3，执行 r=(x==0 ? p++ : q++)。依次输出 a、p、q、r。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3;\n    // 完成复合赋值\n\n    int x = 5, p = 4, q = 3;\n    // 完成条件表达式并输出\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "9 4 4 3",
        "hint": "先算右侧 a*2，再写回 a；条件为假时后置 q++ 返回旧值。",
        "checks": [
          {
            "label": "使用复合赋值 a += a*2",
            "pattern": "\\ba\\s*\\+=\\s*a\\s*\\*\\s*2\\b"
          },
          {
            "label": "使用条件运算符",
            "pattern": "\\?[^:]+:"
          },
          {
            "label": "条件为假时执行 q++",
            "pattern": "\\bq\\s*\\+\\+"
          },
          {
            "label": "输出四个结果",
            "pattern": "\\bcout\\s*<<[\\s\\S]*\\ba\\b[\\s\\S]*\\bp\\b[\\s\\S]*\\bq\\b[\\s\\S]*\\br\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3;\n    a += a * 2;\n    int x = 5, p = 4, q = 3;\n    int r = (x == 0 ? p++ : q++);\n    cout << a << ' ' << p << ' ' << q << ' ' << r << endl;\n    return 0;\n}",
        "explanation": "a += a*2 得到 9；x==0 为假，所以只执行 q++，q 由 3 变 4，r 保存旧值 3。",
        "commonMistakes": [
          "把 a += a*2 误算成 6。",
          "误以为条件为假时 p++ 也会执行。",
          "把 q++ 返回的新值 4 赋给 r。"
        ]
      },
      "masteryHint": "能逐步追踪复合赋值、条件分支和自增自减后的所有变量值。",
      "sourcePages": [
        5,
        6,
        7,
        15
      ]
    },
    {
      "id": "l2-random-range",
      "lessonId": "lesson2",
      "title": "随机数与区间映射",
      "tags": [
        "rand",
        "srand",
        "stdlib.h",
        "区间映射"
      ],
      "overview": "rand() 产生伪随机整数。通过取模和加法可以把它映射到指定整数区间，随机字母还可以借助字符编码生成。",
      "keyPoints": [
        "rand() 的原型位于 <cstdlib> 或 stdlib.h 中。",
        "rand()%101 生成 0 到 100 的整数。",
        "rand()%51+50 生成 50 到 100 的整数。",
        "随机大写字母可写成 char('A' + rand()%26)。",
        "srand(time(0)) 通常只在程序开始时设置一次随机种子。"
      ],
      "pitfalls": [
        "把 rand()%b+a 的区间误认为 a 到 b。",
        "每生成一个数都重新 srand，导致随机序列退化。",
        "忘记包含随机函数或时间函数对应头文件。",
        "把 rand()%26+65 直接输出成整数而不是字符。"
      ],
      "exercise": {
        "prompt": "读取整数 a、b 和 n，其中 a<b。输出 a + n%(b-a+1)，即把 n 映射到 [a,b] 的公式。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, n;\n    cin >> a >> b >> n;\n    // 输出区间映射结果\n    return 0;\n}",
        "sampleInput": "50 100 123",
        "expectedOutput": "71",
        "hint": "区间长度为 b-a+1，取模后再加上下界 a。",
        "checks": [
          {
            "label": "计算区间长度 b-a+1",
            "pattern": "b\\s*-\\s*a\\s*\\+\\s*1"
          },
          {
            "label": "使用取模映射",
            "pattern": "\\bn\\s*%\\s*\\(\\s*b\\s*-\\s*a\\s*\\+\\s*1\\s*\\)"
          },
          {
            "label": "加回下界 a",
            "pattern": "\\ba\\s*\\+\\s*n\\s*%"
          },
          {
            "label": "使用 cout 输出",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, n;\n    cin >> a >> b >> n;\n    cout << a + n % (b - a + 1) << endl;\n    return 0;\n}",
        "explanation": "123%51 得到 21，再加 50 得到 71，恰好落在 50 到 100 内。",
        "commonMistakes": [
          "写成 n%(b-a)+a，漏掉 1 导致上界取不到。",
          "把下界也放进取模运算。",
          "忘记使用括号明确 b-a+1。"
        ]
      },
      "masteryHint": "能把随机整数正确映射到闭区间，并说明 rand、srand 的用途。",
      "sourcePages": [
        7,
        6,
        14,
        15
      ]
    },
    {
      "id": "l2-char-literals",
      "lessonId": "lesson2",
      "title": "字符常量、转义序列与八进制转义",
      "tags": [
        "字符常量",
        "转义序列",
        "ASCII",
        "八进制转义"
      ],
      "overview": "普通字符常量必须用一对单引号包围，反斜杠用于表示换行、制表符、反斜杠等特殊字符；反斜杠后接 1 到 3 位八进制数字也可表示一个字符。",
      "keyPoints": [
        "'A' 是字符常量，\"A\" 是字符串字面量。",
        "'\\n' 表示换行，'\\t' 表示水平制表符。",
        "反斜杠本身写成 '\\\\'，单引号写成 '\\''。",
        "八进制转义可写 1 到 3 位，例如 '\\102' 对应字符 B。",
        "'ABC' 不是普通单字符常量，不能按一个 char 理解。"
      ],
      "pitfalls": [
        "把多个字符塞进一对单引号。",
        "把字符常量写成双引号。",
        "把 '\\102' 误认为十进制 102。",
        "指数中的小数点位置错误，如 1.2e0.5。"
      ],
      "exercise": {
        "prompt": "定义 char c='\\102'，先输出它的整数值，再输出该字符本身。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 定义字符并输出整数与字符\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "66 B",
        "hint": "使用 (int)c 输出整数值，再用 cout 输出字符。",
        "checks": [
          {
            "label": "定义八进制字符常量",
            "pattern": "\\bchar\\s+c\\s*=\\s*'\\s*\\\\102\\s*'"
          },
          {
            "label": "转换为整数输出",
            "pattern": "\\(\\s*int\\s*\\)\\s*\\(?\\s*c\\s*\\)?"
          },
          {
            "label": "输出字符本身",
            "pattern": "\\bcout\\s*<<[\\s\\S]*<<\\s*c\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char c = '\\102';\n    cout << (int)(c) << ' ' << c << endl;\n    return 0;\n}",
        "explanation": "八进制 102 转为十进制是 66，对应字符 B；转换为 int 后输出的是编码值。",
        "commonMistakes": [
          "把 '\\102' 当成十进制 102。",
          "用双引号定义字符常量。",
          "只输出字符，忘记输出整数值。"
        ]
      },
      "masteryHint": "能判断字符常量和常见转义序列是否合法，并解释其 ASCII 值。",
      "sourcePages": [
        4,
        8
      ]
    },
    {
      "id": "l3-ex3-1",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.1 用 if 保证 x>y 后输出",
      "tags": [
        "课件例题",
        "if",
        "交换"
      ],
      "overview": "输入两个整数，如果 x<y 就借助中间变量 t 交换，最后按 x>y 的形式输出。",
      "keyPoints": [
        "交换两个变量必须借助第三个变量，三条赋值语句顺序不能乱。",
        "if 后面如果要多条语句，必须用一对花括号组成复合语句。",
        "课件把三条交换语句写在同一行：{ t=x; x=y; y=t;}。",
        "if (x<y) 的判断与题目“使得 x>y”是互补的：小于才交换。"
      ],
      "pitfalls": [
        "写成 x=y; y=t; 漏掉 t=x，原值丢失。",
        "if 后不加花括号，只有第一条赋值受 if 控制。",
        "把 if (x<y) 写成 if (x>y)，结果正好相反。"
      ],
      "example": {
        "title": "例3.1 用 if 保证 x>y 后输出",
        "source": "课件 lesson3 · P14",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{  \nint x,y,t;\ncout<<\"输入 x y\"<<endl;\ncin>>x>>y;\nif (x<y)\n{ t=x;  x=y;  y=t;}          //x与y交换\n    cout<<x<<\">\"<<y<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 3 5 时输出：5>3",
        "explanation": "程序先读入 x、y，只有在 x<y 时才交换，交换后 x 一定不小于 y，所以输出一定是“大>小”。三条赋值必须按 t=x、x=y、y=t 的顺序，否则会覆盖掉还没保存的值。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "t 是交换用的临时变量，必须与 x、y 同类型。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "条件成立才需要交换；如果 x 已经大于 y，就跳过整个复合语句。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "花括号把三条语句组成一个整体；先保存 x，再让 x 取 y，最后让 y 取原来的 x。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "输出时用字符 '>' 连接，保证显示成 x>y 的形式。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "按 x、y 的顺序读入两个整数；输入 3 5 时 x=3、y=5。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "提示语只是方便用户，不参与计算。"
          }
        ]
      },
      "masteryHint": "能默写交换三条语句，并解释每条语句执行后两个变量的值。",
      "sourcePages": [
        14
      ]
    },
    {
      "id": "l3-ex3-3",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.3 百分制成绩转五级制",
      "tags": [
        "课件例题",
        "多分支",
        "else if"
      ],
      "overview": "用 if / else if 把百分制成绩 mark 转成优、良、中、及格、不及格。课件同时给出正确写法与“逻辑有问题”的写法，用来说明多分支的判断顺序。",
      "keyPoints": [
        "多分支从上到下判断，一旦某个条件成立，后面的分支不再执行。",
        "正确写法用 mark>=90、80<=mark&&mark<90 等明确区间，互不重叠。",
        "错误写法把 mark>=60 放在最前面，所有 60 分以上都会被它截住。",
        "判断区间不能写成 80<=mark<90，必须用 && 连接两个关系表达式。"
      ],
      "pitfalls": [
        "把范围宽的判断放在范围窄的判断前面。",
        "把 else if 连写成 elseif。",
        "漏掉 else 分支，导致低分没有输出。"
      ],
      "example": {
        "title": "例3.3 百分制成绩转五级制",
        "source": "课件 lesson3 · P18",
        "code": "if (mark >= 90)\n    cout<< \"优\";\nelse if (80 <= mark && mark < 90)\n    cout<< \"良\";\nelse if (60 <= mark && mark < 70)\n    cout<< \"及格\";\nelse if (70 <= mark && mark < 80)\n    cout<< \"中\";\nelse\n    cout<< \"不及格\";\n\nif  (mark >= 60)  \n    cout<< \"及格\";\nelse if( mark >= 70)  \n    cout<< \"中\";\nelse if (mark >= 80)  \n    cout<< \"良\";\nelse if (mark >=90)  \n    cout<< \"优\";\nelse\n    cout<< \"不及格\";",
        "output": "mark=85 时输出“良”；错误写法对 85 也输出“及格”",
        "explanation": "正确写法把每个分数段写成互不重叠的区间，任何分数只会命中一个分支。错误写法从低到高判断，mark>=60 最先成立，后面的 70、80、90 永远轮不到，所以 90 分也会被输出成“及格”。这说明多分支的顺序本身就是逻辑的一部分。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "最高分段先判断，命中后整个多分支结束。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "用 && 写出真正的闭开区间；不能写 80<=mark<90。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "及格段与中段分开写，顺序不影响正确性，但区间必须互斥。"
          },
          {
            "section": 1,
            "line": 1,
            "text": "错误示范：这个条件最宽，放在最前面会截住所有 60 分以上。"
          },
          {
            "section": 1,
            "line": 3,
            "text": "由于上一分支已经命中，这一行对 70 分以上永远不会执行。"
          }
        ],
        "sections": [
          {
            "label": "正确写法：区间互不重叠",
            "code": "if (mark >= 90)\n    cout<< \"优\";\nelse if (80 <= mark && mark < 90)\n    cout<< \"良\";\nelse if (60 <= mark && mark < 70)\n    cout<< \"及格\";\nelse if (70 <= mark && mark < 80)\n    cout<< \"中\";\nelse\n    cout<< \"不及格\";"
          },
          {
            "label": "错误写法：mark>=60 放在最前面（课件标注“逻辑有问题”）",
            "code": "if  (mark >= 60)  \n    cout<< \"及格\";\nelse if( mark >= 70)  \n    cout<< \"中\";\nelse if (mark >= 80)  \n    cout<< \"良\";\nelse if (mark >=90)  \n    cout<< \"优\";\nelse\n    cout<< \"不及格\";"
          }
        ]
      },
      "masteryHint": "能说明为什么 mark>=60 不能放在多分支的最前面。",
      "sourcePages": [
        18
      ]
    },
    {
      "id": "l3-ex3-5",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.5 用 switch 求分段函数",
      "tags": [
        "课件例题",
        "switch",
        "case"
      ],
      "overview": "分段函数在 1<=a<2 时 b=2a+1，在 2<=a<4 时 b=a*a-3，其它情况 b=a。用 (int)a 把区间映射成整数，再用 case 1、case 2、case 3 共用语句组。",
      "keyPoints": [
        "switch 的表达式必须是整型、字符型或枚举型，不能是实数。",
        "case 后面必须是确定值，不能写 a>=1&&a<2 这样的范围。",
        "case 2: 后面不写语句，直接跟 case 3:，表示两个值共用同一组语句。",
        "每个分支末尾的 break 用来跳出 switch，否则会继续执行后面的 case。"
      ],
      "pitfalls": [
        "把区间直接写进 case。",
        "忘记 break，发生 case 穿透。",
        "switch((int)a) 只取整数部分，边界值要按题目区间核对。"
      ],
      "example": {
        "title": "例3.5 用 switch 求分段函数",
        "source": "课件 lesson3 · P21",
        "code": "switch((int)a)\n{case 1: b=2*a+1;break;\ncase 2: \ncase 3: b=a*a-3;break;\ndefault: b=a;\n}",
        "output": "a=1.5 时 b=4；a=2.5 时 b=3.25；a=4 时 b=4",
        "explanation": "(int)a 把 1.x 变成 1、2.x 变成 2、3.x 变成 3，于是 1<=a<2 落在 case 1，2<=a<4 落在 case 2 和 case 3。case 2 后面没有语句，程序会继续执行 case 3 的语句，这就是“共用同一语句组”。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "把浮点区间转成整数标签；注意 (int) 是截断取整，不是四舍五入。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "1<=a<2 的 a 转成 1，执行这一段后 break 跳出。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "case 2 后面故意不写语句，让它落到 case 3。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "2<=a<4 的 a 转成 2 或 3，都执行 b=a*a-3。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "其它情况（包括 a<1 或 a>=4）执行 b=a。"
          }
        ],
        "blankHints": [
          "switch 括号内：填 (int)a。"
        ]
      },
      "masteryHint": "能解释 case 2 后面为什么可以空着，以及 break 去掉会怎样。",
      "sourcePages": [
        21
      ]
    },
    {
      "id": "l3-ex3-6",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.6 三种循环语句求 1+2+…+100",
      "tags": [
        "课件例题",
        "while",
        "do-while",
        "for"
      ],
      "overview": "同一个求和问题，分别用 while、do-while、for 三种循环实现，结果都是 5050。",
      "keyPoints": [
        "while 先判断后执行，循环体可能一次都不执行。",
        "do-while 先执行后判断，循环体至少执行一次，末尾必须有分号。",
        "for 把初值、条件、更新集中在一行，最适合计数型循环。",
        "三种循环可以互相替换，关键是初值、条件、更新三要素齐全。"
      ],
      "pitfalls": [
        "while 或 for 的条件括号后多写分号，变成空循环。",
        "do-while 的 while(...) 后漏分号。",
        "忘记 n++ 或 s=0 初始化，导致死循环或结果错误。"
      ],
      "example": {
        "title": "例3.6 三种循环语句求 1+2+…+100",
        "source": "课件 lesson3 · P25",
        "code": "n = 1 ; s = 0;\nwhile (n<=100)\n{\n    s=s+n;\n    n++; \n}\n\nn = 1; s = 0;\ndo \n{\n    s = s+n;\n    n++; \n}while(n<=100);\n\ns=0;\nfor (n = 1 ; n<=100 ; n++ )\n    s=s+n;",
        "output": "s=5050",
        "explanation": "三种写法都在做同一件事：让 n 从 1 变到 100，每次把 n 加到 s 上。while 和 for 先判断 n<=100，do-while 先加一次再判断。注意 for 的循环体只有一条语句时可以不加花括号，但缩进要写清楚。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "先判断 n 是否不超过 100，成立才进入循环体。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "累加当前项；s 必须在循环前清零。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "更新循环变量，缺这一句会死循环。"
          },
          {
            "section": 1,
            "line": 6,
            "text": "do-while 的末尾分号不能省；它是先执行后判断。"
          },
          {
            "section": 2,
            "line": 2,
            "text": "for 把初值、条件、更新写在一起，执行顺序是初值→条件→循环体→更新。"
          }
        ],
        "sections": [
          {
            "label": "while 语句",
            "code": "n = 1 ; s = 0;\nwhile (n<=100)\n{\n    s=s+n;\n    n++; \n}"
          },
          {
            "label": "do-while 语句",
            "code": "n = 1; s = 0;\ndo \n{\n    s = s+n;\n    n++; \n}while(n<=100);"
          },
          {
            "label": "for 语句",
            "code": "s=0;\nfor (n = 1 ; n<=100 ; n++ )\n    s=s+n;"
          }
        ]
      },
      "masteryHint": "能不看课件写出三种循环，并说出 do-while 与 while 的执行差别。",
      "sourcePages": [
        25
      ]
    },
    {
      "id": "l3-ex3-7",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.7 求 e 的近似值（精度控制）",
      "tags": [
        "课件例题",
        "级数",
        "递推",
        "精度"
      ],
      "overview": "e=1+1/1!+1/2!+1/3!+…，当某一项小于 0.00001 时停止。利用 t_i=t_{i-1}/i 递推每一项，避免重复计算阶乘。",
      "keyPoints": [
        "通项递推：t=t/i，i 从 1 开始，t 初值为 1。",
        "循环条件是 t>=0.00001，表示“这一项还不够小，继续加”。",
        "e 的初值为 0，每轮先加再更新 i 和 t。",
        "不能把条件写成 t<0.00001，否则一次都不加。"
      ],
      "pitfalls": [
        "把 t=t/i 写成 t=t*i，变成阶乘增长。",
        "i 没有先加 1 就除，导致除以 0。",
        "精度条件写反。"
      ],
      "example": {
        "title": "例3.7 求 e 的近似值（精度控制）",
        "source": "课件 lesson3 · P28",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\nint i=0;\nfloat t=1,e=0;\nwhile( t>=0.00001 )\n{\ne=e+t;   \ni++; \nt=t/i;  \n}\ncout<<\"e=\"<< e<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "e≈2.71828",
        "explanation": "第一项是 1/0!=1，所以 t 从 1 开始。每轮先把当前项加到 e，再让 i 加 1，然后用 t/i 得到下一项。因为 1/i! 递减很快，t 小于 0.00001 时后面的项对结果影响已经很小，循环结束。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "i 表示当前项的分母阶乘序号；先加 1 再除，避免除以 0。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "t 是当前项，初值 1（1/0!）；e 是累加和，必须从 0 开始。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "只要当前项还不小于精度，就继续累加；条件写反会一次都不执行。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "先累加当前项。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "序号加 1，为计算下一项做准备。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "利用 t_i=t_{i-1}/i 递推，避免每次重新算阶乘。"
          }
        ],
        "blankHints": [
          "while 条件：填 t>=0.00001；课件特别提醒不能写成 t<0.00001。"
        ]
      },
      "masteryHint": "能解释 t、i、e 三个变量的初值和更新顺序。",
      "sourcePages": [
        28
      ]
    },
    {
      "id": "l3-ex3-8",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.8 打印九九乘法表",
      "tags": [
        "课件例题",
        "嵌套循环",
        "setw"
      ],
      "overview": "外层循环控制行 i，内层循环控制列 j，输出 i×j=i*j，每行结束换行。课件还给出用 setw 控制起始位置打印下三角的改法。",
      "keyPoints": [
        "外层循环执行一次，内层循环完整执行一轮。",
        "每行输出完必须 cout<<endl，否则全部挤在一行。",
        "setw(8*(i-1)) 用来控制第 i 行前面的空白，形成下三角。",
        "setw 需要 <iomanip>。"
      ],
      "pitfalls": [
        "内层循环条件写成 j<=i 却想打印完整表。",
        "忘记每行换行。",
        "把 i、j 的初值或范围写反。"
      ],
      "example": {
        "title": "例3.8 打印九九乘法表",
        "source": "课件 lesson3 · P29-P30",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{ \ncout<<\"\\t 九九乘法表\"<<endl;\ncout<<\"\\t -----------\"<<endl;\nfor(int i=1;i<=9;i++)\n{\nfor(int j=1;j<=9;j++)\ncout<<i<<\"×\"<<j<<\"=\"<<i*j<<'\\t';\ncout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}\n\n#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{  int i,j;\nfor(i=1;i<=9;i++)\n{ cout<<setw(8*(i-1))<<' ' ;//输出8*(i-1)个空格\nfor(j=i;j<=9;j++)\ncout<<i<<'*'<<j<<'='<<i*j<<'\\t';\ncout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "第一行 1×1=1 到 1×9=9，共九行；下三角从第 i 行第 i 列开始",
        "explanation": "完整表是 9 行 × 9 列，内层 j 从 1 到 9。下三角改法把内层起点改成 j=i，并在每行前输出 8*(i-1) 个空格，使第 i 行从第 i 列的位置开始。两个程序都靠“外层换行、内层不换行”来分行。",
        "notes": [
          {
            "section": 0,
            "line": 7,
            "text": "外层控制行号，共 9 行。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "内层控制列号，完整表每行 9 项。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "按“行×列=积”的顺序输出。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "内层结束后换行，进入下一行。"
          },
          {
            "section": 1,
            "line": 7,
            "text": "第 i 行先输出 8*(i-1) 个空格，使起始位置逐行后移。"
          },
          {
            "section": 1,
            "line": 8,
            "text": "下三角只输出 j>=i 的部分。"
          }
        ],
        "sections": [
          {
            "label": "完整九九表",
            "code": "#include <iostream>\nusing namespace std;\nint main()\n{ \ncout<<\"\\t 九九乘法表\"<<endl;\ncout<<\"\\t -----------\"<<endl;\nfor(int i=1;i<=9;i++)\n{\nfor(int j=1;j<=9;j++)\ncout<<i<<\"×\"<<j<<\"=\"<<i*j<<'\\t';\ncout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}"
          },
          {
            "label": "下三角改法",
            "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{  int i,j;\nfor(i=1;i<=9;i++)\n{ cout<<setw(8*(i-1))<<' ' ;//输出8*(i-1)个空格\nfor(j=i;j<=9;j++)\ncout<<i<<'*'<<j<<'='<<i*j<<'\\t';\ncout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}"
          }
        ]
      },
      "masteryHint": "能说出外层、内层循环各自控制什么，以及下三角为什么 j 从 i 开始。",
      "sourcePages": [
        29
      ]
    },
    {
      "id": "l3-ex3-9",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.9 break 与 continue 的区别",
      "tags": [
        "课件例题",
        "break",
        "continue"
      ],
      "overview": "两个循环都从 20 递减到 1，遇到 6 的倍数时：break 直接结束整个循环；continue 只跳过本次，继续下一次。",
      "keyPoints": [
        "break 强制终止本层循环，循环后面的语句也不再执行。",
        "continue 跳过循环体中 continue 之后的语句，直接进入下一次循环。",
        "break 在 switch 中用于跳出 switch，在循环中用于跳出本层循环。",
        "continue 只能用于循环语句。"
      ],
      "pitfalls": [
        "以为 continue 会结束循环。",
        "在 while 中 continue 前忘记更新循环变量，导致死循环。",
        "break 只能跳出一层，嵌套循环中不会跳出外层。"
      ],
      "example": {
        "title": "例3.9 break 与 continue 的区别",
        "source": "课件 lesson3 · P33",
        "code": "for(m=20;m>0;m--)\n{ \n    if(m % 6==0) \n        break;\n    cout<<m<<\" \";\n}\n\nfor(m=20;m>0;m--)\n{ \n    if(m % 6==0) \n        continue;\n    cout<<m<<\" \";\n}",
        "output": "break：20 19\ncontinue：20 19 17 16 15 14 13 11 10 9 8 7 5 4 3 2 1",
        "explanation": "m 从 20 开始递减，第一个 6 的倍数是 18。break 在 18 处直接结束循环，所以只输出 20、19；continue 在 18 处跳过 cout，m-- 仍然执行，于是继续输出 17、16……，把所有 6 的倍数都跳过。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "判断当前 m 是否为 6 的倍数。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "立即结束整个 for 循环，18 及以下都不再处理。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "只有没被 break/continue 跳过的 m 才会输出。"
          },
          {
            "section": 1,
            "line": 4,
            "text": "只跳过本次循环剩下的语句，for 的 m-- 仍会执行。"
          },
          {
            "section": 0,
            "line": 1,
            "text": "从 20 开始递减到 1；两个程序循环头完全相同。"
          },
          {
            "section": 1,
            "line": 3,
            "text": "第二个程序同样的判断，但这里执行 continue。"
          }
        ],
        "sections": [
          {
            "label": "break：遇到第一个 6 的倍数就结束",
            "code": "for(m=20;m>0;m--)\n{ \n    if(m % 6==0) \n        break;\n    cout<<m<<\" \";\n}"
          },
          {
            "label": "continue：遇到 6 的倍数只跳过本次",
            "code": "for(m=20;m>0;m--)\n{ \n    if(m % 6==0) \n        continue;\n    cout<<m<<\" \";\n}"
          }
        ]
      },
      "masteryHint": "能分别写出两个循环的输出序列，并解释 continue 为什么不会死循环。",
      "sourcePages": [
        33
      ]
    },
    {
      "id": "l3-ex3-10",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.10 辗转相除法求最大公约数",
      "tags": [
        "课件例题",
        "gcd",
        "while"
      ],
      "overview": "先保证 m>n，然后反复用 m 除以 n 取余数 r，再令 m=n、n=r，直到余数为 0，此时的 n 就是最大公约数。",
      "keyPoints": [
        "循环条件 (r=m%n)!=0：先求余并赋给 r，再判断是否为 0。",
        "循环体 m=n; n=r; 构造新数对。",
        "内层括号不能去：r=m%n!=0 会先算 m%n!=0，再把 0/1 赋给 r。",
        "循环结束时 n 存放最大公约数。"
      ],
      "pitfalls": [
        "忘记先交换使 m>n。",
        "把 r=m%n 写在循环外，导致死循环。",
        "去掉 (r=m%n) 的括号。"
      ],
      "example": {
        "title": "例3.10 辗转相除法求最大公约数",
        "source": "课件 lesson3 · P34-P35",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{   \nint m, n, t, r;\ncout<<\"请输入 m n \"<<endl;\ncin>>m>>n;\nif(m<n) \n{ t=m; m=n; n=t;  }\nwhile ( (r= m % n )!=0 )\n{   m=n;  n=r;    }\ncout<<\"最大公约数为 \"<<n<<endl;\nsystem(\"pause\");\nreturn 0; \n}",
        "output": "输入 27 15 时输出：最大公约数为 3",
        "explanation": "27%15=12，数对变成 (15,12)；15%12=3，变成 (12,3)；12%3=0，循环结束，n=3 就是最大公约数。循环条件里同时完成“求余”和“判断”，所以括号必须把赋值包住。",
        "notes": [
          {
            "section": 0,
            "line": 8,
            "text": "保证 m 是较大的数，方便后续辗转相除。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "先执行 r=m%n，再用 r!=0 判断；外层括号保证赋值先做。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "用余数构造新数对：原来的除数变成被除数，余数变成除数。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "循环结束时余数为 0，此时的除数 n 就是最大公约数。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "m、n 是不断缩小的数对，r 存余数，t 只在交换时用。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "读入两个自然数；后面的 if 保证 m>=n。"
          }
        ],
        "blankHints": [
          "while 条件：填 (r=m%n)!=0；内层括号不能去掉。"
        ]
      },
      "masteryHint": "能手工模拟 27、15 的每一步，并解释条件里的括号为什么不能省。",
      "sourcePages": [
        34
      ]
    },
    {
      "id": "l3-ex3-11",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.11 求 2~100 的素数，每行 8 个",
      "tags": [
        "课件例题",
        "素数",
        "break",
        "计数换行"
      ],
      "overview": "对每个 m，用 j 从 2 到 m-1 试除；若能整除就 break。内层循环结束后若 j==m，说明没有提前退出，m 是素数。再用 countm 计数，每 8 个换行。",
      "keyPoints": [
        "for(j=2;j<=m-1;j++) if(m%j==0) break; 找到因子就提前退出。",
        "循环结束后 j==m 表示内层是“正常走完”的，没有找到因子。",
        "countm 统计已输出素数个数，countm%8==0 时换行。",
        "课件用复合语句把输出和计数包在 if(j==m) 里。"
      ],
      "pitfalls": [
        "把 if(j==m) 写成 if(j=m)。",
        "在 if(m%j==0) 后忘记 break，j 会继续加到 m。",
        "换行判断写成 countm==8，只会换一次。"
      ],
      "example": {
        "title": "例3.11 求 2~100 的素数，每行 8 个",
        "source": "课件 lesson3 · P36-P37",
        "code": "#include <math.h>\n#include <iostream>\nusing namespace std;\nint main()\n{  \nint m,j,countm(0);\nfor(m = 2;m<=100;m++)\n{  \nfor (j = 2; j <=m - 1; j++)    \nif (m% j == 0)         \nbreak;          \nif (j==m)        \n{ \ncout<<m<<'\\t';\ncountm++; \nif (countm % 8 ==0) cout<<endl;\n}\n}\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "2 3 5 7 11 13 17 19（换行）23 29 31 37 41 43 47 53（换行）…",
        "explanation": "内层 j 从 2 试到 m-1。如果 m 有因子，break 会让 j 停在小于 m 的位置；如果一直没有因子，j 会加到 m 才退出。所以 j==m 是“素数”的判据。countm 每输出一个素数加 1，模 8 为 0 时换行。",
        "notes": [
          {
            "section": 0,
            "line": 9,
            "text": "用 2 到 m-1 的所有整数试除。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "能整除说明 m 不是素数。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "找到第一个因子就提前退出内层循环，j 会停在小于 m 的位置。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "内层正常走完，j 才会等于 m，说明没有因子，m 是素数。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "统计已经输出的素数个数。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "每 8 个换一行；用 %8 而不是 ==8，才能反复换行。"
          }
        ]
      },
      "masteryHint": "能解释 j==m 为什么能判断素数，以及 countm%8 的作用。",
      "sourcePages": [
        36
      ]
    },
    {
      "id": "l3-ex3-12",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.12 百元买百鸡（穷举法）",
      "tags": [
        "课件例题",
        "穷举",
        "循环优化"
      ],
      "overview": "母鸡 3 元、公鸡 2 元、小鸡 0.5 元，100 元买 100 只。课件先给三重循环，再利用 x+y+z=100 把 z 表示成 100-x-y，降为双重循环。",
      "keyPoints": [
        "三重循环把 x、y、z 都从 0 枚举到 100，条件同时满足数量 100 和金额 100。",
        "利用 x+y+z=100 消去 z，循环层数从三层降为两层。",
        "x 最多 100/3 只，y 最多 100/2 只，循环上界可以缩小。",
        "0.5*z 是浮点运算，比较 ==100 时要小心精度；本题数值都能精确表示。"
      ],
      "pitfalls": [
        "只判断金额，忘记判断总数 100。",
        "把 z 的循环上界写成 100 却没利用等式，效率低。",
        "把 0.5*z 写成 z/2 且 z 为整数时，虽然本题可行，但要清楚整数除法的含义。"
      ],
      "example": {
        "title": "例3.12 百元买百鸡（穷举法）",
        "source": "课件 lesson3 · P38-P39",
        "code": "for(x=0;x<=100;x++)\nfor(y=0;y<=100;y++)\nfor(z=0;z<=100;z++)\n{\nif(((3*x+2*y+0.5*z)==100)&&((x+y+z)==100))\ncout<<setw(9)<<x<<setw(9)<<y<<setw(9)<<z<<endl;\n}\n\nfor(x=0;x<=100/3;x++)\nfor(y=0;y<=100/2;y++)\n{\nz=100-x-y;\nif((3*x+2*y+0.5*z)==100)\ncout<<setw(9)<<x<<setw(9)<<y<<setw(9)<<z<<endl;\n}",
        "output": "课件未列结果；满足条件的方案有多组，例如 x=5、y=32、z=63",
        "explanation": "三重循环是最直接的穷举：三种鸡各有多少只都试一遍，两个条件同时成立才输出。双重循环利用“总数为 100”把 z 直接算出来，只需枚举 x、y，循环次数大幅减少。这是穷举法中常用的“用等式降维”技巧。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "母鸡最多 100 只，先粗放地枚举。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "小鸡也枚举，三层循环组合数很大。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "金额条件：3x+2y+0.5z 必须等于 100。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "数量条件：三种鸡一共 100 只，两个条件缺一不可。"
          },
          {
            "section": 1,
            "line": 1,
            "text": "母鸡最多 33 只，上界可以缩小到 100/3。"
          },
          {
            "section": 1,
            "line": 4,
            "text": "用总数等式直接算出 z，省掉一层循环。"
          },
          {
            "section": 1,
            "line": 5,
            "text": "只剩金额条件需要判断。"
          }
        ],
        "sections": [
          {
            "label": "三重循环",
            "code": "for(x=0;x<=100;x++)\nfor(y=0;y<=100;y++)\nfor(z=0;z<=100;z++)\n{\nif(((3*x+2*y+0.5*z)==100)&&((x+y+z)==100))\ncout<<setw(9)<<x<<setw(9)<<y<<setw(9)<<z<<endl;\n}"
          },
          {
            "label": "双重循环：利用 x+y+z=100 消去 z",
            "code": "for(x=0;x<=100/3;x++)\nfor(y=0;y<=100/2;y++)\n{\nz=100-x-y;\nif((3*x+2*y+0.5*z)==100)\ncout<<setw(9)<<x<<setw(9)<<y<<setw(9)<<z<<endl;\n}"
          }
        ]
      },
      "masteryHint": "能说出为什么可以用 z=100-x-y 把三重循环降为两重。",
      "sourcePages": [
        38
      ]
    },
    {
      "id": "l3-ex3-13",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.13 公安人员审问四名窃贼",
      "tags": [
        "课件例题",
        "穷举",
        "逻辑推理"
      ],
      "overview": "四人中仅一人是窃贼，每人要么全说真话、要么全说假话。把四人的话抽象成 b+d==1、b+c==1、a+b==1，再用四重循环枚举 0/1。",
      "keyPoints": [
        "用 a、b、c、d 表示四人是否为窃贼，1 是、0 否。",
        "甲说“乙没偷，丁偷了”抽象为 b+d==1；乙、丙同理。",
        "四人中仅一人为窃贼：a+b+c+d==1。",
        "方法二用字符 thief 枚举 'A'~'D'，把两句话的真假相加，和不为 1 表示两句话同真同假。"
      ],
      "pitfalls": [
        "把“仅一人”漏掉，得到多组解。",
        "把 b+d==1 写成 b+d=1。",
        "方法二中把 !=1 写成 ==1，含义正好相反。"
      ],
      "example": {
        "title": "例3.13 公安人员审问四名窃贼",
        "source": "课件 lesson3 · P40-P42",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{    int a,b,c,d;\nfor(a=0;a<2;a++)\nfor(b=0;b<2;b++)\nfor(c=0;c<2;c++)\nfor(d=0;d<2;d++)\nif( b+d==1&&b+c==1&&a+b==1&&a+b+c+d==1 )\n{    cout<<\"以下值为1者为窃贼\"<<endl;\ncout<<\"a=\"<<a<<endl;\ncout<<\"b=\"<<b<<endl;\ncout<<\"c=\"<<c<<endl;\ncout<<\"d=\"<<d<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}\n\n#include <iostream>\nusing namespace std;\nint main()\n{  \nchar thief;\nfor(thief='A';thief<='D';thief++)\nif( ((thief!='B')+(thief=='D'))!=1&&((thief!='B')+(thief=='C'))!=1&&((thief!='A')+(thief=='B'))!=1 )\ncout<<\"The thief is:\"<<thief<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "b=1，即乙是窃贼；方法二输出 The thief is:B",
        "explanation": "甲、乙、丙都说了两句“X 没偷、Y 偷了”，无论他们说真话还是假话，这两句中必有一句真、一句假，所以两个人的“是否偷”之和为 1。再加上“四人中仅一人”这个条件，就能唯一确定 b=1。方法二把两句话的真假值相加，同真同假时和为 0 或 2，不等于 1。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "a 取 0 或 1，1 表示 a 是窃贼，0 表示不是。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "b 同样取 0 或 1。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "c 取 0 或 1。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "d 取 0 或 1；四重循环枚举全部 16 种真假组合。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "把四句话翻译成条件：b、d 中恰有一个为真，b、c 中恰有一个为真，a、b 中恰有一个为真，且只有一个人是窃贼。"
          },
          {
            "section": 1,
            "line": 5,
            "text": "方法二把窃贼直接设成字符 A~D，只需一层循环。"
          },
          {
            "section": 1,
            "line": 6,
            "text": "依次假设 A、B、C、D 是窃贼。"
          },
          {
            "section": 1,
            "line": 7,
            "text": "关系运算结果为 0 或 1，相加表示两句话中恰有一句为真，三个条件同时满足才输出。"
          }
        ],
        "sections": [
          {
            "label": "方法一：四重循环枚举 a、b、c、d",
            "code": "#include <iostream>\nusing namespace std;\nint main()\n{    int a,b,c,d;\nfor(a=0;a<2;a++)\nfor(b=0;b<2;b++)\nfor(c=0;c<2;c++)\nfor(d=0;d<2;d++)\nif( b+d==1&&b+c==1&&a+b==1&&a+b+c+d==1 )\n{    cout<<\"以下值为1者为窃贼\"<<endl;\ncout<<\"a=\"<<a<<endl;\ncout<<\"b=\"<<b<<endl;\ncout<<\"c=\"<<c<<endl;\ncout<<\"d=\"<<d<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}"
          },
          {
            "label": "方法二：枚举 thief='A'~'D'",
            "code": "#include <iostream>\nusing namespace std;\nint main()\n{  \nchar thief;\nfor(thief='A';thief<='D';thief++)\nif( ((thief!='B')+(thief=='D'))!=1&&((thief!='B')+(thief=='C'))!=1&&((thief!='A')+(thief=='B'))!=1 )\ncout<<\"The thief is:\"<<thief<<endl;\nsystem(\"pause\");\nreturn 0;\n}"
          }
        ],
        "blankHints": [
          "方法一 if 条件：b+d==1&&b+c==1&&a+b==1&&a+b+c+d==1。",
          "方法二 for 循环：for(thief='A';thief<='D';thief++)。"
        ]
      },
      "masteryHint": "能把四句话翻译成逻辑表达式，并说明为什么结果唯一。",
      "sourcePages": [
        40
      ]
    },
    {
      "id": "l3-ex3-14",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.14 牛顿迭代法求方程根",
      "tags": [
        "课件例题",
        "迭代",
        "fabs"
      ],
      "overview": "用牛顿迭代公式 x1=x0-f(x0)/f'(x0) 反复迭代，直到 |x1-x0|<1e-5。方程 f(x)=3x^3-4x^2-5x+13。",
      "keyPoints": [
        "迭代公式：x1=x0-(3x0^3-4x0^2-5x0+13)/(9x0^2-8x0-5)。",
        "每轮先算 x1，再算 d=x1-x0，再令 x0=x1。",
        "循环条件 fabs(d)>1e-5，表示精度还不够就继续。",
        "fabs 用于浮点绝对值，abs 用于整数绝对值。"
      ],
      "pitfalls": [
        "先令 x0=x1 再算 d，d 永远为 0。",
        "分母导数算错：f'(x)=9x^2-8x-5。",
        "用 abs 求浮点绝对值导致精度丢失。"
      ],
      "example": {
        "title": "例3.14 牛顿迭代法求方程根",
        "source": "课件 lesson3 · P43-P44",
        "code": "cin>>x0;\ndo \n{\nx1=x0-(3*x0*x0*x0-4*x0*x0-5*x0+13)/(9*x0*x0-8*x0-5); \nd=x1-x0 ;\nx0=x1;\n}while( fabs(d)>1e-5 );",
        "output": "课件未给固定输入；迭代到 |x1-x0|<=1e-5 时停止",
        "explanation": "牛顿迭代用切线逼近根：从 x0 出发，用 f(x0)/f'(x0) 修正得到 x1，再把 x1 当作新的 x0 继续。d 必须在 x0 被覆盖之前算出来，否则无法判断两次迭代的差。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "输入初始近似值，要求它在根附近。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "牛顿公式 x1=x0-f(x0)/f'(x0)，分子是 f(x0)。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "分母是导数 f'(x)=9x^2-8x-5。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "先保存本次修正量，供精度判断。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "用新值覆盖旧值，进入下一轮。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "两次迭代差还大于精度就继续；fabs 用于浮点数。"
          }
        ],
        "blankHints": [
          "迭代式：x1=x0-(3*x0*x0*x0-4*x0*x0-5*x0+13)/(9*x0*x0-8*x0-5)。",
          "更新与条件：x0=x1；while(fabs(d)>1e-5)。"
        ]
      },
      "masteryHint": "能写出 f(x) 与 f'(x)，并解释 d 为什么要在 x0=x1 之前算。",
      "sourcePages": [
        43
      ]
    },
    {
      "id": "l3-ex3-15",
      "lessonId": "lesson3",
      "kind": "example",
      "title": "例3.15 分类统计字符",
      "tags": [
        "课件例题",
        "getchar",
        "EOF",
        "字符分类"
      ],
      "overview": "用 getchar 逐字符读入，直到 EOF（Ctrl+Z）。统计单词数（空白符个数）、字母数、数字数和其它字符数。",
      "keyPoints": [
        "cin 会把空白符当分隔符，所以这里必须用 getchar 逐字符读。",
        "EOF 表示输入结束，Windows 控制台按 Ctrl+Z 再回车。",
        "单词之间用一个空白符分隔，所以统计空白符个数即可得到单词数。",
        "字母判断要同时包含大小写：c>='a'&&c<='z' || c>='A'&&c<='Z'。"
      ],
      "pitfalls": [
        "用 cin>>c 读字符，空格和换行会被跳过。",
        "判断字母时漏掉大写或小写。",
        "把 EOF 当成某个普通字符。"
      ],
      "example": {
        "title": "例3.15 分类统计字符",
        "source": "课件 lesson3 · P45",
        "code": "int alpha(0), num(0),ch(0),word(0);\nwhile((c=getchar( ))!=EOF)     // EOF代表文本结束符，对应输入CTRL+Z \n{ if( c==' '||c=='\\t'||c=='\\n' )  word++;\nif( c>='a' && c<='z' || c>='A' && c<='Z' )\nalpha++;\nelse if ( c>='0' && c<='9' )\nnum++;\nelse \nch++; \n}",
        "output": "输入 hello 123! 后按 Ctrl+Z：word=2，alpha=5，num=3，ch=1（不含空白符的其它字符）",
        "explanation": "getchar 每次从标准输入取一个字符，包括空格、制表符和换行，所以能统计空白符。每遇到一个空白符就把 word 加 1；然后按字母、数字、其它三类互斥地统计。注意字母判断用了 ||，数字判断用 else if，保证一个字符只归入一类。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "先读一个字符赋给 c，再判断是否到达文件尾；括号不能省。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "空白符包括空格、水平制表符和换行符，遇到就说明一个单词结束。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "字母包括小写和大写两部分，&& 优先级高于 ||，所以先算两个区间。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "不是字母再判断是否为数字。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "既不是空白、字母、数字的字符归入其它。"
          }
        ],
        "blankHints": [
          "空白符：c==' '||c=='\\t'||c=='\\n'。",
          "字母：c>='a'&&c<='z'||c>='A'&&c<='Z'。",
          "数字：c>='0'&&c<='9'。"
        ]
      },
      "masteryHint": "能说明为什么这里不能用 cin>>c，以及 EOF 怎么输入。",
      "sourcePages": [
        45
      ]
    },
    {
      "id": "l3-basic-structures",
      "lessonId": "lesson3",
      "title": "三种基本结构与复合语句",
      "tags": [
        "顺序结构",
        "选择结构",
        "循环结构",
        "复合语句"
      ],
      "overview": "任何结构化程序都可以由顺序、选择、循环三种基本结构组合而成。if、while、for 等控制语句后面在语法上只接收一条语句，多条语句必须放进花括号形成复合语句。",
      "keyPoints": [
        "顺序结构按书写次序依次执行。",
        "选择结构根据条件决定执行哪一组操作。",
        "循环结构在条件满足时重复执行一组操作。",
        "复合语句用一对花括号包围多条语句，在语法上相当于一条语句。",
        "控制语句后误加分号会形成空语句，常导致后续代码不受该控制语句支配。"
      ],
      "pitfalls": [
        "写 if(x>0); 后误以为下一行受 if 控制。",
        "多个分支语句忘记加花括号。",
        "把复合语句当成函数体，误以为内部变量在花括号外仍可使用。"
      ],
      "exercise": {
        "prompt": "读取年份 year，判断是否为闰年。闰年条件是：能被 4 整除但不能被 100 整除，或能被 400 整除。输出 leap 或 common。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    // 判断并输出\n    return 0;\n}",
        "hint": "用 && 表示同时满足，用 || 表示至少满足一边，并注意两组条件的括号。",
        "checks": [
          {
            "label": "包含 if 判断",
            "pattern": "\\bif\\s*\\("
          },
          {
            "label": "使用取余判断整除",
            "pattern": "%\\s*4[\\s\\S]*%\\s*100[\\s\\S]*%\\s*400"
          },
          {
            "label": "使用 && 和 || 组合条件",
            "pattern": "&&[\\s\\S]*\\|\\||\\|\\|[\\s\\S]*&&"
          },
          {
            "label": "输出闰年或平年结果",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    int leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n    if (leap) {\n        cout << \"leap\" << endl;\n    } else {\n        cout << \"common\" << endl;\n    }\n    return 0;\n}",
        "explanation": "先判断普通闰年条件，再与整百年条件用 || 合并。括号确保判断逻辑符合题意。",
        "commonMistakes": [
          "写成 year%4==0 || year%400==0，漏掉“不能被 100 整除”。",
          "把 || 写成 &&，导致几乎永远为假。",
          "在 if 条件后误加分号。"
        ]
      },
      "masteryHint": "能说明花括号为什么必要，并能识别空语句造成的逻辑错误。"
    },
    {
      "id": "l3-if-branches",
      "lessonId": "lesson3",
      "title": "if、else if 与分支顺序",
      "tags": [
        "if",
        "else",
        "多分支",
        "悬空 else"
      ],
      "overview": "单分支只决定某段语句是否执行，双分支二选一，多分支从上到下检查条件并执行第一个满足的分支。条件顺序会直接改变程序结果。",
      "keyPoints": [
        "if 的条件为真指结果非 0，为假指结果为 0。",
        "多分支中只执行第一个满足条件的分支。",
        "else 总是与前面最近的、尚未配对的 if 结合。",
        "范围判断应写成两个关系表达式并用 && 连接。",
        "分类题应把范围检查写得互斥清晰，避免重复区间和遗漏边界。"
      ],
      "pitfalls": [
        "把 if(a=b) 当作相等比较。",
        "把 60<=score<80 当作数学区间。",
        "嵌套 if 不使用花括号，导致 else 配错。",
        "先写宽泛条件，导致后面的精确条件永远执行不到。"
      ],
      "exercise": {
        "prompt": "读取整数 score，按 90 及以上、80-89、60-79、60 以下分别输出 A、B、C、D。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score;\n    cin >> score;\n    // 完成多分支\n    return 0;\n}",
        "hint": "把高分条件放在前面，后面的条件可以利用前面已经不成立这一事实。",
        "checks": [
          {
            "label": "包含 if",
            "pattern": "\\bif\\s*\\("
          },
          {
            "label": "包含 else if",
            "pattern": "\\belse\\s+if\\s*\\("
          },
          {
            "label": "使用关系运算符 >= 或 >",
            "pattern": ">=|>"
          },
          {
            "label": "输出四个等级",
            "pattern": "\"A\"[\\s\\S]*\"B\"[\\s\\S]*\"C\"[\\s\\S]*\"D\""
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score;\n    cin >> score;\n    if (score >= 90) cout << \"A\" << endl;\n    else if (score >= 80) cout << \"B\" << endl;\n    else if (score >= 60) cout << \"C\" << endl;\n    else cout << \"D\" << endl;\n    return 0;\n}",
        "explanation": "因为 else if 只在前一个条件为假时才检查，所以 score>=80 实际上表示 80 到 89。",
        "commonMistakes": [
          "把 80 分分到 C 档，边界判断错误。",
          "从低到高写条件却仍用 >=。",
          "在 if 条件中使用赋值号 =。"
        ]
      },
      "masteryHint": "能正确安排分支顺序，并解释悬空 else 的匹配规则。"
    },
    {
      "id": "l3-switch",
      "lessonId": "lesson3",
      "title": "switch 与 case 穿透",
      "tags": [
        "switch",
        "case",
        "break",
        "default"
      ],
      "overview": "switch 用一个整型、字符型或枚举型表达式与若干常量 case 匹配。找到入口后，如果没有 break，程序会继续执行后面的 case 语句，称为 case 穿透。",
      "keyPoints": [
        "case 标签必须是确定常量，不能写范围条件。",
        "switch 表达式不能是普通浮点数。",
        "break 用于结束当前 switch，避免继续执行后面的 case。",
        "多个连续 case 可以共用同一段语句。",
        "default 在没有 case 匹配时执行，位置不必在最后，但通常放在最后更清楚。"
      ],
      "pitfalls": [
        "漏写 break 导致多个分支连续执行。",
        "把 case a>=1&&a<3 当作合法标签。",
        "在 case 中重复声明同一作用域变量而未加花括号。",
        "以为 default 必须存在。"
      ],
      "exercise": {
        "prompt": "读取 1 到 7 的整数，用 switch 输出 Monday 到 Sunday；其他数字输出 Invalid。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cin >> day;\n    // 使用 switch\n    return 0;\n}",
        "hint": "每个 case 输出后加 break，并准备 default 分支。",
        "checks": [
          {
            "label": "使用 switch",
            "pattern": "\\bswitch\\s*\\("
          },
          {
            "label": "包含多个 case",
            "pattern": "\\bcase\\s+1\\s*:"
          },
          {
            "label": "使用 break",
            "pattern": "\\bbreak\\s*;"
          },
          {
            "label": "包含 default",
            "pattern": "\\bdefault\\s*:"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cin >> day;\n    switch (day) {\n        case 1: cout << \"Monday\" << endl; break;\n        case 2: cout << \"Tuesday\" << endl; break;\n        case 3: cout << \"Wednesday\" << endl; break;\n        case 4: cout << \"Thursday\" << endl; break;\n        case 5: cout << \"Friday\" << endl; break;\n        case 6: cout << \"Saturday\" << endl; break;\n        case 7: cout << \"Sunday\" << endl; break;\n        default: cout << \"Invalid\" << endl;\n    }\n    return 0;\n}",
        "explanation": "每个 case 都有独立语句和 break，default 处理不在 1 到 7 范围内的输入。",
        "commonMistakes": [
          "漏写 break，输入 1 会连续输出多个星期名称。",
          "把 case 1 写成 case(1到7)。",
          "switch 中直接使用浮点变量。"
        ]
      },
      "masteryHint": "能预测有无 break 时的完整执行路径，并判断合法 case 常量。"
    },
    {
      "id": "l3-three-loops",
      "lessonId": "lesson3",
      "title": "while、do-while 与 for",
      "tags": [
        "while",
        "do-while",
        "for",
        "循环条件"
      ],
      "overview": "while 和 for 先判断条件再执行，循环体可能一次也不执行；do-while 先执行循环体再判断，至少执行一次。三种循环通常可以互相改写。",
      "keyPoints": [
        "while(条件) 语句；条件为真时重复执行循环体。",
        "do 语句 while(条件); 的末尾必须写分号。",
        "for(初始化; 条件; 更新) 适合循环次数或变化规律明确的场景。",
        "for 中三个表达式都可省略，但两个分号不能省略。",
        "循环体中修改循环变量是避免死循环的关键。"
      ],
      "pitfalls": [
        "while 或 for 的条件后误加分号。",
        "do-while 末尾漏分号。",
        "for 的更新表达式未改变循环变量，形成死循环。",
        "把 do-while 也当成可能一次都不执行。"
      ],
      "exercise": {
        "prompt": "读取正整数 n，使用 while 循环计算并输出 1+2+...+n。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 使用 while 累加\n    return 0;\n}",
        "hint": "准备 sum=0、i=1，循环条件可写 i<=n，每轮累加后让 i 加 1。",
        "checks": [
          {
            "label": "使用 while",
            "pattern": "\\bwhile\\s*\\("
          },
          {
            "label": "循环条件包含 n",
            "pattern": "<=\\s*n|n\\s*>=|\\bi\\s*<\\s*n|\\bi\\s*!=\\s*n"
          },
          {
            "label": "累加求和",
            "pattern": "sum\\s*\\+=|sum\\s*=\\s*sum\\s*\\+"
          },
          {
            "label": "循环变量递增",
            "pattern": "\\+\\+\\s*i|i\\s*\\+\\+|i\\s*\\+=\\s*1"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1, sum = 0;\n    while (i <= n) {\n        sum += i;\n        ++i;\n    }\n    cout << sum << endl;\n    return 0;\n}",
        "explanation": "sum 保存累计结果，i 从 1 递增到 n。每轮只把当前 i 加入一次。",
        "commonMistakes": [
          "忘记 ++i，造成死循环。",
          "sum 未初始化为 0。",
          "把 while(i<=n); 写成带分号的空循环。"
        ]
      },
      "masteryHint": "能选择合适循环，并说清先判断和后判断的差异。"
    },
    {
      "id": "l3-break-continue",
      "lessonId": "lesson3",
      "title": "break、continue 与嵌套循环",
      "tags": [
        "break",
        "continue",
        "嵌套循环",
        "内外循环"
      ],
      "overview": "break 结束当前 switch 或当前一层循环；continue 只跳过本次循环剩余语句，立即进入下一次迭代。嵌套循环中，外层通常控制行，内层控制每行的列或次数。",
      "keyPoints": [
        "break 在循环中会直接结束本层循环。",
        "continue 不会结束整个循环，只跳过当前轮剩余部分。",
        "for 循环遇到 continue 后仍会执行更新表达式。",
        "break 只跳出最内层所在循环，不能一次跳出全部嵌套层。",
        "嵌套循环常用来生成行列、枚举组合或统计二维结构。"
      ],
      "pitfalls": [
        "以为 break 能退出所有外层循环。",
        "以为 continue 会终止循环。",
        "嵌套循环中忘记每行结束后输出换行。",
        "内层循环边界依赖外层变量时仍固定写同一个终点。"
      ],
      "exercise": {
        "prompt": "计算 1 到 100 中所有不能被 3 整除的整数之和，使用 continue 跳过 3 的倍数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0;\n    // 使用循环与 continue\n    return 0;\n}",
        "hint": "循环变量从 1 到 100；若 i%3==0 就 continue，否则累加。",
        "checks": [
          {
            "label": "包含循环",
            "pattern": "\\b(for|while)\\s*\\("
          },
          {
            "label": "使用 continue",
            "pattern": "\\bcontinue\\s*;"
          },
          {
            "label": "判断 3 的倍数",
            "pattern": "%\\s*3\\s*==\\s*0|3\\s*[^;]*%.*==\\s*0"
          },
          {
            "label": "完成累加与输出",
            "pattern": "sum\\s*\\+=|sum\\s*=\\s*sum\\s*\\+[\\s\\S]*\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; ++i) {\n        if (i % 3 == 0) continue;\n        sum += i;\n    }\n    cout << sum << endl;\n    return 0;\n}",
        "explanation": "continue 只跳过当前 i 的累加，循环变量仍由 for 的 ++i 正常更新。",
        "commonMistakes": [
          "用 break 替代 continue，导致遇到第一个 3 的倍数就停止。",
          "在 while 中 continue 前忘记更新 i，造成死循环。",
          "漏掉 sum 的初始化。"
        ]
      },
      "masteryHint": "能准确追踪嵌套循环中的 break、continue 和循环变量变化。"
    },
    {
      "id": "l3-series",
      "lessonId": "lesson3",
      "title": "递推与级数求和",
      "tags": [
        "递推",
        "级数",
        "通项",
        "精度"
      ],
      "overview": "级数计算的关键是找通项以及相邻两项之间的关系。把当前项从旧值递推为新值，可以避免每轮重新计算阶乘或幂。",
      "keyPoints": [
        "先初始化累加和以及第一项。",
        "根据数学关系由上一项求下一项，例如 1/i! = (1/(i-1)!)/i。",
        "指定项数时循环次数固定，指定精度时以当前项或差值作为终止条件。",
        "累加顺序可能影响浮点误差，但基础题通常先加入当前项再更新。",
        "精度条件要检查“尚未足够小”还是“已经足够小”。"
      ],
      "pitfalls": [
        "每轮重新计算完整阶乘，既慢又容易溢出。",
        "把终止条件写反，导致一项都没算。",
        "初始项与循环下标不一致。",
        "浮点精度比较直接使用 ==。"
      ],
      "exercise": {
        "prompt": "读取正整数 n，计算 1 + 1/1! + 1/2! + ... + 1/n!，保留 6 位小数输出。",
        "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 使用递推计算级数\n    return 0;\n}",
        "hint": "term 初始为 1，sum 初始为 0；每轮先把 term 加入 sum，再让 term 除以 i。",
        "checks": [
          {
            "label": "包含循环",
            "pattern": "\\b(for|while)\\s*\\("
          },
          {
            "label": "使用通项递推",
            "pattern": "term\\s*\\/="
          },
          {
            "label": "累加级数",
            "pattern": "sum\\s*\\+=|sum\\s*=\\s*sum\\s*\\+"
          },
          {
            "label": "设置固定小数位",
            "pattern": "\\bfixed[\\s\\S]*\\bsetprecision\\s*\\("
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    double term = 1.0, sum = 0.0;\n    for (int i = 0; i <= n; ++i) {\n        sum += term;\n        term /= i + 1;\n    }\n    cout << fixed << setprecision(6) << sum << endl;\n    return 0;\n}",
        "explanation": "当 i=0 时加入首项 1，然后 term 变为 1/1!；下一轮加入 1/1!，再变为 1/2!。",
        "commonMistakes": [
          "从 i=1 开始却把首项漏掉。",
          "先更新 term 再加入 sum，导致整体错位。",
          "用整数除法计算 1/i!，结果全部截断为 0。"
        ]
      },
      "masteryHint": "能从相邻两项关系写出递推，并正确选择循环边界。"
    },
    {
      "id": "l3-gcd-prime",
      "lessonId": "lesson3",
      "title": "最大公约数与素数判别",
      "tags": [
        "辗转相除",
        "最大公约数",
        "素数",
        "提前结束"
      ],
      "overview": "最大公约数可用辗转相除法反复把 (m,n) 更新为 (n,m%n)，直到余数为 0。素数判别从 2 试除到平方根，找到因子即可提前结束。",
      "keyPoints": [
        "辗转相除的终止条件是余数为 0，此时 n 为最大公约数。",
        "求素数只需试除到 sqrt(n) 或 i*i<=n。",
        "找到因子后可用 break 提前结束循环。",
        "循环正常结束还是被 break 结束，可通过循环变量或标志变量区分。",
        "小于 2 的整数不是素数。"
      ],
      "pitfalls": [
        "辗转相除时忘记把 n 的旧值保存到 m。",
        "素数判断把 n=1 也当作素数。",
        "试除范围包含 n 本身，导致所有数都被判为非素数。",
        "break 后仍根据旧条件误判。"
      ],
      "exercise": {
        "prompt": "读取两个正整数 a、b，使用辗转相除法输出它们的最大公约数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // 辗转相除\n    return 0;\n}",
        "hint": "在循环中先求余数，再执行 m=n，n=r。",
        "checks": [
          {
            "label": "包含循环",
            "pattern": "\\bwhile\\s*\\("
          },
          {
            "label": "求余数",
            "pattern": "%"
          },
          {
            "label": "更新数对",
            "pattern": "[\\s\\S]*(a|m)\\s*=\\s*(b|n)[\\s\\S]*(b|n)\\s*=\\s*(r|rem)"
          },
          {
            "label": "输出公约数",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    cout << a << endl;\n    return 0;\n}",
        "explanation": "a、b 每轮都变成上一轮的 b 与 a%b，直到 b 为 0。",
        "commonMistakes": [
          "先把 b 改成余数再给 a 赋值，导致丢失原 b。",
          "循环条件写成 b==0。",
          "忽略输入顺序，忘记处理 a 小于 b 的情况；辗转相除本身也能自然处理。"
        ]
      },
      "masteryHint": "能解释循环结束时哪个变量保存答案，并能独立写出素数判别。"
    },
    {
      "id": "l3-prime",
      "lessonId": "lesson3",
      "title": "素数判别与提前退出",
      "tags": [
        "素数",
        "平方根",
        "break",
        "标志变量"
      ],
      "overview": "判断 n 是否为素数时，只需检查 2 到 sqrt(n) 之间是否存在能整除 n 的数。一旦找到因子，就可确定不是素数并结束试除。",
      "keyPoints": [
        "n<2 时直接判定为非素数。",
        "循环条件可用 i*i<=n，避免浮点平方根。",
        "找到因子后设置标志或 break。",
        "循环结束后根据是否找到因子输出结论。",
        "大数乘积可能溢出，正式代码可改用 i<=n/i。"
      ],
      "pitfalls": [
        "循环一直试到 n，效率低但不是逻辑错误的唯一来源。",
        "把 2 判错，因为循环不应把 n 本身当作因子。",
        "只在找到因子时输出，却没有处理素数情况。",
        "break 后把循环变量状态解释反。"
      ],
      "exercise": {
        "prompt": "读取整数 n，判断它是否为素数，输出 prime 或 composite。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 判断素数\n    return 0;\n}",
        "hint": "先处理 n<2，再从 i=2 试除到 i*i<=n。",
        "checks": [
          {
            "label": "初始化时排除小于 2 的情况",
            "pattern": "\\bn\\s*>=\\s*2|\\bn\\s*<\\s*2|\\bn\\s*<=\\s*1"
          },
          {
            "label": "使用试除循环",
            "pattern": "\\bfor\\s*\\([^;]*\\bi\\s*=\\s*2"
          },
          {
            "label": "找到因子后结束",
            "pattern": "%\\s*i\\s*==\\s*0[\\s\\S]*\\bbreak\\s*;"
          },
          {
            "label": "输出判定结果",
            "pattern": "prime[\\s\\S]*composite|composite[\\s\\S]*prime"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int isPrime = n >= 2;\n    for (int i = 2; i <= n / i; ++i) {\n        if (n % i == 0) {\n            isPrime = 0;\n            break;\n        }\n    }\n    cout << (isPrime ? \"prime\" : \"composite\") << endl;\n    return 0;\n}",
        "explanation": "i<=n/i 等价于 i*i<=n，但可减少大数乘法溢出风险。",
        "commonMistakes": [
          "从 i=1 开始试除。",
          "把 break 写成 continue，继续无意义检查。",
          "n=1 时仍进入素数分支。"
        ]
      },
      "masteryHint": "能说明平方根优化和 break 对判断结果的影响。"
    },
    {
      "id": "l3-loop-edge-cases",
      "lessonId": "lesson3",
      "title": "空循环、条件误写与循环后变量值",
      "tags": [
        "空循环",
        "赋值误写",
        "循环边界",
        "for"
      ],
      "overview": "循环题最容易错在分号、条件表达式和循环结束后的变量值。for 或 while 后面多写一个分号会形成空循环体。",
      "keyPoints": [
        "for(...); 的分号就是空语句，后面的语句不属于循环体。",
        "while(k=0) 中赋值表达式的值是 0，循环一次也不执行。",
        "while(k==0) 才是比较 k 是否等于 0。",
        "for(i=0;i<5;i+=2) 正常结束时 i 的值是 6。",
        "循环条件在每轮开始前检查，循环退出时条件已经不成立。"
      ],
      "pitfalls": [
        "if、while、for 条件后误加分号。",
        "把 == 写成 =。",
        "只看循环体执行次数，忘记循环变量最后还会更新一次。",
        "把空循环误认为只执行一次。"
      ],
      "exercise": {
        "prompt": "声明 int i，执行 for(i=0; i<5; i+=2);，然后输出循环结束后的 i。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    // 完成空循环并输出 i\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "6",
        "hint": "循环结束后 i 已经因为最后一次更新超过 4。",
        "checks": [
          {
            "label": "使用 for 循环",
            "pattern": "\\bfor\\s*\\("
          },
          {
            "label": "更新表达式为 i+=2",
            "pattern": "\\bi\\s*\\+=\\s*2\\b"
          },
          {
            "label": "条件为 i<5",
            "pattern": "\\bi\\s*<\\s*5\\b"
          },
          {
            "label": "输出循环后的 i",
            "pattern": "\\bcout\\s*<<\\s*i\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    for (i = 0; i < 5; i += 2);\n    cout << i << endl;\n    return 0;\n}",
        "explanation": "i 的取值为 0、2、4；执行更新后变成 6，再检查 6<5 为假，循环结束。",
        "commonMistakes": [
          "把最后输出误写成 4。",
          "把分号删掉后又在循环体内输出，改变了题意。",
          "把 i+=2 误写成 i++。"
        ]
      },
      "masteryHint": "能识别空循环和赋值误写，并准确预测循环结束后的变量值。",
      "sourcePages": [
        9,
        24,
        26,
        32,
        46
      ]
    },
    {
      "id": "l3-graphics-setw",
      "lessonId": "lesson3",
      "title": "双重循环打印图形与 setw 定位",
      "tags": [
        "图形打印",
        "嵌套循环",
        "setw",
        "空格"
      ],
      "overview": "打印图形时，外层循环控制行，内层循环控制每行字符数。通过 i、j 与行号的关系决定空格、星号和换行。",
      "keyPoints": [
        "外层循环通常控制行号 i。",
        "第 i 行的星号个数常由 2*i-1 等通项决定。",
        "setw(n) 设置紧随其后的一个输出项宽度。",
        "每行结束必须输出 endl 或换行符。",
        "先写小规模示例，找出行号与空格数、星号数的关系。"
      ],
      "pitfalls": [
        "内外循环边界写反。",
        "每输出一个字符就换行。",
        "忽略行首空格，图形左对齐。",
        "把 setw 当成永久格式设置。"
      ],
      "exercise": {
        "prompt": "读取行数 n，用双重循环输出 n 行居中的星号三角形。样例 n=3 时输出 3 行。",
        "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 输出居中星号三角形\n    return 0;\n}",
        "sampleInput": "3",
        "expectedOutput": "   *\n  ***\n *****",
        "hint": "第 i 行输出 n-i 个前导空格，再输出 2*i-1 个星号。",
        "checks": [
          {
            "label": "使用双重循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\("
          },
          {
            "label": "星号数量由 2*i-1 决定",
            "pattern": "2\\s*\\*\\s*i\\s*-\\s*1"
          },
          {
            "label": "使用 setw 控制定位",
            "pattern": "\\bsetw\\s*\\("
          },
          {
            "label": "每行输出换行",
            "pattern": "\\bendl\\b|['\"]\\\\n['\"]"
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; ++i) {\n        cout << setw(n - i + 1) << \"\";\n        for (int j = 1; j <= 2 * i - 1; ++j) cout << '*';\n        cout << endl;\n    }\n    return 0;\n}",
        "explanation": "setw 设置第一个输出项宽度，配合空字符串形成前导空格；内层循环输出本行星号。",
        "commonMistakes": [
          "只用一个循环。",
          "内层边界写成 i。",
          "setw 参数随行号增加，导致图形倒向。"
        ]
      },
      "masteryHint": "能根据行号推导空格数和字符数，并用双重循环实现图形。",
      "sourcePages": [
        29,
        30,
        31,
        50
      ]
    },
    {
      "id": "l3-iteration",
      "lessonId": "lesson3",
      "title": "迭代法：旧值、新值与精度终止",
      "tags": [
        "迭代法",
        "牛顿法",
        "fabs",
        "精度"
      ],
      "overview": "迭代法把复杂计算化为重复更新：由旧值按公式求新值，再用新值替换旧值，直到差值或新值足够小。",
      "keyPoints": [
        "每轮先由旧值计算新值。",
        "记录新旧值的差值，用 fabs 判断是否达到精度。",
        "达到精度后再把新值作为结果。",
        "更新顺序错误会让旧值丢失或重复使用错误值。",
        "实际程序还应设置最大迭代次数，防止不收敛。"
      ],
      "pitfalls": [
        "比较新旧值时其中一个已经被覆盖。",
        "把“差值大于精度”与“差值小于精度”写反。",
        "忘记包含 <cmath>。",
        "没有最大次数保护。"
      ],
      "exercise": {
        "prompt": "读取正整数 a，从 x=1 开始执行 8 次迭代 x=(x+a/x)/2，固定输出 6 位小数。",
        "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double a, x = 1;\n    cin >> a;\n    // 执行 8 次迭代并输出\n    return 0;\n}",
        "sampleInput": "2",
        "expectedOutput": "1.414214",
        "hint": "循环体内先计算新值，再赋回 x；输出使用 fixed 和 setprecision(6)。",
        "checks": [
          {
            "label": "使用固定次数循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*<\\s*8"
          },
          {
            "label": "使用迭代公式",
            "pattern": "\\(\\s*x\\s*\\+\\s*a\\s*/\\s*x\\s*\\)\\s*/\\s*2"
          },
          {
            "label": "把新值赋回 x",
            "pattern": "\\bx\\s*="
          },
          {
            "label": "固定输出 6 位小数",
            "pattern": "\\bfixed\\b[\\s\\S]*\\bsetprecision\\s*\\(\\s*6\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double a, x = 1;\n    cin >> a;\n    for (int i = 0; i < 8; ++i) {\n        x = (x + a / x) / 2;\n    }\n    cout << fixed << setprecision(6) << x << endl;\n    return 0;\n}",
        "explanation": "8 次迭代后 x 已非常接近 sqrt(a)。公式中的右侧先全部求值，再写回 x。",
        "commonMistakes": [
          "把 x 的更新写成 x=(a/x)/2。",
          "迭代次数少一次。",
          "没有 fixed，setprecision(6) 的含义不同。"
        ]
      },
      "masteryHint": "能写出迭代更新式，并正确控制终止条件和精度。",
      "sourcePages": [
        43,
        44,
        51
      ]
    },
    {
      "id": "l3-enumeration",
      "lessonId": "lesson3",
      "title": "穷举法与利用等式降维",
      "tags": [
        "穷举",
        "枚举",
        "百钱百鸡",
        "循环优化"
      ],
      "overview": "穷举法枚举所有可能情况，再用条件筛选。利用题目中的等式消去一个变量，可以把三重循环降为双重循环。",
      "keyPoints": [
        "先确定每个枚举变量的合法范围。",
        "利用总和关系直接计算第三个变量。",
        "在条件中同时检查总量和费用。",
        "减少循环层数能显著降低运行次数。",
        "计数题要注意满足条件的方案数而不是输出所有方案。"
      ],
      "pitfalls": [
        "枚举范围写满 0 到 100，造成不必要的计算。",
        "漏掉小鸡数量必须非负。",
        "把 0.5*z 写成整数除法。",
        "计数变量没有初始化。"
      ],
      "exercise": {
        "prompt": "公鸡 2 元、母鸡 3 元、小鸡 0.5 元，100 元买 100 只鸡。用双重循环求并输出方案数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    // 枚举公鸡和母鸡，直接计算小鸡\n    cout << count << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "7",
        "hint": "z=100-x-y；条件同时检查 z>=0 和总价等于 100。",
        "checks": [
          {
            "label": "使用双重循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\("
          },
          {
            "label": "直接计算小鸡 z",
            "pattern": "\\bz\\s*=\\s*100\\s*-\\s*x\\s*-\\s*y"
          },
          {
            "label": "检查总价",
            "pattern": "3\\s*\\*\\s*x\\s*\\+\\s*2\\s*\\*\\s*y\\s*\\+\\s*0\\.5\\s*\\*\\s*z"
          },
          {
            "label": "累加方案数",
            "pattern": "\\+\\+\\s*count|\\bcount\\s*\\+=\\s*1"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    for (int x = 0; x <= 100 / 3; ++x) {\n        for (int y = 0; y <= 100 / 2; ++y) {\n            int z = 100 - x - y;\n            if (z >= 0 && 3 * x + 2 * y + 0.5 * z == 100) {\n                ++count;\n            }\n        }\n    }\n    cout << count << endl;\n    return 0;\n}",
        "explanation": "x 表示母鸡、y 表示公鸡、z 表示小鸡；满足两个等式的组合共有 7 种。",
        "commonMistakes": [
          "使用三重循环但没有优化。",
          "把小鸡价格写成 5*z。",
          "漏掉 z>=0 条件。",
          "输出所有方案而不是方案数。"
        ]
      },
      "masteryHint": "能用等式消元减少循环层数，并正确设置枚举范围与筛选条件。",
      "sourcePages": [
        38,
        39,
        50
      ]
    },
    {
      "id": "l3-text-stats",
      "lessonId": "lesson3",
      "title": "字符统计、getchar 与 EOF",
      "tags": [
        "字符统计",
        "getchar",
        "EOF",
        "getline"
      ],
      "overview": "cin >> 字符串会在空白处停止。需要处理整行或逐字符统计时，应使用 getline 或 getchar，并正确识别字符类别和结束条件。",
      "keyPoints": [
        "cin >> s 通常只读取一个不含空白的单词。",
        "cin.getline(s, n) 可以把一整行读入字符数组。",
        "getchar() 返回 int，便于与 EOF 比较。",
        "字母范围可写成 ch>='A'&&ch<='Z' 等。",
        "数字字符的范围是 '0' 到 '9'。"
      ],
      "pitfalls": [
        "用 cin >> 读整行后误以为空格也被读入。",
        "把 getchar 的返回值声明为 char，导致无法可靠识别 EOF。",
        "字符范围写成 0<=ch<=9，而不是字符字面量。",
        "统计前没有初始化计数器。"
      ],
      "exercise": {
        "prompt": "读取一整行，统计字母、数字和其它字符的数量，依次用空格输出。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    int letters = 0, digits = 0, other = 0;\n    // 统计三类字符\n    cout << letters << ' ' << digits << ' ' << other << endl;\n    return 0;\n}",
        "sampleInput": "Ab3!\n",
        "expectedOutput": "2 1 1",
        "hint": "用下标遍历 s，先判断字母，再判断数字，其余归入 other。",
        "checks": [
          {
            "label": "读取一整行",
            "pattern": "cin\\s*\\.\\s*getline\\s*\\("
          },
          {
            "label": "按下标遍历字符数组",
            "pattern": "for\\s*\\(\\s*int\\s+\\w+\\s*=\\s*0\\s*;[\\s\\S]*s\\s*\\["
          },
          {
            "label": "判断大写或小写字母",
            "pattern": "'A'[\\s\\S]*'Z'[\\s\\S]*'a'[\\s\\S]*'z'"
          },
          {
            "label": "判断数字字符",
            "pattern": "'0'[\\s\\S]*'9'"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    int letters = 0, digits = 0, other = 0;\n    for (int i = 0; s[i] != '\\0'; ++i) {\n        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z')) ++letters;\n        else if (s[i] >= '0' && s[i] <= '9') ++digits;\n        else ++other;\n    }\n    cout << letters << ' ' << digits << ' ' << other << endl;\n    return 0;\n}",
        "explanation": "样例中 A、b 是字母，3 是数字，! 是其它字符。",
        "commonMistakes": [
          "使用 cin>>s，空格后的内容会丢失。",
          "把数字范围写成数值 0 到 9。",
          "分类分支顺序错误导致重复计数。"
        ]
      },
      "masteryHint": "能读取整行并逐字符完成分类统计。",
      "sourcePages": [
        45,
        51
      ]
    },
    {
      "id": "l4-ex4-1",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.1 求100个学生的平均分并统计高于平均分的人数",
      "tags": [
        "课件例题",
        "一维数组",
        "引例"
      ],
      "overview": "先用一个普通变量 s 反复读成绩，发现算完平均分后必须重新输入一遍；改用数组 s[100] 把成绩存下来，就能二次遍历。",
      "keyPoints": [
        "数组是一组同类型元素按顺序存放构成的集合。",
        "用单个变量存成绩，第二次统计时必须重新输入，繁琐且易错。",
        "用数组可以先存后算，平均分算完后直接再遍历一次。",
        "数组下标从 0 开始，100 个元素的下标是 0~99。"
      ],
      "pitfalls": [
        "把 for(i=0;i<100;i++) 写成 i<=100，越界。",
        "第二个循环忘记重新遍历数组，仍然读 cin。",
        "sum 没有初始化为 0。"
      ],
      "example": {
        "title": "例4.1 求100个学生的平均分并统计高于平均分的人数",
        "source": "课件 lesson4 · P3",
        "code": "int k=0;\nfloat s,ave,sum=0;\nfor(int i=0;i<100;i++)\n{  cin>>s;\n   sum=sum+s;  }\nave=sum/100;\nfor(i=0;i<100;i++)\n{  cin>>s;\n   if(s>ave) k++;\n}\n\nint k=0;\nfloat s[100],ave,sum=0;\nfor(i=0;i<100;i++)\n{   cin>>s[i];\n    sum=sum+s[i];  }\nave=sum/100;\nfor(i=0;i<100;i++)\n    if(s[i]>ave) k++;",
        "output": "课件未给具体数据；两种写法结果相同，但数组版只需输入一次",
        "explanation": "基本类型版把 100 个成绩都读进同一个 s，后一个覆盖前一个，所以算完平均分后想再比较，只能让用户重新输入。数组版给每个成绩一个独立位置 s[i]，第一遍求和、第二遍比较，数据只输入一次。这就是数组最直接的价值：批量保存、重复访问。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "只有一个 s，任何时刻只保存当前读入的成绩。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "第一遍读入并累加，i 从 0 到 99。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "100 是 int，sum 是 float，除法按 float 进行。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "第二个循环又要 cin>>s，因为旧成绩已经被覆盖。"
          },
          {
            "section": 1,
            "line": 2,
            "text": "数组给 100 个成绩各分配一个元素，下标 0~99。"
          },
          {
            "section": 1,
            "line": 4,
            "text": "第 i 个成绩存进 s[i]，不会覆盖前面的成绩。"
          },
          {
            "section": 1,
            "line": 8,
            "text": "第二遍直接访问已保存的成绩，不再需要输入。"
          }
        ],
        "sections": [
          {
            "label": "用基本类型实现：只能保存当前一个成绩",
            "code": "int k=0;\nfloat s,ave,sum=0;\nfor(int i=0;i<100;i++)\n{  cin>>s;\n   sum=sum+s;  }\nave=sum/100;\nfor(i=0;i<100;i++)\n{  cin>>s;\n   if(s>ave) k++;\n}"
          },
          {
            "label": "用数组实现：先把成绩全部存下来",
            "code": "int k=0;\nfloat s[100],ave,sum=0;\nfor(i=0;i<100;i++)\n{   cin>>s[i];\n    sum=sum+s[i];  }\nave=sum/100;\nfor(i=0;i<100;i++)\n    if(s[i]>ave) k++;"
          }
        ]
      },
      "masteryHint": "能说出数组版相比变量版省掉了哪一步，以及为什么。",
      "sourcePages": [
        3
      ]
    },
    {
      "id": "l4-ex4-2",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.2 选择法排序（6个数）",
      "tags": [
        "课件例题",
        "选择排序",
        "交换"
      ],
      "overview": "每一轮在未排序区间里找最小元素的下标 idx，再与区间起点 i 交换。6 个数只需 5 轮。",
      "keyPoints": [
        "外层 i 从 0 到 4，表示当前要确定的位置。",
        "内层 j 从 i+1 到 5，找比 a[idx] 更小的元素。",
        "idx 先假设为 i，找到更小值就更新 idx。",
        "一轮只交换一次：i 与 idx 交换。"
      ],
      "pitfalls": [
        "内层 j 从 0 开始，重复比较已排好的部分。",
        "每找到更小值就立刻交换，变成交换次数很多的写法。",
        "忘记 i!=idx 判断，自己和自己交换虽然不错但多余。"
      ],
      "example": {
        "title": "例4.2 选择法排序（6个数）",
        "source": "课件 lesson4 · P10",
        "code": "for( i= 0;i<5;i++)\n{ idx= i;\n  for(j=i+1;j<6;j++)                     \n      if(a[j]<a[idx]) idx = j;\n  if(i!= idx)\n  { temp=a[i]; a[i]= a[idx];\n    a[idx]=temp; }\n}",
        "output": "数组 a 变为递增序列",
        "explanation": "选择排序的思路是“每轮选出剩余部分的最小值，放到本轮起点”。idx 记录最小值的下标，内层循环只更新 idx，不交换；内层结束后才把 a[i] 与 a[idx] 交换一次。这样每轮最多交换一次。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "6 个元素只需 5 轮，最后一个元素自然就位。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "先假设本轮起点就是最小元素。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "只在未排序区间 i+1~5 中找更小值。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "发现更小值只更新下标，不立即交换。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "最小值不在起点时才需要交换。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "标准的三变量交换。"
          }
        ]
      },
      "masteryHint": "能说出 idx 的作用，以及为什么每轮只交换一次。",
      "sourcePages": [
        10
      ]
    },
    {
      "id": "l4-ex4-3",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.3 冒泡排序",
      "tags": [
        "课件例题",
        "冒泡排序",
        "相邻交换"
      ],
      "overview": "从前往后比较相邻元素，逆序就交换。每趟把当前最大值“冒”到末尾，下一趟少比一个。",
      "keyPoints": [
        "外层 i 控制趟数，共 5 趟（6 个元素）。",
        "内层 j 从 1 到 5-i，比较 a[j-1] 与 a[j]。",
        "逆序时交换相邻两个元素。",
        "每趟结束，未排序区间的最大值固定在末尾。"
      ],
      "pitfalls": [
        "内层上界写成 j<5，越界访问 a[6]。",
        "把 a[j-1]>a[j] 写反，得到降序。",
        "交换时漏掉 temp，两个元素变成同一个值。"
      ],
      "example": {
        "title": "例4.3 冒泡排序",
        "source": "课件 lesson4 · P11",
        "code": "for(i=0;i<5;i++)\n    for(j=1;j< 5-i ;j++)\n        if(a[j-1]>a[j] )\n        {\n            temp=a[j-1];\n            a[j-1]=a[j];\n            a[j]=temp;\n        }",
        "output": "数组 a 变为递增序列",
        "explanation": "冒泡排序每趟从左到右比较相邻元素，把较大的往后换。第一趟结束，最大值到了 a[5]；第二趟只需比到 a[4]，所以内层上界随 i 减小。课件用 5-i 控制每趟的比较次数。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "6 个元素需要 5 趟。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "每趟比较次数递减，避免重复比较已排好的末尾。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "前一个比后一个大就逆序，需要交换。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "先保存前一个元素。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "后一个元素前移。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "原来的前一个元素放到后面，完成相邻交换。"
          }
        ]
      },
      "masteryHint": "能画出第一趟冒泡后数组的变化，并解释 5-i 的含义。",
      "sourcePages": [
        11
      ]
    },
    {
      "id": "l4-ex4-4",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.4 矩阵相加 C=A+B",
      "tags": [
        "课件例题",
        "二维数组",
        "矩阵"
      ],
      "overview": "两个 2×3 矩阵对应元素相加。分别输入 A、B，再逐元素相加存入 C，最后按行输出。",
      "keyPoints": [
        "矩阵相加要求行数、列数相同。",
        "用双重循环遍历每个元素：c[i][j]=a[i][j]+b[i][j]。",
        "输出时内层输出一行元素，外层每行结束换行。",
        "二维数组下标先行后列。"
      ],
      "pitfalls": [
        "把 c[i][j] 写成 c[j][i]。",
        "输出时忘记每行换行。",
        "行列数不一致仍强行相加。"
      ],
      "example": {
        "title": "例4.4 矩阵相加 C=A+B",
        "source": "课件 lesson4 · P14",
        "code": "int a[2][3],b[2][3],c[2][3],i,j;\nfor ( i = 0; i<2;i++)    \n    for( j=0; j<3; j++)\n        cin>>a[i][j];\nfor ( i = 0; i<2; i++)   \n    for( j = 0; j<3; j++)\n        cin>>b[i][j];\nfor ( i = 0; i<2; i++) \n    for( j =0; j<3; j++)\n        c[i][j]=a[i][j]+b[i][j];\nfor ( i = 0; i<2; i++)    \n{   for( j=0; j<3; j++)\n        cout<<c[i][j]<<' ';\n    cout<<endl;\n}",
        "output": "按 2 行 3 列输出相加后的矩阵",
        "explanation": "三个双重循环分别完成输入 A、输入 B、计算 C，最后一个双重循环负责输出。计算时 i、j 必须完全对应，c[i][j] 只能由 a[i][j] 与 b[i][j] 相加得到，不能行列颠倒。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "三个 2 行 3 列的二维数组，行列数必须一致。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "按行、列顺序读入 A 的每个元素。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "同样方式读入 B。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "对应位置相加，下标 i、j 必须相同。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "同一行元素用空格分隔。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "内层结束后换行，输出下一行。"
          }
        ]
      },
      "masteryHint": "能写出矩阵相加的核心语句，并说出行列下标如何对应。",
      "sourcePages": [
        14
      ]
    },
    {
      "id": "l4-ex4-5",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.5 3×3 方阵求最大元素及下标",
      "tags": [
        "课件例题",
        "二维数组",
        "极值"
      ],
      "overview": "先假设 a[0][0] 最大，记录 imax=0、jmax=0；遍历整个方阵，遇到更大值就同时更新最大值和两个下标。",
      "keyPoints": [
        "最大值初值取 a[0][0]，下标初值取 0、0。",
        "遍历所有 i、j，不能只遍历上三角。",
        "更新最大值时必须同时更新 imax、jmax。",
        "与一维数组求最大值的方法完全一致，只是多了一个列下标。"
      ],
      "pitfalls": [
        "max 初值取 0，数组全为负数时结果错误。",
        "只更新 max 忘记更新下标。",
        "循环条件写成 i<=3，越界。"
      ],
      "example": {
        "title": "例4.5 3×3 方阵求最大元素及下标",
        "source": "课件 lesson4 · P15",
        "code": "max=a[0][0]; imax=0; jmax=0;\nfor ( i = 0; i<3; i++)    \n    for( j=0; j<3; j++)\n        if( a[i][j]>max)\n        { \n            max=a[i][j]; \n            imax=i; \n            jmax=j;\n        }",
        "output": "max 为最大元素，imax、jmax 为其行、列下标",
        "explanation": "先假设左上角元素最大，然后逐个比较。只有遇到严格更大的元素才更新，这样相同最大值会保留第一次出现的下标。max 的初值必须来自数组本身，不能想当然设为 0。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "用第一个元素作为初始最大值，同时记录它的下标。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "遍历 3 行。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "遍历 3 列，覆盖整个方阵。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "严格大于才更新，保证相同值时保留先出现的下标。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "更新最大值所在行。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "更新最大值所在列。"
          }
        ]
      },
      "masteryHint": "能解释 max 为什么不能初始化为 0，以及三个变量为什么要一起更新。",
      "sourcePages": [
        15
      ]
    },
    {
      "id": "l4-ex4-6",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.6 3×3 方阵转置",
      "tags": [
        "课件例题",
        "矩阵转置",
        "对角线"
      ],
      "overview": "沿主对角线交换 a[i][j] 与 a[j][i]。内层 j 只取到 i-1，只处理对角线一侧，避免交换两次又换回去。",
      "keyPoints": [
        "转置就是行列互换：a[i][j] ↔ a[j][i]。",
        "只需处理 j<i 的下三角（或 j>i 的上三角）一侧。",
        "如果 j 取到 3，每对元素会被交换两次，矩阵恢复原样。",
        "对角线元素 i==j 不需要交换。"
      ],
      "pitfalls": [
        "内层 j<3，导致交换两次。",
        "交换时没有用临时变量 t。",
        "把 a[i][j] 与 a[j][i] 写反。"
      ],
      "example": {
        "title": "例4.6 3×3 方阵转置",
        "source": "课件 lesson4 · P16",
        "code": "for ( i = 0; i<3; i++) \n    for( j=0; j<i ; j++)\n    {  t=a[i][j]; \n       a[i][j]=a[j][i]; \n       a[j][i]=t;\n    }",
        "output": "原矩阵 [[1,2,3],[4,5,6],[7,8,9]] 变为 [[1,4,7],[2,5,8],[3,6,9]]",
        "explanation": "转置只交换对角线两侧的对称元素。j<i 表示只看下三角：a[1][0] 与 a[0][1] 换一次，a[2][0] 与 a[0][2] 换一次，a[2][1] 与 a[1][2] 换一次。如果 j 取满 0~2，同一对元素会被换两次，等于没换。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "逐行处理。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "只取对角线左侧，保证每对元素只交换一次。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "保存左下角元素。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "把右上角元素写到左下角。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "把保存的左下角元素写到右上角。"
          }
        ]
      },
      "masteryHint": "能解释 j<i 的作用，以及 j<3 为什么会出错。",
      "sourcePages": [
        16
      ]
    },
    {
      "id": "l4-ex4-7",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.7 矩阵相乘 C=A×B",
      "tags": [
        "课件例题",
        "矩阵乘法",
        "三重循环"
      ],
      "overview": "A 是 M×N，B 是 N×P，C 是 M×P。C 的每个元素 c[i][j] 等于 A 的第 i 行与 B 的第 j 列对应元素乘积之和。",
      "keyPoints": [
        "矩阵相乘要求 A 的列数等于 B 的行数。",
        "c[i][j] 由三重循环计算：i 行、j 列、k 遍历求和。",
        "s 必须在每个 c[i][j] 计算前清零。",
        "课件用 #define 定义 M、N、P，便于修改规模。"
      ],
      "pitfalls": [
        "s 在 i、j 循环外清零，导致累加错误。",
        "把 b[k][j] 写成 b[j][k]。",
        "输出时忘记每行换行。",
        "课件原文初始化语句末尾是全角分号，直接编译会报错。"
      ],
      "example": {
        "title": "例4.7 矩阵相乘 C=A×B",
        "source": "课件 lesson4 · P17-P18",
        "code": "#include  <iostream>\nusing namespace std;\n#define  M  2\n#define  N  3\n#define  P  4\nint main()\n{ int a[M][N]={{3,5,7},{4,6,8}},b[N][P]={{1,4,7,10},{2,5,8,11},{3,6,9,12}}； \n  int c[M][P],i, j, k, s;\n  for(i=0; i<M; i++)\n    for(j=0; j<P; j++)\n    {  s=0;\n       for(k=0; k<N; k++) \n           s+=a[i][k]*b[k][j];\n       c[i][j] = s;\n    }\n  for(i=0;i<M;i++) \n  {   for(j=0;j<P;j++)  \n          cout<<c[i][j]<<\"  \";     \n      cout<<endl;       \n  }\n  system(\"pause\");\n  return 0;\n}",
        "output": "C = [[31,45,59,73],[34,50,66,82]]",
        "explanation": "计算 c[i][j] 时，k 从 0 到 N-1，把 A 第 i 行的第 k 个元素与 B 第 k 行的第 j 个元素相乘并累加。s 是累加器，必须在每个新的 i、j 组合开始时清零。课件原文初始化语句末尾用了全角“；”，录入编译器时要改成半角“;”。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "A 的行数、C 的行数。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "A 的列数、B 的行数，必须相等。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "B 的列数、C 的列数。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "课件原文这里是全角分号，编译前必须改成半角分号。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "每算一个 c[i][j] 前都要把累加器清零。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "k 遍历 A 的列和 B 的行。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "A 的第 i 行第 k 个 × B 的第 k 行第 j 个，累加到 s。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "三重循环结束后把累加结果存入 C。"
          }
        ]
      },
      "masteryHint": "能写出 c[i][j] 的求和公式，并指出 s 应该在哪里清零。",
      "sourcePages": [
        17
      ]
    },
    {
      "id": "l4-ex4-8",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.8 字符串的输入/输出",
      "tags": [
        "课件例题",
        "字符数组",
        "puts"
      ],
      "overview": "字符数组 c 逐个字符初始化，没有 '\\0'；字符数组 b 用字符串初始化，末尾自动带 '\\0'。分别用循环、puts、逐字符循环输出。",
      "keyPoints": [
        "char c[5]={'C','h','i','n','a'} 只是字符数组，不是字符串，末尾没有 '\\0'。",
        "char b[]=\"China\" 是字符串，数组长度 6，末尾自动补 '\\0'。",
        "puts 输出字符串并自动换行，遇到 '\\0' 停止。",
        "用 b[i]!='\\0' 控制循环，是遍历字符串的常用写法。"
      ],
      "pitfalls": [
        "对没有 '\\0' 的 c 使用 puts(c) 或 cout<<c，会越界。",
        "把 '\\0' 写成 '0'，后者是字符 0，ASCII 48。",
        "数组长度不够，字符串初始化时没有空间放 '\\0'。"
      ],
      "example": {
        "title": "例4.8 字符串的输入/输出",
        "source": "课件 lesson4 · P23",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{\nint i;\nchar  c[5] = {'C', 'h', 'i', 'n', 'a'};\nchar  b[ ] = \"China\";\nfor ( i = 0; i<5; i++)  \n    cout<<c[i];                               \nputs(b);\nfor (i = 0; b[i] !='\\0'; i++)   \n    cout<< b[i];\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "ChinaChinaChina（puts 后换行）",
        "explanation": "c 是 5 个字符的数组，只能逐字符输出；b 是字符串，长度 6，最后一个元素是 '\\0'，所以可以用 puts 或 cout<<b。课件提问“能否把循环改为 puts(c) 或 cout<<c”，答案是：c 没有 '\\0'，这样做会越界，不能保证正确。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "逐个字符初始化，5 个元素刚好放满，没有位置放 '\\0'。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "用字符串常量初始化，编译器自动分配 6 个字符，末尾补 '\\0'。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "c 没有结束符，只能按已知长度 5 循环。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "puts 从 b 开始输出，遇到 '\\0' 停止，并自动换行。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "用结束符控制循环，是字符串遍历的标准写法。"
          }
        ]
      },
      "masteryHint": "能说出字符数组与字符串的区别，以及 c 为什么不能用 puts。",
      "sourcePages": [
        23
      ]
    },
    {
      "id": "l4-ex4-9",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.9 把一个字符串复制到另一个字符串",
      "tags": [
        "课件例题",
        "字符串复制",
        "结束符"
      ],
      "overview": "用 while(s[i]!='\\0') 逐字符复制，循环结束后必须手动补 t[i]='\\0'，否则 t 不是合法字符串。",
      "keyPoints": [
        "循环条件 s[i]!='\\0' 表示复制到结束符之前。",
        "每复制一个字符，i 加 1。",
        "循环结束后 t[i]='\\0' 是必须的，否则 puts(t) 会越界。",
        "gets 读取一行字符串，但它是危险函数，现代编译器会警告。"
      ],
      "pitfalls": [
        "漏掉 t[i]='\\0'。",
        "把 while 条件写成 s[i]=='\\0'。",
        "数组 t 空间不够。"
      ],
      "example": {
        "title": "例4.9 把一个字符串复制到另一个字符串",
        "source": "课件 lesson4 · P24",
        "code": "#define N 100\n#include <iostream>\nint main( ) \n{\nint i;\nchar s[N], t[N];\ngets(s);\ni=0;\nwhile(s[i]!='\\0') //注意循环条件的表达\n \n{\nt[i]=s[i];\ni++;\n}\nt[i]='\\0'; //注意字符串的末尾一定要有'\\0'\nputs(t);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 China 时输出 China",
        "explanation": "复制过程只复制可见字符，不复制 s 的结束符。因此循环结束后 t 的当前位置 i 还没有结束符，必须补上 '\\0'，puts 才知道在哪里停。课件特别用注释强调这一点，缺少它结果可能多出乱码。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "源串和目标串都要有足够空间；t 至少要比 s 的实际长度多 1。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "读取一整行到 s；gets 不检查边界，现代 C++ 已移除，可用 fgets 替代。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "只要当前字符不是结束符就继续复制。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "把 s 的第 i 个字符复制到 t 的同一位置。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "移动到下一个字符。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "循环结束时手动补结束符，t 才成为合法字符串。"
          }
        ]
      },
      "masteryHint": "能解释为什么复制循环结束后还要补 '\\0'。",
      "sourcePages": [
        24
      ]
    },
    {
      "id": "l4-ex4-10",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.10 字符串处理函数示例（密码判断）",
      "tags": [
        "课件例题",
        "strcmp",
        "while(1)"
      ],
      "overview": "循环读入密码，用 strcmp(s,\"pass\") 判断。strcmp 返回 0 表示相等，非 0 表示不等；相等时 break 结束循环。",
      "keyPoints": [
        "strcmp(str1,str2) 按 ASCII 逐个比较，相等返回 0。",
        "if(strcmp(s,\"pass\")) 等价于 if(strcmp(s,\"pass\")!=0)。",
        "while(1) 是无限循环，靠 break 退出。",
        "字符串比较不能用 ==，== 比较的是地址。"
      ],
      "pitfalls": [
        "写成 if(s==\"pass\")。",
        "把 strcmp 返回 0 当成“假”而写成 if(!strcmp(...)) 时逻辑反了。",
        "忘记包含 <cstring>。"
      ],
      "example": {
        "title": "例4.10 字符串处理函数示例（密码判断）",
        "source": "课件 lesson4 · P27",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{\nchar  s[80];\nwhile(1) \n{  \ngets(s);\nif(strcmp(s,\"pass\")) \n    puts(\"Invalid password.\");\nelse\n    break;\n}\nputs(\"pass\");\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 pass 时输出 pass 并结束；其它输入反复提示 Invalid password.",
        "explanation": "strcmp 相等时返回 0，0 在 if 中为假，所以 if(strcmp(...)) 的意思是“不相等”。不相等就提示并继续循环，相等时走 else 的 break。课件还给出等价写法 if(strcmp(s,\"pass\")!=0)。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "无限循环，只有输入正确密码时才 break。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "读入一行密码；同样要注意 gets 的边界问题。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "strcmp 返回 0 表示相等；非 0 表示不等，条件为真。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "不相等时提示，循环继续。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "相等时跳出 while(1)。"
          }
        ]
      },
      "masteryHint": "能解释 if(strcmp(...)) 为什么表示“不相等”。",
      "sourcePages": [
        27
      ]
    },
    {
      "id": "l4-ex4-11",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.11 在有序数组中插入数值 x",
      "tags": [
        "课件例题",
        "插入",
        "数组平移"
      ],
      "overview": "先找插入位置 k，再从最后一个元素开始依次后移，最后把 x 放到 a[k]。移动方向必须从后往前。",
      "keyPoints": [
        "for(k=0;k<9;k++) if(x<a[k]) break; 找到第一个比 x 大的位置。",
        "从 i=8 开始向前遍历，a[i+1]=a[i] 后移。",
        "必须从后往前移，否则前面的值会覆盖后面的值。",
        "最后 a[k]=x 完成插入。"
      ],
      "pitfalls": [
        "从前往后移，数据被覆盖。",
        "循环条件写成 i>=k 但 i 初值不是 8。",
        "插入后忘记把数组长度加 1（课件片段只处理 9 个元素）。"
      ],
      "example": {
        "title": "例4.11 在有序数组中插入数值 x",
        "source": "课件 lesson4 · P29",
        "code": "for(k=0;k<9;k++) if (x<a[k]) break;    // 找到插入的位置下标为k\nfor(i=8;i>=k;i--) \n    a[i + 1] = a[i];       \n    a[k] = x;",
        "output": "在 1 4 7 10 13 16 19 22 25 中插入 14，结果为 1 4 7 10 13 14 16 19 22 25",
        "explanation": "插入位置 k 是第一个大于 x 的元素下标；如果 x 比所有元素都大，k 会等于 9，正好插在末尾。后移必须从最后一个元素开始，先把 a[8] 移到 a[9]，再把 a[7] 移到 a[8]，这样不会覆盖还没移动的数据。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "在已有的 9 个元素中找插入位置。"
          },
          {
            "section": 0,
            "line": 1,
            "text": "第一个比 x 大的元素位置就是 k；找不到则 k=9。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "从最后一个元素开始向前处理，方向不能反。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "把第 i 个元素后移一位，为 x 腾出位置。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "把 x 放到空出来的 a[k]。"
          }
        ]
      },
      "masteryHint": "能解释为什么插入的后移必须从后往前。",
      "sourcePages": [
        29
      ]
    },
    {
      "id": "l4-ex4-12",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.12 从数组中删除某数",
      "tags": [
        "课件例题",
        "删除",
        "数组平移"
      ],
      "overview": "先查找 key 所在下标 i，找到后从 i 开始把后面的元素依次前移，覆盖被删除元素。",
      "keyPoints": [
        "for(i=0;i<10;i++) if(key==a[i]) break; 找到待删除元素。",
        "for(j=i;j<9;j++) a[j]=a[j+1]; 从删除位置开始前移。",
        "删除的移动方向与插入相反：从前往后。",
        "课件片段没有处理“未找到”的情况。"
      ],
      "pitfalls": [
        "从后往前移，无法覆盖删除位置。",
        "循环上界写成 j<10，访问 a[10] 越界。",
        "未找到时 i==10，仍然执行移动，越界。"
      ],
      "example": {
        "title": "例4.12 从数组中删除某数",
        "source": "课件 lesson4 · P30",
        "code": "for(i=0;i<10;i++)\n    if(key==a[i])\n        break;\nfor(j=i;j<9;j++)\n    a[j]=a[j+1];",
        "output": "删除后数组长度减 1，后面的元素依次前移",
        "explanation": "找到 key 后，i 就是空出来的位置。把 a[i+1] 写到 a[i]，a[i+2] 写到 a[i+1]，依此类推，最后 a[9] 被 a[9] 后面的值覆盖（课件假定数组还有空间）。删除必须从前往后移，因为目标位置在左边。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "在 10 个元素中查找 key。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "找到待删除元素，i 记录其下标。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "找到后立即停止查找。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "从删除位置开始，把后一个元素前移。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "用后一个元素覆盖当前元素，相当于删除 a[i]。"
          }
        ]
      },
      "masteryHint": "能对比插入与删除的移动方向，并说出原因。",
      "sourcePages": [
        30
      ]
    },
    {
      "id": "l4-ex4-14a",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.14（一）随机布雷的扫雷游戏板",
      "tags": [
        "课件例题",
        "二维数组",
        "随机数",
        "填空"
      ],
      "overview": "用 6×6 的 board 表示游戏板，'-' 表示非雷，'*' 表示雷。随机生成 10 个位置布雷，若该位置已有雷则重新抽（k--）。",
      "keyPoints": [
        "先把整个 board 初始化为 '-'。",
        "srand(time(0)) 用当前时间做随机种子。",
        "rand()%ROWS、rand()%COLS 把随机数映射到行列下标。",
        "若随机位置已经是 '*'，执行 k--，使本轮不算数，重新抽。"
      ],
      "pitfalls": [
        "初始化时漏掉 board[i][j]='-'。",
        "随机下标写成 rand()%ROW 或 rand()%COL（宏名拼错）。",
        "重复布雷时忘记 k--，导致实际雷数少于 MINES。"
      ],
      "example": {
        "title": "例4.14（一）随机布雷的扫雷游戏板",
        "source": "课件 lesson4 · P32-P33",
        "code": "#define ROWS 6\n#define COLS 6\n#define MINES 10\n#include <time.h>\n#include <iostream>\nusing namespace std;\nint main()\n{\nchar board[ROWS][COLS];\nint i,j,k;\nfor(i=0;i<ROWS;i++)\n    for(j=0;j<COLS;j++)\n        ____;\n\nsrand(time(0));\nfor(k=0;k<MINES;k++)\n{\n    i=____;\n    j=____;\n    if(board[i][j]=='-')\n        board[i][j]='*';\n    else\n        ____;\n}\nfor(i=0;i<ROWS;i++)\n{\n    for(j=0;j<COLS;j++)\n        cout<<board[i][j];\n    cout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "6 行 6 列的 '-'/'*' 棋盘，其中 '*' 恰好 10 个",
        "explanation": "初始化必须把每个位置都设为 '-'，否则 board 里是随机值，后面判断“是否已有雷”就不可靠。随机抽到已布雷的位置时，这一轮不能算作有效布雷，所以用 k-- 抵消 for 的 k++，保证最终正好 10 个雷。",
        "notes": [
          {
            "section": 0,
            "line": 9,
            "text": "棋盘用二维字符数组表示，ROWS 行 COLS 列。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "填空①：board[i][j]='-'; 先把每个位置都设成非雷。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "用当前时间做随机种子，保证每次运行雷区不同。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "填空②：i=rand()%ROWS，得到 0~ROWS-1 的行下标。"
          },
          {
            "section": 0,
            "line": 19,
            "text": "填空③：j=rand()%COLS，得到 0~COLS-1 的列下标。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "只有该位置还不是雷，才允许布雷。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "填空④：k--; 本次抽到重复位置，抵消本轮，保证最终正好 MINES 颗雷。"
          },
          {
            "section": 0,
            "line": 28,
            "text": "双重循环按行、按列输出棋盘。"
          }
        ],
        "blankHints": [
          "① board[i][j]='-'；② i=rand()%ROWS；③ j=rand()%COLS；④ k--（重复位置重新抽）。"
        ]
      },
      "masteryHint": "能填出四个空，并解释 k-- 为什么能保证雷数正好是 10。",
      "sourcePages": [
        32
      ]
    },
    {
      "id": "l4-ex4-14b",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.14（二）Floyd 算法求任意两城市最短路",
      "tags": [
        "课件例题",
        "Floyd",
        "最短路径",
        "填空"
      ],
      "overview": "用 4×4 的 e 数组存城市间距离，不连通用 MAX 表示无穷。三重循环枚举中转点 k、起点 i、终点 j，若 e[i][k]+e[k][j] 更短就更新 e[i][j]。",
      "keyPoints": [
        "e[i][j] 表示 i 到 j 的当前最短距离。",
        "初始化：i==j 时距离为 0，否则先设为 MAX。",
        "读入 8 条边：e[st][en]=d。",
        "Floyd 核心：if(e[i][j]>e[i][k]+e[k][j]) e[i][j]=e[i][k]+e[k][j];"
      ],
      "pitfalls": [
        "初始化时没有把 i==j 设为 0。",
        "没有把非对角线元素先设为 MAX。",
        "三重循环顺序写成 i、j、k 中的其它顺序（k 必须在最外层）。",
        "课件输出语句末尾有全角分号。"
      ],
      "example": {
        "title": "例4.14（二）Floyd 算法求任意两城市最短路",
        "source": "课件 lesson4 · P34-P38",
        "code": "#define N 4//N表示顶点数\n#define M 8//M表示路径数\n#include <iostream>  \nusing namespace std;\n#define MAX 1000000//定义MAX是个大数，代表无穷远\nint main()\n{\nint e[N][N],i,j,k,st,en,d;\nfor (i=0; i<N; i++)//以下初始化路径距离\n    for (j=0; j <N; j++)\n        if( ____ ) \n            e[i][j] = 0;\n        else \n            ____;  \nfor (i = 1; i <= M; i++)//输入起终点及路径距离 \n{\n    cin>>st>>en>>d;//依次输入起终点下标和路径长度\n    ____;\n}\nfor (k = 0; k < N; k++)//在i和j两点间插入点k,更新其最短距离  \n    for (i = 0; i < N; i++)\n        for (j = 0; j < N; j++)\n            if (e[i][j] > e[i][k] + e[k][j])\n                e[i][j] = e[i][k] + e[k][j];\nfor (i = 0; i < N; i++)\n{\n    for (j = 0; j < N; j++)\n        cout << (char)('A'+i) << \"->\" << (char)('A'+j) << \":\" << \n        e[i][j]<<'\\t’;\n    cout<<endl;\n}\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "按 A->A、A->B … D->D 输出 4×4 最短距离表",
        "explanation": "初始化时，城市到自己的距离为 0，到其它城市先当作无穷远；读入 8 条单向公路后，Floyd 用每个城市 k 作为中转点，尝试把 i->k->j 的长度与当前 e[i][j] 比较，更短就更新。k 必须在最外层，这样每一轮都能利用已经更新过的更短路径。",
        "notes": [
          {
            "section": 0,
            "line": 11,
            "text": "填空①：i==j，城市到自己的距离为 0。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "填空②：e[i][j] = MAX，非对角线先设为无穷远。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "填空③：e[st][en] = d，读入一条边的距离。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "中转点 k 必须在最外层，Floyd 才能逐步利用所有中转。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "比较“直接走”与“经 k 中转”的长度。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "经 k 更短就更新。"
          },
          {
            "section": 0,
            "line": 29,
            "text": "课件原文这里混入了全角分号，编译前要改成 '\\t';"
          }
        ],
        "blankHints": [
          "① i==j；② e[i][j]=MAX；③ e[st][en]=d。"
        ]
      },
      "masteryHint": "能填出三个空，并解释 k 为什么必须在最外层。",
      "sourcePages": [
        34
      ]
    },
    {
      "id": "l4-ex4-15",
      "lessonId": "lesson4",
      "kind": "example",
      "title": "例4.15 古诗接句游戏",
      "tags": [
        "课件例题",
        "二维字符数组",
        "随机不重复"
      ],
      "overview": "二维字符数组每行存一句诗，随机产生 0~N-1 的不重复行下标，显示上句，用户输入下句，用 strcmp 判断对错。",
      "keyPoints": [
        "s[N][30] 每行存放一条完整诗句。",
        "用 a[N] 存放不重复的随机行下标，i==m 表示新随机数与已有 m 个都不同。",
        "len=strlen(s[a[n]]) 求当前诗句长度，前一半是上句，后一半是下句。",
        "strcpy(key, s[a[n]]+len/2) 把下句复制到答案串。"
      ],
      "pitfalls": [
        "随机数去重时忘记 i==m 判断，导致重复。",
        "上句长度用 len/2，七言诗和五言诗都能对半分成上下句。",
        "strcmp 相等返回 0，判断条件写成 if(strcmp(...)) 会反。"
      ],
      "example": {
        "title": "例4.15 古诗接句游戏",
        "source": "课件 lesson4 · P39-P41",
        "code": "#define N 5\n#include <time.h>\n#include <iostream>\nusing namespace std;\nint main()\n{\nchar ans[15], key[15];\nchar s[N][30] = { \"晴川历历汉阳树芳草萋萋鹦鹉洲\",\"愿君多采撷此物最相思\",\"洛阳亲友如相问一片冰心在玉壶\",\"随风潜入夜润物细无声\",\"晓看红湿处花重锦官城\" };\nint i, m, n,len, a[N]; //a数组存放s的行下标，其取值范围为0~N-1\nsrand(time(NULL));\nfor (m = 0; m < N;)               //该循环产生0~N-1之间不重复的随机数并存放于a中\n{\n    n = rand() % N;\n    for (i = 0; i < m; i++)         //判新产生的随机数n与a中原有的m个数是否相同\n        if (a[i] == n)\n            break;\n    if (i == m)                 //新产生的随机数若与原m个数皆不同，则存入数组a\n    {  a[m] = n;\n       m++;\n    }\n}\nfor (n = 0; n < N; n++)            //循环进行N条接句游戏测试\n{\n    len = strlen(s[a[n]]);         //求第a[n]条诗中所含的字符数。\n    for (i = 0; i < len / 2; i++)     //将s[a[n]]的上句显示在屏幕上\n        cout << s[a[n]][i]; \n    strcpy(key, s[a[n]] + len / 2);   //将s[a[n]]的下句复制到答案字符串key中\n    cout << \"\\n请输入下句:\" << endl;\n    cin >> ans;                 //输入用户的接句\n    if (strcmp(ans, key) == 0)     //比较用户的接句与答案\n        cout << \"答对了，你真棒!\" << endl;\n    else\n    {\n        cout << \"很遗憾，继续努力!\" << endl;\n        cout << \"正确的应为:\" << endl;\n        cout << key << endl; \n    }\n}\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "随机显示一句诗的上句，用户输入下句后给出对错提示",
        "explanation": "先用随机洗牌的方式生成 0~4 的一个排列，保证每句诗只考一次。对每条诗，长度的一半就是上句长度；从 s[a[n]] 的第 len/2 个字符开始，正好是下句，用 strcpy 复制到 key。用户输入 ans 后与 key 比较。",
        "notes": [
          {
            "section": 0,
            "line": 8,
            "text": "二维字符数组存 5 句诗，每句不超过 29 个字符。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "a 存放 0~N-1 的不重复行下标，m 记录已经选了几条。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "随机产生 0~N-1 之间的行下标。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "内层循环没有 break，说明新下标与已选的 m 个都不同，可以存入 a。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "求整句长度，再用 len/2 把诗句分成上下两句。"
          },
          {
            "section": 0,
            "line": 27,
            "text": "指针加法跳过前 len/2 个字符，从中间开始复制下句作为答案。"
          },
          {
            "section": 0,
            "line": 30,
            "text": "字符串比较必须用 strcmp，不能用 ==。"
          }
        ]
      },
      "masteryHint": "能解释随机数去重的判断，以及为什么 len/2 能分出上下句。",
      "sourcePages": [
        39
      ]
    },
    {
      "id": "l4-array-basics",
      "lessonId": "lesson4",
      "title": "一维数组的定义、初始化与下标",
      "tags": [
        "一维数组",
        "下标",
        "初始化",
        "越界"
      ],
      "overview": "一维数组把同类型元素连续存放在内存中，第一个元素下标为 0，最后一个元素下标为长度减 1。数组名表示首地址常量，不能被重新赋值。",
      "keyPoints": [
        "定义形式为 类型 数组名[长度];。",
        "长度必须是大于 0 的整型常量表达式，不能是普通变量。",
        "部分初始化时，未显式给出的元素自动初始化为 0。",
        "数组元素可以像同类型普通变量一样参与运算。",
        "访问 a[N] 会越界；越界不保证立刻报错，但行为不可靠。"
      ],
      "pitfalls": [
        "把下标写成 1 到 N，漏掉 a[0]。",
        "用普通 int 变量定义数组长度。",
        "执行 a = b; 试图整体赋值数组。",
        "输入或输出数组名却期待得到全部元素。"
      ],
      "exercise": {
        "prompt": "读取 5 个整数存入一维数组，然后按相反顺序输出，数字之间用空格分隔。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 定义数组并逆序输出\n    return 0;\n}",
        "hint": "先用 i=0 到 4 读入，再从 i=4 递减到 0 输出。",
        "checks": [
          {
            "label": "定义长度为 5 的数组",
            "pattern": "\\bint\\s+\\w+\\s*\\[\\s*5\\s*\\]"
          },
          {
            "label": "用循环读入数组",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bcin\\s*>>\\s*\\w+\\s*\\["
          },
          {
            "label": "使用递减逆序访问",
            "pattern": "(--\\s*\\w+|\\w+\\s*--|>=\\s*0)"
          },
          {
            "label": "输出数组元素",
            "pattern": "\\bcout\\s*<<[\\s\\S]*\\["
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5];\n    for (int i = 0; i < 5; ++i) cin >> a[i];\n    for (int i = 4; i >= 0; --i) {\n        cout << a[i];\n        if (i > 0) cout << ' ';\n    }\n    cout << endl;\n    return 0;\n}",
        "explanation": "正向读入后，逆序输出只需让下标从 4 递减到 0。",
        "commonMistakes": [
          "从 a[5] 开始逆序，造成越界。",
          "循环条件写成 i>0，漏掉 a[0]。",
          "只输入一个变量，未存入数组。"
        ]
      },
      "masteryHint": "能准确说出合法下标范围，并能识别数组名常量的限制。"
    },
    {
      "id": "l4-traverse-max",
      "lessonId": "lesson4",
      "title": "数组遍历、求和与极值",
      "tags": [
        "遍历",
        "最大值",
        "最小值",
        "下标"
      ],
      "overview": "遍历是数组处理的基础。求最大值时先假设第一个元素为当前最大值，再从第二个元素开始比较；求最大值下标时保存下标而不是只保存值。",
      "keyPoints": [
        "遍历通常用 for 循环，边界是 0 到 N-1。",
        "求和变量必须先初始化。",
        "极值初始值常用 a[0]，然后从 i=1 开始比较。",
        "需要修改极值元素时，应同时记录它所在的下标。",
        "多个极值并列时，比较符号决定保留哪一个位置。"
      ],
      "pitfalls": [
        "极值变量初始化为 0，却处理可能全为负数的数组。",
        "最大值和下标不同步更新。",
        "把 N 当成有效下标。",
        "求和变量在循环内重复初始化。"
      ],
      "exercise": {
        "prompt": "读取 6 个整数，输出最大值以及它第一次出现的下标。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 读取数组，求最大值与下标\n    return 0;\n}",
        "hint": "令 maxIndex=0，从 i=1 开始比较；使用 > 而不是 >= 可保留第一次出现。",
        "checks": [
          {
            "label": "定义数组",
            "pattern": "\\bint\\s+\\w+\\s*\\[\\s*6\\s*\\]"
          },
          {
            "label": "保存最大下标",
            "pattern": "\\b(maxIndex|imax|index)\\s*=\\s*0"
          },
          {
            "label": "比较数组元素",
            "pattern": "\\w+\\s*\\[\\s*\\w+\\s*\\]\\s*>\\s*\\w+\\s*\\[\\s*(maxIndex|imax|index)\\s*\\]"
          },
          {
            "label": "输出最大值和下标",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6];\n    for (int i = 0; i < 6; ++i) cin >> a[i];\n    int maxIndex = 0;\n    for (int i = 1; i < 6; ++i)\n        if (a[i] > a[maxIndex]) maxIndex = i;\n    cout << a[maxIndex] << ' ' << maxIndex << endl;\n    return 0;\n}",
        "explanation": "保存下标比单独保存最大值更方便定位元素，也避免极值初值与数据类型范围不匹配。",
        "commonMistakes": [
          "maxIndex 与 maxValue 更新不同步。",
          "把 maxValue 初始化为 0，导致负数组结果错误。",
          "使用 >= 导致并列时返回最后一个位置。"
        ]
      },
      "masteryHint": "能独立完成遍历、累加、最大值和最大值下标的模板。"
    },
    {
      "id": "l4-sorting",
      "lessonId": "lesson4",
      "title": "选择排序与冒泡排序",
      "tags": [
        "排序",
        "选择法",
        "冒泡法",
        "交换"
      ],
      "overview": "选择排序每轮在未排序区间找最小元素，与区间起点交换一次；冒泡排序每轮比较相邻元素，让当前区间最大值逐步移到末尾。两者都使用双重循环。",
      "keyPoints": [
        "选择排序外层 i 从 0 到 N-2，内层在 i 之后寻找最小元素。",
        "选择排序每轮通常只交换一次。",
        "冒泡排序内层比较 a[j] 与 a[j+1]。",
        "每完成一轮冒泡，末尾已排序区间增加一个元素。",
        "交换两个元素必须使用临时变量，避免覆盖。"
      ],
      "pitfalls": [
        "选择排序在找最小值过程中反复交换，变成低效写法。",
        "冒泡排序内层上界不随外层缩小，增加无效比较。",
        "交换时漏掉临时变量。",
        "升序与降序的比较符号写反。"
      ],
      "exercise": {
        "prompt": "读取 5 个整数到数组，使用冒泡排序按升序排列并输出。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5];\n    // 读入并使用冒泡排序\n    return 0;\n}",
        "hint": "外层控制轮数，内层比较 j 与 j+1；若左大于右就交换。",
        "checks": [
          {
            "label": "使用双重循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\("
          },
          {
            "label": "比较相邻元素",
            "pattern": "\\w+\\s*\\[\\s*\\w+\\s*\\]\\s*>\\s*\\w+\\s*\\[\\s*\\w+\\s*\\+\\s*1\\s*\\]"
          },
          {
            "label": "执行元素交换",
            "pattern": "(?:temp|t|tmp)[\\s\\S]*=[\\s\\S]*=[\\s\\S]*="
          },
          {
            "label": "输出排序结果",
            "pattern": "\\bcout\\s*<<"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5];\n    for (int i = 0; i < 5; ++i) cin >> a[i];\n    for (int i = 0; i < 4; ++i) {\n        for (int j = 0; j < 4 - i; ++j) {\n            if (a[j] > a[j + 1]) {\n                int t = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = t;\n            }\n        }\n    }\n    for (int i = 0; i < 5; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
        "explanation": "每轮冒泡把当前未排序部分的最大值送到末尾，因此内层终点逐轮前移。",
        "commonMistakes": [
          "内层条件写成 j<5，访问 a[5] 越界。",
          "升序却用 a[j] < a[j+1] 交换。",
          "外层轮数不足，数组没有完全有序。"
        ],
        "sampleInput": "5 3 8 1 2\n",
        "expectedOutput": "1 2 3 5 8"
      },
      "masteryHint": "能分别写出选择排序和冒泡排序，并说明各自交换次数的特点。"
    },
    {
      "id": "l4-insert-delete",
      "lessonId": "lesson4",
      "title": "有序数组插入与数组删除",
      "tags": [
        "插入",
        "删除",
        "元素移动",
        "有效长度"
      ],
      "overview": "在数组中插入元素要先把插入位置及其后的元素整体后移；删除元素要把删除位置后的元素整体前移。移动方向错误会覆盖尚未保存的数据。",
      "keyPoints": [
        "有序插入先找到第一个大于新值的位置。",
        "插入时从最后一个有效元素开始向前移动。",
        "删除时从删除位置开始用后一个元素覆盖当前元素。",
        "数组容量固定，逻辑删除后有效元素数量减 1。",
        "插入前必须保证数组仍有空余空间。"
      ],
      "pitfalls": [
        "插入时从前向后移动，覆盖后续元素。",
        "删除时忘记将有效长度减 1。",
        "插入位置在数组末尾时没有单独考虑。",
        "数组已满仍执行插入，造成越界。"
      ],
      "exercise": {
        "prompt": "数组前 5 个元素为 1 2 3 4 5，删除第一个值为 3 的元素，输出删除后的有效元素。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6] = {1, 2, 3, 4, 5, 0};\n    int n = 5;\n    // 删除 3 并输出\n    return 0;\n}",
        "hint": "先查找位置，再用 a[i]=a[i+1] 前移，最后减少有效长度。",
        "checks": [
          {
            "label": "查找目标元素",
            "pattern": "a\\s*\\[\\s*\\w+\\s*\\]\\s*(?:==|!=)\\s*3|3\\s*(?:==|!=)\\s*a\\s*\\["
          },
          {
            "label": "元素向前移动",
            "pattern": "a\\s*\\[\\s*\\w+\\s*\\]\\s*=\\s*a\\s*\\[\\s*\\w+\\s*\\+\\s*1\\s*\\]"
          },
          {
            "label": "减少有效长度",
            "pattern": "(--\\s*n|n\\s*--|n\\s*-=\\s*1)"
          },
          {
            "label": "只输出有效元素",
            "pattern": "\\bfor\\s*\\([^;]*;\\s*\\w+\\s*<\\s*n"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6] = {1, 2, 3, 4, 5, 0};\n    int n = 5;\n    int pos = 0;\n    while (pos < n && a[pos] != 3) ++pos;\n    if (pos < n) {\n        for (int i = pos; i < n - 1; ++i) a[i] = a[i + 1];\n        --n;\n    }\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
        "explanation": "删除不是真正释放内存，而是用后续元素覆盖并缩短逻辑有效长度。",
        "commonMistakes": [
          "移动循环写到 i<n，最后一次访问 a[n] 越界。",
          "找到后立即改变 n，导致后续元素没有移动。",
          "删除后仍输出 n 个元素，末尾残留旧值。"
        ]
      },
      "masteryHint": "能根据移动方向判断循环边界，并区分数组容量与有效长度。"
    },
    {
      "id": "l4-binary-search",
      "lessonId": "lesson4",
      "title": "二分查找",
      "tags": [
        "二分查找",
        "有序数组",
        "low",
        "high",
        "mid"
      ],
      "overview": "二分查找只适用于有序数组。每次比较中间元素，根据大小关系舍弃一半区间，直到找到目标或区间为空。",
      "keyPoints": [
        "初始 low=0，high=N-1。",
        "中间下标可写 mid=(low+high)/2。",
        "目标更大时 low=mid+1，目标更小时 high=mid-1。",
        "循环条件通常是 low<=high。",
        "low>high 表示查找失败。"
      ],
      "pitfalls": [
        "在无序数组上使用二分查找。",
        "更新边界写成 low=mid，造成死循环。",
        "循环条件写成 low<high，漏查最后一个元素。",
        "每次比较后未重新计算 mid。"
      ],
      "exercise": {
        "prompt": "有序数组为 {1,3,5,7,9,11,13}，使用二分查找目标 7，输出其下标；找不到输出 -1。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[7] = {1, 3, 5, 7, 9, 11, 13};\n    int target = 7;\n    // 二分查找\n    return 0;\n}",
        "hint": "维护 low 和 high，循环内先计算 mid，再按三种关系更新区间。",
        "checks": [
          {
            "label": "初始化 low 和 high",
            "pattern": "\\blow\\s*=\\s*0[\\s\\S]*\\bhigh\\s*=\\s*6|\\bhigh\\s*=\\s*6[\\s\\S]*\\blow\\s*=\\s*0"
          },
          {
            "label": "使用 low<=high",
            "pattern": "\\blow\\s*<=\\s*high\\b"
          },
          {
            "label": "计算中间下标",
            "pattern": "\\bmid\\s*=\\s*\\(\\s*low\\s*\\+\\s*high\\s*\\)\\s*\\/\\s*2"
          },
          {
            "label": "更新查找边界",
            "pattern": "low\\s*=\\s*mid\\s*\\+\\s*1[\\s\\S]*high\\s*=\\s*mid\\s*-\\s*1|high\\s*=\\s*mid\\s*-\\s*1[\\s\\S]*low\\s*=\\s*mid\\s*\\+\\s*1"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[7] = {1, 3, 5, 7, 9, 11, 13};\n    int target = 7, low = 0, high = 6, ans = -1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    cout << ans << endl;\n    return 0;\n}",
        "explanation": "目标 7 在下标 3；若目标不存在，循环最终使 low>high，ans 保持 -1。",
        "commonMistakes": [
          "更新为 low=mid 或 high=mid，导致边界不缩小。",
          "没有把 ans 初始化为 -1。",
          "用未排序数组测试二分查找。"
        ]
      },
      "masteryHint": "能画出每次区间变化，并解释为什么时间复杂度为 O(log n)。"
    },
    {
      "id": "l4-2d-array",
      "lessonId": "lesson4",
      "title": "二维数组与矩阵",
      "tags": [
        "二维数组",
        "矩阵",
        "行下标",
        "列下标"
      ],
      "overview": "二维数组可理解为按行排列的表格，访问形式为 a[i][j]。遍历二维数组通常用双重循环，外层控制行，内层控制列。",
      "keyPoints": [
        "定义形式为 类型 数组名[行数][列数]。",
        "行、列下标都从 0 开始。",
        "按行初始化可写成 {{1,2},{3,4}}。",
        "省略第一维长度时必须给出列数。",
        "矩阵转置满足 b[j][i]=a[i][j]；方阵原地转置只遍历主对角线一侧。"
      ],
      "pitfalls": [
        "写成 a[行,列] 而不是两个独立方括号。",
        "只省略列数，编译器无法确定每一行长度。",
        "原地转置遍历整个矩阵，导致交换两次恢复原样。",
        "遍历边界写成 <=行数，造成越界。"
      ],
      "exercise": {
        "prompt": "读取 4 个整数放入 2×2 二维数组，输出它的转置矩阵，每行两个数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][2], b[2][2];\n    // 读入并转置\n    return 0;\n}",
        "hint": "用双重循环读入；再用 b[j][i]=a[i][j] 生成转置。",
        "checks": [
          {
            "label": "使用双重循环读入",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\([\\s\\S]*\\bcin\\s*>>\\s*a\\s*\\["
          },
          {
            "label": "行列互换赋值",
            "pattern": "b\\s*\\[\\s*j\\s*\\]\\s*\\[\\s*i\\s*\\]\\s*=\\s*a\\s*\\[\\s*i\\s*\\]\\s*\\[\\s*j\\s*\\]"
          },
          {
            "label": "按行输出换行",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bcout\\s*<<[\\s\\S]*\\bendl"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][2], b[2][2];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 2; ++j)\n            cin >> a[i][j];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 2; ++j)\n            b[j][i] = a[i][j];\n    for (int i = 0; i < 2; ++i) {\n        for (int j = 0; j < 2; ++j) cout << b[i][j] << ' ';\n        cout << endl;\n    }\n    return 0;\n}",
        "explanation": "读入时按 a[i][j]，写入 b 时交换两个下标。",
        "commonMistakes": [
          "把 cin 写进错误的花括号层级。",
          "转置时仍写 b[i][j]=a[i][j]。",
          "所有元素输出在同一行。"
        ]
      },
      "masteryHint": "能说明二维数组的存储与访问方式，并独立完成转置。"
    },
    {
      "id": "l4-c-strings",
      "lessonId": "lesson4",
      "title": "字符数组与字符串结束符",
      "tags": [
        "字符数组",
        "字符串",
        "\\0",
        "长度"
      ],
      "overview": "C 风格字符串以字符数组保存，并以 '\\0' 作为结束标志。字符串长度不包含 '\\0'，但数组必须为它预留空间。",
      "keyPoints": [
        "char s[]=\"abc\" 实际包含 a、b、c、'\\0' 四个字符。",
        "逐个字符初始化不自动添加 '\\0'，除非显式写出。",
        "cout << 字符数组名 会从首字符输出到 '\\0'。",
        "字符串处理循环通常以 s[i]!='\\0' 为终止条件。",
        "数组名是常量，不能执行 s=\"hello\" 这种整体赋值。"
      ],
      "pitfalls": [
        "只分配 n 个字符却试图保存长度为 n 的字符串，漏掉 '\\0'。",
        "用字符 '\\0' 和数字 0 的概念混为一谈。",
        "遍历时只看数组容量，不按实际字符串结束位置。",
        "把字符串字面量与字符字面量的引号混用。"
      ],
      "exercise": {
        "prompt": "使用 getline 读取一整行字符串，统计并输出其中非空字符的实际长度，不调用 strlen。",
        "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    // 统计到 \\0 为止\n    return 0;\n}",
        "hint": "用一个整数下标或字符指针，从首字符开始移动到 '\\0'。",
        "checks": [
          {
            "label": "使用字符数组",
            "pattern": "\\bchar\\s+\\w+\\s*\\["
          },
          {
            "label": "读取一整行",
            "pattern": "\\bcin\\s*\\.\\s*getline\\s*\\(|\\bgetline\\s*\\("
          },
          {
            "label": "判断字符串结束符",
            "pattern": "'\\\\0'|\\\"\\\\0\\\""
          },
          {
            "label": "循环统计长度",
            "pattern": "\\bwhile\\s*\\([\\s\\S]*\\+\\+|\\bfor\\s*\\("
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    int length = 0;\n    while (s[length] != '\\0') ++length;\n    cout << length << endl;\n    return 0;\n}",
        "explanation": "getline 能读入空格，'\\0' 标记字符串结束，循环在结束符处停止。",
        "commonMistakes": [
          "用 cin>>s，导致空格后的内容没有被读入。",
          "数组只开 5 个位置却保存 China，漏掉结束符空间。",
          "把长度统计到数组容量 200。"
        ]
      },
      "masteryHint": "能解释字符数组和字符串的差别，并始终为 '\\0' 预留空间。"
    },
    {
      "id": "l4-string-functions",
      "lessonId": "lesson4",
      "title": "常用 C 字符串函数",
      "tags": [
        "strlen",
        "strcpy",
        "strcat",
        "strcmp"
      ],
      "overview": "C 风格字符串常用 strlen 求长度、strcpy 复制、strcat 连接、strcmp 比较。它们处理的是字符指针指向的以 '\\0' 结束的序列。",
      "keyPoints": [
        "strlen 返回结束符之前的字符数。",
        "strcpy 会把源字符串连同 '\\0' 一起复制。",
        "strcat 把源串追加到目标串末尾，目标数组必须有足够空间。",
        "strcmp 返回 0 表示内容相同，返回值正负表示字典顺序。",
        "目标字符数组不能是字符串字面量，必须有可写空间。"
      ],
      "pitfalls": [
        "用 == 直接比较两个字符数组内容。",
        "目标数组容量不足，造成越界。",
        "把 strcmp 的布尔结果直接当作“相等为真”。",
        "对字符串字面量执行 strcpy 或 strcat 写入。"
      ],
      "exercise": {
        "prompt": "读取两个不含空格的单词，使用 strcmp 比较；相同输出 same，不同输出 different。",
        "starter": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[100], b[100];\n    cin >> a >> b;\n    // 使用 strcmp 比较\n    return 0;\n}",
        "hint": "strcmp(a,b)==0 才表示内容完全相同。",
        "checks": [
          {
            "label": "包含 cstring 头文件",
            "pattern": "#\\s*include\\s*<\\s*cstring\\s*>"
          },
          {
            "label": "使用 strcmp",
            "pattern": "\\bstrcmp\\s*\\("
          },
          {
            "label": "与 0 比较",
            "pattern": "strcmp\\s*\\([^;]+\\)\\s*==\\s*0"
          },
          {
            "label": "分别输出 same 和 different",
            "pattern": "\"same\"[\\s\\S]*\"different\""
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[100], b[100];\n    cin >> a >> b;\n    if (strcmp(a, b) == 0) cout << \"same\" << endl;\n    else cout << \"different\" << endl;\n    return 0;\n}",
        "explanation": "strcmp 返回 0 表示两串逐字符相同。比较结果不要与数组地址混淆。",
        "commonMistakes": [
          "写成 if(a==b)，实际比较两个地址。",
          "写成 if(strcmp(a,b))，条件含义正好相反。",
          "数组太小，输入时越界。"
        ]
      },
      "masteryHint": "能正确区分字符数组内容比较与地址比较，并检查目标缓冲区容量。"
    },
    {
      "id": "l4-manual-copy-concat",
      "lessonId": "lesson4",
      "title": "手写字符串复制、连接与结束符",
      "tags": [
        "字符串复制",
        "字符串连接",
        "\\0",
        "手写算法"
      ],
      "overview": "C 风格字符串以 '\\0' 结束。手写复制和连接时，循环条件要检查源串结束符，完成后再主动补上 '\\0'。",
      "keyPoints": [
        "复制循环 while(src[i]!='\\0') 依次复制非结束字符。",
        "复制完成后必须写 dest[i]='\\0'。",
        "连接时先找到第一个串的末尾。",
        "从第一个串末尾开始追加第二个串。",
        "目标数组必须有足够空间。"
      ],
      "pitfalls": [
        "忘记补 '\\0'，输出会越界读取。",
        "连接时覆盖第一个串原有的结束符位置。",
        "用长度循环处理可能没有结束符的字符数组。",
        "目标数组空间不足。"
      ],
      "exercise": {
        "prompt": "读取两个不含空格的单词，不用 strcpy/strcat，手写复制和连接，输出连接后的字符串。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char a[50], b[50], result[100];\n    cin >> a >> b;\n    // 手写复制和连接\n    cout << result << endl;\n    return 0;\n}",
        "sampleInput": "abc de",
        "expectedOutput": "abcde",
        "hint": "先把 a 复制到 result，再找到 result 的末尾追加 b。",
        "checks": [
          {
            "label": "手写复制 a",
            "pattern": "\\bresult\\s*\\[[^\\]]+\\]\\s*=\\s*a\\s*\\["
          },
          {
            "label": "检查结束符",
            "pattern": "'\\s*\\\\0\\s*'"
          },
          {
            "label": "追加 b",
            "pattern": "\\bresult\\s*\\[[^\\]]+\\]\\s*=\\s*b\\s*\\["
          },
          {
            "label": "没有直接使用 strcat",
            "pattern": "^(?![\\s\\S]*\\bstrcat\\s*\\()[\\s\\S]*$"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char a[50], b[50], result[100];\n    cin >> a >> b;\n    int i = 0;\n    while (a[i] != '\\0') {\n        result[i] = a[i];\n        ++i;\n    }\n    int j = 0;\n    while (b[j] != '\\0') {\n        result[i] = b[j];\n        ++i;\n        ++j;\n    }\n    result[i] = '\\0';\n    cout << result << endl;\n    return 0;\n}",
        "explanation": "第一个循环复制 a；第二个循环从当前 i 开始追加 b；最后补结束符。",
        "commonMistakes": [
          "连接前没有找到第一个串的末尾。",
          "最后忘记写 result[i]='\\0'。",
          "目标数组长度不足。"
        ]
      },
      "masteryHint": "能手写字符串复制与连接，并保证目标串以 '\\0' 结束。",
      "sourcePages": [
        19,
        24,
        25,
        46
      ]
    },
    {
      "id": "l4-manual-compare-case",
      "lessonId": "lesson4",
      "title": "手写字符串比较与大小写转换",
      "tags": [
        "字符串比较",
        "ASCII",
        "大小写转换",
        "手写算法"
      ],
      "overview": "字符串比较从左到右逐字符比较，遇到不同字符或结束符即停止。大小写转换利用对应字母 ASCII 码相差 32 的规律。",
      "keyPoints": [
        "比较时先找第一对不同字符。",
        "若两串同时结束，则内容相同。",
        "strcmp 返回 0 表示相等，返回正负表示先后。",
        "大写字母 'A' 到 'Z' 加 32 可转小写。",
        "小写字母 'a' 到 'z' 减 32 可转大写。"
      ],
      "pitfalls": [
        "比较前先修改了原字符串，导致无法判断是否相等。",
        "大小写转换没有检查字符范围。",
        "把字符差值 32 记反。",
        "只比较长度不比较内容。"
      ],
      "exercise": {
        "prompt": "读取一个小写单词，将其手写转换为大写；若结果等于 PASS 输出 PASS same，否则输出转换结果 different。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[50];\n    cin >> s;\n    // 手写转大写并比较\n    return 0;\n}",
        "sampleInput": "pass",
        "expectedOutput": "PASS same",
        "hint": "遍历到 '\\0'，对 'a' 到 'z' 的字符减 32；然后逐字符与 PASS 比较。",
        "checks": [
          {
            "label": "遍历字符数组",
            "pattern": "\\bwhile\\s*\\(\\s*s\\s*\\[[\\s\\S]*\\\\0"
          },
          {
            "label": "判断小写字母",
            "pattern": "'a'[\\s\\S]*'z'"
          },
          {
            "label": "减 32 转为大写",
            "pattern": "-=\\s*32|-\\s*32"
          },
          {
            "label": "逐字符比较 PASS",
            "pattern": "\"PASS\"[\\s\\S]*\\bs\\s*\\[[^\\]]+\\]\\s*==\\s*key\\s*\\["
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[50];\n    cin >> s;\n    int i = 0;\n    while (s[i] != '\\0') {\n        if (s[i] >= 'a' && s[i] <= 'z') s[i] -= 32;\n        ++i;\n    }\n    const char key[] = \"PASS\";\n    i = 0;\n    while (s[i] == key[i] && s[i] != '\\0') ++i;\n    cout << s << ' ' << (s[i] == '\\0' && key[i] == '\\0' ? \"same\" : \"different\") << endl;\n    return 0;\n}",
        "explanation": "先把小写字母转成大写，再按逐字符方式与 PASS 比较。",
        "commonMistakes": [
          "把所有字符都减 32，包括非小写字母。",
          "直接用 strlen 判断相等。",
          "忘记补结束符或比较到结束符后继续越界。"
        ]
      },
      "masteryHint": "能手写字符串比较和大小写转换，并正确处理结束符。",
      "sourcePages": [
        25,
        27,
        28,
        29,
        46
      ]
    },
    {
      "id": "l4-char-frequency",
      "lessonId": "lesson4",
      "title": "字符频率统计与编码下标映射",
      "tags": [
        "频率统计",
        "字符编码",
        "数组下标",
        "s[i]-'a'"
      ],
      "overview": "字符频率统计用数组保存每个字符出现次数。字符编码连续时，可用 ch-'a' 把字母映射到 0 到 25 的数组下标。",
      "keyPoints": [
        "统计数组应先全部初始化为 0。",
        "p[ch-'a'] 可直接访问该小写字母的计数位置。",
        "只有确认 ch 在 'a' 到 'z' 范围内才能使用该映射。",
        "遍历到 '\\0' 即停止。",
        "编码映射也常用于单词计分和字母表转换。"
      ],
      "pitfalls": [
        "数组没有初始化，计数从随机值开始。",
        "下标写成 ch-'A'，大小写范围不匹配。",
        "统计非字母字符导致越界。",
        "循环条件使用固定长度而不是 '\\0'。"
      ],
      "exercise": {
        "prompt": "读取一个小写单词和一个目标字母，统计目标字母出现次数并输出“目标字母 次数”。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100], target;\n    cin >> s >> target;\n    int count = 0;\n    // 完成字符频率统计\n    cout << target << ' ' << count << endl;\n    return 0;\n}",
        "sampleInput": "banana a",
        "expectedOutput": "a 3",
        "hint": "可直接判断 s[i]==target，也可用频率数组 target-'a' 对应位置。",
        "checks": [
          {
            "label": "遍历到结束符",
            "pattern": "\\bs\\s*\\[[^\\]]+\\]\\s*!=\\s*'\\s*\\\\0\\s*'"
          },
          {
            "label": "比较目标字符",
            "pattern": "\\bs\\s*\\[[^\\]]+\\]\\s*==\\s*target"
          },
          {
            "label": "累加次数",
            "pattern": "\\+\\+\\s*count|\\bcount\\s*\\+=\\s*1"
          },
          {
            "label": "输出目标与次数",
            "pattern": "\\bcout\\s*<<\\s*target[\\s\\S]*<<\\s*count"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100], target;\n    cin >> s >> target;\n    int count = 0;\n    for (int i = 0; s[i] != '\\0'; ++i) {\n        if (s[i] == target) ++count;\n    }\n    cout << target << ' ' << count << endl;\n    return 0;\n}",
        "explanation": "样例 banana 中字母 a 出现 3 次。",
        "commonMistakes": [
          "使用固定长度遍历到数组末尾。",
          "比较时使用 = 而不是 ==。",
          "把目标字符和字符串整体比较。"
        ]
      },
      "masteryHint": "能用字符编码映射统计字母频率，并避免下标越界。",
      "sourcePages": [
        25,
        30,
        46
      ]
    },
    {
      "id": "l4-matrix-multiply",
      "lessonId": "lesson4",
      "title": "二维数组矩阵乘法与三重循环",
      "tags": [
        "二维数组",
        "矩阵乘法",
        "三重循环",
        "累加"
      ],
      "overview": "矩阵乘法 C=A×B 时，C[i][j] 等于 A 第 i 行与 B 第 j 列对应元素乘积之和。每个 C 元素都要重新清零后累加。",
      "keyPoints": [
        "A 的列数必须等于 B 的行数。",
        "结果 C 的行数等于 A 的行数，列数等于 B 的列数。",
        "外层枚举 i、j，内层枚举 k 做点积。",
        "计算每个 C[i][j] 前都要把 s 置 0。",
        "输出按行换行。"
      ],
      "pitfalls": [
        "s 只在程序开始时清零一次。",
        "k 的循环范围写成列数或行数错误。",
        "把 A[i][k]*B[k][j] 写成 A[i][k]*B[j][k]。",
        "输出维度顺序错误。"
      ],
      "exercise": {
        "prompt": "读取 A(2×3) 和 B(3×2) 共 12 个整数，输出它们的 2×2 乘积矩阵，每行两个整数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][3], b[3][2], c[2][2];\n    // 读入 A 和 B，计算并输出 C\n    return 0;\n}",
        "sampleInput": "1 2 3 4 5 6 7 8 9 10 11 12",
        "expectedOutput": "58 64\n139 154",
        "hint": "对每个 i、j，s=0，再对 k=0..2 累加 a[i][k]*b[k][j]。",
        "checks": [
          {
            "label": "使用三重循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\("
          },
          {
            "label": "结果元素先清零",
            "pattern": "\\bs\\s*=\\s*0\\b"
          },
          {
            "label": "累加矩阵乘积",
            "pattern": "\\bs\\s*\\+=\\s*a\\s*\\[[\\s\\S]*\\*\\s*b\\s*\\["
          },
          {
            "label": "保存到 c[i][j]",
            "pattern": "\\bc\\s*\\[\\s*i\\s*\\]\\s*\\[\\s*j\\s*\\]\\s*=\\s*s"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][3], b[3][2], c[2][2];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 3; ++j) cin >> a[i][j];\n    for (int i = 0; i < 3; ++i)\n        for (int j = 0; j < 2; ++j) cin >> b[i][j];\n\n    for (int i = 0; i < 2; ++i) {\n        for (int j = 0; j < 2; ++j) {\n            int s = 0;\n            for (int k = 0; k < 3; ++k) s += a[i][k] * b[k][j];\n            c[i][j] = s;\n        }\n    }\n    for (int i = 0; i < 2; ++i) {\n        cout << c[i][0] << ' ' << c[i][1] << endl;\n    }\n    return 0;\n}",
        "explanation": "C[0][0]=1*7+2*9+3*11=58，其余元素同理。",
        "commonMistakes": [
          "s 没有在每个结果元素前清零。",
          "内层 k 只循环到 1。",
          "B 的索引顺序写反。"
        ]
      },
      "masteryHint": "能根据矩阵维度写出正确的三重循环和点积累加。",
      "sourcePages": [
        17,
        18
      ]
    },
    {
      "id": "l4-floyd",
      "lessonId": "lesson4",
      "title": "二维数组存储图与 Floyd 最短路",
      "tags": [
        "二维数组",
        "Floyd",
        "最短路径",
        "INF"
      ],
      "overview": "邻接矩阵用二维数组表示点与点之间的直接距离。Floyd 算法依次允许每个点作为中转点，不断更新任意两点间的最短距离。",
      "keyPoints": [
        "e[i][j] 表示从 i 到 j 的当前最短距离。",
        "对角线距离为 0，不可达用足够大的 INF 表示。",
        "Floyd 的最外层必须是中转点 k。",
        "更新条件为 e[i][j] > e[i][k] + e[k][j]。",
        "INF 要足够大，且相加时避免溢出。"
      ],
      "pitfalls": [
        "把 i、j 放在最外层，k 放内层。",
        "未初始化对角线和不可达边。",
        "INF 取太小，被错误当成普通路径。",
        "把双向图与单向图的赋值混淆。"
      ],
      "exercise": {
        "prompt": "读取 3×3 的邻接矩阵，-1 表示不可达，对角线为 0。用 Floyd 算法求所有点对最短距离，不可达仍输出 -1。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int e[3][3];\n    // 读入矩阵、执行 Floyd、输出结果\n    return 0;\n}",
        "sampleInput": "0 2 -1 -1 0 3 10 -1 0",
        "expectedOutput": "0 2 5\n13 0 3\n10 12 0",
        "hint": "先把 -1 换成 INF，再做 Floyd；输出前把 INF 换回 -1。",
        "checks": [
          {
            "label": "使用 INF 表示不可达",
            "pattern": "\\bINF\\b"
          },
          {
            "label": "Floyd 外层为中转点 k",
            "pattern": "\\bfor\\s*\\([^)]*\\bk\\b[\\s\\S]*\\bfor\\s*\\([^)]*\\bi\\b[\\s\\S]*\\bfor\\s*\\([^)]*\\bj\\b"
          },
          {
            "label": "比较经过 k 的路径",
            "pattern": "e\\s*\\[\\s*i\\s*\\]\\s*\\[\\s*k\\s*\\]\\s*\\+\\s*e\\s*\\[\\s*k\\s*\\]\\s*\\[\\s*j\\s*\\]"
          },
          {
            "label": "更新 e[i][j]",
            "pattern": "e\\s*\\[\\s*i\\s*\\]\\s*\\[\\s*j\\s*\\]\\s*="
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const int INF = 100000000;\n    int e[3][3];\n    for (int i = 0; i < 3; ++i)\n        for (int j = 0; j < 3; ++j) {\n            cin >> e[i][j];\n            if (e[i][j] == -1) e[i][j] = INF;\n        }\n    for (int k = 0; k < 3; ++k)\n        for (int i = 0; i < 3; ++i)\n            for (int j = 0; j < 3; ++j)\n                if (e[i][k] + e[k][j] < e[i][j])\n                    e[i][j] = e[i][k] + e[k][j];\n    for (int i = 0; i < 3; ++i) {\n        for (int j = 0; j < 3; ++j) {\n            if (j) cout << ' ';\n            cout << (e[i][j] >= INF / 2 ? -1 : e[i][j]);\n        }\n        cout << endl;\n    }\n    return 0;\n}",
        "explanation": "样例中 0 到 2 可经 1 中转，距离由不可达变为 5；2 到 1 经 0 中转得到 12。",
        "commonMistakes": [
          "最外层使用 i 而不是 k。",
          "输出前没有把 INF 转回 -1。",
          "读取 -1 后直接参与加法。"
        ]
      },
      "masteryHint": "能正确用邻接矩阵存储图，并写出 Floyd 的三重循环顺序。",
      "sourcePages": [
        34,
        35,
        36,
        37,
        38
      ]
    },
    {
      "id": "l5-ex5-1",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.1 指针运算示例（交换指针）",
      "tags": [
        "课件例题",
        "指针",
        "交换"
      ],
      "overview": "p1 指向 a、p2 指向 b。交换 p1、p2 的值后，p1 指向 b、p2 指向 a，但 a、b 本身的值没有变。",
      "keyPoints": [
        "int *p1=&a 表示 p1 存放 a 的地址。",
        "*p1 是 p1 所指变量的值。",
        "p=p1;p1=p2;p2=p; 交换的是两个指针的指向，不是 a、b 的内容。",
        "交换指针后，*p1 输出 b 的值，*p2 输出 a 的值。"
      ],
      "pitfalls": [
        "以为交换指针就交换了 a、b。",
        "把 *p1 写成 p1，输出的是地址。",
        "指针没有初始化就使用。"
      ],
      "example": {
        "title": "例5.1 指针运算示例（交换指针）",
        "source": "课件 lesson5 · P8",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\nint a,b,*p1=&a,*p2=&b,*p;\ncin>>a>>b;\ncout<<*p1<<\" \"<<*p2<<endl;\ncout<<a<<\" \"<<b<<endl;\np=p1;p1=p2;p2=p;\ncout<<*p1<<\" \"<<*p2<<endl;\ncout<<a<<\" \"<<b<<endl;\nsystem(\"pause\"); \nreturn 0;\n}",
        "output": "输入 3 4：\n3 4\n3 4\n4 3\n3 4",
        "explanation": "前三行输出说明交换前 p1→a、p2→b；交换后 p1→b、p2→a，所以 *p1、*p2 变成 4、3；最后一行再次输出 a、b，仍然是 3、4，证明交换的只是指针的指向。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "p1 初始化为 &a，p2 初始化为 &b；p 是交换用的临时指针。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "输出 p1、p2 所指变量的值，即 a、b。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "三条赋值交换两个指针的指向，a、b 的存储内容不变。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "交换后 p1 指向 b、p2 指向 a，所以输出 4 3。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "再次输出 a、b，仍然是 3 4。"
          }
        ]
      },
      "masteryHint": "能画出交换前后 p1、p2 的指向，并说明 a、b 为什么不变。",
      "sourcePages": [
        8
      ]
    },
    {
      "id": "l5-ex5-2",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.2 指针访问数组（课件中的越界示例）",
      "tags": [
        "课件例题",
        "指针",
        "数组",
        "越界"
      ],
      "overview": "第一个循环用 *p++ 读入 10 个数，循环结束后 p 已经指向 a+10；第二个循环没有把 p 重新置回 a，直接从越界位置输出。",
      "keyPoints": [
        "*p++ 等价于 *(p++)：先取 *p，再让 p 后移。",
        "第一个循环结束后 p 指向数组末尾之后，不再指向 a[0]。",
        "第二个循环 for(i=0;i<10;i++,p++) 从 p 的当前位置继续，越界。",
        "正确做法是在第二个循环前加 p=a; 重置指针。"
      ],
      "pitfalls": [
        "以为 p++ 只移动一次，实际上循环 10 次移动了 10 次。",
        "忘记 p=a 重置。",
        "把 *p++ 与 (*p)++ 混淆。"
      ],
      "example": {
        "title": "例5.2 指针访问数组（课件中的越界示例）",
        "source": "课件 lesson5 · P15",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{\nint a[10], i, *p;\np = a;\nfor (i = 0; i<10; i++)\n    cin>>*p++;\nfor (i = 0; i<10; i++,p++)\n    cout<<*p;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "不能正确输出数组元素：第二个循环从 a+10 开始，越界",
        "explanation": "第一个循环每执行一次，p 都后移一位，10 次后 p==a+10。第二个循环没有把 p 重置为 a，仍然从 a+10 开始读，访问的是数组之外的内存，结果不可预测。课件用这个例子提醒：指针遍历后若要重新遍历，必须重新赋值 p=a。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "p 指向数组首元素 a[0]。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "*p 是当前元素，p++ 让 p 指向下一个；10 次后 p 越过了最后一个元素。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "这里没有 p=a，p 从 a+10 继续往后走。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "输出的是越界位置的值，不是 a[0]~a[9]。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "正确改法：在第二个循环前补一行 p=a;"
          }
        ]
      },
      "masteryHint": "能指出程序错在哪一行，并说出两种改法（重置 p 或用 a[i]）。",
      "sourcePages": [
        15
      ]
    },
    {
      "id": "l5-ex5-3",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.3 用指针逐字符输出并求字符串长度",
      "tags": [
        "课件例题",
        "字符指针",
        "指针相减"
      ],
      "overview": "p 从 s 开始，while(*p!='\\0') 逐字符输出并后移；循环结束时 p 指向结束符，p-s 就是字符个数。",
      "keyPoints": [
        "p=s 让 p 指向字符数组第一个元素。",
        "cout<<*p++ 先输出当前字符，再让 p 后移。",
        "循环结束时 p 指向 '\\0'，p-s 等于字符串长度。",
        "两个同类型指针相减，结果是它们之间能存放的元素个数。"
      ],
      "pitfalls": [
        "把 p-s 写成 s-p，得到负数。",
        "循环条件写成 *p!='0'，'0' 是字符 0，不是结束符。",
        "忘记 p=s 初始化。"
      ],
      "example": {
        "title": "例5.3 用指针逐字符输出并求字符串长度",
        "source": "课件 lesson5 · P22",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{  char s[80],*p;\ngets(s);\np=s;                                      \n    cout<<\"输出每个字符：\";\nwhile(*p!='\\0')\n    cout<<*p++<< \" \";     //指针下移，直到p指向字符串结束符        \n    cout<<\"\\n 字符串长度 : \"<< p-s <<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 China 时输出 C h i n a，长度为 5",
        "explanation": "p 从 s[0] 开始，每次输出 *p 后 p 后移一位。遇到 '\\0' 时循环停止，此时 p 指向结束符，p 与 s 之间隔了 5 个字符，所以 p-s=5。指针相减不是地址差，而是地址差除以元素大小后的元素个数。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "字符数组存放字符串，p 是工作指针。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "p 指向数组首元素，不能省。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "当前字符不是结束符就继续。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "先输出 *p，再 p++；每个字符后跟一个空格。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "循环结束时 p 指向 '\\0'，p-s 正好是字符个数。"
          }
        ]
      },
      "masteryHint": "能解释 p-s 为什么等于字符串长度，以及它与地址差的区别。",
      "sourcePages": [
        22
      ]
    },
    {
      "id": "l5-ex5-4",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.4 对4个字符串按字典序排序",
      "tags": [
        "课件例题",
        "字符指针数组",
        "strcmp",
        "选择排序"
      ],
      "overview": "用 char *score[] 存放 4 个字符串常量的地址，用 strcmp 比较，交换的是指针的指向，不是字符串内容。",
      "keyPoints": [
        "char *score[] 是指针数组，每个元素指向一个字符串常量。",
        "strcmp(score[k],score[j])>0 表示 score[k] 字典序更大。",
        "交换时只交换 score[i] 与 score[k] 两个指针。",
        "排序算法与选择排序相同。"
      ],
      "pitfalls": [
        "试图用 strcpy 交换字符串常量，字符串常量不能修改。",
        "把 strcmp 的返回值当布尔值直接判断大小。",
        "指针数组与二维字符数组混淆。"
      ],
      "example": {
        "title": "例5.4 对4个字符串按字典序排序",
        "source": "课件 lesson5 · P24",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{  char *score[]={\"Fortran\",\"C/c++\",\"Pascal\",\"Basic\"},*p;\nint i,j,k;\nfor(i=0;i<3;i++)\n{  k=i;\n   for(j=i+1;j<4;j++)\n       if(strcmp(score[k],score[j])>0) k=j;\n   if(i!=k) { p=score[i];score[i]=score[k]; score[k]=p;}\n}\nfor(i=0;i<4;i++)\n    cout<<score[i]<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "Basic\nC/c++\nFortran\nPascal",
        "explanation": "每个字符串常量在内存中连续存放，score[i] 保存它的首地址。strcmp 按 ASCII 逐个比较，返回正数说明前一个更大。交换 p=score[i] 只是让数组元素指向另一个字符串，原字符串本身没有移动。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "指针数组，每个元素指向一个字符串常量的首地址。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "字典序比较，返回正数说明 score[k] 应排在后面。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "记录当前最小字符串的下标。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "交换两个指针的指向，不复制字符串内容。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "按排好的指针顺序输出字符串。"
          }
        ]
      },
      "masteryHint": "能说明为什么交换指针就能排序，以及为什么不能 strcpy 字符串常量。",
      "sourcePages": [
        24
      ]
    },
    {
      "id": "l5-ex5-5",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.5 字母在前、数字在后且保持原顺序",
      "tags": [
        "课件例题",
        "指针",
        "字符串拆分",
        "strcat"
      ],
      "overview": "用 p 遍历原串，p1 收集字母、p2 收集数字，最后分别补 '\\0'，再用 strcat 把数字串接到字母串后面。",
      "keyPoints": [
        "p1=s1、p2=s2 分别指向字母串和数字串的写入位置。",
        "字母用 *p1++=*p 写入并后移，数字用 *p2=*p; p2++ 写入。",
        "两个临时串末尾都必须补 '\\0'。",
        "strcat(s1,s2) 要求 s1 有足够空间。"
      ],
      "pitfalls": [
        "忘记给 s1、s2 补 '\\0'。",
        "strcat 的目标串空间不足。",
        "把字母和数字的收集顺序弄反。"
      ],
      "example": {
        "title": "例5.5 字母在前、数字在后且保持原顺序",
        "source": "课件 lesson5 · P25",
        "code": "#include <iostream>\nusing namespace std;\n#define N 30\nint main()\n{  char s[N],s1[N],s2[N],*p=s,*p1=s1,*p2=s2;\nint i(0),j(0);\ncout<<\"请输入字符串s：\"<<endl;\ncin>>s;\nwhile(*p!='\\0')\n{  if(*p>='0' && *p<='9' )\n   {\n       *p2=*p;     p2++;  }\n   else\n       *p1++=*p; \n   p++;\n}\n*p1='\\0';\n*p2='\\0';\nstrcat(s1,s2);\ncout<<\"重排后字符串为：\"<<s1<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 a1b2c3 时输出 abc123",
        "explanation": "p 顺序扫描原串，遇到数字写入 s2，遇到其它字符（本题只有字母）写入 s1。因为 p1、p2 都按原顺序后移，所以字母之间、数字之间的相对顺序不变。最后补结束符并用 strcat 合并。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "原串、字母串、数字串各一块空间。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "p1、p2 分别指向两个临时串的写入位置。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "数字字符写入 s2。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "先写入当前数字，再让 p2 后移。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "字母写入 s1，同时 p1 后移。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "字母串补结束符。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "数字串补结束符。"
          },
          {
            "section": 0,
            "line": 19,
            "text": "把数字串接到字母串后面；s1 必须足够大。"
          }
        ]
      },
      "masteryHint": "能说出 p1、p2 的作用，以及为什么结果能保持原顺序。",
      "sourcePages": [
        25
      ]
    },
    {
      "id": "l5-ex5-6",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.6 统计子串出现次数",
      "tags": [
        "课件例题",
        "子串",
        "strcmp",
        "指针"
      ],
      "overview": "从 s 的每个下标 i 开始，取出与 sub 等长的子串存入 s2，再用 strcmp 比较，相等则计数。",
      "keyPoints": [
        "外层 i 遍历 s 的每个起点。",
        "内层 j 把 s[i+j] 复制到 s2[j]，复制长度等于 sub 的长度。",
        "复制完必须 s2[j]='\\0'。",
        "strcmp(s2,sub)==0 表示找到一个匹配。"
      ],
      "pitfalls": [
        "内层循环条件写成 s[i+j]!='\\0'，长度不受 sub 控制。",
        "忘记补 s2 的结束符。",
        "外层循环在剩余长度不足 sub 时仍然比较，可能越界。"
      ],
      "example": {
        "title": "例5.6 统计子串出现次数",
        "source": "课件 lesson5 · P26",
        "code": "#include <iostream>\nusing namespace std;\n#define N 50\nint  main()\n{ char s[N],sub[N],s2[N];\nint i,j,count(0);\ncout<<\"请输入字符串：\"<<endl;\ngets(s);\ncout<<\"请输入子串：\"<<endl;\ngets(sub);\nfor(i=0;*(s+i)!='\\0';i++)\n{\n    for (j=0;*(sub+j)!='\\0' ;j++)        \n        *(s2+j)=*(s+i+j) ;\n    *(s2+j)='\\0';\n    if(strcmp(s2,sub)==0 ) \n        count++;\n}\nif(count==0)\n    cout<<\"子串未出现\"<<endl;\nelse\n    cout<<\"子串出现\"<<count<<\"次\"<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 ababa、aba 时输出：子串出现 2 次",
        "explanation": "以每个 i 为起点，连续取 strlen(sub) 个字符组成 s2，再与 sub 整体比较。这样能统计重叠出现，例如 ababa 中下标 0 和 2 各有一个 aba。复制完必须补 '\\0'，否则 strcmp 会读到旧内容。",
        "notes": [
          {
            "section": 0,
            "line": 11,
            "text": "i 是子串在 s 中的起始下标。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "j 控制复制的长度，正好等于 sub 的长度。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "把 s 从 i 开始的第 j 个字符复制到 s2。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "复制完补结束符，s2 才是合法字符串。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "相等返回 0，表示找到一个匹配。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "匹配计数加 1。"
          }
        ]
      },
      "masteryHint": "能解释为什么这种写法能统计重叠子串。",
      "sourcePages": [
        26
      ]
    },
    {
      "id": "l5-ex5-7",
      "lessonId": "lesson5",
      "kind": "example",
      "title": "例5.7 单词计分游戏",
      "tags": [
        "课件例题",
        "字符指针",
        "数组映射",
        "strupr"
      ],
      "overview": "把 26 个字母的点值存进数组 a，a[0] 对应 A、a[1] 对应 B……。对单词中每个字母，用 ch-'A' 作为下标取点数并累加。",
      "keyPoints": [
        "a[ch-'A'] 把字母映射到 0~25 的点值数组下标。",
        "strupr(str) 把字符串转成大写，便于不区分大小写。",
        "外层 while 处理多个单词，输入 \"#\" 时结束。",
        "内层 while(*q) 遍历当前单词的每个字符。"
      ],
      "pitfalls": [
        "下标写成 ch-'a' 但字符串没有转小写，导致越界或错位。",
        "忘记在读取下一个单词后重新 q=strupr(str)。",
        "把 strcmp(q,\"#\")!=0 写成 q!=\"#\"。"
      ],
      "example": {
        "title": "例5.7 单词计分游戏",
        "source": "课件 lesson5 · P27-P28",
        "code": "#include <iostream>\nusing namespace std;\n#define N 40\nint main()\n{  int a[]={1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10},k,score;\nchar str[N],*q;\ncout<<\"请输入单词：\"<<endl;\ncin>>str;\nq=strupr(str);//便于不区分大小写\nwhile( strcmp(q,\"#\")!=0 )\n{   score=0;\n    while(*q)\n    {\n        k=*q-'A';\n        score=score+ a[k] ;\n        q++;\n    }\n    cout<<\"得分\"<<score<<endl;\n    cin>>str;  //处理下一个单词\n    q=strupr(str);\n}\nsystem(\"pause\");    return 0;  }",
        "output": "输入 HELLO 时，H=4、E=1、L=1、L=1、O=1，得分 8",
        "explanation": "a 数组按 A~Z 的顺序存放每个字母的点值。strupr 把单词统一成大写后，任意字母 ch 的点值就是 a[ch-'A']。内层 while(*q) 等价于 while(*q!='\\0')，逐个字符累加；外层循环读下一个单词，直到输入 #。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "26 个点值，依次对应 A~Z。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "转成大写，保证后面统一用 ch-'A' 映射。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "输入 # 时结束；字符串比较必须用 strcmp。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "等价于 while(*q!='\\0')，遍历当前单词。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "把字母转换成 0~25 的下标。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "取出该字母的点值并累加。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "读入下一个单词后必须重新转换并重置 q。"
          }
        ],
        "blankHints": [
          "外层循环：strcmp(q,\"#\")!=0；点值累加：score=score+a[k]。"
        ]
      },
      "masteryHint": "能写出字母到数组下标的映射，并解释为什么要先转大写。",
      "sourcePages": [
        27
      ]
    },
    {
      "id": "l5-pointer-basics",
      "lessonId": "lesson5",
      "title": "地址、指针变量与解引用",
      "tags": [
        "指针",
        "地址",
        "&",
        "*",
        "间接访问"
      ],
      "overview": "指针变量保存地址。&x 取得 x 的地址，*p 根据 p 中保存的地址访问目标对象。指针类型决定它指向何种对象以及指针加减时移动多少字节。",
      "keyPoints": [
        "int *p; 定义指向 int 的指针变量。",
        "p=&x; 使 p 指向 x。",
        "*p 与 x 表示同一块存储中的数据。",
        "& 与 * 互为逆操作，*&x 等价于 x。",
        "指针定义中的 * 属于声明的一部分，不是变量名的一部分。"
      ],
      "pitfalls": [
        "定义后直接解引用未初始化的指针。",
        "把 &x 的地址值写成 *p=&x。",
        "认为 *p 取的是指针变量自身的地址。",
        "让 int* 指向 double 对象，类型不匹配。"
      ],
      "exercise": {
        "prompt": "定义 int 变量 x=42 和指向 x 的指针 p，通过 p 把 x 改为 99，再输出 x。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 定义变量与指针\n    return 0;\n}",
        "hint": "先写 int x=42; int *p=&x;，再对 *p 赋值。",
        "checks": [
          {
            "label": "定义 int 指针",
            "pattern": "\\bint\\s*\\*\\s*\\w+"
          },
          {
            "label": "用 &x 初始化指针",
            "pattern": "=\\s*&\\s*x"
          },
          {
            "label": "通过 *p 修改值",
            "pattern": "\\*\\s*p\\s*=\\s*99"
          },
          {
            "label": "输出 x",
            "pattern": "\\bcout\\s*<<\\s*x"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int *p = &x;\n    *p = 99;\n    cout << x << endl;\n    return 0;\n}",
        "explanation": "指针 p 指向 x，解引用后的 *p 是 x 的可修改别名。",
        "commonMistakes": [
          "写 p=42 而不是 *p=42。",
          "写 *p=&x，混淆地址和值。",
          "指针定义后没有初始化就解引用。"
        ]
      },
      "masteryHint": "能画图说明 p、&x、*p 三者关系。"
    },
    {
      "id": "l5-null-pointer",
      "lessonId": "lesson5",
      "title": "空指针、赋值与初始化",
      "tags": [
        "NULL",
        "NULL",
        "初始化",
        "指针赋值"
      ],
      "overview": "指针变量必须在使用前指向有效对象，或者明确设为空指针。现代 C++ 使用 NULL 表示不指向任何对象，解引用空指针属于严重错误。",
      "keyPoints": [
        "空指针可初始化为 NULL。",
        "同类型指针之间可以赋值，表示指向同一对象。",
        "不能把普通整数直接赋给指针变量。",
        "指针赋值改变的是“指向哪里”，解引用赋值改变的是“指向对象的值”。",
        "使用可能为空的指针前应先判断 p!=NULL。"
      ],
      "pitfalls": [
        "认为 p=NULL 会自动释放对象。",
        "对空指针执行 *p。",
        "用 delete 释放从未 new 的普通变量地址。",
        "混淆 p=&x 与 *p=x。"
      ],
      "exercise": {
        "prompt": "读取整数 value，让指针 p 指向它；只有 p 不为空时输出 *p。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int value;\n    cin >> value;\n    int *p = &value;\n    // 判空后输出\n    return 0;\n}",
        "hint": "判断 p != NULL 后再访问 *p。",
        "checks": [
          {
            "label": "定义并初始化指针",
            "pattern": "\\bint\\s*\\*\\s*p\\s*=\\s*&\\s*value"
          },
          {
            "label": "判断指针非空",
            "pattern": "p\\s*!=\\s*NULL|NULL\\s*!=\\s*p"
          },
          {
            "label": "通过指针输出",
            "pattern": "\\bcout\\s*<<\\s*\\*\\s*p"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int value;\n    cin >> value;\n    int *p = &value;\n    if (p != NULL) {\n        cout << *p << endl;\n    }\n    return 0;\n}",
        "explanation": "p 指向局部变量 value，只要 value 仍在作用域内，p 就保持有效。",
        "commonMistakes": [
          "把 if(p) 理解为判断 *p 是否为 0；它实际判断指针是否非空。",
          "把 NULL 当作普通数值 0 进行指针加减。",
          "返回局部变量地址，函数结束后指针悬空。"
        ]
      },
      "masteryHint": "能区分空指针、悬空指针和有效指针，并在解引用前检查有效性。"
    },
    {
      "id": "l5-pointer-arithmetic",
      "lessonId": "lesson5",
      "title": "指针加减与指针相减",
      "tags": [
        "指针运算",
        "p+1",
        "sizeof",
        "指针相减"
      ],
      "overview": "指针加 1 不是地址数值加 1 字节，而是移动到下一个同类型元素。两个同类型指针相减，结果是两者之间的元素个数。",
      "keyPoints": [
        "p+n 指向从 p 开始向后第 n 个同类型元素。",
        "地址变化量为 n*sizeof(*p)。",
        "p++ 使指针指向下一个元素。",
        "同数组内两个同类型指针可以相减，结果类型为 ptrdiff_t。",
        "指向不同数组的指针相减没有定义意义。"
      ],
      "pitfalls": [
        "以为 int* 加 1 只加 1 字节。",
        "让指针移出数组有效范围后再解引用。",
        "把两个指针相加。",
        "忽略指针相减得到的是元素个数，不是字节数。"
      ],
      "exercise": {
        "prompt": "定义数组 {10,20,30,40}，用指针 p 依次输出全部元素，并输出首尾两个元素之间的元素个数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4] = {10, 20, 30, 40};\n    // 使用指针遍历并计算间隔\n    return 0;\n}",
        "hint": "p 从 a 开始，循环到 a+4；间隔可用 (a+3)-a 或指针相减。",
        "checks": [
          {
            "label": "指针指向数组首元素",
            "pattern": "\\*\\s*p\\s*=\\s*a|\\*\\s*p\\s*=\\s*&\\s*a\\s*\\[\\s*0\\s*\\]"
          },
          {
            "label": "使用指针递增",
            "pattern": "\\*\\s*p\\s*\\+\\+|\\+\\+\\s*p|p\\s*\\+\\+\\s*;|p\\s*\\+=\\s*1"
          },
          {
            "label": "使用指针边界",
            "pattern": "p\\s*<\\s*a\\s*\\+\\s*4|a\\s*\\+\\s*4\\s*>\\s*p"
          },
          {
            "label": "计算指针差值",
            "pattern": "\\(\\s*a\\s*\\+\\s*3\\s*\\)\\s*-\\s*a|\\w+\\s*-\\s*a|a\\s*\\+\\s*3\\s*-\\s*a"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4] = {10, 20, 30, 40};\n    int *p = a;\n    while (p < a + 4) cout << *p++ << ' ';\n    cout << endl;\n    cout << (a + 3) - a << endl;\n    return 0;\n}",
        "explanation": "p 每次递增一个 int 元素；a+3 与 a 之间有 3 个元素间隔。",
        "commonMistakes": [
          "循环边界写 p<a+5，越界访问。",
          "把 *(p++) 写成 (*p)++，会修改元素值。",
          "把指针差值误认为字节差。"
        ]
      },
      "masteryHint": "能按元素而不是字节理解指针移动，并正确预测指针差值。"
    },
    {
      "id": "l5-pointer-array",
      "lessonId": "lesson5",
      "title": "指针与一维数组的等价访问",
      "tags": [
        "数组名",
        "首地址",
        "a+i",
        "p[i]"
      ],
      "overview": "数组名在大多数表达式中转换为首元素地址。若 p=a，则 p+i、a+i 指向第 i 个元素，*(p+i)、*(a+i)、a[i]、p[i] 都表示同一元素。",
      "keyPoints": [
        "p=a 等价于 p=&a[0]。",
        "a+i 指向下标 i 的元素。",
        "*(a+i) 等价于 a[i]。",
        "指针变量可以改变指向，数组名是地址常量不能自增。",
        "p[i] 等价于 *(p+i)，指针变量也能使用下标语法。"
      ],
      "pitfalls": [
        "对数组名执行 a++ 或 a=a+1。",
        "把 *a+i 误当作 a[i]；它的含义是 (*a)+i。",
        "指针已移动后又假设它仍指向首元素。",
        "用 sizeof(p) 得到整个数组长度。"
      ],
      "exercise": {
        "prompt": "数组 a={3,5,7,9}，使用 *(a+i) 的形式求所有元素之和并输出。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4] = {3, 5, 7, 9};\n    int sum = 0;\n    // 使用 *(a+i) 累加\n    return 0;\n}",
        "hint": "循环 i 从 0 到 3，累加 *(a+i)。",
        "checks": [
          {
            "label": "包含循环",
            "pattern": "\\bfor\\s*\\("
          },
          {
            "label": "使用 *(a+i) 或 *(p+i)",
            "pattern": "\\*\\s*\\(\\s*a\\s*\\+\\s*i\\s*\\)|\\*\\s*\\(\\s*p\\s*\\+\\s*i\\s*\\)"
          },
          {
            "label": "累加求和",
            "pattern": "sum\\s*\\+=|sum\\s*=\\s*sum\\s*\\+"
          },
          {
            "label": "输出 sum",
            "pattern": "\\bcout\\s*<<\\s*sum"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4] = {3, 5, 7, 9};\n    int sum = 0;\n    for (int i = 0; i < 4; ++i) sum += *(a + i);\n    cout << sum << endl;\n    return 0;\n}",
        "explanation": "a+i 产生元素地址，前面的 * 取出该地址中的值。",
        "commonMistakes": [
          "写成 *(a)+i，只取首元素再加 i。",
          "循环边界写 i<=4，访问越界。",
          "试图执行 a++ 遍历数组。"
        ]
      },
      "masteryHint": "能在下标法与指针法之间互相转换，并说明数组名的限制。"
    },
    {
      "id": "l5-star-precedence",
      "lessonId": "lesson5",
      "title": "*p++ 与 (*p)++ 的区别",
      "tags": [
        "优先级",
        "后置自增",
        "指针自增",
        "元素自增"
      ],
      "overview": "*p++ 等价于 *(p++)，先取当前元素，再让指针指向下一个元素；(*p)++ 先取当前元素，再让该元素的值加 1，指针本身不移动。",
      "keyPoints": [
        "后置 ++ 优先级高于一元 *。",
        "*p++ 改变的是指针 p。",
        "(*p)++ 改变的是 p 指向的对象。",
        "表达式值也不同：*p++ 得到旧元素值，(*p)++ 得到元素的旧值。",
        "复杂表达式应加括号，优先保证可读性。"
      ],
      "pitfalls": [
        "把 *p++ 写成 *(p+1) 或 *p+1。",
        "想修改元素却使用了 *p++，结果只移动指针。",
        "想移动指针却使用 (*p)++，结果修改元素。",
        "在同一表达式中依赖过多副作用，降低可读性。"
      ],
      "exercise": {
        "prompt": "数组 {10,20}，先输出 *p++，再输出 (*p)++，最后输出 *p，三项用空格分隔。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2] = {10, 20};\n    int *p = a;\n    // 按顺序输出三个结果\n    return 0;\n}",
        "hint": "严格按照题干顺序写三个输出表达式，不要提前修改元素。",
        "checks": [
          {
            "label": "使用 *p++",
            "pattern": "\\*\\s*p\\s*\\+\\+"
          },
          {
            "label": "使用 (*p)++",
            "pattern": "\\(\\s*\\*\\s*p\\s*\\)\\s*\\+\\+"
          },
          {
            "label": "最后输出 *p",
            "pattern": "\\(\\s*\\*\\s*p\\s*\\)\\s*\\+\\+[\\s\\S]*\\bcout\\s*<<\\s*\\*\\s*p"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2] = {10, 20};\n    int *p = a;\n    cout << *p++ << ' ';\n    cout << (*p)++ << ' ';\n    cout << *p << endl;\n    return 0;\n}",
        "explanation": "表达式按题干顺序执行：先移动指针，再修改当前元素。",
        "commonMistakes": [
          "把 (*p)++ 写成 *p++，第二次不会修改 20。",
          "先执行元素自增，再移动指针，导致输出顺序错误。",
          "把运算符优先级当作从右向左。"
        ]
      },
      "masteryHint": "能准确追踪每一步之后 p 和 *p 的值。"
    },
    {
      "id": "l5-dynamic-memory",
      "lessonId": "lesson5",
      "title": "new 与 delete 动态内存",
      "tags": [
        "new",
        "delete",
        "动态数组",
        "内存释放"
      ],
      "overview": "new 在运行时申请动态内存并返回地址，delete 释放 new 获得的单个对象，delete[] 释放 new[] 获得的数组。动态内存必须由程序员管理。",
      "keyPoints": [
        "int *p=new int(10); 申请一个 int 并初始化为 10。",
        "int *a=new int[n]; 申请 n 个 int 元素。",
        "普通对象用 delete p;，数组必须用 delete[] a;。",
        "释放后原指针成为悬空指针，不应再解引用。",
        "不需要显式给出数组长度，delete[] 依据分配记录释放。"
      ],
      "pitfalls": [
        "用 delete 释放 new[] 数组。",
        "重复 delete 同一地址。",
        "delete 普通局部变量地址。",
        "申请失败或 n<=0 时未处理边界。"
      ],
      "exercise": {
        "prompt": "读取正整数 n，动态申请长度为 n 的 int 数组，依次赋值为 1 到 n，输出总和，最后释放内存。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // new 数组、求和、delete[]\n    return 0;\n}",
        "hint": "使用 int *a=new int[n]; 循环赋值，结束后 delete[] a。",
        "checks": [
          {
            "label": "动态申请数组",
            "pattern": "\\bnew\\s+int\\s*\\[\\s*n\\s*\\]"
          },
          {
            "label": "循环赋值",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\w+\\s*\\[\\s*\\w+\\s*\\]\\s*=\\s*\\w+\\s*\\+\\s*1"
          },
          {
            "label": "累加求和",
            "pattern": "sum\\s*\\+=|sum\\s*=\\s*sum\\s*\\+"
          },
          {
            "label": "使用 delete[] 释放",
            "pattern": "\\bdelete\\s*\\[\\s*\\]\\s*\\w+"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int *a = new int[n];\n    int sum = 0;\n    for (int i = 0; i < n; ++i) {\n        a[i] = i + 1;\n        sum += a[i];\n    }\n    cout << sum << endl;\n    delete[] a;\n    return 0;\n}",
        "explanation": "动态数组的容量由 n 决定，a[i] 可像普通数组一样访问，最后必须用 delete[]。",
        "commonMistakes": [
          "用 delete a 释放动态数组。",
          "循环条件写 i<=n，越界。",
          "释放后继续访问 a[0]。"
        ]
      },
      "masteryHint": "能配对 new/delete 与 new[]/delete[]，并说明悬空指针风险。"
    },
    {
      "id": "l5-pointer-string",
      "lessonId": "lesson5",
      "title": "字符指针与字符串遍历",
      "tags": [
        "字符指针",
        "字符串",
        "\\0",
        "指针遍历"
      ],
      "overview": "字符指针可以指向字符数组或字符串常量。只读字符串常量应使用 const char*，遍历时通常以 *p!='\\0' 为结束条件。",
      "keyPoints": [
        "char *p=s; 可让 p 指向字符数组首字符。",
        "p++ 使字符指针移动到下一个字符。",
        "字符串常量不可修改，现代写法用 const char *。",
        "字符数组可以修改元素，字符串字面量不应被修改。",
        "两个字符指针相减可得到同数组内的元素间隔。"
      ],
      "pitfalls": [
        "通过 char* 修改字符串字面量，行为未定义。",
        "字符指针未指向有效缓冲区就执行 cin>>p。",
        "循环条件只看数组容量而不看 '\\0'。",
        "把指针移动到结束符后继续解引用。"
      ],
      "exercise": {
        "prompt": "使用 getline 读取一行字符串，使用字符指针统计其中字母的总数并输出。",
        "starter": "#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    // 使用字符指针统计字母\n    return 0;\n}",
        "hint": "p 从 s 开始，循环到 *p 为 '\\0'，用 isalpha 判断。",
        "checks": [
          {
            "label": "定义字符指针",
            "pattern": "(?:const\\s+)?char\\s*\\*\\s*\\w+\\s*=\\s*s"
          },
          {
            "label": "判断结束符",
            "pattern": "\\*\\s*\\w+\\s*!=\\s*'\\\\0'|\\*\\s*\\w+"
          },
          {
            "label": "判断字母",
            "pattern": "\\bisalpha\\s*\\(|\\*\\s*\\w+\\s*>=\\s*'A'[\\s\\S]*<=\\s*'Z'"
          },
          {
            "label": "移动指针",
            "pattern": "\\+\\+\\s*\\w+|\\w+\\s*\\+\\+"
          }
        ],
        "solution": "#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    const char *p = s;\n    int count = 0;\n    while (*p != '\\0') {\n        if (isalpha((unsigned char)(*p))) ++count;\n        ++p;\n    }\n    cout << count << endl;\n    return 0;\n}",
        "explanation": "p 在字符串有效区域内移动；isalpha 判断当前字符是否为字母。",
        "commonMistakes": [
          "忘记移动 p，造成死循环。",
          "只判断大写或小写字母，漏掉另一类。",
          "字符指针指向未分配空间的字符串字面量后尝试输入。"
        ]
      },
      "masteryHint": "能安全地区分可修改字符数组与只读字符串常量，并用指针遍历字符串。"
    },
    {
      "id": "l5-pointer-2d",
      "lessonId": "lesson5",
      "title": "二维数组与行指针",
      "tags": [
        "二维数组",
        "行指针",
        "指针数组",
        "a[0]"
      ],
      "overview": "二维数组名可视为指向一维行数组的指针。若 a 是 int[2][3]，a+i 指向第 i 行，*(a+i) 或 a[i] 指向该行首元素。用普通 int* 可接收 a[0]，但不要直接把二维数组名赋给 int*。",
      "keyPoints": [
        "a[i] 表示第 i 行首元素地址。",
        "a[i][j] 等价于 *(*(a+i)+j)。",
        "int (*p)[3]=a 是行指针，p[i][j] 可访问元素。",
        "int *rows[2] 是指针数组，每个元素保存一个 int*。",
        "int *p=a[0] 可把二维数组按连续一维序列访问，但只适合连续存储且不越界。"
      ],
      "pitfalls": [
        "把 int a[2][3] 直接赋给 int* p。",
        "混淆行指针 int (*p)[3] 与指针数组 int *p[3]。",
        "用 a 本身当作 int* 做普通元素运算。",
        "按行遍历时行列边界写反。"
      ],
      "exercise": {
        "prompt": "定义 2×3 数组 {{1,2,3},{4,5,6}}，使用行指针 p 输出第一行元素之和。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    // 定义行指针并求和\n    return 0;\n}",
        "hint": "行指针写法是 int (*p)[3]=a；访问第一行可用 p[0][i]。",
        "checks": [
          {
            "label": "定义行指针",
            "pattern": "\\bint\\s*\\(\\s*\\*\\s*p\\s*\\)\\s*\\[\\s*3\\s*\\]\\s*=\\s*a"
          },
          {
            "label": "遍历三列",
            "pattern": "\\bfor\\s*\\([\\s\\S]*(?:<\\s*3|<=\\s*2)"
          },
          {
            "label": "使用 p 访问元素",
            "pattern": "p\\s*\\[\\s*0\\s*\\]\\s*\\[\\s*\\w+\\s*\\]|\\*\\s*\\(\\s*\\*\\s*p\\s*\\+"
          },
          {
            "label": "输出和",
            "pattern": "\\bcout\\s*<<\\s*sum"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int (*p)[3] = a;\n    int sum = 0;\n    for (int i = 0; i < 3; ++i) sum += p[0][i];\n    cout << sum << endl;\n    return 0;\n}",
        "explanation": "p 指向长度为 3 的整型行数组，因此 p[0] 是第一行。",
        "commonMistakes": [
          "写成 int *p[3]=a，类型是指针数组而不是行指针。",
          "把 p[0][i] 写成 p[0,i]。",
          "行列下标边界互换。"
        ]
      },
      "masteryHint": "能识别行指针与指针数组的声明差异，并解释二维数组的分层地址。"
    },
    {
      "id": "l5-pointer-swap",
      "lessonId": "lesson5",
      "title": "交换指针与交换所指内容",
      "tags": [
        "指针交换",
        "值交换",
        "解引用",
        "临时变量"
      ],
      "overview": "交换两个指针只改变指针的指向，原变量内容不变；交换 *p 和 *q 才会改变指针所指向的变量值。",
      "keyPoints": [
        "p 和 q 是地址变量。",
        "temp=p; p=q; q=temp 交换的是指向。",
        "temp=*p; *p=*q; *q=temp 交换的是值。",
        "临时变量类型必须与交换对象一致。",
        "交换后要通过解引用确认原变量是否改变。"
      ],
      "pitfalls": [
        "把指针交换误认为变量值交换。",
        "临时变量声明为 int 去保存 int*。",
        "解引用时指针没有有效指向。",
        "交换后仍用原指针理解变量对应关系。"
      ],
      "exercise": {
        "prompt": "令 a=3、b=5，p 指向 a，q 指向 b。只交换指针 p、q，依次输出 *p、*q、a、b。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3, b = 5;\n    int *p = &a, *q = &b;\n    // 交换指针并输出\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "5 3 3 5",
        "hint": "临时变量必须声明为 int*。",
        "checks": [
          {
            "label": "声明指针临时变量",
            "pattern": "\\bint\\s*\\*[\\s\\S]*\\btemp\\b"
          },
          {
            "label": "保存 p 的指向",
            "pattern": "\\btemp\\s*=\\s*p\\b"
          },
          {
            "label": "交换 p 和 q",
            "pattern": "\\bp\\s*=\\s*q[\\s\\S]*\\bq\\s*=\\s*temp"
          },
          {
            "label": "输出 *p *q a b",
            "pattern": "\\*p[\\s\\S]*\\*q[\\s\\S]*\\ba\\b[\\s\\S]*\\bb\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3, b = 5;\n    int *p = &a, *q = &b, *temp;\n    temp = p;\n    p = q;\n    q = temp;\n    cout << *p << ' ' << *q << ' ' << a << ' ' << b << endl;\n    return 0;\n}",
        "explanation": "交换后 p 指向 b，q 指向 a，所以 *p=5、*q=3；a、b 本身仍为 3、5。",
        "commonMistakes": [
          "把 temp 声明成 int。",
          "写成 *p=*q，结果交换了变量值。",
          "认为输出 a、b 也会变成 5、3。"
        ]
      },
      "masteryHint": "能明确区分指针变量和所指对象，并正确交换任意一种。",
      "sourcePages": [
        8,
        16,
        17
      ]
    },
    {
      "id": "l5-substring-count",
      "lessonId": "lesson5",
      "title": "指针遍历与子串出现次数",
      "tags": [
        "指针遍历",
        "子串匹配",
        "嵌套循环",
        "\\0"
      ],
      "overview": "子串匹配从主串的每个起始位置取出与子串等长的一段比较。用指针遍历时，每次外层位置移动一个字符，内层逐字符比较。",
      "keyPoints": [
        "外层指针 p 遍历主串的每个可能起点。",
        "内层从 p 和 sub 同时比较。",
        "某个字符不同就结束本次内层循环。",
        "内层完整到达子串结束符表示匹配成功。",
        "允许重叠时，外层位置每次只移动一个字符。"
      ],
      "pitfalls": [
        "匹配成功后一次跳过长子串，漏掉重叠匹配。",
        "没有检查子串是否完整匹配。",
        "内层越界读取。",
        "主串指针没有前进导致死循环。"
      ],
      "exercise": {
        "prompt": "读取主串 s 和子串 sub，不含空格，统计 sub 在 s 中出现的次数，允许重叠。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100], sub[50];\n    cin >> s >> sub;\n    int count = 0;\n    // 用指针统计子串次数\n    cout << count << endl;\n    return 0;\n}",
        "sampleInput": "abababa aba",
        "expectedOutput": "3",
        "hint": "abababa 中 aba 出现在下标 0、2、4。",
        "checks": [
          {
            "label": "外层指针遍历主串",
            "pattern": "\\bchar\\s*\\*\\s*p\\s*=\\s*s[\\s\\S]*\\*p\\s*!=\\s*'\\s*\\\\0\\s*'"
          },
          {
            "label": "内层比较字符",
            "pattern": "\\*a\\s*==\\s*\\*b|\\*b\\s*==\\s*\\*a"
          },
          {
            "label": "匹配完整时计数",
            "pattern": "\\*b\\s*==\\s*'\\s*\\\\0\\s*'[\\s\\S]*\\+\\+\\s*count"
          },
          {
            "label": "主串指针递增",
            "pattern": "\\+\\+\\s*p|\\bp\\s*\\+\\+"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100], sub[50];\n    cin >> s >> sub;\n    int count = 0;\n    for (char *p = s; *p != '\\0'; ++p) {\n        char *a = p, *b = sub;\n        while (*b != '\\0' && *a == *b) {\n            ++a;\n            ++b;\n        }\n        if (*b == '\\0') ++count;\n    }\n    cout << count << endl;\n    return 0;\n}",
        "explanation": "每个起点都重新比较一次，因此下标 0、2、4 三处重叠的 aba 都会被统计。",
        "commonMistakes": [
          "匹配成功后让 p 跳过整个子串。",
          "只比较第一个字符。",
          "子串为空时没有特殊处理。"
        ]
      },
      "masteryHint": "能用指针写出完整的子串比较，并正确处理重叠出现。",
      "sourcePages": [
        25,
        26,
        28
      ]
    },
    {
      "id": "l5-pointer-array-sort",
      "lessonId": "lesson5",
      "title": "字符指针数组与按字典序排序",
      "tags": [
        "指针数组",
        "字符串排序",
        "strcmp",
        "交换指针"
      ],
      "overview": "字符指针数组的每个元素保存一个字符串首地址。排序时只交换指针，不复制字符串内容，效率更高。",
      "keyPoints": [
        "char *words[] 是指针数组，不是二维字符数组。",
        "strcmp(a,b) 返回正负值表示字典顺序。",
        "排序时用临时 char* 交换两个指针。",
        "交换指针会改变字符串的访问顺序。",
        "字符串常量本身不应被修改。"
      ],
      "pitfalls": [
        "用 temp[100] 去复制字符串，题目要求交换指针。",
        "把 char *words[] 误解为 char words[][]. ",
        "用 > 直接比较两个 C 字符串。",
        "试图修改字符串常量内容。"
      ],
      "exercise": {
        "prompt": "读取 4 个单词，存入字符指针数组，按字典序排序并逐行输出。",
        "starter": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[20], b[20], c[20], d[20];\n    cin >> a >> b >> c >> d;\n    char *words[] = {a, b, c, d};\n    // 按字典序交换指针并输出\n    return 0;\n}",
        "sampleInput": "pear apple peach banana",
        "expectedOutput": "apple\nbanana\npeach\npear",
        "hint": "使用 strcmp 比较，排序时交换 words[i] 和 words[j]。",
        "checks": [
          {
            "label": "声明字符指针数组",
            "pattern": "\\bchar\\s*\\*\\s*words\\s*\\["
          },
          {
            "label": "使用 strcmp 比较",
            "pattern": "\\bstrcmp\\s*\\("
          },
          {
            "label": "声明 char* 临时变量",
            "pattern": "\\bchar\\s*\\*\\s*temp\\b"
          },
          {
            "label": "交换指针元素",
            "pattern": "\\bwords\\s*\\[[\\s\\S]*=\\s*words\\s*\\["
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[20], b[20], c[20], d[20];\n    cin >> a >> b >> c >> d;\n    char *words[] = {a, b, c, d};\n    for (int i = 0; i < 3; ++i) {\n        for (int j = 0; j < 3 - i; ++j) {\n            if (strcmp(words[j], words[j + 1]) > 0) {\n                char *temp = words[j];\n                words[j] = words[j + 1];\n                words[j + 1] = temp;\n            }\n        }\n    }\n    for (int i = 0; i < 4; ++i) cout << words[i] << endl;\n    return 0;\n}",
        "explanation": "冒泡排序中按 strcmp 结果交换指针，原字符数组内容没有复制或改写。",
        "commonMistakes": [
          "用 strcpy 排序。",
          "直接使用 words[j] > words[j+1] 比较。",
          "临时变量声明为 char 而不是 char*。"
        ]
      },
      "masteryHint": "能区分指针数组与二维字符数组，并只交换指针完成排序。",
      "sourcePages": [
        23,
        24
      ]
    },
    {
      "id": "l6-ex6-1",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.1 编写 max 函数求三个数中的最大数",
      "tags": [
        "课件例题",
        "函数定义",
        "调用"
      ],
      "overview": "定义 int max(int x,int y) 返回两个整数中的大者；主函数先求 a、b 的较大值存入 m，再求 c、m 的较大值。",
      "keyPoints": [
        "函数头包含返回类型、函数名和形参表。",
        "形参 x、y 是值参数，接收实参的副本。",
        "return z 把结果返回给调用处。",
        "两次调用 max，把三个数的比较转化为两次两数比较。"
      ],
      "pitfalls": [
        "函数定义写在 main 内部。",
        "把 return z 写成 return x（只返回第一个参数）。",
        "调用时写成 max(a,b,c)，参数个数不匹配。"
      ],
      "example": {
        "title": "例6.1 编写 max 函数求三个数中的最大数",
        "source": "课件 lesson6 · P7",
        "code": "int max(int x,int y) \n{\n    int z;          \n    if(x>y)\n        z=x;\n    else \n        z=y;\n    return z;   //将大的数返回\n}\nint main()\n{\n    int a,b,c,m;\n    cin>>a>>b>>c;\n    m=max(a,b);\n    m=max(c,m);\n    cout<<m<<endl;\n    system(\"pause\");\n    return 0;\n}",
        "output": "输入 3 5 4 时输出 5",
        "explanation": "max 只负责两个数比较，主函数通过两次调用完成三个数比较：先得到 a、b 的较大者 m，再让 m 与 c 比较。这样函数功能单一、可复用。课件提醒注意参数声明方式：每个形参都要写类型。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "返回类型 int，函数名 max，两个 int 形参。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "z 是局部变量，只在 max 内部有效。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "比较两个形参。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "把较大值返回给调用者。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "第一次调用，得到 a、b 的较大者。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "第二次调用，把上次结果与 c 比较。"
          }
        ]
      },
      "masteryHint": "能写出函数头和 return 语句，并说明两次调用的顺序。",
      "sourcePages": [
        7
      ]
    },
    {
      "id": "l6-ex6-2",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.2 用函数 pic 输出三角形",
      "tags": [
        "课件例题",
        "函数",
        "嵌套循环",
        "setw"
      ],
      "overview": "把“输出 n 行 * 三角形”封装成 void pic(int n)，主函数分别调用 pic(4) 和 pic(6)。",
      "keyPoints": [
        "void 表示函数没有返回值，调用时单独成句。",
        "pic 内部用外层循环控制行，内层循环控制每行的 * 个数。",
        "setw(10-i) 控制每行起始位置，形成三角形。",
        "函数参数 n 决定行数，同一函数可输出不同大小的图形。"
      ],
      "pitfalls": [
        "setw 需要 <iomanip>，课件示例未写出。",
        "内层循环条件写成 j<2*i 而不是 2*i+1，少一个 *。",
        "void 函数里写 return 值。"
      ],
      "example": {
        "title": "例6.2 用函数 pic 输出三角形",
        "source": "课件 lesson6 · P8",
        "code": "void pic(int n)\n{\n    for(int i=0;i<n;i++)\n    {\n        cout<<setw(10-i)<< ' ';\n        for(int j=0;j<2*i+1;j++)\n            cout<<\"*\";\n        cout<<endl;\n    }\n}\nint main()\n{\n    pic(4);\n    pic(6);\n    system(\"pause\");\n    return 0;  \n}",
        "output": "先输出 4 行三角形，再输出 6 行三角形",
        "explanation": "第 i 行有 2i+1 个星号，前面的空格数随 i 增大而减少，所以用 setw(10-i) 把起始位置逐行左移。pic 把“画三角形”这件事封装起来，主函数只关心调用几次、传几行。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "void 表示不返回值；n 是行数。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "外层控制行号，共 n 行。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "用输出宽度控制每行起始位置，i 越大越靠左。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "第 i 行输出 2i+1 个星号。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "调用函数输出 4 行。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "同一个函数换一个实参，输出 6 行。"
          }
        ]
      },
      "masteryHint": "能说出 pic 的参数、返回值和两层循环各自的作用。",
      "sourcePages": [
        8
      ]
    },
    {
      "id": "l6-ex6-3",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.3 求最大公约数和最小公倍数",
      "tags": [
        "课件例题",
        "函数嵌套调用",
        "gcd",
        "lcm"
      ],
      "overview": "gcd 用辗转相除求最大公约数，lcm 直接返回 m*n/gcd(m,n)。lcm 内部调用 gcd，体现函数嵌套调用。",
      "keyPoints": [
        "while(r=m%n) 等价于 while((r=m%n)!=0)。",
        "循环体 m=n;n=r; 构造新数对。",
        "最小公倍数 = m*n/最大公约数。",
        "lcm 调用 gcd，属于函数嵌套调用。"
      ],
      "pitfalls": [
        "while(r=m%n) 的括号不能少，否则先算 m%n 再赋值。",
        "lcm 先算 m*n 可能溢出（大数时）。",
        "gcd 没有处理 n==0 的情况。"
      ],
      "example": {
        "title": "例6.3 求最大公约数和最小公倍数",
        "source": "课件 lesson6 · P11",
        "code": "int gcd(int m,int n)\n{ \n    int r;\n    while(r=m%n)\n    {  m=n;n=r;  }\n    return(n); \n}\nint lcm(int m,int n)\n{\n    return( m*n/gcd(m,n) );\n}\n#include <iostream>\nusing namespace std;\nint main( )\n{\n    int m,n;\n    cin>>m>>n;\n    cout<<gcd(m,n)<<endl;\n    cout<<lcm(m,n)<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 12 18：先输出 6，再输出 36",
        "explanation": "gcd 反复用余数替换，直到余数为 0，此时 n 是最大公约数。lcm 利用公式 m*n/gcd(m,n) 求最小公倍数，函数内部又调用 gcd，所以执行顺序是 main→lcm→gcd→lcm→main。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "先求余赋给 r，再判断 r 是否为 0；等价于 while((r=m%n)!=0)。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "除数变被除数，余数变除数。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "余数为 0 时的除数 n 就是最大公约数。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "最小公倍数公式，内部调用 gcd。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "先输出最大公约数。"
          },
          {
            "section": 0,
            "line": 19,
            "text": "再输出最小公倍数。"
          }
        ]
      },
      "masteryHint": "能手工模拟 12、18 的 gcd 过程，并说明 lcm 为什么调用 gcd。",
      "sourcePages": [
        11
      ]
    },
    {
      "id": "l6-ex6-4",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.4 函数说明（函数原型）示例",
      "tags": [
        "课件例题",
        "函数原型",
        "先声明后调用"
      ],
      "overview": "max 定义在 main 之后，因此在 main 内先写 int max(int x,int y); 进行函数说明，编译器才知道 max 的返回类型和参数表。",
      "keyPoints": [
        "函数调用在前、定义在后时，必须先说明（声明原型）。",
        "原型可以写在调用它的函数内，也可以写在源文件开头。",
        "原型与定义的返回类型、函数名、参数表必须一致。",
        "原型中形参名可以省略，写成 int max(int,int); 也可以。"
      ],
      "pitfalls": [
        "漏写分号。",
        "原型与定义的参数类型不一致。",
        "把函数定义写在 main 内部。"
      ],
      "example": {
        "title": "例6.4 函数说明（函数原型）示例",
        "source": "课件 lesson6 · P13",
        "code": "#include <iostream>\nusing namespace std;\nint main( ) \n{     int a,b,c;\n      int max(int x,int y);   //亦可int max(int,int);\n      cin>>a>>b;   \n      c=max(a,b);\n      cout<<c<<endl; \n      system(\"pause\");\n      return 0;\n}\nint max(int x,int y) \n{     return x>y?x:y ; \n}",
        "output": "输入 3 5 时输出 5",
        "explanation": "编译器从上到下扫描，遇到 max(a,b) 时还没看到 max 的定义，所以需要前面的原型告诉它“max 是 int(int,int)”。原型只声明不实现，真正的函数体在 main 之后。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "函数说明，告诉编译器 max 的返回类型和参数类型；末尾分号不能少。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "有了原型，编译器才能检查实参个数和类型。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "真正的函数定义，写在 main 之后。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "条件运算符返回较大值。"
          }
        ]
      },
      "masteryHint": "能说出什么时候必须写函数原型，以及原型与定义必须一致的三项。",
      "sourcePages": [
        13
      ]
    },
    {
      "id": "l6-ex6-5",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.5 值参数能否交换两个变量？",
      "tags": [
        "课件例题",
        "值参数",
        "交换"
      ],
      "overview": "swap(int x,int y) 内部确实交换了 x、y，但 x、y 只是实参的副本，main 中的 a、b 不受影响。",
      "keyPoints": [
        "值参数传递的是实参值的副本。",
        "形参的改变不会影响实参。",
        "函数返回后，形参 x、y 消失，交换结果也消失。",
        "要真正交换实参，必须用引用参数或指针参数。"
      ],
      "pitfalls": [
        "以为形参交换了实参就交换了。",
        "忘记函数调用的实参是值传递。",
        "把 swap 写成有返回值的函数却没有接收返回值。"
      ],
      "example": {
        "title": "例6.5 值参数能否交换两个变量？",
        "source": "课件 lesson6 · P14",
        "code": "#include  <iostream>\nvoid  swap(int x,int y)\n{    \n    int temp;\n    temp=x;x=y;y=temp;\n}\nint main()\n{    \n    int a,b;\n    cin>>a>>b;\n    swap(a,b);\n    cout<<\"a=\"<<a<<\" b=\"<<b<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 10 20 时输出：a=10 b=20",
        "explanation": "调用 swap(a,b) 时，系统为 x、y 分配新空间，并把 a、b 的值复制进去。函数内交换的是 x、y 两个副本，a、b 原封不动。课件用动画演示了这一点：实参和形参是两组独立的存储单元。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "x、y 是值参数，接收实参的副本。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "这里只交换了副本 x、y。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "调用时把 a、b 的值复制给 x、y。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "函数返回后 x、y 已消失，a、b 仍是原值。"
          }
        ]
      },
      "masteryHint": "能画出调用前后实参与形参两组存储单元的变化。",
      "sourcePages": [
        14
      ]
    },
    {
      "id": "l6-ex6-6",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.6 引用参数交换两数",
      "tags": [
        "课件例题",
        "引用参数",
        "交换"
      ],
      "overview": "void swap(int &x,int &y) 中 x、y 是实参的引用（别名），交换 x、y 就是交换 a、b。",
      "keyPoints": [
        "引用是变量的别名，与被引用变量共用同一段内存。",
        "int &x 中的 & 是引用声明符，不是取地址。",
        "引用参数要求实参必须是变量，不能是常量或表达式。",
        "对引用的操作就是对被引用变量的操作。"
      ],
      "pitfalls": [
        "把 int &x 写成 int x，退回值参数。",
        "调用时写 swap(3,5)，引用不能绑定常量。",
        "以为引用会另外占一块内存。"
      ],
      "example": {
        "title": "例6.6 引用参数交换两数",
        "source": "课件 lesson6 · P20",
        "code": "#include <iostream>\nusing namespace std;\nvoid  swap(int &x,int &y)\n{ int temp=x;x=y;y=temp; }\nint main()\n{ int a,b;\ncin>>a>>b;\nswap(a,b);\ncout<<\"a=\"<<a<<\"b=\"<<b;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 10 20 时输出：a=20b=10",
        "explanation": "x 是 a 的别名，y 是 b 的别名，函数内对 x、y 的读写直接落到 a、b 上。与例6.5 对比：值参数交换的是副本，引用参数交换的是本体。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "& 表示引用；x 绑定实参 a，y 绑定实参 b。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "对别名的操作就是对 a、b 的操作。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "实参必须是变量，引用才能绑定。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "输出 a=20b=10，说明 a、b 真的被交换了。"
          }
        ]
      },
      "masteryHint": "能对比值参数与引用参数的存储关系，并说出引用实参的限制。",
      "sourcePages": [
        20
      ]
    },
    {
      "id": "l6-ex6-7",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.7 指针参数交换两个变量的值",
      "tags": [
        "课件例题",
        "指针参数",
        "交换"
      ],
      "overview": "swap(int *x,int *y) 接收 &a、&b，函数内用 *x、*y 访问并交换 a、b 的内容。若只交换 x、y 两个指针，a、b 不会变。",
      "keyPoints": [
        "调用时传地址：swap(&a,&b)。",
        "形参 int *x 接收地址，*x 就是 a。",
        "int temp=*x; *x=*y; *y=temp; 交换的是所指内容。",
        "若写成 temp=x;x=y;y=temp; 只交换了形参指针，实参不受影响。"
      ],
      "pitfalls": [
        "调用时写 swap(a,b) 而不是 swap(&a,&b)。",
        "函数内写 x=y 而不是 *x=*y。",
        "temp 定义为 int * 后又用 *temp，类型不匹配。"
      ],
      "example": {
        "title": "例6.7 指针参数交换两个变量的值",
        "source": "课件 lesson6 · P21",
        "code": "#include <iostream>\nusing namespace std;\nvoid swap(int * ,int * );\nint main()\n{\nint a,b;\ncin>>a>>b;\nswap(&a,&b);\ncout<<\"a=\"<<a<<\" b=\"<<b<<endl;\nsystem(\"pause\");\nreturn 0;\n}\nvoid swap(int *x,int *y)\n{ int temp=*x;*x=*y;*y=temp; }",
        "output": "输入 10 20 时输出：a=20 b=10",
        "explanation": "x 存放 a 的地址，*x 就是 a；y 存放 b 的地址，*y 就是 b。temp=*x 保存 a 的值，*x=*y 把 b 的值写到 a，*y=temp 把原 a 的值写到 b。课件还给出反例：只交换 x、y 两个指针，a、b 的内容不会变。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "函数原型，两个形参都是 int 指针。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "实参必须是地址，才能让形参指向 a、b。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "x、y 存放地址。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "保存 x 所指变量（a）的值。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "把 y 所指变量（b）的值写到 a。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "把保存的 a 原值写到 b。"
          }
        ]
      },
      "masteryHint": "能说出 swap(&a,&b) 中 & 的作用，以及函数内为什么必须写 *x。",
      "sourcePages": [
        21
      ]
    },
    {
      "id": "l6-ex6-8",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.8 三位数反复重排相减得到 495",
      "tags": [
        "课件例题",
        "指针参数",
        "迭代",
        "数字分解"
      ],
      "overview": "get_maxmin 用指针参数把最大数、最小数带回主函数；主函数反复用 max-min 生成新的三位数，直到等于 495。",
      "keyPoints": [
        "get_maxmin 的参数是三个数字 a、b、c 和两个指针 max、min。",
        "三条 if 把 a、b、c 排成 a>=b>=c。",
        "最大数 = a*100+b*10+c，最小数 = c*100+b*10+a。",
        "主函数用 do-while 保证输入合法：num!=495 且三位不全相等。"
      ],
      "pitfalls": [
        "排序三条 if 的顺序写错，得不到 a>=b>=c。",
        "最小数忘记百位可以是 0（如 330 的 min=33）。",
        "do-while 条件写成 num==495||a==b&&a==c 时逻辑反了。"
      ],
      "example": {
        "title": "例6.8 三位数反复重排相减得到 495",
        "source": "课件 lesson6 · P30-P31",
        "code": "#include <iostream>\nusing namespace std;\nvoid get_maxmin(int a,int b,int c, int *max, int *min)\n{\n    int t;\n    if(a<b)\n    {t=a;a=b;b=t;}\n    if(a<c)\n    { t=a;a=c;c=t;}\n    if(b<c)\n    { t=b;b=c;c=t;}\n    *max=a*100+ b*10 +c ;\n    *min=c*100+ b*10 +a ;\n}\nint main()\n{    int a,b,c,max,min,num;\ndo\n{    cin>>num;\na=num/100;b=num%100/10;c=num%10;\n}while(num==495||a==b&&a==c);\nwhile(num!=495)\n{\nget_maxmin(a,b,c,&max,&min);\nnum=max-min;\na=num/100; b=num%100/10; c=num%10;\ncout<<max<<\"-\"<<min<<\"==>\"<<num<<endl;\n}\nsystem(\"pause\");return 0;\n}",
        "output": "输入 814：841-148==>693，963-369==>594，954-459==>495",
        "explanation": "get_maxmin 先把三个数字从大到小排好，再拼成最大数和最小数。主函数每轮调用它，用 max-min 得到新的 num，再拆出新的三位数字。do-while 的条件表示“输入 495 或三位全相等就重新输入”，保证初始值有效。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "三个数字按值传入，max、min 用指针带回结果。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "第一条 if 保证 a>=b。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "第二条 if 保证 a>=c，于是 a 是最大。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "第三条 if 保证 b>=c，最终 a>=b>=c。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "用排好的数字拼最大三位数。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "倒过来拼最小三位数，百位可以为 0。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "输入 495 或三位全相等时重新输入。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "用最大数减最小数生成新的 num。"
          }
        ]
      },
      "masteryHint": "能解释三条 if 如何把三个数字排好，以及指针参数为什么要用 &max、&min。",
      "sourcePages": [
        30
      ]
    },
    {
      "id": "l6-ex6-9",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.9 数组作参数，从大到小排序",
      "tags": [
        "课件例题",
        "数组参数",
        "选择排序"
      ],
      "overview": "void sort(int x[],int n) 接收数组名和元素个数，用选择法从大到小排序；对形参数组的修改会直接影响实参数组。",
      "keyPoints": [
        "数组名作实参传递的是首地址，形参数组与实参数组共用同一块内存。",
        "形参数组可以不写长度，写了也必须是常量。",
        "数值数组必须额外传元素个数 n。",
        "排序用选择法，条件 x[k]<x[j] 找最大值。"
      ],
      "pitfalls": [
        "形参写成 int x[n]（n 是变量）。",
        "调用时只传数组名，不传长度。",
        "把 x[k]<x[j] 写反，变成升序。"
      ],
      "example": {
        "title": "例6.9 数组作参数，从大到小排序",
        "source": "课件 lesson6 · P32",
        "code": "void sort(int x[],int n) \n{    int i,j,k,w;\n    for(i=0;i<n-1;i++)\n    {   k=i;\n        for(j=i+1;j<n;j++)\n            if(x[k]<x[j])\n                k=j; \n        if(i!=k)\n        {w=x[i];x[i]=x[k];x[k]=w;} \n    }\n}",
        "output": "调用 sort(a,10) 后，a 的前 10 个元素按从大到小排列",
        "explanation": "形参 x 不是把整个数组复制一份，而是接收实参数组的首地址，所以 x[i] 与 a[i] 是同一个元素。选择法每轮找未排序区间的最大值下标 k，再与起点 i 交换。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "x[] 接收数组首地址，n 是元素个数。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "n 个元素需要 n-1 轮。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "假设本轮起点是最大值。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "发现更大的元素就更新 k，最终 k 指向最大值。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "把最大值换到本轮起点。"
          }
        ]
      },
      "masteryHint": "能解释为什么数组参数不需要返回值也能修改实参数组。",
      "sourcePages": [
        32
      ]
    },
    {
      "id": "l6-ex6-10",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.10 字符串复制函数（数组版与指针版）",
      "tags": [
        "课件例题",
        "字符数组参数",
        "指针参数",
        "填空"
      ],
      "overview": "copy_string 把 from 复制到 to。数组版用下标，指针版用 *to++=*from++；两种版本都要在末尾补 '\\0'。",
      "keyPoints": [
        "数组版循环条件 from[i]!='\\0'，循环后 to[i]='\\0'。",
        "指针版循环条件 *from!='\\0'，循环后 *to='\\0'。",
        "指针版 *to++=*from++ 先复制当前字符，再同时后移两个指针。",
        "形参写成 const char *from 可以防止函数修改源串。"
      ],
      "pitfalls": [
        "忘记补结束符。",
        "指针版循环后 to 已经后移，补 '\\0' 要用当前的 *to。",
        "把 const 加在目标串上，导致无法写入。"
      ],
      "example": {
        "title": "例6.10 字符串复制函数（数组版与指针版）",
        "source": "课件 lesson6 · P34-P35",
        "code": "void copy_string(char  from[ ], char  to[ ])\n{     int i=0;\n      while( from[i]!='\\0' ) \n      {    \n          to[i]=from[i];\n          i++; \n      }\n      to[i]='\\0';\n}\nint main()\n{ \n    char a[50]=\"I am a teacher.\", b[50]=\"You are a student.\";\n    cout<<a<<endl<<b<<endl;\n    copy_string(a,b);\n    cout<<a<<endl<<b<<endl;  \n    system(\"pause\");\n    return 0;\n}\n\nvoid copy_string(char *from, char *to)\n{  while( *from!='\\0' ) \n       *to++=*from++;\n   *to='\\0';\n}",
        "output": "数组版执行后 b 变成 \"I am a teacher.\"；指针版结果相同",
        "explanation": "数组版用下标 i 同步访问两个数组，复制完可见字符后补 '\\0'。指针版把“复制、后移”压缩成 *to++=*from++：先取 *from 写到 *to，再让两个指针各后移一位。课件还给出 const 版本，表示源串只读。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "数组版：遇到结束符停止。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "逐字符复制。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "数组版必须补结束符。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "把 a 复制到 b；b 原来的内容被覆盖。"
          },
          {
            "section": 1,
            "line": 2,
            "text": "指针版：判断源指针当前字符。"
          },
          {
            "section": 1,
            "line": 3,
            "text": "先复制，再让 to、from 各后移一位。"
          },
          {
            "section": 1,
            "line": 4,
            "text": "指针版循环结束后 to 指向目标串末尾，补结束符。"
          }
        ],
        "sections": [
          {
            "label": "数组版",
            "code": "void copy_string(char  from[ ], char  to[ ])\n{     int i=0;\n      while( from[i]!='\\0' ) \n      {    \n          to[i]=from[i];\n          i++; \n      }\n      to[i]='\\0';\n}\nint main()\n{ \n    char a[50]=\"I am a teacher.\", b[50]=\"You are a student.\";\n    cout<<a<<endl<<b<<endl;\n    copy_string(a,b);\n    cout<<a<<endl<<b<<endl;  \n    system(\"pause\");\n    return 0;\n}"
          },
          {
            "label": "指针版",
            "code": "void copy_string(char *from, char *to)\n{  while( *from!='\\0' ) \n       *to++=*from++;\n   *to='\\0';\n}"
          }
        ]
      },
      "masteryHint": "能写出数组版和指针版，并解释 *to++=*from++ 的执行顺序。",
      "sourcePages": [
        34
      ]
    },
    {
      "id": "l6-ex6-11",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.11 二维数组每行求和并求最大最小元素",
      "tags": [
        "课件例题",
        "二维数组参数",
        "引用参数"
      ],
      "overview": "maxmin 接收二维数组 x[][4]、行数 m、列数 n，把每行和存入 lsum，同时用引用参数带回最大值、最小值。",
      "keyPoints": [
        "二维数组作形参时，第一维长度可以省略，第二维长度必须写。",
        "lsum[] 接收一维数组，存放每行和。",
        "int &max、int &min 是引用参数，能把结果带回主函数。",
        "max、min 的初值取 x[0][0]，避免全负数时出错。"
      ],
      "pitfalls": [
        "形参写成 int x[][]，第二维没长度。",
        "lsum[i] 忘记在每行开始前清零。",
        "max、min 初值设为 0。"
      ],
      "example": {
        "title": "例6.11 二维数组每行求和并求最大最小元素",
        "source": "课件 lesson6 · P36",
        "code": "#include <iostream>\nusing namespace std;\nvoid maxmin(int x[][4],int m,int n,int lsum[],int &max,int &min)\n{\n    int i,j;\n    max=x[0][0];min=x[0][0];\n    for(i=0;i<m;i++)\n    {\n        lsum[i]=0;\n        for(j=0;j<n;j++)\n        {\n            lsum[i]=lsum[i]+x[i][j];\n            if(x[i][j]>max)\n                max=x[i][j];\n            if(x[i][j]<min)\n                min=x[i][j];\n        }\n    }\n}\nint main()\n{\n    int line_sum[3],max,min;\n    int a[3][4]={{11,2,3,-4},{5,6,7,8},{0,20,21,1}};\n    maxmin(a,3,4,line_sum,max,min);\n    for(int i=0;i<3;i++)\n        cout<<i<<\"行和：\"<<line_sum[i]<<endl;\n    cout<<\"最大元素值：\"<<max<<endl;\n    cout<<\"最小元素值：\"<<min<<endl;\nsystem(\"pause\");return 0;\n}",
        "output": "0行和：12\n1行和：26\n2行和：42\n最大元素值：21\n最小元素值：-4",
        "explanation": "外层 i 遍历行，内层 j 遍历列。每进入新的一行，先把 lsum[i] 清零，再累加该行元素。max、min 在整个遍历过程中持续更新，所以最后得到整个二维数组的极值。引用参数 max、min 让函数能把两个结果都带回主函数。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "二维数组形参省略第一维，第二维必须写 4。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "lsum 接收一维数组；max、min 是引用参数。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "用第一个元素初始化极值，数组全负也正确。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "每行开始前清零，否则会累加上一行的和。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "累加当前行的每个元素。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "更新最大值。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "数组名传地址，max、min 传变量本身。"
          }
        ]
      },
      "masteryHint": "能解释第二维长度为什么不能省，以及引用参数如何带回两个结果。",
      "sourcePages": [
        36
      ]
    },
    {
      "id": "l6-ex6-12",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.12 返回指针的函数 search",
      "tags": [
        "课件例题",
        "返回指针",
        "字符串查找",
        "填空"
      ],
      "overview": "search 在字符串 s 中查找字符 ch，找到返回该字符的地址，找不到返回 NULL；主函数输出从该位置开始的子串。",
      "keyPoints": [
        "返回类型 char * 表示函数返回字符指针。",
        "while(s[i]!='\\0') 遍历字符串。",
        "找到时 return &s[i]，返回该字符的地址。",
        "主函数用 if(p!=NULL) 判断是否找到，cout<<p 输出从 p 开始的子串。"
      ],
      "pitfalls": [
        "返回 s[i]（字符）而不是 &s[i]（地址）。",
        "找到后忘记 return，继续循环。",
        "主函数不判断 NULL 就输出。"
      ],
      "example": {
        "title": "例6.12 返回指针的函数 search",
        "source": "课件 lesson6 · P38",
        "code": "#include <iostream>\nusing namespace std;\nchar *search(char s[],char ch)\n{\n    int i=0;\n    while( s[i]!='\\0' )\n        if(s[i]!=ch) \n            i++;\n        else              \n            return(&s[i]);\n    return NULL;\n}\nint main()\n{\n    char s[100],ch,*p;\n    gets(s);\n    cin>>ch;\n    p=search(s,ch);\n    if(p!=NULL) \n        cout<<p<<endl;\n    else  \n        cout<<\"not found\\n\";\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 hello 和 l 时输出：llo",
        "explanation": "search 逐个比较，找到 ch 就返回它的地址；主函数拿到地址后直接 cout<<p，会从该字符一直输出到 '\\0'，所以得到从第一个 l 开始的子串 llo。找不到时返回 NULL，主函数据此输出 not found。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "返回类型是 char *，即字符指针。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "遍历到字符串末尾。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "当前字符不是目标就继续后移。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "找到时返回该字符的地址，不是字符本身。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "循环结束仍未找到，返回空指针。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "用指针 p 接收返回的地址。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "从 p 指向的字符开始输出整个子串。"
          }
        ]
      },
      "masteryHint": "能解释 return &s[i] 与 return s[i] 的区别，以及 cout<<p 为什么输出子串。",
      "sourcePages": [
        38
      ]
    },
    {
      "id": "l6-ex6-13",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.13 递归求斐波那契数列",
      "tags": [
        "课件例题",
        "递归",
        "fib"
      ],
      "overview": "fib(n)=1（n=1 或 2），否则 fib(n)=fib(n-1)+fib(n-2)。递归结束条件是 n==1||n==2。",
      "keyPoints": [
        "递归函数必须有一个能直接返回的结束条件。",
        "n==1||n==2 时返回 1。",
        "否则返回 fib(n-1)+fib(n-2)，规模不断减小。",
        "递归调用会形成一棵调用树，n 较大时重复计算很多。"
      ],
      "pitfalls": [
        "结束条件写成 n==0，导致 fib(1) 继续递归。",
        "漏掉 return。",
        "n 为 0 或负数时没有处理。"
      ],
      "example": {
        "title": "例6.13 递归求斐波那契数列",
        "source": "课件 lesson6 · P43",
        "code": "int fib(int n)\n{\n    if( n==1 || n==2 ) \n        return(1);\n    else\n        return(fib(n-1)+fib(n-2));\n}",
        "output": "fib(1)=1，fib(2)=1，fib(6)=8",
        "explanation": "斐波那契数列前两项都是 1，从第三项起每一项等于前两项之和。递归把 fib(n) 化成两个更小的子问题，直到 n 减到 1 或 2 时直接返回。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "参数 n 表示第几项；返回类型 int，n 较大时结果会溢出。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "递归结束条件：前两项都返回 1。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "结束时的值。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "递归表达式：前两项之和，规模分别减 1、减 2。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "n>2 时进入递归分支；else 与最近的 if 配对。"
          }
        ],
        "blankHints": [
          "递归结束条件：n==1||n==2 时 return(1)。"
        ]
      },
      "masteryHint": "能写出递归结束条件和递归表达式，并说出 fib(5) 的调用展开。",
      "sourcePages": [
        43
      ]
    },
    {
      "id": "l6-ex6-14",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.14 用递归实现数组递增排序",
      "tags": [
        "课件例题",
        "递归",
        "排序",
        "填空"
      ],
      "overview": "sort(a,n) 先把最大的元素冒到 a[n-1]，再递归调用 sort(a,n-1) 排前面 n-1 个元素；n==1 时结束。",
      "keyPoints": [
        "递归结束条件 n==1，此时只剩一个元素，天然有序。",
        "for(i=0;i<n-1;i++) 一趟冒泡，把最大值放到 a[n-1]。",
        "然后调用 sort(a,n-1)，规模减 1。",
        "这是“冒泡排序的递归写法”。"
      ],
      "pitfalls": [
        "结束条件写成 n==0 后仍访问 a[n-1]。",
        "递归调用写成 sort(a,n)，规模不变，死递归。",
        "忘记 return。"
      ],
      "example": {
        "title": "例6.14 用递归实现数组递增排序",
        "source": "课件 lesson6 · P44-P45",
        "code": "void sort(int a[],int n)\n{\n    int i;\n    if( n==1 )\n        return;\n    else\n    {    \n        for(i=0;i<n-1;i++)\n            if(a[i]>a[i+1])\n            {  \n                int t=a[i];\n                a[i]=a[i+1];\n                a[i+1]=t;\n            }\n        sort(a,n-1);\n    }\n}",
        "output": "数组 a 的前 n 个元素按递增排列",
        "explanation": "每一层递归先用一趟冒泡把当前范围的最大值送到末尾 a[n-1]，这个位置就固定了；然后对前 n-1 个元素重复同样的工作。n 减到 1 时只剩一个元素，递归结束。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "递归结束条件：只剩一个元素。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "void 函数直接返回。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "一趟冒泡，把最大值送到 a[n-1]。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "相邻逆序就交换。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "递归处理前面 n-1 个元素，规模递减。"
          }
        ],
        "blankHints": [
          "递归结束条件：n==1 时 return；递归调用：sort(a,n-1)。"
        ]
      },
      "masteryHint": "能说出每一层递归固定了哪个元素，以及为什么 n 要减 1。",
      "sourcePages": [
        44
      ]
    },
    {
      "id": "l6-ex6-15",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.15 带默认参数的级数求和",
      "tags": [
        "课件例题",
        "默认参数",
        "级数"
      ],
      "overview": "s(x,eps=1e-6) 求 1+x+x^2/2!+x^3/3!+…，当 |t|<eps 时停止。eps 有默认值，调用时可以不传。",
      "keyPoints": [
        "默认参数必须放在形参表最右端。",
        "s(2.0) 只传 x，eps 取默认 1e-6。",
        "s(1.0,1e-5) 显式传入 eps。",
        "通项递推 t=t*x/(n++)，n 从 1 开始。"
      ],
      "pitfalls": [
        "把默认参数放在非默认参数左边。",
        "在函数定义和原型中重复设置默认值。",
        "循环条件写成 fabs(t)<=eps，导致多算一项或死循环。"
      ],
      "example": {
        "title": "例6.15 带默认参数的级数求和",
        "source": "课件 lesson6 · P46",
        "code": "#include  <iostream>\nusing namespace std; \ndouble s(double x , double eps=1e-6)\n{     \n    int n=1; \n    double w=0.0, t=1.0 ;\n    while(fabs(t)>=eps)\n    {\n        w+=t;\n        t=t*x/(n++);\n    }\n    return  w;\n}\nint main()\n{ \n    cout<<\"s1=\"<<s(2.0); \n    cout<<\"s2=\"<<s(3.0);\n    cout<<\"s3=\"<<s(1.0,1e-5);\n    system(\"pause\");\n    return 0;\n} ",
        "output": "s1≈7.38906，s2≈20.0855，s3≈2.71828",
        "explanation": "第一项 t=1 对应 1/0!。每轮把 t 加到 w，再用 t=t*x/(n++) 得到下一项：n 先参与除法再自增，所以第二项是 x/1，第三项是 x^2/2!。eps 控制精度，默认 1e-6。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "默认参数写在最右端，调用时可省略。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "n 从 1 开始，对应 t=t*x/1 得到 x 的一次项。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "当前项还不小于精度就继续累加。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "累加当前项。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "递推下一项：先乘 x 除以 n，再让 n 加 1。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "显式传入 eps，覆盖默认值。"
          }
        ]
      },
      "masteryHint": "能说出 n++ 在 t=t*x/(n++) 中的执行顺序，以及默认参数的位置要求。",
      "sourcePages": [
        46
      ]
    },
    {
      "id": "l6-ex6-16",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.16 函数模板 abs",
      "tags": [
        "课件例题",
        "函数模板",
        "template"
      ],
      "overview": "template <class T> T abs(T x) 用同一个函数体处理 int、double、long，调用时由实参类型自动推导 T。",
      "keyPoints": [
        "template <class T> 声明模板类型参数 T。",
        "class 可以用 typename 替代。",
        "调用 abs(x1)、abs(x2)、abs(x3) 时，T 分别被推导为 int、double、long。",
        "模板参数 T 必须出现在函数形参表中。"
      ],
      "pitfalls": [
        "模板参数 T 没有出现在形参表中，无法推导。",
        "模板函数定义放在 .cpp 中又被其它文件调用，链接可能失败。",
        "把 template 写成 template<typename T,> 多写逗号。"
      ],
      "example": {
        "title": "例6.16 函数模板 abs",
        "source": "课件 lesson6 · P49",
        "code": "template   <class T>\nT abs(T x)\n{return x>0?x:-x; }\nint main()\n{int x1=1;\ndouble x2=2.5;\nlong x3=3L;\ncout<<abs(x1)<<endl;   \ncout<<abs(x2)<<endl; \ncout<<abs(x3)<<endl;\nsystem(\"pause\"); \nreturn 0;\n}",
        "output": "1\n2.5\n3",
        "explanation": "模板不是一个具体函数，而是生成函数的“模具”。编译器看到 abs(x1) 时用 int 替换 T，看到 abs(x2) 时用 double 替换 T，于是生成多个版本。这样不用为每种类型重复写相同的函数体。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "声明模板类型参数 T；class 也可写成 typename。"
          },
          {
            "section": 0,
            "line": 2,
            "text": "返回类型和形参类型都用 T。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "条件运算符求绝对值，对支持 > 和 - 的类型都适用。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "实参是 int，T 推导为 int。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "实参是 double，T 推导为 double。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "实参是 long，T 推导为 long。"
          }
        ]
      },
      "masteryHint": "能解释“调用时用实参类型取代模板类型”这句话。",
      "sourcePages": [
        49
      ]
    },
    {
      "id": "l6-ex6-17",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.17 通用排序函数模板",
      "tags": [
        "课件例题",
        "函数模板",
        "排序"
      ],
      "overview": "template <class TEM> void sort(TEM x[],int n) 用选择法对 int、double、char 数组按递增排序。",
      "keyPoints": [
        "模板参数 TEM 同时用于数组元素类型和临时变量 w。",
        "排序逻辑与普通选择排序完全相同。",
        "sort(a,10)、sort(b,5)、sort(s,strlen(s)) 分别推导出三种类型。",
        "字符数组排序后按 ASCII 码递增。"
      ],
      "pitfalls": [
        "临时变量 w 写成 int，无法处理 double/char。",
        "字符串排序传 strlen(s)，不要传数组总长度。",
        "忘记包含 <cstring> 使用 strlen。"
      ],
      "example": {
        "title": "例6.17 通用排序函数模板",
        "source": "课件 lesson6 · P50",
        "code": "#include <iostream>\nusing namespace std;\ntemplate <class TEM> \nvoid sort(TEM x[],int n) \n{\n    int i,j,k;  \n    TEM w;         \n    for(i=0;i<n-1;i++)\n    {     k=i;\n        for(j=i+1;j<n;j++)\n            if(x[k]>x[j])\n                k=j;\n        if(i!=k)\n        {w=x[i];\n         x[i]=x[k];\n         x[k]=w;}\n    }\n}\nint main()\n{\n    int i,a[10]={6,9,2,4,1,0,7,8,3,5};\n    double b[5]={5.5,8.0,1.8,3.3,0};\n    char s[]=\"Hello world!\";\n    sort(a,10);\n    for(i=0;i<10;i++) \n        cout<<a[i]<<endl; \n    sort(b,5);\n    for(i=0;i<5;i++) \n        cout<<b[i]<<endl;\n    sort(s,strlen(s));\n    cout<<s<<endl;\nsystem(\"pause\");return 0;\n}",
        "output": "整数、实数、字符串分别按递增/ASCII 顺序输出",
        "explanation": "排序算法只依赖“比较”和“赋值”，这两种操作对 int、double、char 都成立，所以可以把元素类型抽成模板参数 TEM。调用时编译器根据数组类型生成对应的 sort 版本。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "声明模板类型参数 TEM。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "数组元素类型由 TEM 决定。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "临时变量也必须是 TEM，才能交换任意类型元素。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "统一的比较方式，要求类型支持 >。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "T 推导为 int。"
          },
          {
            "section": 0,
            "line": 27,
            "text": "T 推导为 double。"
          },
          {
            "section": 0,
            "line": 30,
            "text": "T 推导为 char，只排有效字符，不含 '\\0'。"
          }
        ]
      },
      "masteryHint": "能说出模板参数 TEM 在函数里出现在哪些位置。",
      "sourcePages": [
        50
      ]
    },
    {
      "id": "l6-ex6-18",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.18 自动局部变量示例",
      "tags": [
        "课件例题",
        "局部变量",
        "作用域"
      ],
      "overview": "f 中的 x、y 是自动局部变量，每次调用重新创建、重新初始化；main 中的 k 也是局部变量，只在 main 内可见。",
      "keyPoints": [
        "自动变量作用域从定义点到所在分程序结束。",
        "生存期是分程序的一次执行过程，调用结束就消亡。",
        "未初始化的自动变量值是随机的。",
        "不同函数中的同名变量互不影响。"
      ],
      "pitfalls": [
        "以为局部变量会保留上次调用的值。",
        "使用未初始化的局部变量。",
        "在 main 中访问 f 的局部变量。"
      ],
      "example": {
        "title": "例6.18 自动局部变量示例",
        "source": "课件 lesson6 · P52",
        "code": "#include <iostream>\nusing namespace std;\nint f(int x)\n{\n    x++;\n    int y=5;\n    y++;\n    return x+y;\n}\nint main()\n{\n    int k=2;\n    cout<<f(k)<<endl;\n    cout<<f(k+1)<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "9\n10",
        "explanation": "f(2) 时 x 从 2 变成 3，y 每次调用都重新初始化为 5 再变成 6，返回 9。f(3) 时 x 变成 4，y 仍然是 5→6，返回 10。y 不会记住上一次调用的 6，因为它是自动变量。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "x 是值参数，也是 f 的局部变量。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "x 从实参副本加 1。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "每次调用 f 都重新创建 y 并初始化为 5。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "y 变成 6。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "返回本次调用的 x+y。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "k 是 main 的局部变量，与 f 的 x 无关。"
          }
        ]
      },
      "masteryHint": "能解释为什么两次调用 f 时 y 都从 5 开始。",
      "sourcePages": [
        52
      ]
    },
    {
      "id": "l6-ex6-19",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.19 静态局部变量示例",
      "tags": [
        "课件例题",
        "static",
        "生存期"
      ],
      "overview": "fac 中的 static int f=1 只初始化一次，之后每次调用都沿用上一次的值，因此可以连续计算 1!、2!、3!……",
      "keyPoints": [
        "static 局部变量作用域仍在函数内，但生存期是整个程序。",
        "只在第一次调用时初始化，之后不再执行初始化语句。",
        "未初始化的静态局部变量默认为 0。",
        "适合保存“上一次调用的结果”。"
      ],
      "pitfalls": [
        "以为 static 会扩大作用域。",
        "以为每次调用都会重新执行 f=1。",
        "在递归函数中滥用静态变量，导致结果依赖调用次数。"
      ],
      "example": {
        "title": "例6.19 静态局部变量示例",
        "source": "课件 lesson6 · P53",
        "code": "#include  <iostream>\nusing namespace std;\nint fac(int n) \n{ \n    static int f=1;\n    f=f*n;\n    return(f);\n}\nint main()\n{\n    int i;\n    for(i=1;i<=5;i++)\n        cout<<\"i!=\"<<fac(i)<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "i!=1\ni!=2\ni!=6\ni!=24\ni!=120",
        "explanation": "第一次调用 fac(1) 时 f 初始化为 1，f=1*1=1；第二次调用 fac(2) 时 f 仍然是 1，f=1*2=2；第三次 f=2*3=6……所以每次都在上一次阶乘的基础上再乘 n。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "fac 返回 n!；参数 n 是本次要乘的数。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "静态局部变量，只初始化一次，程序结束时才销毁。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "在上一次结果的基础上乘 n。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "返回当前阶乘值。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "依次调用 fac(1)~fac(5)，观察 f 是否跨调用保留。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "循环依次传入 1~5，f 在调用之间保持。"
          }
        ]
      },
      "masteryHint": "能解释 static 局部变量与自动局部变量在生存期上的差别。",
      "sourcePages": [
        53
      ]
    },
    {
      "id": "l6-ex6-20",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.20 全局变量与局部变量同名",
      "tags": [
        "课件例题",
        "全局变量",
        "同名屏蔽"
      ],
      "overview": "全局 m=10、全局 n；main 中又定义了局部 n=2。f1 修改全局 m，f2 修改全局 n，但 main 输出的是局部 n。",
      "keyPoints": [
        "全局变量作用域从定义点到文件结束，生存期是整个程序。",
        "全局变量未初始化时默认为 0。",
        "局部变量与全局变量同名时，局部变量优先（屏蔽全局）。",
        "f2 中的 n 是全局 n，main 中的 n 是局部 n，二者不是同一个变量。"
      ],
      "pitfalls": [
        "以为 main 中的 n 会被 f2 改成 6。",
        "在函数内想访问被屏蔽的全局变量却没有 :: 限定。",
        "全局变量滥用导致函数之间隐式耦合。"
      ],
      "example": {
        "title": "例6.20 全局变量与局部变量同名",
        "source": "课件 lesson6 · P54",
        "code": "#include  <iostream>\nusing namespace std;\nint m=10;\nvoid f1(int n)\n{ n=2*n;m=m/3; }\nint n;\nvoid f2()\n{ n=5;m++;n++; }\nint main()\n{ int n=2;\nf1(n);\nf2();\ncout<<m<<endl<<n<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "4\n2",
        "explanation": "f1 的形参 n 是局部变量，n=2*n 只改形参；m=m/3 把全局 m 从 10 变成 3。f2 没有局部 n，所以 n=5、n++ 改的是全局 n（变成 6）；m++ 把 m 变成 4。main 中的局部 n 始终是 2，输出 2 而不是 6。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "全局变量，f1、f2、main 都可以访问。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "这里的 n 是 f1 的形参，屏蔽了全局 n。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "整数除法，10/3=3。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "全局 n，未初始化默认为 0。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "f2 没有局部 n，n=5 改的是全局 n。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "main 的局部 n，屏蔽全局 n。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "输出全局 m=4 和 main 的局部 n=2。"
          }
        ]
      },
      "masteryHint": "能指出 f1、f2、main 中的 n 各是哪一個变量。",
      "sourcePages": [
        54
      ]
    },
    {
      "id": "l6-ex6-21",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.21 用 extern 把作用域向前扩展",
      "tags": [
        "课件例题",
        "extern",
        "作用域"
      ],
      "overview": "全局变量 i 定义在 fun、g 之后，为了让前面的函数也能访问，在文件开头写 extern int i; 进行声明。",
      "keyPoints": [
        "extern int i; 是声明，不是定义，不能初始化。",
        "声明把 i 的作用域扩展到声明位置之后。",
        "真正的定义 int i=5; 在文件后面。",
        "扩展的地方不能写初始值。"
      ],
      "pitfalls": [
        "写成 extern int i=5; 这是定义，不是声明。",
        "只写 extern 却没有真正的定义，链接时报未定义。",
        "以为 extern 会分配新内存。"
      ],
      "example": {
        "title": "例6.21 用 extern 把作用域向前扩展",
        "source": "课件 lesson6 · P55",
        "code": "#include  <iostream>\nusing namespace std;\nextern int i;\nvoid fun()\n{ //extern int i; \n    cout<<i<<endl;\n}\nvoid g()\n{i++;}\nint i=5;\nint main()\n{ int j=20;\ncout<<j<<endl; \ng();\nfun();\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "20\n6",
        "explanation": "文件开头的 extern int i; 告诉编译器“i 在别处定义”，于是 fun、g 可以合法使用 i。真正的定义 int i=5; 在后面，程序运行时 i 从 5 开始，g() 让它加 1 变成 6，fun() 输出 6。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "声明全局变量 i，把它的作用域扩展到这一行之后；不能初始化。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "fun 在 i 定义之前，靠 extern 声明才能访问 i。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "g 同样通过 extern 声明访问 i。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "真正的定义，分配存储并初始化为 5。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "i++ 把 i 变成 6。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "输出 6。"
          }
        ]
      },
      "masteryHint": "能区分 extern 声明与定义，并说出扩展处为什么不能初始化。",
      "sourcePages": [
        55
      ]
    },
    {
      "id": "l6-ex6-22",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.22 在函数内用 extern 扩展作用域",
      "tags": [
        "课件例题",
        "extern",
        "局部扩展"
      ],
      "overview": "与例6.21 类似，但把 extern int i; 放进 fun 内部，只在 fun 内扩展 i 的作用域；g 仍通过文件开头的声明访问 i。",
      "keyPoints": [
        "extern 声明可以写在函数内，作用范围只到该函数结束。",
        "文件开头的 extern int i; 仍然为 g 提供声明。",
        "fun 内的 //extern int i; 可以去注释，表示局部扩展。",
        "扩展的位置不能初始化。"
      ],
      "pitfalls": [
        "在函数内写 extern int i=5; 变成定义。",
        "以为函数内的 extern 会影响其它函数。",
        "重复声明导致混淆。"
      ],
      "example": {
        "title": "例6.22 在函数内用 extern 扩展作用域",
        "source": "课件 lesson6 · P55",
        "code": "#include  <iostream>\nusing namespace std;\nextern int i;      //不能初始化\nvoid fun()\n{\n    //extern int i;\n    cout<<i<<endl;\n}\nint i=5;\nint main()\n{\n    int j=20;\n    cout<<j<<endl;  \n    fun();\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "20\n5",
        "explanation": "文件开头的 extern 已经让 fun 能访问 i，所以 fun 内的 extern 可以注释掉。若去掉注释，也只是在 fun 内再次声明，效果相同；但它的作用范围仅限 fun。main 没有调用 g，所以 i 仍是 5。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "文件级声明，为后面的函数提供 i 的可见性。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "函数内声明，作用范围只到 fun 结束；这里被注释掉。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "输出全局 i 的值。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "真正的定义和初始化。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "没有调用 g，i 保持 5。"
          }
        ]
      },
      "masteryHint": "能说出文件级 extern 与函数内 extern 的作用范围差别。",
      "sourcePages": [
        55
      ]
    },
    {
      "id": "l6-ex6-23",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.23 用 extern 把作用域横向扩展到另一个文件",
      "source_note": "多文件示例",
      "tags": [
        "课件例题",
        "extern",
        "多文件"
      ],
      "overview": "file2.cpp 定义全局 max1、min1 和 maxmin 函数；file1.cpp 用 extern 声明这两个变量，并声明 maxmin 函数，从而跨文件访问。",
      "keyPoints": [
        "extern int max1,min1; 在 file1 中声明另一文件定义的全局变量。",
        "函数跨文件使用也要先声明：void maxmin(int x[],int n);",
        "file2 中定义 max1、min1 时不要写 extern。",
        "两个源文件要一起编译链接。"
      ],
      "pitfalls": [
        "两个文件都定义 max1、min1，链接时重复定义。",
        "file1 只写 extern 却没有 file2 的定义。",
        "忘记声明 maxmin 函数。"
      ],
      "example": {
        "title": "例6.23 用 extern 把作用域横向扩展到另一个文件",
        "source": "课件 lesson6 · P56",
        "code": "#include <iostream>\nusing namespace std;\nextern int max1,min1;\nint main()\n{\n    void maxmin(int x[],int n);\n    int a[10]={11,2,3,-4,5,6,7,8,0,20};\n    maxmin(a,10);\n    cout<<max1<<\" \"<<min1<<endl;\nsystem(\"pause\");\nreturn 0;\n}\n\nint max1,min1;\nvoid maxmin(int x[],int n)\n{\n    max1=x[0];\n    min1=x[0];\n    for(int i=0;i<n;i++)\n    {\n        if(x[i]>max1)\n            max1=x[i];\n        if(x[i]<min1)\n            min1=x[i];\n    }\n}",
        "output": "20 -4",
        "explanation": "file2 中的 max1、min1 是定义，分配存储；file1 中的 extern 只是声明，告诉编译器“这两个变量在别的文件里”。maxmin 在 file2 中定义，file1 通过函数声明调用它。链接器把两个目标文件合在一起。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "跨文件声明，不分配存储。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "函数声明，告诉 file1 这个函数在别处定义。"
          },
          {
            "section": 1,
            "line": 2,
            "text": "file2.cpp 中 maxmin 的定义；它使用 file1 里 extern 声明的 max1、min1。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "真正的定义，未初始化默认为 0。"
          },
          {
            "section": 1,
            "line": 4,
            "text": "用第一个元素初始化最大值。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "输出 20 和 -4。"
          }
        ],
        "sections": [
          {
            "label": "file1.cpp",
            "code": "#include <iostream>\nusing namespace std;\nextern int max1,min1;\nint main()\n{\n    void maxmin(int x[],int n);\n    int a[10]={11,2,3,-4,5,6,7,8,0,20};\n    maxmin(a,10);\n    cout<<max1<<\" \"<<min1<<endl;\nsystem(\"pause\");\nreturn 0;\n}"
          },
          {
            "label": "file2.cpp",
            "code": "int max1,min1;\nvoid maxmin(int x[],int n)\n{\n    max1=x[0];\n    min1=x[0];\n    for(int i=0;i<n;i++)\n    {\n        if(x[i]>max1)\n            max1=x[i];\n        if(x[i]<min1)\n            min1=x[i];\n    }\n}"
          }
        ]
      },
      "masteryHint": "能说出哪个文件写 extern、哪个文件写定义，以及为什么要一起编译。",
      "sourcePages": [
        56
      ]
    },
    {
      "id": "l6-ex6-24",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.24 验证哥德巴赫猜想",
      "tags": [
        "课件例题",
        "素数",
        "函数",
        "嵌套循环"
      ],
      "overview": "isprime(m) 判断素数；主函数对 6~x 的每个偶数 n，从 a=3 开始找素数 a，若 b=n-a 也是素数就输出一组分解。",
      "keyPoints": [
        "isprime 用 for(i=2;m%i!=0;i++); 找到第一个因子或走到 m。",
        "return (i==m) 表示没有因子，m 是素数。",
        "偶数 n 从 6 开始，每次加 2。",
        "a 从 3 开始每次加 2，保证 a 是奇数；b=n-a 后判断 b 是否素数。"
      ],
      "pitfalls": [
        "isprime 中循环条件写成 i<m，导致 i 永远不等于 m。",
        "a 从 2 开始，n-a 仍是偶数，除 2 外不可能是素数。",
        "忘记 break，一个 n 输出多组分解。"
      ],
      "example": {
        "title": "例6.24 验证哥德巴赫猜想",
        "source": "课件 lesson6 · P58-P59",
        "code": "#include <iostream>\nusing namespace std;\nint isprime(int m)\n{\n    int i;\n    for(i=2;m%i!=0;i++);\n    return ( i==m );\n}\nint main()\n{\n    int n,x,a,b;\n    cin>>x;\n    for(n=6;n<=x; n+=2 )\n        for(a=3;a<=n/2;a+=2)\n            if( isprime(a) )\n            {\n                b=n-a;\n                if(isprime(b))\n                {\n                    cout<<n<<\"=\"<<a<<\"+\"<<b<<endl;\n                    break; //退出内循环，判别下一个n\n                }\n            }\nsystem(\"pause\");\nreturn 0; \n}  ",
        "output": "输入 20：6=3+3，8=3+5，10=3+7，12=5+7，14=3+11，16=3+13，18=5+13，20=3+17",
        "explanation": "isprime 的 for 循环没有循环体，i 从 2 开始一直加到能整除 m 或等于 m。若 i==m，说明 2~m-1 都不能整除，m 是素数。主函数对每个偶数 n，从小到大找第一个素数 a，使 b=n-a 也为素数，找到后 break，避免重复输出。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "空循环体；i 停在第一个能整除 m 的数，或停在 m。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "i==m 表示没有因子，返回 1；否则返回 0。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "只处理 6 以上的偶数。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "a 只取奇数，且不超过 n 的一半，避免重复。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "先保证 a 是素数。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "由 n=a+b 算出 b。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "再保证 b 也是素数。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "找到一组就退出内层，处理下一个 n。"
          }
        ]
      },
      "masteryHint": "能解释 isprime 的空循环为什么能判断素数，以及 a 为什么从 3 开始。",
      "sourcePages": [
        58
      ]
    },
    {
      "id": "l6-ex6-25",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.25 用 itoc 把数字转成字符串",
      "tags": [
        "课件例题",
        "数字转字符串",
        "reverse",
        "填空"
      ],
      "overview": "itoc 先处理符号，再用 n%10+'0' 逐位取数字字符，最后 reverse 反转，得到 \"-123\" 这样的字符串。",
      "keyPoints": [
        "sign=n 保存原数符号，若为负则 n=-n。",
        "n%10+'0' 把数字 0~9 转成字符 '0'~'9'。",
        "取位顺序是个位在前，所以最后要 reverse。",
        "reverse 用 strlen(s)-1 作为右端下标。"
      ],
      "pitfalls": [
        "忘记处理负数符号。",
        "n%10+'0' 写成 n%10（得到数字而不是字符）。",
        "reverse 的 j 初值写成 strlen(s)。"
      ],
      "example": {
        "title": "例6.25 用 itoc 把数字转成字符串",
        "source": "课件 lesson6 · P60-P61",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    void itoc(int,char []);\n    int n;char s[100];\n    cin>>n;\n    itoc(n,s);\n    cout<<s<<endl;\nsystem(\"pause\");\nreturn 0;\n}\nvoid itoc(int n,char s[])\n{\n    void reverse(char []);\n    int i=0; int sign;\n    if((sign=n)<0)\n        n=-n;\n    do\n    {\n        s[i]= n%10+'0' ;\n        i++;\n        n=n/10;\n    }while (n>0);\n    if(sign<0)\n        s[i++]='-';\n    s[i]='\\0';\n    reverse(s);\n}\nvoid reverse(char s[])\n{\n    int c,i,j;\n    j= strlen(s)-1 ;\n    for(i=0;i<j;i++,j--)\n    {\n        c=s[i];\n        s[i]=s[j];\n        s[j]=c;\n    }\n    s[i+j+1]='\\0';\n}",
        "output": "输入 -123 时输出 -123",
        "explanation": "do-while 每次取 n 的最低位，转成字符后存入 s，所以得到的是倒序（如 321）。负数在取位前先取绝对值，最后再补 '-'。reverse 用双指针从两端向中间交换，把倒序恢复成正序。",
        "notes": [
          {
            "section": 0,
            "line": 17,
            "text": "先把 n 赋给 sign，再判断是否为负；括号不能省。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "负数取绝对值，后续只处理数字部分。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "取最低位并加上 '0' 的 ASCII 码，变成字符。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "去掉已经处理的最低位。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "直到 n 为 0；do-while 保证 0 也能处理。"
          },
          {
            "section": 0,
            "line": 26,
            "text": "负数在末尾补负号，反转后会到最前面。"
          },
          {
            "section": 0,
            "line": 27,
            "text": "补字符串结束符。"
          },
          {
            "section": 0,
            "line": 33,
            "text": "j 指向最后一个有效字符。"
          },
          {
            "section": 0,
            "line": 40,
            "text": "反转后重新补结束符。"
          }
        ]
      },
      "masteryHint": "能手工模拟 -123 的取位、补负号、反转过程。",
      "sourcePages": [
        60
      ]
    },
    {
      "id": "l6-ex6-26",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.26 协同过滤推荐化妆品",
      "tags": [
        "课件例题",
        "二维数组",
        "余弦相似度",
        "推荐"
      ],
      "overview": "用余弦相似度找与 target 最相似的客户，再把该客户评分高于阈值、而 target 未购买的商品推荐给 target。",
      "keyPoints": [
        "getSimilarity 计算两个评分向量的余弦相似度。",
        "getSimCustomer 遍历所有客户，记录相似度最高的下标 id。",
        "推荐条件：target[i]==0 && scores[id][i]>THRESHOLD。",
        "二维数组作形参时省略第一维，第二维写 NUMOFGOODS。"
      ],
      "pitfalls": [
        "相似度公式漏掉分母的 sqrt。",
        "推荐条件写成 target[i]>0。",
        "二维数组形参第二维没写常量。"
      ],
      "example": {
        "title": "例6.26 协同过滤推荐化妆品",
        "source": "课件 lesson6 · P62-P64",
        "code": "const int NUMOFCUSTOMERS = 5;  //客户数\nconst int NUMOFGOODS = 5;             //商品数\nconst double THRESHOLD = 3;\n//阈值\n#include <iostream>\nusing namespace std;\ndouble getSimilarity(int x[], int y[], int n) \n{ \n    double s;\n    double k = 0, m = 0, p = 0;\n    for (int i = 0; i < n; i++) \n    {\n        k = k + x[i] * y[i];\n        m = m + x[i] * x[i];\n        p = p + y[i] * y[i]; \n    }\n    s = k / sqrt(m) / sqrt(p);\n    return s;\n}\nint getSimCustomer(int target[], int scores[][NUMOFGOODS], int m)\n{  int id = -1;\n   double max = -100, s;\n   for (int i = 0; i < m; i++)\n   {  s = getSimilarity(target, scores[i], NUMOFGOODS) ;\n      if (s > max) \n      {    id = i;    max = s; }\n   }\n   return id;\n}\nint main() \n{    char cosmetics[][20] = { \"润肤露\",\"口红\",\"晚霜\",\"眼影\",\"粉饼\" };//化妆品的名称\n     int scores[][NUMOFGOODS] = { {5,4,0,2,4},{1,5,4,0,0},{0,0,3,5,0},{4,2,3,1,5},{5,3,1,4,3} };//客户评分\n     int target[] = { 5,4,0,0,0 };\n     //目标客户小张对化妆品的评分  \n     int id;\n     id = getSimCustomer(target, scores, NUMOFCUSTOMERS) ;\n     cout << \"推荐购买：\\n\";\n     for (int i = 0; i < NUMOFGOODS; i++)\n         if ( target[i] == 0 && scores[id][i] > THRESHOLD )\n             cout << cosmetics[i] << '\\n';\nsystem(\"pause\"); return 0;\n}",
        "output": "推荐购买：\n粉饼",
        "explanation": "余弦相似度衡量两个评分向量的方向是否接近：分子是点积，分母是两个向量长度的乘积。小张与客户 A 的相似度最高；客户 A 买过晚霜、眼影、粉饼，其中只有粉饼评分 4 大于阈值 3，且小张评分为 0（未购买），所以推荐粉饼。",
        "notes": [
          {
            "section": 0,
            "line": 7,
            "text": "x、y 是两个客户的评分数组，n 是商品数。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "k 是点积，m、p 分别是两个向量的平方和。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "余弦相似度 = 点积 /（两向量模长之积），结果在 -1~1 之间。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "id 保存最相似客户的下标，-1 表示还没找到。"
          },
          {
            "section": 0,
            "line": 22,
            "text": "相似度最小是 -1，用 -100 作初值保证第一个客户一定被选中。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "把目标客户与第 i 个客户比较，得到相似度 s。"
          },
          {
            "section": 0,
            "line": 25,
            "text": "相似度更高就更新 id 和 max，循环结束得到最近邻居。"
          },
          {
            "section": 0,
            "line": 33,
            "text": "小张只买过润肤露和口红，其余商品评分为 0。"
          },
          {
            "section": 0,
            "line": 39,
            "text": "推荐条件：小张没买过，且最相似客户评分超过阈值 3。"
          },
          {
            "section": 0,
            "line": 40,
            "text": "输出商品名称，cosmetics[i] 与评分下标一一对应。"
          }
        ],
        "blankHints": [
          "相似度：s=getSimilarity(target,scores[i],NUMOFGOODS)。",
          "最近邻居：id=getSimCustomer(target,scores,NUMOFCUSTOMERS)。",
          "推荐条件：target[i]==0&&scores[id][i]>THRESHOLD。"
        ]
      },
      "masteryHint": "能写出余弦相似度公式，并说出推荐条件的两个部分。",
      "sourcePages": [
        62
      ]
    },
    {
      "id": "l6-ex6-27",
      "lessonId": "lesson6",
      "kind": "example",
      "title": "例6.27 统计字母出现次数并找出最多者",
      "tags": [
        "课件例题",
        "字符统计",
        "引用参数",
        "strlwr"
      ],
      "overview": "freq 用 p[26] 统计每个字母出现次数，用引用参数 chmax、max 带回出现最多的字母和次数。",
      "keyPoints": [
        "p[0] 存 'a' 的次数，p[25] 存 'z' 的次数。",
        "k=s[i]-'a' 把字母映射到 0~25 的下标。",
        "strlwr(s) 把字符串转成小写，统一统计。",
        "chmax、max 是引用参数，函数可以把两个结果都带回。"
      ],
      "pitfalls": [
        "下标写成 s[i]-'A' 但没有转大写。",
        "只统计字母却把非字母也映射，导致越界。",
        "max 初值取 0，字符串没有字母时结果不对。"
      ],
      "example": {
        "title": "例6.27 统计字母出现次数并找出最多者",
        "source": "课件 lesson6 · P65-P66",
        "code": "#include <iostream>\nusing namespace std;\nvoid freq(char s[],int p[],char &chmax,int &max)\n{ int i;\n    for(i=0;i<26;i++)\n        p[i]=0;\n    strlwr(s);\n    i=0;\n    while(s[i]!='\\0')\n    {\n        if(s[i]>='a'&&s[i]<='z')\n            p[(s[i]-'a')]++;\n        i++;\n    }\n    max=p[0];\n    int k=0;\n    for(i=1;i<26;i++)\n        if(p[i]>max)\n        { max=p[i]; k=i; }\n    chmax=k+'a';\n}\nint main()\n{  \n    int p[26],i,max;    \n    char s[80],chmax;\n    gets(s);   \n    freq(s,p,chmax,max);\n    for(i=0;i<26;i++)\n        if(p[i])\n            cout<<char(i+'a')<<\"----\"<<p[i]<<endl;\n    cout<<chmax<<\"----\"<<max<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 Hello 时：e----1，h----1，l----2，o----1，l----2",
        "explanation": "先把 26 个计数器清零，再把字符串统一转小写。遍历每个字符，只有 a~z 才用 s[i]-'a' 映射到 0~25 并计数。最后从 p[0] 开始找最大值，k 记录最大值下标，chmax=k+'a' 还原成字母。",
        "notes": [
          {
            "section": 0,
            "line": 5,
            "text": "统计前必须把 26 个计数器清零。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "统一转小写，避免大小写分开统计。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "只统计字母，其它字符跳过。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "字母映射到 0~25 的下标并加 1。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "先假设 'a' 出现最多。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "发现更多就更新 max 和下标 k。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "把下标还原成字母。"
          },
          {
            "section": 0,
            "line": 27,
            "text": "引用参数把 chmax、max 带回主函数。"
          }
        ]
      },
      "masteryHint": "能写出字母到下标的映射，并解释两个引用参数的作用。",
      "sourcePages": [
        65
      ]
    },
    {
      "id": "l6-function-basics",
      "lessonId": "lesson6",
      "title": "函数的定义、调用与返回",
      "tags": [
        "函数定义",
        "return",
        "void",
        "函数调用"
      ],
      "overview": "函数把相对独立的功能封装起来，通过参数接收输入、通过返回值给出结果。函数定义必须位于其他函数之外，程序仍从 main 开始执行。",
      "keyPoints": [
        "函数头由返回类型、函数名和形参表组成。",
        "无返回值时返回类型写 void；非 void 函数应返回与类型兼容的值。",
        "函数体不能嵌套定义另一个函数。",
        "函数调用可出现在表达式或独立语句中；void 函数通常作为语句调用。",
        "形参只在调用发生时分配存储空间，调用结束后局部对象通常销毁。"
      ],
      "pitfalls": [
        "把函数定义写进另一个函数体。",
        "非 void 函数执行到末尾却没有 return。",
        "void 函数写 return 值；void 函数中的 return 不能带表达式。",
        "把函数调用与函数声明混淆。"
      ],
      "exercise": {
        "prompt": "编写函数 square，接收一个 int 并返回它的平方；在 main 中输出 square(7)。",
        "starter": "#include <iostream>\n\n// 定义 square\n\nint main() {\n    // 调用并输出\n    return 0;\n}",
        "hint": "函数头可写 int square(int x)。",
        "checks": [
          {
            "label": "定义返回 int 的 square",
            "pattern": "\\bint\\s+square\\s*\\(\\s*int\\s+\\w+\\s*\\)\\s*\\{"
          },
          {
            "label": "返回参数平方",
            "pattern": "\\breturn\\s+[^;]*(?:\\w+\\s*\\*\\s*\\w+|std\\s*::\\s*pow\\s*\\()"
          },
          {
            "label": "调用 square(7)",
            "pattern": "\\bsquare\\s*\\(\\s*7\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    cout << square(7);\n    return 0;\n}",
        "explanation": "函数把平方计算封装起来。参数 x 是形参，调用 square(7) 时复制实参 7 给 x。",
        "commonMistakes": [
          "函数体写在 main 内部。",
          "返回类型写成 void 却尝试输出返回值。",
          "返回 x * 2，误把平方写成两倍。"
        ]
      },
      "masteryHint": "能写出定义、调用和返回完整的自定义函数。"
    },
    {
      "id": "l6-prototype",
      "lessonId": "lesson6",
      "title": "函数原型与先声明后调用",
      "tags": [
        "函数声明",
        "函数原型",
        "编译顺序"
      ],
      "overview": "当函数调用出现在定义之前，编译器需要先看到函数原型，才能检查参数个数、类型和返回类型。",
      "keyPoints": [
        "函数声明以分号结束，函数定义以函数体结束。",
        "原型中的参数名可以省略，但类型顺序必须保留。",
        "声明与定义在返回类型、函数名和参数类型上必须一致。",
        "只声明不定义时，编译可能通过，但链接阶段会找不到函数实现。",
        "函数原型可放在调用函数内部，也可放在源文件开头。"
      ],
      "pitfalls": [
        "声明写成 int add(int a, int b) 却漏掉分号。",
        "声明与定义的参数类型不一致。",
        "把原型当作实现，忘记编写函数体。",
        "认为链接错误一定是语法错误。"
      ],
      "exercise": {
        "prompt": "已有 int add(int,int); 声明。请补充 add 的定义，并在 main 中输出 add(4, 6)。",
        "starter": "#include <iostream>\n\nint add(int, int);\n\nint main() {\n    // 输出 add(4, 6)\n    return 0;\n}\n\n// 补充定义",
        "hint": "定义包含函数头和花括号中的函数体。",
        "checks": [
          {
            "label": "定义 add 函数体",
            "pattern": "\\bint\\s+add\\s*\\([^;{}]*\\)\\s*\\{"
          },
          {
            "label": "返回两参数之和",
            "pattern": "\\breturn\\s+[^;]*(?:\\w+\\s*\\+\\s*\\w+)"
          },
          {
            "label": "调用 add(4, 6)",
            "pattern": "\\badd\\s*\\(\\s*4\\s*,\\s*6\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint add(int, int);\n\nint main() {\n    cout << add(4, 6);\n    return 0;\n}\n\nint add(int a, int b) {\n    return a + b;\n}",
        "explanation": "声明解决调用顺序问题，定义提供真正实现。",
        "commonMistakes": [
          "只保留声明，没有函数体。",
          "定义写成 int add(int a, int b); 仍缺函数体。",
          "参数类型与声明不一致。"
        ]
      },
      "masteryHint": "能解释声明、定义和链接错误之间的关系。"
    },
    {
      "id": "l6-value-parameter",
      "lessonId": "lesson6",
      "title": "值参数：传递的是副本",
      "tags": [
        "值传递",
        "形参",
        "实参",
        "交换"
      ],
      "overview": "值参数把实参的值复制给形参。被调函数修改形参，不会改变调用者中的实参对象。",
      "keyPoints": [
        "实参可以是常量、变量或表达式。",
        "形参是函数内部的局部变量。",
        "值传递适合只读取输入、不要求回传修改的函数。",
        "仅交换两个值参数，只交换函数内部的副本。",
        "若需要回传修改，可使用引用参数、指针参数或返回结果。"
      ],
      "pitfalls": [
        "用 void swap(int x, int y) 交换后以为 main 中 a、b 会变化。",
        "把值参数和引用参数都当作同一块内存。",
        "为了“省内存”盲目使用引用，却意外修改实参。"
      ],
      "exercise": {
        "prompt": "编写 int twice(int x)，返回 2*x，不改动 main 中的变量；main 输出 twice(9)。",
        "starter": "#include <iostream>\n\n// 定义 twice\n\nint main() {\n    // 输出 twice(9)\n    return 0;\n}",
        "hint": "此题只需要读取参数并返回结果。",
        "checks": [
          {
            "label": "定义 twice",
            "pattern": "\\bint\\s+twice\\s*\\(\\s*int\\s+\\w+\\s*\\)\\s*\\{"
          },
          {
            "label": "返回参数两倍",
            "pattern": "\\breturn\\s+[^;]*(?:\\w+\\s*\\*\\s*2|2\\s*\\*\\s*\\w+)"
          },
          {
            "label": "调用 twice(9)",
            "pattern": "\\btwice\\s*\\(\\s*9\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint twice(int x) {\n    return 2 * x;\n}\n\nint main() {\n    cout << twice(9);\n    return 0;\n}",
        "explanation": "twice 接收的是值副本，但计算结果通过 return 返回给 main。",
        "commonMistakes": [
          "参数写成引用，虽然本题仍可运行，但语义不再是只读值传递。",
          "返回 x + 2。",
          "在 twice 中输出而没有返回结果。"
        ]
      },
      "masteryHint": "能预测值传递后实参是否改变。"
    },
    {
      "id": "l6-reference-parameter",
      "lessonId": "lesson6",
      "title": "引用参数与真正的交换",
      "tags": [
        "引用",
        "别名",
        "swap",
        "输出参数"
      ],
      "overview": "引用参数是实参的别名，与实参共用同一对象。通过引用参数可以修改实参，也能让一个函数返回多个结果。",
      "keyPoints": [
        "定义形式为 类型& 引用名，例如 int& x。",
        "引用必须在定义时绑定到某个对象。",
        "引用参数调用时直接传变量名，不需要 &。",
        "不需要修改实参时，可写 const 类型&，既避免复制又保护实参。",
        "一个函数可以同时通过 return 和一个或多个引用参数返回信息。"
      ],
      "pitfalls": [
        "把引用参数定义成 int &x = 0 这类无法绑定到临时对象的引用。",
        "调用时错误地写 swap(&a, &b)。",
        "以为 const 引用参数也能修改。",
        "引用参数返回局部变量引用，产生悬空引用。"
      ],
      "exercise": {
        "prompt": "编写 void minMax(int a, int b, int& minValue, int& maxValue)，把较小值和较大值写回引用参数；main 中 a=8、b=3，输出两个结果。",
        "starter": "#include <iostream>\n\n// 定义 minMax\n\nint main() {\n    int a = 8, b = 3, lo, hi;\n    // 调用并输出 lo、hi\n    return 0;\n}",
        "hint": "函数内给 minValue、maxValue 赋值即可修改 main 中的 lo、hi。",
        "checks": [
          {
            "label": "引用输出参数",
            "pattern": "\\bint\\s*&\\s*minValue\\s*,\\s*int\\s*&\\s*maxValue"
          },
          {
            "label": "写入较小值",
            "pattern": "minValue\\s*=\\s*[^;]+"
          },
          {
            "label": "写入较大值",
            "pattern": "maxValue\\s*=\\s*[^;]+"
          },
          {
            "label": "调用 minMax(a, b, lo, hi)",
            "pattern": "\\bminMax\\s*\\(\\s*a\\s*,\\s*b\\s*,\\s*lo\\s*,\\s*hi\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid minMax(int a, int b, int& minValue, int& maxValue) {\n    if (a < b) {\n        minValue = a;\n        maxValue = b;\n    } else {\n        minValue = b;\n        maxValue = a;\n    }\n}\n\nint main() {\n    int a = 8, b = 3, lo, hi;\n    minMax(a, b, lo, hi);\n    cout << lo << ' ' << hi;\n    return 0;\n}",
        "explanation": "引用参数让函数能同时写出两个结果。调用时直接传 lo、hi。",
        "commonMistakes": [
          "把 lo、hi 传成地址，导致参数类型不匹配。",
          "只写一个引用参数，无法返回两个结果。",
          "条件分支写反，最小值和最大值互换。"
        ]
      },
      "masteryHint": "能区分值参数与引用参数，并用引用回传多个结果。"
    },
    {
      "id": "l6-pointer-parameter",
      "lessonId": "lesson6",
      "title": "指针参数：修改所指对象还是指针本身",
      "tags": [
        "指针参数",
        "解引用",
        "地址",
        "多个输出"
      ],
      "overview": "指针参数接收地址。若函数修改 *p，会改变 p 所指对象；若只修改 p 自身，只改变函数内的指针副本。",
      "keyPoints": [
        "调用指针参数函数时通常传入变量地址，如 swap(&a, &b)。",
        "交换所指内容应写 int t = *x; *x = *y; *y = t;。",
        "只交换形参指针 x、y，不会交换 main 中的两个对象。",
        "数组名作实参时会转换为首元素地址。",
        "指针参数可以有多个输出，但要确保调用者提供的地址有效。"
      ],
      "pitfalls": [
        "在 swap 中只交换 x、y 两个指针变量。",
        "忘记解引用，直接比较或交换地址。",
        "向函数传入未初始化指针的地址。",
        "把“修改指针本身”和“修改所指内容”混为一谈。"
      ],
      "exercise": {
        "prompt": "编写 void sumDiff(int a, int b, int* sum, int* diff)，通过指针参数返回 a+b 和 a-b；main 输出 10 与 4 的结果。",
        "starter": "#include <iostream>\n\n// 定义 sumDiff\n\nint main() {\n    int s, d;\n    // 调用并输出 s、d\n    return 0;\n}",
        "hint": "函数内用 *sum、*diff 给调用者对象赋值。",
        "checks": [
          {
            "label": "两个指针输出参数",
            "pattern": "\\bint\\s*\\*\\s*sum\\s*,\\s*int\\s*\\*\\s*diff"
          },
          {
            "label": "写入 *sum",
            "pattern": "\\*\\s*sum\\s*=\\s*[^;]+"
          },
          {
            "label": "写入 *diff",
            "pattern": "\\*\\s*diff\\s*=\\s*[^;]+"
          },
          {
            "label": "调用时传地址",
            "pattern": "\\bsumDiff\\s*\\([^)]*&\\s*s\\s*,\\s*&\\s*d\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid sumDiff(int a, int b, int* sum, int* diff) {\n    *sum = a + b;\n    *diff = a - b;\n}\n\nint main() {\n    int s, d;\n    sumDiff(7, 3, &s, &d);\n    cout << s << ' ' << d;\n    return 0;\n}",
        "explanation": "指针参数通过解引用写入调用者对象。",
        "commonMistakes": [
          "写成 sum = a + b，只修改函数内指针副本。",
          "调用时直接传 s、d 而不是地址。",
          "混淆 *sum 与 sum。"
        ]
      },
      "masteryHint": "能追踪指针参数中的地址、指针变量和所指对象。"
    },
    {
      "id": "l6-array-parameter",
      "lessonId": "lesson6",
      "title": "数组名作函数参数",
      "tags": [
        "数组参数",
        "地址传递",
        "长度",
        "字符串"
      ],
      "overview": "数组名传入函数时通常转换为首元素地址，因此函数对元素的修改会影响原数组。函数通常还要额外接收元素个数。",
      "keyPoints": [
        "形参可写 int a[] 或 int* a；两者本质上都是指针参数。",
        "一维数值数组的函数通常需要传入长度 n。",
        "二维数组形参可省略第一维长度，但必须给出后续维长度，如 int a[][4]。",
        "数组名是地址常量，不能对它赋值或执行 ++。",
        "修改形参数组元素会影响实参数组；修改形参指针本身只影响局部指针。"
      ],
      "pitfalls": [
        "在函数内用 n = sizeof(a) / sizeof(a[0]) 求长度，数组形参此时已退化为指针。",
        "形参写成 int a[n] 却希望 n 在编译期未知。",
        "忘记传数组长度，导致越界。",
        "以为数组传参会复制整个数组。"
      ],
      "exercise": {
        "prompt": "编写 void addOne(int a[], int n)，把数组中每个元素加 1；main 中数组为 {1,2,3}，调用后输出 2 3 4。",
        "starter": "#include <iostream>\n\n// 定义 addOne\n\nint main() {\n    int a[3] = {1, 2, 3};\n    // 调用并输出\n    return 0;\n}",
        "hint": "遍历 i=0 到 n-1，对 a[i] 执行 ++。",
        "checks": [
          {
            "label": "数组和长度参数",
            "pattern": "\\bvoid\\s+addOne\\s*\\(\\s*int\\s+\\w+\\s*\\[\\s*\\]\\s*,\\s*int\\s+\\w+\\s*\\)"
          },
          {
            "label": "循环到 n",
            "pattern": "for\\s*\\([^;]*;[^;]*<\\s*n\\s*;"
          },
          {
            "label": "元素加一",
            "pattern": "\\+\\+\\s*\\w+\\s*\\[[^\\]]+\\]|\\w+\\s*\\[[^\\]]+\\]\\s*\\+=\\s*1"
          },
          {
            "label": "调用 addOne(a, 3)",
            "pattern": "\\baddOne\\s*\\(\\s*a\\s*,\\s*3\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid addOne(int a[], int n) {\n    for (int i = 0; i < n; ++i) {\n        ++a[i];\n    }\n}\n\nint main() {\n    int a[3] = {1, 2, 3};\n    addOne(a, 3);\n    for (int i = 0; i < 3; ++i) {\n        cout << a[i] << ' ';\n    }\n    return 0;\n}",
        "explanation": "数组参数传递的是地址，长度必须额外传入。",
        "commonMistakes": [
          "函数内用 sizeof(a) 求元素个数。",
          "循环条件写成 i <= n，导致越界。",
          "在 main 中写成 addOne(a[3], 3)。"
        ]
      },
      "masteryHint": "能正确传入数组和长度，并解释修改为何能回传。"
    },
    {
      "id": "l6-return-pointer",
      "lessonId": "lesson6",
      "title": "返回指针的函数与生命周期",
      "tags": [
        "返回指针",
        "NULL",
        "const",
        "生命周期"
      ],
      "overview": "函数可以返回指针，但返回值必须指向调用后仍然有效的对象。绝不能返回局部自动变量的地址。",
      "keyPoints": [
        "声明形式如 char* findChar(char s[], char ch)。",
        "返回数组中某元素的地址时，数组必须由调用者持有，且在调用后仍存在。",
        "找不到目标时可返回 NULL/NULL，调用者必须检查。",
        "const char* 表示不能通过该指针修改所指字符。",
        "返回局部数组或局部变量地址会产生悬空指针。"
      ],
      "pitfalls": [
        "返回函数内部局部数组的地址。",
        "调用者未检查返回值是否为 NULL 就解引用。",
        "返回 char* 却让调用者误以为可以写只读字符串常量。",
        "返回指向已经 delete 的内存的指针。"
      ],
      "exercise": {
        "prompt": "编写 int* findValue(int a[], int n, int target)，找到 target 时返回其地址，否则返回 NULL；main 中查找 5。",
        "starter": "#include <iostream>\n\n// 定义 findValue\n\nint main() {\n    int a[4] = {2, 5, 8, 9};\n    // 调用并检查返回值\n    return 0;\n}",
        "hint": "循环遍历数组，匹配时写 return &a[i]。",
        "checks": [
          {
            "label": "返回 int 指针",
            "pattern": "\\bint\\s*\\*\\s*findValue\\s*\\("
          },
          {
            "label": "返回元素地址",
            "pattern": "\\breturn\\s*&\\s*\\w+\\s*\\[[^\\]]+\\]"
          },
          {
            "label": "找不到返回空指针",
            "pattern": "\\breturn\\s+(?:NULL|NULL)\\s*;"
          },
          {
            "label": "检查返回值",
            "pattern": "\\bif\\s*\\(\\s*\\w+\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint* findValue(int a[], int n, int target) {\n    for (int i = 0; i < n; ++i) {\n        if (a[i] == target) return &a[i];\n    }\n    return NULL;\n}\n\nint main() {\n    int a[4] = {2, 5, 8, 9};\n    int* p = findValue(a, 4, 5);\n    if (p) cout << *p;\n    return 0;\n}",
        "explanation": "返回指针后，调用者要通过解引用读取值，并检查是否为空。",
        "commonMistakes": [
          "返回局部变量 i 的地址。",
          "找不到时返回 0 地址却不说明，随后直接解引用。",
          "返回 a[i] 的值而不是地址。"
        ]
      },
      "masteryHint": "能写出安全的返回指针函数并检查空指针。"
    },
    {
      "id": "l6-recursion",
      "lessonId": "lesson6",
      "title": "递归函数：终止条件与规模递减",
      "tags": [
        "递归",
        "终止条件",
        "阶乘",
        "斐波那契"
      ],
      "overview": "递归函数直接或间接调用自身。可靠的递归必须有明确的终止条件，并保证每次调用都向终止条件靠近。",
      "keyPoints": [
        "递归分“递推”和“回归”两个阶段。",
        "终止条件给出最小规模问题的直接答案。",
        "递归表达式必须让问题规模减小，例如 n 变为 n-1。",
        "递归过深可能造成栈溢出。",
        "斐波那契的直接递归实现简单，但重复计算较多。"
      ],
      "pitfalls": [
        "缺少终止条件，导致无限递归。",
        "终止条件无法到达，如递归仍调用相同 n。",
        "把 n==1 的边界漏掉。",
        "递归函数使用未初始化局部变量作为累积器。"
      ],
      "exercise": {
        "prompt": "编写递归函数 int sumTo(int n)，返回 1+2+...+n，并输出 sumTo(5)。",
        "starter": "#include <iostream>\n\n// 定义递归 sumTo\n\nint main() {\n    // 输出 sumTo(5)\n    return 0;\n}",
        "hint": "终止条件可为 n<=0 时返回 0，否则返回 n + sumTo(n-1)。",
        "checks": [
          {
            "label": "定义 sumTo",
            "pattern": "\\bint\\s+sumTo\\s*\\(\\s*int\\s+\\w+\\s*\\)\\s*\\{"
          },
          {
            "label": "存在终止返回",
            "pattern": "\\bif\\s*\\([^)]*(?:<=\\s*0|==\\s*0)[^)]*\\)\\s*return\\s+0"
          },
          {
            "label": "递归调用 sumTo",
            "pattern": "\\bsumTo\\s*\\(\\s*\\w+\\s*-\\s*1\\s*\\)"
          },
          {
            "label": "输出 sumTo(5)",
            "pattern": "\\bsumTo\\s*\\(\\s*5\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint sumTo(int n) {\n    if (n <= 0) return 0;\n    return n + sumTo(n - 1);\n}\n\nint main() {\n    cout << sumTo(5);\n    return 0;\n}",
        "explanation": "每次把 n 减 1，最终到达 0 的直接答案。",
        "commonMistakes": [
          "缺少 n<=0 的终止条件。",
          "递归参数仍写 sumTo(n)，规模不减小。",
          "返回 n * sumTo(n-1)，把求和写成乘积。"
        ]
      },
      "masteryHint": "能独立写出带终止条件和规模递减的递归函数。"
    },
    {
      "id": "l6-default-template",
      "lessonId": "lesson6",
      "title": "默认参数与函数模板",
      "tags": [
        "默认参数",
        "template",
        "泛型",
        "C++"
      ],
      "overview": "默认参数允许调用时省略最右侧实参；函数模板用类型参数生成适用于多种类型的通用函数。",
      "keyPoints": [
        "带默认值的形参必须从形参表最右端开始连续放置。",
        "默认值通常只在函数声明中给一次，定义处不要重复设置。",
        "调用时实参按从左到右匹配，不能跳过中间参数只给后面的值。",
        "函数模板可用 template <typename T> 或 template <class T> 声明。",
        "模板形参 T 必须至少被函数参数类型使用，调用时由实参类型推导。"
      ],
      "pitfalls": [
        "把带默认值的参数放在无默认值参数左边。",
        "声明和定义中重复写默认值。",
        "调用时用空占位跳过中间实参。",
        "模板参数列表中的 T 没有被函数参数使用，导致无法推导。"
      ],
      "exercise": {
        "prompt": "编写函数模板 template <typename T> T larger(T a, T b) 返回较大值；在 main 中分别调用 larger(3,8) 和 larger(2.5,1.5)。",
        "starter": "#include <iostream>\n\n// 定义 larger 模板\n\nint main() {\n    // 两次调用并输出\n    return 0;\n}",
        "hint": "模板头写 template <typename T>，函数返回类型和两个参数都使用 T。",
        "checks": [
          {
            "label": "模板声明",
            "pattern": "\\btemplate\\s*<\\s*(?:typename|class)\\s+T\\s*>"
          },
          {
            "label": "定义 larger",
            "pattern": "\\bT\\s+larger\\s*\\(\\s*T\\s+\\w+\\s*,\\s*T\\s+\\w+\\s*\\)"
          },
          {
            "label": "返回较大值",
            "pattern": "\\breturn\\s+[^;]*\\?[^;]*:"
          },
          {
            "label": "调用 int 和 double",
            "pattern": "larger\\s*\\(\\s*3\\s*,\\s*8\\s*\\)[\\s\\S]*larger\\s*\\(\\s*2\\.5\\s*,\\s*1\\.5\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT larger(T a, T b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    cout << larger(3, 8) << ' ';\n    cout << larger(2.5, 1.5);\n    return 0;\n}",
        "explanation": "函数模板在调用时由实参类型生成具体函数版本。",
        "commonMistakes": [
          "模板头漏掉 typename 或 class。",
          "函数参数写死为 int，无法用于 double。",
          "两个模板类型参数不同却只声明一个 T。"
        ]
      },
      "masteryHint": "能正确使用默认参数和简单函数模板。"
    },
    {
      "id": "l6-scope-storage",
      "lessonId": "lesson6",
      "title": "作用域、生存期与存储类别",
      "tags": [
        "局部变量",
        "静态局部变量",
        "全局变量",
        "extern"
      ],
      "overview": "作用域回答“在哪里能访问”，生存期回答“对象何时存在”。auto 局部变量、static 局部变量和全局变量在这两点上不同。",
      "keyPoints": [
        "自动局部变量的作用域和生存期通常限于所在代码块，未初始化值不确定。",
        "静态局部变量作用域仍限于代码块，但生存期贯穿整个程序，未初始化时默认置 0。",
        "静态局部变量的初始化只执行一次，适合保留上次调用的状态。",
        "全局变量从定义点到文件末尾可见，未初始化时默认置 0。",
        "extern 可扩展全局变量作用域，但声明处不能初始化。"
      ],
      "pitfalls": [
        "把静态局部变量的“生存期长”误认为“作用域全局”。",
        "认为自动局部变量一定自动初始化为 0。",
        "在 extern 声明处重复赋值。",
        "局部变量与全局变量同名时仍以为访问全局变量。"
      ],
      "exercise": {
        "prompt": "编写 int callCount()，使用静态局部变量记录函数被调用次数，每次返回当前次数；main 连续调用三次并输出。",
        "starter": "#include <iostream>\n\n// 定义 callCount\n\nint main() {\n    // 连续调用三次并输出\n    return 0;\n}",
        "hint": "函数体内写 static int count = 0; return ++count;",
        "checks": [
          {
            "label": "定义 callCount",
            "pattern": "\\bint\\s+callCount\\s*\\(\\s*\\)\\s*\\{"
          },
          {
            "label": "静态局部变量",
            "pattern": "\\bstatic\\s+int\\s+\\w+\\s*=\\s*0\\s*;"
          },
          {
            "label": "返回递增后的计数",
            "pattern": "\\breturn\\s+\\+\\+\\s*\\w+\\s*;"
          },
          {
            "label": "调用三次",
            "pattern": "(?:callCount\\s*\\(\\s*\\)[\\s\\S]*){3}"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint callCount() {\n    static int count = 0;\n    return ++count;\n}\n\nint main() {\n    cout << callCount() << ' ';\n    cout << callCount() << ' ';\n    cout << callCount();\n    return 0;\n}",
        "explanation": "静态局部变量只初始化一次，但在代码块外不可见。",
        "commonMistakes": [
          "写成普通 int count = 0，每次调用都会重新归零。",
          "把 static 误认为让变量在 main 中也能直接访问。",
          "返回值写成 count++，第一次会返回 0。"
        ]
      },
      "masteryHint": "能区分作用域与生存期，并解释静态局部变量。"
    },
    {
      "id": "l6-nested-calls",
      "lessonId": "lesson6",
      "title": "函数嵌套调用与返回顺序",
      "tags": [
        "嵌套调用",
        "调用栈",
        "gcd",
        "lcm"
      ],
      "overview": "函数调用可以嵌套。被调用函数执行结束后先返回调用者，再由调用者继续计算；理解返回顺序有助于分析 gcd、lcm 等组合函数。",
      "keyPoints": [
        "程序从 main 开始，main 结束通常代表程序结束。",
        "最后被调用的函数通常最先返回。",
        "嵌套调用中，外层函数会等待内层函数返回后再继续。",
        "lcm(m,n) 可以调用 gcd(m,n) 复用已有结果。",
        "函数返回后，其自动局部变量通常失效。"
      ],
      "pitfalls": [
        "误以为所有函数同时执行。",
        "把最后被调用的函数误认为最后结束。",
        "在 lcm 中重复实现 gcd，增加出错概率。",
        "把调用栈中的形参当成会长期保存的数据。"
      ],
      "exercise": {
        "prompt": "实现 gcd 和 lcm。lcm 必须调用 gcd，读取两个整数并输出最大公约数和最小公倍数。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint gcd(int m, int n);\nint lcm(int m, int n);\n\n// 完成两个函数\n\nint main() {\n    int m, n;\n    cin >> m >> n;\n    cout << gcd(m, n) << ' ' << lcm(m, n) << endl;\n    return 0;\n}",
        "sampleInput": "12 18",
        "expectedOutput": "6 36",
        "hint": "先用辗转相除完成 gcd，再让 lcm 返回 m / gcd(m,n) * n。",
        "checks": [
          {
            "label": "定义 gcd 函数",
            "pattern": "\\bint\\s+gcd\\s*\\([^;{}]*\\)\\s*\\{"
          },
          {
            "label": "gcd 使用取余循环",
            "pattern": "\\bwhile\\s*\\([^)]*\\bn\\b[^)]*\\)[\\s\\S]*\\%\\s*n"
          },
          {
            "label": "lcm 调用 gcd",
            "pattern": "\\bint\\s+lcm\\s*\\([^;{}]*\\)\\s*\\{[\\s\\S]*\\bgcd\\s*\\("
          },
          {
            "label": "输出公约数和公倍数",
            "pattern": "\\bcout\\s*<<[\\s\\S]*\\bgcd\\s*\\([\\s\\S]*\\blcm\\s*\\("
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint gcd(int m, int n) {\n    while (n != 0) {\n        int r = m % n;\n        m = n;\n        n = r;\n    }\n    return m;\n}\n\nint lcm(int m, int n) {\n    return m / gcd(m, n) * n;\n}\n\nint main() {\n    int m, n;\n    cin >> m >> n;\n    cout << gcd(m, n) << ' ' << lcm(m, n) << endl;\n    return 0;\n}",
        "explanation": "gcd 先返回，lcm 再使用 gcd 的结果。先除后乘可以降低中间结果溢出的风险。",
        "commonMistakes": [
          "lcm 直接写 m*n/gcd(m,n) 且没有考虑溢出风险。",
          "在 gcd 中把取余循环写反。",
          "误以为 lcm 会比 gcd 先结束。"
        ]
      },
      "masteryHint": "能追踪嵌套调用的执行顺序，并复用 gcd 实现 lcm。"
    },
    {
      "id": "l6-2d-array-parameter",
      "lessonId": "lesson6",
      "title": "二维数组作函数参数",
      "tags": [
        "二维数组",
        "数组参数",
        "行指针",
        "函数"
      ],
      "overview": "二维数组传参时，第一维长度可以省略，但后续维长度必须写清楚，例如 int a[][3]。函数内部仍需显式传入行数和列数。",
      "keyPoints": [
        "二维数组形参可写成 int a[][3]。",
        "不能省略后续维长度，因为编译器需要据此计算每行的偏移。",
        "第一维长度通常通过单独参数 rows 传入。",
        "a[i] 表示第 i 行的一维数组，a[i][j] 表示具体元素。",
        "数组参数传递的是首元素地址，函数修改元素会影响实参。"
      ],
      "pitfalls": [
        "形参写成 int a[][]，编译器无法确定行跨度。",
        "在函数内用 sizeof(a)/sizeof(a[0]) 求行数。",
        "循环边界使用 rows+1 导致越界。",
        "把二维数组直接 cin >> a 整体读入。"
      ],
      "exercise": {
        "prompt": "读取 2×3 整数矩阵，编写函数 rowSum(int a[][3], int rows, int sums[]) 计算每行之和，并输出两个行和。",
        "starter": "#include <iostream>\nusing namespace std;\n\nvoid rowSum(int a[][3], int rows, int sums[]) {\n    // 计算每行元素之和\n}\n\nint main() {\n    int a[2][3], sums[2];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 3; ++j)\n            cin >> a[i][j];\n    rowSum(a, 2, sums);\n    cout << sums[0] << ' ' << sums[1] << endl;\n    return 0;\n}",
        "sampleInput": "1 2 3 4 5 6",
        "expectedOutput": "6 15",
        "hint": "外层循环枚举行，内层循环枚举列；每行开始前把 sums[i] 置 0。",
        "checks": [
          {
            "label": "形参保留第二维长度 3",
            "pattern": "\\bint\\s+a\\s*\\[\\s*\\]\\s*\\[\\s*3\\s*\\]"
          },
          {
            "label": "使用双重循环",
            "pattern": "\\bfor\\s*\\([\\s\\S]*\\bfor\\s*\\("
          },
          {
            "label": "累加到 sums[i]",
            "pattern": "\\bsums\\s*\\[\\s*i\\s*\\]\\s*\\+?="
          },
          {
            "label": "访问 a[i][j]",
            "pattern": "\\ba\\s*\\[\\s*i\\s*\\]\\s*\\[\\s*j\\s*\\]"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid rowSum(int a[][3], int rows, int sums[]) {\n    for (int i = 0; i < rows; ++i) {\n        sums[i] = 0;\n        for (int j = 0; j < 3; ++j) {\n            sums[i] += a[i][j];\n        }\n    }\n}\n\nint main() {\n    int a[2][3], sums[2];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 3; ++j)\n            cin >> a[i][j];\n    rowSum(a, 2, sums);\n    cout << sums[0] << ' ' << sums[1] << endl;\n    return 0;\n}",
        "explanation": "函数只能省略第一维长度，列数 3 必须保留，才能正确计算 a[i][j] 的地址。",
        "commonMistakes": [
          "写成 int a[][]。",
          "忘记初始化 sums[i]。",
          "把行列循环变量混用。"
        ]
      },
      "masteryHint": "能写出合法的二维数组形参，并正确传入行列信息。"
    },
    {
      "id": "l6-math-functions",
      "lessonId": "lesson6",
      "title": "常用数学库函数 sqrt、fabs 与 abs",
      "tags": [
        "cmath",
        "sqrt",
        "fabs",
        "abs",
        "库函数"
      ],
      "overview": "库函数通过头文件声明。sqrt、fabs 通常来自 <cmath>，abs 可处理整数，fabs 处理浮点数；使用前应包含正确头文件并注意结果类型。",
      "keyPoints": [
        "sqrt(x) 计算平方根，x 不应为负。",
        "fabs(x) 返回浮点数绝对值。",
        "abs(x) 常用于整数绝对值；不同头文件中的重载形式可能不同。",
        "固定小数位输出使用 fixed 与 setprecision。",
        "数学函数可以出现在表达式中，也可以嵌套调用。"
      ],
      "pitfalls": [
        "对负数调用 sqrt 得到无效结果。",
        "把 fabs 与 abs 混用导致整数或浮点精度问题。",
        "使用 sqrt 却没有包含 <cmath>。",
        "只写 setprecision 没有 fixed，误以为一定表示小数位。"
      ],
      "exercise": {
        "prompt": "读取两个实数 x、y，输出 sqrt(x*x+y*y) 和 fabs(x-y)，均保留三位小数，用空格分隔。",
        "starter": "#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double x, y;\n    cin >> x >> y;\n    // 输出两个结果\n    return 0;\n}",
        "sampleInput": "3 4",
        "expectedOutput": "5.000 1.000",
        "hint": "先设置 fixed << setprecision(3)，再连续输出 sqrt 和 fabs 的结果。",
        "checks": [
          {
            "label": "包含 cmath",
            "pattern": "#\\s*include\\s*<\\s*cmath\\s*>"
          },
          {
            "label": "使用 sqrt",
            "pattern": "\\bsqrt\\s*\\("
          },
          {
            "label": "使用 fabs",
            "pattern": "\\bfabs\\s*\\("
          },
          {
            "label": "固定三位小数",
            "pattern": "\\bfixed\\b[\\s\\S]*\\bsetprecision\\s*\\(\\s*3\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double x, y;\n    cin >> x >> y;\n    cout << fixed << setprecision(3)\n         << sqrt(x*x + y*y) << ' ' << fabs(x-y) << endl;\n    return 0;\n}",
        "explanation": "sqrt 计算欧氏距离，fabs 计算浮点差值的绝对值。",
        "commonMistakes": [
          "使用 abs 却期望得到浮点绝对值。",
          "把 x*x+y*y 写成 (x+y)*(x+y)。",
          "忘记 fixed。"
        ]
      },
      "masteryHint": "能选择正确的数学函数和头文件，并控制浮点输出格式。"
    },
    {
      "id": "l7-ex7-1",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.1 学生信息按平均分排序",
      "tags": [
        "课件例题",
        "结构数组",
        "排序",
        "填空"
      ],
      "overview": "用 struct Student 把姓名、学号、三科成绩、平均分组织成一个整体，定义 Student s[5]，排序时整体交换结构变量。",
      "keyPoints": [
        "结构变量不能整体输入，必须逐成员输入。",
        "结构变量允许整体赋值，s[j]=s[j+1] 会把所有成员一起复制。",
        "排序条件用 s[j].avg>s[j+1].avg。",
        "C++ 中 struct Student 定义后可以直接写 Student。"
      ],
      "pitfalls": [
        "用 cin>>s[i] 整体输入结构。",
        "只交换 avg，没有交换姓名、学号、成绩。",
        "平均分用整数除法，丢失小数。"
      ],
      "example": {
        "title": "例7.1 学生信息按平均分排序",
        "source": "课件 lesson7 · P3-P16",
        "code": "#define N 5\nstruct Student\n{\n    char name[20];\n    char no[7];\n    double Chinese, English, math, avg;\n};\nint  main()\n{\n    int i,j;\n    Student s[N],t;\n    for(i=0;i<N;i++)\n    {\n        cin>>s[i].name>>s[i].no>>s[i].Chinese>>s[i].English>>s[i].math;\n        s[i].avg=(s[i].Chinese+s[i].English+s[i].math)/3;\n    }\n    for(i=0;i<N-1;i++)\n        for(j=0;j<N-1-i;j++)\n            if( s[j].avg>s[j+1].avg )\n            {\n                t=s[j];\n                s[j]=s[j+1];\n                s[j+1]=t;\n            }\n    for(i=0;i<N;i++)\n    {\n        cout<<s[i].name<< \" \" <<s[i].no<< \" \" <<s[i].Chinese;\n        cout<<\" \"<<s[i].English<<\" \"<<s[i].math<<\" \"<<s[i].avg<<endl;\n    }\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "按平均分由低到高输出 5 个学生的全部信息",
        "explanation": "结构体把原本分散在多个数组里的字段绑在一起，所以排序时只需交换一个结构变量 t=s[j]，姓名、学号、成绩、平均分就会一起移动。这正体现了结构体“把不同类型数据组合成一个整体”的价值。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "声明结构类型，成员包括字符数组和 double。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "C++ 中可以直接用 Student 定义变量；t 用于整体交换。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "结构变量不能整体输入，必须逐成员访问。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "三科成绩都是 double，除法得到小数平均分。"
          },
          {
            "section": 0,
            "line": 19,
            "text": "按平均分比较，逆序则交换。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "结构变量整体赋值，所有成员一起复制。"
          },
          {
            "section": 0,
            "line": 22,
            "text": "后一个学生的全部信息前移。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "临时变量中的全部信息放到后面。"
          }
        ],
        "blankHints": [
          "排序比较：if(s[j].avg>s[j+1].avg)。"
        ]
      },
      "masteryHint": "能解释为什么结构数组排序只需交换一个变量。",
      "sourcePages": [
        3
      ]
    },
    {
      "id": "l7-ex7-2",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.2 统计候选人得票数",
      "tags": [
        "课件例题",
        "结构数组",
        "strcmp",
        "填空"
      ],
      "overview": "3 个候选人用结构数组 p[3] 保存姓名和票数；每次读入一个名字，与 3 个候选人比较，相等则票数加 1。",
      "keyPoints": [
        "结构数组初始化：{\"zhao\",0},{\"qian\",0},{\"sun\",0}。",
        "字符串比较必须用 strcmp，不能用 ==。",
        "strcmp(pname,p[j].name)==0 表示找到对应候选人。",
        "循环 N 次，每次处理一张票。"
      ],
      "pitfalls": [
        "用 pname==p[j].name 比较字符串。",
        "结构数组初始化漏掉内层花括号。",
        "票数没有初始化为 0。"
      ],
      "example": {
        "title": "例7.2 统计候选人得票数",
        "source": "课件 lesson7 · P18-P19",
        "code": "#include  <iostream>\n#define N 10\nstruct person\n{\n    char name[20];\n    int count;\n};\nint main()\n{\n    char pname[20];\n    person p[3]={ {\"zhao\",0},{\"qian\",0},{\"sun\",0} };\n    int i,j;\n    for(i=0;i<N;i++)\n    {\n        cin>>pname;\n        for(j=0;j<3;j++)\n            if( strcmp(pname,p[j].name)==0 )\n                p[j].count++;\n    }\n    for(i=0;i<3;i++)\n        cout<<p[i].name<<\":\"<<p[i].count<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 10 个姓名后，输出 zhao、qian、sun 各自的票数",
        "explanation": "结构数组把“姓名”和“票数”绑定在一起，p[j].count++ 只增加匹配候选人的票数。字符串不能用 == 比较内容，必须调用 strcmp；返回 0 表示两个字符串完全相同。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "每个候选人是一个结构：姓名 + 票数。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "定义长度为 3 的结构数组并初始化。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "每个元素用一对花括号初始化姓名和票数。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "读入一张票上的候选人姓名。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "strcmp 返回 0 表示姓名相同。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "对应候选人的票数加 1。"
          }
        ],
        "blankHints": [
          "姓名比较：if(strcmp(pname,p[j].name)==0)。"
        ]
      },
      "masteryHint": "能写出结构数组的初始化形式，并解释 strcmp 返回 0 的含义。",
      "sourcePages": [
        18
      ]
    },
    {
      "id": "l7-ex7-3",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.3 创建包含两个结点的链表",
      "tags": [
        "课件例题",
        "链表",
        "new",
        "结点"
      ],
      "overview": "先 new 第一个结点并赋值 10，再 new 第二个结点赋值 20，把第二个结点的 next 置 NULL，最后让第一个结点的 next 指向第二个结点。",
      "keyPoints": [
        "new node 申请一个结点空间，返回首地址。",
        "p->data 访问数据域，p->next 访问指针域。",
        "最后一个结点的 next 必须置 NULL，表示链表结束。",
        "p->next=q 把第二个结点接到第一个结点后面。"
      ],
      "pitfalls": [
        "忘记给最后一个结点的 next 置 NULL。",
        "先 p->next=q 再 q=new node，q 还没有指向。",
        "用 malloc 申请却用 delete 释放（或反过来）。"
      ],
      "example": {
        "title": "例7.3 创建包含两个结点的链表",
        "source": "课件 lesson7 · P27",
        "code": "//或p=(struct node *)malloc(sizeof(struct  node));\np=new node;\np->data=10;\nq=new node;\nq->data=20;\nq->next=NULL; //为第二个结点的指针域赋值\np->next=q;",
        "output": "head→[10]→[20]→NULL",
        "explanation": "创建链表就是反复“申请结点、填数据、接指针”。第一个结点 p 暂时是表头，第二个结点 q 是表尾；q->next=NULL 标记链表结束，p->next=q 把两个结点连起来。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "为第一个结点申请空间，p 指向它。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "给第一个结点的数据域赋值。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "为第二个结点申请空间。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "给第二个结点的数据域赋值。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "第二个结点是表尾，指针域置空。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "第一个结点的指针域指向第二个结点。"
          }
        ]
      },
      "masteryHint": "能画出两个结点和 head 指针的连接关系。",
      "sourcePages": [
        27
      ]
    },
    {
      "id": "l7-ex7-4",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.4 创建含 n 个结点的单链表",
      "tags": [
        "课件例题",
        "链表建立",
        "尾插法",
        "填空"
      ],
      "overview": "从空表开始，循环 n 次：申请新结点、读入数据，若表空则 head=newnode，否则接到 tail 后面；最后 tail->next=NULL。",
      "keyPoints": [
        "head 初始为 NULL，表示空表。",
        "tail 始终指向当前表尾，方便尾插。",
        "空表时 head 和 tail 都要指向新结点。",
        "循环结束后 tail->next=NULL，标记链表结束。"
      ],
      "pitfalls": [
        "非空表时忘记 tail=newnode，tail 不再指向表尾。",
        "忘记 tail->next=NULL。",
        "空表时只设置 head 没设置 tail。"
      ],
      "example": {
        "title": "例7.4 创建含 n 个结点的单链表",
        "source": "课件 lesson7 · P28-P30",
        "code": "#include  <iostream>\nstruct node\n{\n    int  data;  \n    struct node  *next;\n};\nstruct node  *create(int n )\n{\n    struct node  *head = NULL;\n    struct node  *tail,*newnode;\n    int  x;\n    for (int i=0; i<n; i++)\n    {\n        cin>>x;\n        newnode= new node ; //为newnode申请存放空间\n        newnode->data=x;\n        if(head==NULL)\n            head=newnode ;   //newnode成为空表的第一个结点\n        else\n            tail->next=newnode ;//将newnode连接到原来的表尾\n        tail = newnode ;      // newnode成为新的表尾\n    }\n    tail->next=NULL ;\n    return(head);\n}\nint main( )\n{struct node  *head;\nint n;\ncout<<\"请输入初始链表结点数:\";\ncin>>n;\nhead = create(n);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 1 2 3 时创建 1→2→3→NULL",
        "explanation": "head 只在第一个结点时赋值；之后每个新结点都接到 tail 后面，并让 tail 后移。这样建立的是与输入顺序一致的链表（尾插法）。函数返回 head，主函数才能继续操作整条链表。",
        "notes": [
          {
            "section": 0,
            "line": 9,
            "text": "空表，head 不指向任何结点。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "每个新数据都申请一个新结点。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "把读入的整数存入数据域。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "第一个结点要同时成为表头和表尾。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "空表时 head 指向新结点。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "非空表时把新结点接到原表尾后面。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "更新表尾指针。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "最后一个结点的 next 置空。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "把表头指针返回主函数。"
          }
        ],
        "blankHints": [
          "① newnode=new node；② head=newnode；③ tail->next=newnode；④ tail=newnode；⑤ tail->next=NULL。"
        ]
      },
      "masteryHint": "能说出 head、tail、newnode 三个指针各自的职责。",
      "sourcePages": [
        28
      ]
    },
    {
      "id": "l7-ex7-5",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.5 遍历输出单链表",
      "tags": [
        "课件例题",
        "链表遍历",
        "填空"
      ],
      "overview": "p 从 head 开始，while(p!=NULL) 输出 p->data，然后 p=p->next，直到 p 为空。",
      "keyPoints": [
        "遍历必须从 head 开始。",
        "循环条件是 p!=NULL。",
        "每访问一个结点，p=p->next 后移。",
        "链表不能 p++，因为结点不连续。"
      ],
      "pitfalls": [
        "用 p++ 后移。",
        "循环条件写成 p->next!=NULL，最后一个结点不输出。",
        "忘记 p=p->next，死循环。"
      ],
      "example": {
        "title": "例7.5 遍历输出单链表",
        "source": "课件 lesson7 · P32",
        "code": "void print(struct node  *head)\n{\n    struct node *p=head;\n    while( p!=NULL )\n    {\n        cout<<p->data<<'\\t';\n        p = p->next ; \n    }\n}",
        "output": "依次输出链表中每个结点的 data",
        "explanation": "p 是一个工作指针，开始时指向第一个结点；每轮输出当前结点的数据，然后顺着 next 走到下一个结点。当 p 变成 NULL 时，说明已经走过最后一个结点。",
        "notes": [
          {
            "section": 0,
            "line": 1,
            "text": "print 只负责遍历输出，不修改链表，所以返回类型是 void。"
          },
          {
            "section": 0,
            "line": 3,
            "text": "工作指针从表头开始。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "p 非空就还有结点可访问。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "输出当前结点的数据域。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "顺着指针域走到下一个结点；不能用 p++。"
          }
        ]
      },
      "masteryHint": "能解释为什么链表遍历不能用 p++。",
      "sourcePages": [
        32
      ]
    },
    {
      "id": "l7-ex7-6",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.6 统计链表结点个数",
      "tags": [
        "课件例题",
        "链表",
        "计数"
      ],
      "overview": "p 从 head 开始，每经过一个结点 n 加 1，直到 p==NULL，返回 n。",
      "keyPoints": [
        "计数器 n 初始为 0。",
        "每访问一个结点先 n++，再 p=p->next。",
        "循环结束返回 n。",
        "空表时 n 保持 0。"
      ],
      "pitfalls": [
        "n 没有初始化为 0。",
        "先 p=p->next 再 n++，漏数第一个结点。",
        "返回类型写成 void。"
      ],
      "example": {
        "title": "例7.6 统计链表结点个数",
        "source": "课件 lesson7 · P33",
        "code": "int  count(struct node  *head)\n{\n    struct node  *p = head;\n    int n = 0;\n    while (p != NULL)\n    {\n        n++;\n        p = p->next;\n    }\n    return(n);\n}",
        "output": "返回链表中结点的个数",
        "explanation": "这是最标准的链表遍历计数：p 每指向一个真实结点，n 就加 1；p 变成 NULL 时循环结束。空表时循环一次都不执行，返回 0。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "计数器必须从 0 开始。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "还有结点就继续。"
          },
          {
            "section": 0,
            "line": 7,
            "text": "当前结点计入总数。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "移动到下一个结点。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "返回统计结果。"
          }
        ]
      },
      "masteryHint": "能写出计数循环，并说明空表时为什么返回 0。",
      "sourcePages": [
        33
      ]
    },
    {
      "id": "l7-ex7-7",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.7 按序号查找第 i 个结点",
      "tags": [
        "课件例题",
        "链表查找",
        "序号",
        "填空"
      ],
      "overview": "j 从 1 开始，p 从 head 开始；while(j!=i && p!=NULL) 时 j++、p=p->next。循环后若 j==i&&p!=NULL，说明找到。",
      "keyPoints": [
        "序号从 1 开始，j 初始为 1。",
        "循环条件 j!=i && p!=NULL，两个条件缺一不可。",
        "循环体先 j++，再 p=p->next。",
        "找到的判据是 j==i && p!=NULL。"
      ],
      "pitfalls": [
        "循环条件只写 p!=NULL，i 越界时仍继续。",
        "j 从 0 开始，序号整体错一位。",
        "找到后输出 p->data 却没判断 p 是否为空。"
      ],
      "example": {
        "title": "例7.7 按序号查找第 i 个结点",
        "source": "课件 lesson7 · P34",
        "code": "void search(struct node  *head, int  i)\n{    int j=1;\n    struct node  *p=head;\n    if(i<1)\n        cout<<\"illegal index\\n\";\n    else\n    {\n        while(j !=i &&p!= NULL)\n        {    j++;\n            p=p->next ;\n        }\n        if( j==i&&p!=NULL )\n            cout<<\"index\"<<i<<\":\"<<p->data;\n        else \n            cout<<\"illegal index \\n\";\n    }\n}",
        "output": "找到时输出 index i:data，否则输出 illegal index",
        "explanation": "j 表示 p 当前指向第几个结点。每后移一次，j 加 1。循环结束时有两种可能：j==i 且 p 非空（找到），或者 p 为空（i 超过表长）。所以判断必须同时检查 j 和 p。",
        "notes": [
          {
            "section": 0,
            "line": 2,
            "text": "链表序号从 1 开始。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "序号小于 1 直接判非法。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "还没到第 i 个且链表没走完，就继续后移。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "序号加 1。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "指针后移一个结点。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "同时满足序号和指针非空，才是真正找到。"
          }
        ],
        "blankHints": [
          "循环条件：while(j!=i&&p!=NULL)；找到判断：if(j==i&&p!=NULL)。"
        ]
      },
      "masteryHint": "能解释为什么判断条件必须同时写 j==i 和 p!=NULL。",
      "sourcePages": [
        34
      ]
    },
    {
      "id": "l7-ex7-8",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.8 在递增链表中插入值为 x 的结点",
      "tags": [
        "课件例题",
        "链表插入",
        "有序",
        "填空"
      ],
      "overview": "先找插入位置 behind，分三种情况：插在表头前、表尾后、中间。函数返回新的 head。",
      "keyPoints": [
        "空表：head=newnode，newnode->next=NULL。",
        "查找：behind 从 head 开始，front 记录前驱，x>behind->data 时后移。",
        "behind==head：插在表头前，newnode->next=head; head=newnode。",
        "behind==NULL：插在表尾后，front->next=newnode; newnode->next=NULL。",
        "其它：插在 front 与 behind 之间。"
      ],
      "pitfalls": [
        "先改 front->next 再改 newnode->next，丢失后半条链。",
        "表头插入忘记更新 head。",
        "表尾插入忘记 newnode->next=NULL。"
      ],
      "example": {
        "title": "例7.8 在递增链表中插入值为 x 的结点",
        "source": "课件 lesson7 · P37-P38",
        "code": "struct node *insert(node *head,int x)\n{  struct  node *behind,*front,*newnode;\n   newnode=new node;\n   newnode->data=x;     behind=head;\n   if(head==NULL)                               //空表\n       {  head=newnode ;\n          newnode->next=NULL; }\n   else                                        //非空表\n       {  while(behind!=NULL&&x>behind->data)//找插入位置\n           {  front=behind ;  behind=behind->next ; \n           }\n          if(behind==head)   //插到第一个结点前 \n          {  newnode->next=head ;  head=newnode ; }\n          else if(behind==NULL)  //插到最后一个结点后   \n          {  front->next=newnode ;  newnode->next=NULL ;}\n          else                  //插到front之后,behind之前\n          {  front->next=newnode ;  newnode->next=behind ;  }\n       }\n   return head;\n}",
        "output": "插入后链表仍按递增有序",
        "explanation": "behind 找第一个 data>=x 的结点，front 始终是它的前驱。若 behind 回到 head，说明 x 最小，要改表头；若 behind 为 NULL，说明 x 最大，要接在表尾；否则插在 front 和 behind 之间。函数返回 head，因为表头可能改变。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "先申请新结点并填入 x。"
          },
          {
            "section": 0,
            "line": 4,
            "text": "从表头开始找插入位置。"
          },
          {
            "section": 0,
            "line": 5,
            "text": "空表时新结点就是唯一的结点。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "空表：表头指向新结点。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "x 比当前结点大就继续后移，直到找到第一个不小于 x 的结点。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "front 记录 behind 的前驱。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "x 比所有结点都小，插在表头前。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "新结点指向原表头。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "更新表头。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "x 比所有结点都大，插在表尾后。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "原表尾指向新结点。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "新结点成为表尾。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "中间插入：先接后继。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "再改前驱，顺序不能反。"
          }
        ],
        "blankHints": [
          "找位置：while(behind!=NULL&&x>behind->data)。",
          "空表：head=newnode；表头插入：newnode->next=head;head=newnode。",
          "表尾插入：front->next=newnode;newnode->next=NULL。",
          "中间插入：front->next=newnode;newnode->next=behind。"
        ]
      },
      "masteryHint": "能画出表头、表尾、中间三种插入的指针变化。",
      "sourcePages": [
        37
      ]
    },
    {
      "id": "l7-ex7-9",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.9 删除值为 x 的结点",
      "tags": [
        "课件例题",
        "链表删除",
        "填空"
      ],
      "overview": "p 查找值为 x 的结点，q 记录前驱。分三种情况：删表头、删中间/表尾、未找到。函数返回新的 head。",
      "keyPoints": [
        "while(p!=NULL && p->data!=x) 时 q=p、p=p->next。",
        "p==head 时删表头：head=p->next; delete p。",
        "p!=NULL 时删非表头：q->next=p->next; delete p。",
        "p==NULL 时未找到。"
      ],
      "pitfalls": [
        "先 delete p 再访问 p->next。",
        "删表头忘记更新 head。",
        "未找到时仍然执行 q->next=p->next，q 可能未初始化。"
      ],
      "example": {
        "title": "例7.9 删除值为 x 的结点",
        "source": "课件 lesson7 · P39-P41",
        "code": "struct node *delnode(node *head,int x)\n{  struct  node *p,*q;            //p为工作指针,q为p的前驱\n    p = head;\n   if(head==NULL)                       //空表\n       cout<<\"The list is null!\\n\";\n   else\n   { while( p!=NULL&&p->data!= x )    // 找删除的结点\n       {  q=p;  p = p->next; }\n     if( p==head )     //删除第一个结点\n       {  head=p->next;  delete p; }        \n     else  if( p!=NULL )   //删除非表头结点\n       { q->next=p->next ;  delete p; }\n     else                           //未找到要删除的元素\n       cout<<x<<\"dose not exist in the list!\\n\";\n   }\n   return head;\n}",
        "output": "删除成功则链表少一个结点；未找到则输出提示",
        "explanation": "查找循环结束时，p 要么指向值为 x 的结点，要么为 NULL。若 p==head，删除的是第一个结点，必须改 head；否则用 q->next=p->next 跳过 p。delete p 必须放在最后，不能先释放再访问 p->next。",
        "notes": [
          {
            "section": 0,
            "line": 7,
            "text": "p 非空且值不为 x 时继续后移。"
          },
          {
            "section": 0,
            "line": 8,
            "text": "q 始终记录 p 的前驱。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "要删除的是第一个结点。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "表头后移，跳过被删结点。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "释放结点空间。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "要删除的是中间或表尾结点。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "前驱跳过 p，接到 p 的后继。"
          },
          {
            "section": 0,
            "line": 6,
            "text": "p==NULL，说明链表中没有值为 x 的结点。"
          }
        ],
        "blankHints": [
          "查找：while(p!=NULL&&p->data!=x)；删表头：if(p==head)；删非表头：else if(p!=NULL)。"
        ]
      },
      "masteryHint": "能说出删除表头与删除非表头在指针操作上的区别。",
      "sourcePages": [
        39
      ]
    },
    {
      "id": "l7-ex7-10",
      "lessonId": "lesson7",
      "kind": "example",
      "title": "例7.10 学生信息链表综合（创建、查找、删除）",
      "tags": [
        "课件例题",
        "链表综合",
        "菜单",
        "结构"
      ],
      "overview": "定义 student 结点（学号、成绩、next），实现 creat、del、print、search 四个函数，主函数用菜单循环调用。",
      "keyPoints": [
        "creat 用尾插法建立链表，返回 head。",
        "del 删除可能改变表头，所以返回新的 head。",
        "search、print 不改变表头，返回 void。",
        "主函数用 while(1)+switch 提供菜单，choose==4 时 break。"
      ],
      "pitfalls": [
        "del 忘记返回 head，删除表头后主函数仍指向旧结点。",
        "字符串比较用 == 而不是 strcmp。",
        "菜单循环没有 break，无法结束。"
      ],
      "example": {
        "title": "例7.10 学生信息链表综合（创建、查找、删除）",
        "source": "课件 lesson7 · P42-P46",
        "code": "#include <iostream>\nusing namespace std;\nstruct student\n{\n    char num[8];\n    int score;\n    struct student *next;\n};\nstruct student *creat(int n) \n{\n    struct student *head=NULL,*newnode,*tail=NULL;\n    cout<<\"input num and score:\\n\";\n    for(int i=0;i<n;i++)\n    {\n        newnode=new student;\n        cin>>newnode->num>>newnode->score;\n        if(head==NULL)\n            head=newnode; \n        else\n            tail->next=newnode;\n        tail=newnode;                   \n    }\n    tail->next=NULL;\n    return head;\n}\nstruct student *del(student *head, char num[ ])  \n{       struct student *p, *q;\n    if(head==NULL)\n        cout<<\"list null!\\n\";\n    else\n    {\n        p=head;\n        while(p!= NULL&& strcmp(num,p->num)!=0 )\n        {       q=p;      p=p->next;\n        }\n        if(strcmp(num,p->num)==0)         \n        {        if(p==head)\n                    head=p->next;\n                 else\n                    q->next=p->next;\n                 delete(p);                   \n        }\n        else\n            cout<<num<<\"not been found!\\n\";\n    }\n    return(head);\n}\nvoid print(student *head)       \n{\n    struct student *p=head;\n    while(p!=NULL)\n    {\n        cout<<p->num<<'\\t'<<p->score<<endl;\n        p = p->next;\n    }\n}\nvoid search(student *head, char num[ ])      \n{  struct student  *p=head;\n   if(head==NULL)\n       cout<<\"list empty\"<<endl;\n   else\n   { while(p!=NULL)\n     {\n         if(strcmp(num,p->num)==0)\n         {cout<<p->num<<\":\"<<p->score<<endl;\n          break;\n         }\n         else\n             p=p->next;\n     }\n     if(p==NULL)\n         cout<<\"The student is not  found!\"<<endl;\n   }\n}\nint main( )\n{\n    int n,choose; \n    char num[8];\n    student *head=NULL; \n    cout<<\"请输入结点个数:\"<<endl;\n    cin>>n;\n    head=creat(n);\n    cout<<\"1. 查找数据\"<<endl;\n    cout<<\"2. 删除数据\"<<endl; \n    cout<<\"3. 输出数据\"<<endl;\n    cout<<\"4. 结束程序\"<<endl;\n    while(1)  \n    {    cout<<\"输入选项(1-4):\"<<endl;\n        cin>>choose;\n        if(choose==4)\n            break;\n        else\n            switch(choose)\n            {\n            case 1: cout<<\"输入所要查找的学生的学号:\"<<endl;\n                    cin>>num;\n                    search(head,num); \n                    break;\n            case 2: cout<<\"输入所要删除的学生的学号:\"<<endl;\n                    cin>>num;\n                    head=del(head,num);\n                    break;  \n            case 3: print(head);\n                    break; \n            }\n    }\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "按菜单选择查找、删除、输出，输入 4 结束",
        "explanation": "这是链表操作的综合：creat 尾插建表，del 删除并返回新表头，search 按学号查找，print 遍历输出。主函数用无限循环加 switch 做菜单，只有 choose==4 才 break。注意 del 可能删除第一个结点，所以必须把新的 head 返回并赋回主函数。",
        "notes": [
          {
            "section": 0,
            "line": 3,
            "text": "结点包含学号、成绩和 next 指针。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "creat 接收结点个数 n，返回建好的链表表头。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "head 指向表头，tail 始终指向表尾，newnode 暂存新结点；一开始表为空。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "每读一个学生就 new 一个结点，结点在堆上，链表才能一直存在。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "第一个结点：表头还空，直接把 head 指向它。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "不是第一个结点：把新结点接到当前表尾后面。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "无论哪种情况，新结点都成为新的表尾。"
          },
          {
            "section": 0,
            "line": 23,
            "text": "最后一个结点的 next 置空，表示链表结束。"
          },
          {
            "section": 0,
            "line": 27,
            "text": "p 用来找目标结点，q 始终记住 p 的前一个结点。"
          },
          {
            "section": 0,
            "line": 33,
            "text": "边找边停：p 为空或学号相等就退出循环。"
          },
          {
            "section": 0,
            "line": 34,
            "text": "p 前进一格，q 紧跟其后，为删除做准备。"
          },
          {
            "section": 0,
            "line": 36,
            "text": "循环结束后再比较一次：相等说明找到。注意若没找到，p 已是 NULL，这里再访问 p->num 会出错，课件代码有这一隐患，实际应补 p!=NULL 判断。"
          },
          {
            "section": 0,
            "line": 37,
            "text": "删除第一个结点：新表头变成 p->next。"
          },
          {
            "section": 0,
            "line": 40,
            "text": "删除中间或尾部结点：让前驱 q 绕过 p。"
          },
          {
            "section": 0,
            "line": 41,
            "text": "结点是 new 出来的，删除后要 delete 释放内存。"
          },
          {
            "section": 0,
            "line": 48,
            "text": "print 只读链表，不需要返回新的表头。"
          },
          {
            "section": 0,
            "line": 54,
            "text": "沿 next 走到下一个结点，直到 p 为 NULL。"
          },
          {
            "section": 0,
            "line": 57,
            "text": "search 找到就输出并 break，找不到时 p 会走到 NULL。"
          },
          {
            "section": 0,
            "line": 87,
            "text": "无限循环显示菜单，只有 choose==4 才 break。"
          },
          {
            "section": 0,
            "line": 93,
            "text": "switch 按菜单编号分派到查找、删除、输出三个分支。"
          },
          {
            "section": 0,
            "line": 101,
            "text": "删除可能改表头，必须接收 del 返回的新表头。"
          }
        ]
      },
      "masteryHint": "能说出四个函数的返回值为什么不同，以及 del 为什么必须返回 head。",
      "sourcePages": [
        42
      ]
    },
    {
      "id": "l7-struct-type-variable",
      "lessonId": "lesson7",
      "title": "结构类型、结构变量与成员",
      "tags": [
        "struct",
        "结构类型",
        "成员",
        "嵌套结构"
      ],
      "overview": "结构体把不同类型的数据组织成一个整体。声明结构类型本身不分配成员空间，定义结构变量时才分配空间。",
      "keyPoints": [
        "定义形式为 struct 类型名 { 成员声明; };。",
        "结构成员可为基本类型、数组、指针或其他已定义结构类型。",
        "成员名可以与普通变量名相同，二者是不同对象。",
        "C++ 中定义变量时通常可省略 struct 关键字。",
        "结构类型声明末尾需要分号。"
      ],
      "pitfalls": [
        "把结构类型声明当成已经创建变量。",
        "结构类型声明末尾漏掉分号。",
        "在成员声明中使用尚未完整定义的同类型普通成员。",
        "把成员名当全局变量直接访问。"
      ],
      "exercise": {
        "prompt": "定义 struct Point，成员 int x、int y；创建 p 并初始化为 (3,5)，输出 x 和 y。",
        "starter": "#include <iostream>\n\n// 定义 Point\n\nint main() {\n    // 创建 p 并输出成员\n    return 0;\n}",
        "hint": "结构体花括号后要有分号；可用 Point p = {3,5};。",
        "checks": [
          {
            "label": "定义 struct Point",
            "pattern": "\\bstruct\\s+Point\\s*\\{"
          },
          {
            "label": "包含 int x 和 int y",
            "pattern": "\\bint\\s+x\\s*;[\\s\\S]*\\bint\\s+y\\s*;"
          },
          {
            "label": "创建并初始化 Point 变量",
            "pattern": "\\bPoint\\s+\\w+\\s*[={]\\s*[^;]*3[^;]*5"
          },
          {
            "label": "访问成员",
            "pattern": "\\w+\\s*\\.\\s*(?:x|y)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    Point p = {3, 5};\n    cout << p.x << ' ' << p.y;\n    return 0;\n}",
        "explanation": "结构变量 p 持有两个成员，使用点运算符访问。",
        "commonMistakes": [
          "结构体定义末尾漏分号。",
          "成员初始化顺序写成 y、x。",
          "访问写成 p->x，但 p 不是指针。"
        ]
      },
      "masteryHint": "能定义结构类型并正确访问成员。"
    },
    {
      "id": "l7-struct-access-pointer",
      "lessonId": "lesson7",
      "title": "结构指针与成员访问",
      "tags": [
        "结构指针",
        "->",
        "解引用",
        "嵌套成员"
      ],
      "overview": "结构指针保存整个结构对象的首地址。通过指针访问成员通常使用 p->member，它等价于 (*p).member。",
      "keyPoints": [
        "定义结构指针时类型必须匹配，如 Student* p = &s。",
        "p->member 的 -> 优先级高，可直接访问成员。",
        "(*p).member 中的圆括号不能省，因为 . 优先于 *。",
        "嵌套结构的成员要逐级访问，如 p->birthday.month。",
        "结构变量名本身不是指针，使用 .；结构指针使用 ->。"
      ],
      "pitfalls": [
        "对结构变量使用 p.member 却 p 是指针。",
        "写成 *p.member，实际被解释为 *(p.member)。",
        "嵌套成员错误写成 p->birthday->month。",
        "结构指针未初始化就访问成员。"
      ],
      "exercise": {
        "prompt": "已有 struct Point { int x; int y; }; 和 Point p = {2,4};。请用结构指针 ptr 把 x 改为 9，并输出 p.x。",
        "starter": "#include <iostream>\n\nstruct Point { int x; int y; };\n\nint main() {\n    Point p = {2, 4};\n    // 创建指针、修改 x、输出 p.x\n    return 0;\n}",
        "hint": "先写 Point* ptr = &p;，再用 ptr->x。",
        "checks": [
          {
            "label": "结构指针指向 p",
            "pattern": "\\bPoint\\s*\\*\\s*\\w+\\s*=\\s*&\\s*p\\s*;"
          },
          {
            "label": "通过 -> 修改 x",
            "pattern": "\\w+\\s*->\\s*x\\s*=\\s*9\\s*;"
          },
          {
            "label": "输出 p.x",
            "pattern": "\\bp\\s*\\.\\s*x\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Point { int x; int y; };\n\nint main() {\n    Point p = {2, 4};\n    Point* ptr = &p;\n    ptr->x = 9;\n    cout << p.x;\n    return 0;\n}",
        "explanation": "ptr->x 等价于 (*ptr).x。",
        "commonMistakes": [
          "写 ptr.x，把结构指针当结构变量。",
          "写 *ptr.x，缺少圆括号。",
          "没有让 ptr 指向 p。"
        ]
      },
      "masteryHint": "能熟练切换 .、-> 和 (*p).member。"
    },
    {
      "id": "l7-struct-io-assignment",
      "lessonId": "lesson7",
      "title": "结构的输入输出、赋值与函数参数",
      "tags": [
        "结构输入输出",
        "整体赋值",
        "函数参数",
        "数组成员"
      ],
      "overview": "结构变量通常不能整体输入输出，但同类型结构变量可以整体赋值，也可按值或引用作为函数参数。成员本身的读写仍遵循该成员类型的规则。",
      "keyPoints": [
        "cin >> s 与 cout << s 一般不可直接读写结构整体。",
        "应逐个访问最低层成员输入输出。",
        "若成员是字符数组，字符串赋值必须使用 strcpy 或初始化。",
        "同类型结构变量可用 s1 = s2 整体赋值。",
        "结构按值传参会复制整个结构；大结构常使用 const 引用避免复制。"
      ],
      "pitfalls": [
        "用 cin >> s 输入整个结构。",
        "对字符数组成员直接写 s.name = \"Tom\"。",
        "把两个不同类型的结构互相赋值。",
        "结构内有指针成员时做浅复制后重复 delete。"
      ],
      "exercise": {
        "prompt": "定义 struct Book { char title[30]; int pages; }; 创建 b，把 title 设为 \"C++\"、pages 设为 320，再复制给 c 并输出 c.title 和 c.pages。",
        "starter": "#include <iostream>\n#include <cstring>\n\n// 定义 Book\n\nint main() {\n    // 初始化 b、复制给 c、输出\n    return 0;\n}",
        "hint": "字符数组用 strcpy；结构整体可用 c = b。",
        "checks": [
          {
            "label": "定义 Book 和成员",
            "pattern": "\\bstruct\\s+Book\\s*\\{[\\s\\S]*char\\s+title\\s*\\[[^\\]]+\\][\\s\\S]*int\\s+pages"
          },
          {
            "label": "使用 strcpy 写 title",
            "pattern": "\\b(?:std\\s*::\\s*)?strcpy\\s*\\(\\s*\\w+\\s*\\.\\s*title\\s*,\\s*\\\"C\\+\\+\\\"\\s*\\)"
          },
          {
            "label": "整体赋值结构",
            "pattern": "\\b\\w+\\s*=\\s*\\w+\\s*;"
          },
          {
            "label": "输出 c 的成员",
            "pattern": "\\bc\\s*\\.\\s*(?:title|pages)"
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nstruct Book {\n    char title[30];\n    int pages;\n};\n\nint main() {\n    Book b;\n    strcpy(b.title, \"C++\");\n    b.pages = 320;\n    Book c = b;\n    cout << c.title << ' ' << c.pages;\n    return 0;\n}",
        "explanation": "结构整体赋值会复制各成员；字符数组成员仍要遵守数组规则。",
        "commonMistakes": [
          "写 b.title = \"C++\"。",
          "用 cin >> b 读取整个结构。",
          "结构含动态指针时把浅复制当成深复制。"
        ]
      },
      "masteryHint": "能区分结构整体操作与成员级操作。"
    },
    {
      "id": "l7-struct-array",
      "lessonId": "lesson7",
      "title": "结构数组与排序",
      "tags": [
        "结构数组",
        "初始化",
        "排序",
        "成员访问"
      ],
      "overview": "结构数组把多个结构对象连续组织起来。访问单个元素成员用 s[i].member；结构元素可整体交换，使排序代码更简洁。",
      "keyPoints": [
        "结构数组的每个元素都是结构变量。",
        "初始化通常用两层花括号：外层对应数组元素，内层对应成员。",
        "输入输出通常要循环到每个元素、每个成员。",
        "按某成员排序时比较该成员，但交换整个结构元素。",
        "结构数组作函数参数时通常同时传入元素个数。"
      ],
      "pitfalls": [
        "只交换用于比较的成绩，却没有交换姓名等其他成员。",
        "初始化括号层级错误。",
        "把结构数组当成可直接 cin 的整体。",
        "循环边界写成 <= n 导致越界。"
      ],
      "exercise": {
        "prompt": "已有 Student a[2] = {{\"A\",70},{\"B\",90}};。若 a[0].score > a[1].score，就交换两个完整结构，最后输出 a[0].name。",
        "starter": "#include <iostream>\n\nstruct Student { const char* name; int score; };\n\nint main() {\n    Student a[2] = {{\"A\", 70}, {\"B\", 90}};\n    // 按 score 升序交换并输出\n    return 0;\n}",
        "hint": "用临时 Student t 保存整个元素。",
        "checks": [
          {
            "label": "比较 score 成员",
            "pattern": "a\\s*\\[\\s*0\\s*\\]\\s*\\.\\s*score\\s*>\\s*a\\s*\\[\\s*1\\s*\\]\\s*\\.\\s*score"
          },
          {
            "label": "临时保存完整结构",
            "pattern": "\\bStudent\\s+\\w+\\s*=\\s*a\\s*\\[\\s*0\\s*\\]\\s*;"
          },
          {
            "label": "交换两个完整元素",
            "pattern": "a\\s*\\[\\s*0\\s*\\]\\s*=\\s*a\\s*\\[\\s*1\\s*\\][\\s\\S]*a\\s*\\[\\s*1\\s*\\]\\s*=\\s*\\w+"
          },
          {
            "label": "输出 name",
            "pattern": "a\\s*\\[\\s*0\\s*\\]\\s*\\.\\s*name"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Student { const char* name; int score; };\n\nint main() {\n    Student a[2] = {{\"A\", 70}, {\"B\", 90}};\n    if (a[0].score > a[1].score) {\n        Student t = a[0];\n        a[0] = a[1];\n        a[1] = t;\n    }\n    cout << a[0].name;\n    return 0;\n}",
        "explanation": "比较某个成员，交换整个结构元素，相关数据才会保持一致。",
        "commonMistakes": [
          "只交换 score。",
          "临时变量写成 int，无法保存完整结构。",
          "交换后仍输出 a[1].name。"
        ]
      },
      "masteryHint": "能按成员排序结构数组并保持记录完整。"
    },
    {
      "id": "l7-dynamic-memory",
      "lessonId": "lesson7",
      "title": "new、delete 与动态结点",
      "tags": [
        "new",
        "delete",
        "动态内存",
        "结点"
      ],
      "overview": "链表结点数量在运行时才确定，通常使用 new 动态申请。动态内存使用结束后必须正确释放。",
      "keyPoints": [
        "Node* p = new Node; 申请一个结点。",
        "new int[10] 申请连续数组，使用 delete[] 释放。",
        "new 与 delete 配对；new[] 与 delete[] 配对。",
        "new 可能抛出异常，程序需确保不会泄漏已分配资源。",
        "动态申请只创建对象，不会自动给它赋业务数据；指针成员仍应显式初始化。"
      ],
      "pitfalls": [
        "对 new[] 使用 delete。",
        "释放后继续解引用旧指针。",
        "重复 delete 同一地址。",
        "只 delete 链表头结点，未释放后续结点。"
      ],
      "exercise": {
        "prompt": "定义 Node { int data; Node* next; };，用 new 创建 p，设置 data=12、next=NULL，输出 data 后 delete p。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    // new、初始化、输出、delete\n    return 0;\n}",
        "hint": "先写 Node* p = new Node;，再逐成员赋值：p->data = 12; p->next = NULL;。",
        "checks": [
          {
            "label": "使用 new Node",
            "pattern": "\\bnew\\s+Node\\b"
          },
          {
            "label": "初始化 data 为 12",
            "pattern": "\\w+\\s*->\\s*data\\s*=\\s*12\\s*;"
          },
          {
            "label": "next 置空",
            "pattern": "\\w+\\s*->\\s*next\\s*=\\s*NULL\\s*;"
          },
          {
            "label": "delete 指针",
            "pattern": "\\bdelete\\s+\\w+\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node* p = new Node;\n    p->data = 12;\n    p->next = NULL;\n    cout << p->data;\n    delete p;\n    return 0;\n}",
        "explanation": "动态结点需要显式初始化和释放。",
        "commonMistakes": [
          "只写 Node* p;，没有分配对象。",
          "new 后忘记 delete。",
          "用 delete[] 释放单个对象。"
        ]
      },
      "masteryHint": "能正确申请、初始化并释放动态结点。"
    },
    {
      "id": "l7-linked-list-traversal",
      "lessonId": "lesson7",
      "title": "单链表结构、建立与遍历",
      "tags": [
        "链表",
        "head",
        "next",
        "遍历"
      ],
      "overview": "单链表由头指针和若干结点组成。每个结点含数据域与指向后继的 next；最后一个结点的 next 为 NULL。",
      "keyPoints": [
        "空链表用 head == NULL 表示。",
        "访问结点成员用 p->data、p->next。",
        "遍历时工作指针应写 p = p->next，不能写 p++。",
        "正序建表通常维护 tail，在表尾追加。",
        "逆序建表把新结点插到表头：nn->next = head; head = nn。"
      ],
      "pitfalls": [
        "用 p++ 试图跳到下一个动态结点。",
        "正序建表时 tail 没有更新。",
        "最后一个结点的 next 未置空。",
        "遍历循环中先 p=p->next 再访问 p，漏掉首结点。"
      ],
      "exercise": {
        "prompt": "定义 Node { int data; Node* next; }; 创建三个动态结点，数据为 1、2、3，按顺序连接；用 p=p->next 遍历输出，最后释放全部结点。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    // 创建并连接结点\n    // 遍历输出\n    // 释放\n    return 0;\n}",
        "hint": "可以创建 a、b、c 三个指针，连接 a->b->c，最后 c->next=NULL。",
        "checks": [
          {
            "label": "创建 Node 指针",
            "pattern": "\\bNode\\s*\\*\\s*\\w+\\s*=\\s*new\\s+Node"
          },
          {
            "label": "连接 next",
            "pattern": "->\\s*next\\s*=\\s*\\w+"
          },
          {
            "label": "遍历使用 p=p->next",
            "pattern": "p\\s*=\\s*p\\s*->\\s*next"
          },
          {
            "label": "释放结点",
            "pattern": "\\bdelete\\s+\\w+\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node* a = new Node;\n    Node* b = new Node;\n    Node* c = new Node;\n    a->data = 1; a->next = b;\n    b->data = 2; b->next = c;\n    c->data = 3; c->next = NULL;\n    for (Node* p = a; p != NULL; p = p->next) {\n        cout << p->data << ' ';\n    }\n    delete a;\n    delete b;\n    delete c;\n    return 0;\n}",
        "explanation": "链表结点地址不一定连续，必须通过 next 跳转。",
        "commonMistakes": [
          "写 p++ 遍历动态结点。",
          "没有把 c->next 初始化为 NULL。",
          "只释放 a，遗漏 b、c。"
        ]
      },
      "masteryHint": "能建立链表并用 next 完整遍历。"
    },
    {
      "id": "l7-linked-list-insert",
      "lessonId": "lesson7",
      "title": "单链表插入：先接后继再改前驱",
      "tags": [
        "链表插入",
        "表头",
        "表尾",
        "顺序"
      ],
      "overview": "在结点之后插入新结点时，必须先让新结点接上原来的后继，再修改前驱的 next。顺序颠倒会丢失后半段链表。",
      "keyPoints": [
        "在 front 之后插入：newnode->next = front->next; front->next = newnode。",
        "在表头前插入要修改 head，并返回新的表头。",
        "在表尾后插入要令 newnode->next = NULL。",
        "按有序插入时需分别处理表头、中间、表尾。",
        "插入可能改变 head，所以函数通常返回 Node*。"
      ],
      "pitfalls": [
        "先写 front->next = newnode，导致原后继地址丢失。",
        "表头插入后没有更新 head。",
        "表尾插入后 newnode->next 未置空。",
        "空表插入时仍访问 front->next。"
      ],
      "exercise": {
        "prompt": "编写 Node* insertAfter(Node* node, int x)，在 node 后插入值为 x 的新结点并返回新结点；main 中在头结点后插入 2 并输出链表。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\n// 定义 insertAfter\n\nint main() {\n    // 测试插入\n    return 0;\n}",
        "hint": "核心顺序：新结点先接 node->next，再让 node->next 指向新结点。",
        "checks": [
          {
            "label": "定义 insertAfter",
            "pattern": "\\bNode\\s*\\*\\s*insertAfter\\s*\\(\\s*Node\\s*\\*\\s*\\w+\\s*,\\s*int\\s+\\w+\\s*\\)"
          },
          {
            "label": "创建新结点",
            "pattern": "\\bnew\\s+Node"
          },
          {
            "label": "新结点先接原后继",
            "pattern": "(?:new\\s+Node\\s*\\{[^}]*\\w+\\s*->\\s*next|=\\s*\\w+\\s*->\\s*next)"
          },
          {
            "label": "前驱再接新结点",
            "pattern": "\\w+\\s*->\\s*next\\s*=\\s*\\w+"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node { int data; Node* next; };\n\nNode* insertAfter(Node* node, int x) {\n    Node* nn = new Node;\n    nn->data = x;\n    nn->next = node->next;\n    node->next = nn;\n    return nn;\n}\n\nint main() {\n    Node* head = new Node;\n    head->data = 1;\n    head->next = NULL;\n    insertAfter(head, 2);\n    for (Node* p = head; p; p = p->next) cout << p->data << ' ';\n    delete head->next;\n    delete head;\n    return 0;\n}",
        "explanation": "先用新结点保存原后继，再改写前驱指针。",
        "commonMistakes": [
          "先改前驱，导致原后继丢失。",
          "插入表头后忘记返回新 head。",
          "空结点指针未检查。"
        ]
      },
      "masteryHint": "能安全完成表头、中间、表尾插入。"
    },
    {
      "id": "l7-linked-list-delete",
      "lessonId": "lesson7",
      "title": "单链表查找与删除",
      "tags": [
        "链表删除",
        "前驱",
        "释放",
        "表头"
      ],
      "overview": "删除结点前必须先找到它及其前驱。删除表头时要修改 head；删除其他结点时修改前驱的 next，随后释放被删结点。",
      "keyPoints": [
        "遍历查找通常维护 p 与 q，q 是 p 的前驱。",
        "删除表头：head = p->next; delete p。",
        "删除中间/尾部：q->next = p->next; delete p。",
        "删除可能改变 head，因此函数通常返回新的 Node*。",
        "查找失败时 p 会到 NULL，不能再访问 p->data。"
      ],
      "pitfalls": [
        "只写 q->next=p->next，却忘记 delete p，造成泄漏。",
        "删除表头时仍用 q->next，q 无有效前驱。",
        "先 delete p 再访问 p->next。",
        "未判断链表为空。"
      ],
      "exercise": {
        "prompt": "编写 Node* deleteHead(Node* head)，删除并释放首结点，返回新表头；main 中链表 1->2，删除后输出 2。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\n// 定义 deleteHead\n\nint main() {\n    // 建立 1->2，调用删除，输出新表头\n    return 0;\n}",
        "hint": "先判断空表；用临时指针保存旧 head，再移动 head。",
        "checks": [
          {
            "label": "定义 deleteHead",
            "pattern": "\\bNode\\s*\\*\\s*deleteHead\\s*\\(\\s*Node\\s*\\*\\s*\\w+\\s*\\)"
          },
          {
            "label": "处理空链表",
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*NULL\\s*\\)"
          },
          {
            "label": "head 指向后继",
            "pattern": "\\w+\\s*=\\s*\\w+\\s*->\\s*next"
          },
          {
            "label": "delete 旧结点",
            "pattern": "\\bdelete\\s+\\w+\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node { int data; Node* next; };\n\nNode* deleteHead(Node* head) {\n    if (!head) return NULL;\n    Node* old = head;\n    head = head->next;\n    delete old;\n    return head;\n}\n\nint main() {\n    Node* head = new Node;\n    head->data = 1;\n    head->next = new Node;\n    head->next->data = 2;\n    head->next->next = NULL;\n    head = deleteHead(head);\n    cout << head->data;\n    delete head;\n    return 0;\n}",
        "explanation": "先保存待删结点，移动 head，再释放保存的结点。",
        "commonMistakes": [
          "直接 delete head 后再访问 head->next。",
          "删除表头后忘记返回新 head。",
          "删除中间结点却忘记修改前驱 next。"
        ]
      },
      "masteryHint": "能按表头和非表头两种情况安全删除。"
    },
    {
      "id": "l7-linked-list-length-search",
      "lessonId": "lesson7",
      "title": "链表长度与按序号查找",
      "tags": [
        "链表长度",
        "按序号查找",
        "遍历",
        "next"
      ],
      "overview": "单链表只能通过 next 指针逐个访问。求长度需要完整遍历；按序号查找应在到达目标序号或空指针时停止。",
      "keyPoints": [
        "长度从 0 开始计数。",
        "工作指针从 head 开始，每轮执行 p = p->next。",
        "空链表的 head 为 NULL，长度为 0。",
        "按序号查找通常规定 1 表示第一个结点。",
        "找不到目标序号时返回 NULL。"
      ],
      "pitfalls": [
        "用 p++ 遍历动态结点。",
        "循环条件错误导致跳过首结点。",
        "序号与下标混淆，导致整体偏移一位。",
        "访问空指针的 data 或 next。"
      ],
      "exercise": {
        "prompt": "补全 length 和 findKth。findKth 中 1 表示第一个结点，越界返回 NULL。程序输出链表长度和第 2 个结点的数据。",
        "starter": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int value) : data(value), next(NULL) {}\n};\n\nint length(Node* head) {\n    // 统计结点个数\n}\n\nNode* findKth(Node* head, int k) {\n    // 返回第 k 个结点\n}\n\nint main() {\n    Node* head = new Node(10);\n    head->next = new Node(20);\n    head->next->next = new Node(30);\n    Node* second = findKth(head, 2);\n    cout << length(head) << ' ' << (second ? second->data : -1) << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "3 20",
        "hint": "长度循环到 p==NULL；findKth 从序号 1 开始计数。",
        "checks": [
          {
            "label": "定义 length",
            "pattern": "\\bint\\s+length\\s*\\(\\s*Node\\s*\\*\\s*head\\s*\\)"
          },
          {
            "label": "length 沿 next 遍历",
            "pattern": "\\bp\\s*=\\s*p\\s*->\\s*next\\b"
          },
          {
            "label": "定义 findKth",
            "pattern": "\\bNode\\s*\\*\\s*findKth\\s*\\("
          },
          {
            "label": "找不到时返回空指针",
            "pattern": "\\breturn\\s+(?:NULL|NULL)\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int value) : data(value), next(NULL) {}\n};\n\nint length(Node* head) {\n    int count = 0;\n    for (Node* p = head; p != NULL; p = p->next) ++count;\n    return count;\n}\n\nNode* findKth(Node* head, int k) {\n    if (k < 1) return NULL;\n    Node* p = head;\n    int index = 1;\n    while (p != NULL && index < k) {\n        p = p->next;\n        ++index;\n    }\n    return p;\n}\n\nint main() {\n    Node* head = new Node(10);\n    head->next = new Node(20);\n    head->next->next = new Node(30);\n    Node* second = findKth(head, 2);\n    cout << length(head) << ' ' << (second ? second->data : -1) << endl;\n    return 0;\n}",
        "explanation": "两个函数都从 head 出发，沿 next 前进；findKth 用 index 从 1 开始计数。",
        "commonMistakes": [
          "findKth 从 0 开始却把 k=1 当第二个结点。",
          "遍历条件写成 p->next != NULL 导致漏掉尾结点。",
          "找不到时返回 head。"
        ]
      },
      "masteryHint": "能写出稳定的链表计数和按序号查找循环。"
    },
    {
      "id": "l7-malloc-free",
      "lessonId": "lesson7",
      "title": "malloc、free 与 new、delete 的配对",
      "tags": [
        "malloc",
        "free",
        "new",
        "delete",
        "动态内存"
      ],
      "overview": "C 风格用 malloc/free，C++ 风格用 new/delete。两种方式不能随意混用；数组还需分别使用 new[] 与 delete[] 或 malloc/free。",
      "keyPoints": [
        "malloc 返回 void*，在 C++ 中通常需要转换为目标指针类型。",
        "malloc 只分配原始内存，不会调用 C++ 构造函数。",
        "free 释放 malloc/calloc/realloc 分配的内存。",
        "new 与 delete 配对，new[] 与 delete[] 配对。",
        "释放后应避免继续访问旧指针。"
      ],
      "pitfalls": [
        "malloc 后用 delete 释放。",
        "new[] 后用 delete 而不是 delete[]。",
        "malloc 后忘记初始化成员。",
        "释放后继续访问指针，形成悬空指针。"
      ],
      "exercise": {
        "prompt": "使用 malloc 创建一个 Node，令 data=7、next=NULL，再统计后释放该结点。程序输出 data。",
        "starter": "#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\nint main() {\n    // 使用 malloc 创建、初始化并释放结点\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "7",
        "hint": "malloc 返回 void*，要转换为 Node*；最后用 free(p)。",
        "checks": [
          {
            "label": "使用 malloc",
            "pattern": "\\bmalloc\\s*\\(\\s*sizeof\\s*\\(\\s*Node\\s*\\)\\s*\\)"
          },
          {
            "label": "转换为 Node*",
            "pattern": "\\(\\s*Node\\s*\\*\\s*\\)\\s*malloc"
          },
          {
            "label": "初始化 next",
            "pattern": "\\bp\\s*->\\s*next\\s*=\\s*(?:NULL|NULL)"
          },
          {
            "label": "使用 free 释放",
            "pattern": "\\bfree\\s*\\(\\s*p\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\nint main() {\n    Node* p = (Node*)malloc(sizeof(Node));\n    if (p == NULL) return 1;\n    p->data = 7;\n    p->next = NULL;\n    cout << p->data << endl;\n    free(p);\n    return 0;\n}",
        "explanation": "malloc 分配后先检查空指针，再显式初始化成员；最后用 free 释放。",
        "commonMistakes": [
          "malloc 后不检查 NULL。",
          "对 malloc 得到的指针使用 delete。",
          "忘记初始化 next。"
        ]
      },
      "masteryHint": "能区分 C 与 C++ 的动态内存接口并正确配对。"
    },
    {
      "id": "l7-struct-aggregate",
      "lessonId": "lesson7",
      "title": "结构数组计数与聚合",
      "tags": [
        "结构数组",
        "strcmp",
        "计数",
        "聚合"
      ],
      "overview": "结构数组常用来把名称和计数绑定在一起。输入一个名称后，先查找对应结构，再更新其计数。",
      "keyPoints": [
        "结构数组每个元素都包含完整的一组成员。",
        "字符数组成员使用 strcmp 比较内容。",
        "输入字符串前要保证数组容量足够。",
        "匹配到名称后只增加对应元素的计数。",
        "最后遍历结构数组输出汇总结果。"
      ],
      "pitfalls": [
        "用 == 比较两个字符数组内容。",
        "只更新计数却没有确认名称匹配。",
        "字符数组容量不足导致越界。",
        "把所有输入都累加到第一个元素。"
      ],
      "exercise": {
        "prompt": "已有 A、B、C 三个候选结构。读取 5 个候选人名称并计数，最后按 A、B、C 顺序输出名称和票数。",
        "starter": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nstruct Candidate {\n    char name[20];\n    int count;\n};\n\nint main() {\n    Candidate people[3] = {{\"A\",0},{\"B\",0},{\"C\",0}};\n    char input[20];\n    for (int k = 0; k < 5; ++k) {\n        cin >> input;\n        // 查找并计数\n    }\n    for (int i = 0; i < 3; ++i)\n        cout << people[i].name << ':' << people[i].count << ' ';\n    cout << endl;\n    return 0;\n}",
        "sampleInput": "A B A C A",
        "expectedOutput": "A:3 B:1 C:1",
        "hint": "循环比较 people[i].name 和 input，strcmp 为 0 时执行 ++people[i].count。",
        "checks": [
          {
            "label": "使用结构数组",
            "pattern": "\\bCandidate\\s+\\w+\\s*\\["
          },
          {
            "label": "使用 strcmp 比较名称",
            "pattern": "\\bstrcmp\\s*\\("
          },
          {
            "label": "增加匹配元素计数",
            "pattern": "\\+\\+\\s*people\\s*\\[\\s*i\\s*\\]\\s*\\.\\s*count|people\\s*\\[\\s*i\\s*\\]\\s*\\.\\s*count\\s*\\+?="
          },
          {
            "label": "遍历输出结构数组",
            "pattern": "\\bpeople\\s*\\[\\s*i\\s*\\]\\s*\\.\\s*name[\\s\\S]*\\bpeople\\s*\\[\\s*i\\s*\\]\\s*\\.\\s*count"
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nstruct Candidate {\n    char name[20];\n    int count;\n};\n\nint main() {\n    Candidate people[3] = {{\"A\",0},{\"B\",0},{\"C\",0}};\n    char input[20];\n    for (int k = 0; k < 5; ++k) {\n        cin >> input;\n        for (int i = 0; i < 3; ++i) {\n            if (strcmp(input, people[i].name) == 0) {\n                ++people[i].count;\n                break;\n            }\n        }\n    }\n    for (int i = 0; i < 3; ++i)\n        cout << people[i].name << ':' << people[i].count << ' ';\n    cout << endl;\n    return 0;\n}",
        "explanation": "输入名称与结构中的名称匹配后，只更新对应的 count。",
        "commonMistakes": [
          "使用 input == people[i].name 比较地址。",
          "匹配后没有 break，误改多个结构。",
          "输出 count 而不是 name。"
        ]
      },
      "masteryHint": "能用结构数组完成名称查找、计数和汇总输出。"
    },
    {
      "id": "l8-ex8-1",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.1 输出26个小写字母（屏幕版与文件版）",
      "tags": [
        "课件例题",
        "文件指针",
        "fputc",
        "fopen"
      ],
      "overview": "先演示把字母输出到屏幕；再把同样的字母用 fputc 写入 d:\\alp.txt，实现永久保存。",
      "keyPoints": [
        "FILE *fp 定义文件指针。",
        "fopen(\"d:\\\\alp.txt\",\"w\") 以写方式打开文件。",
        "fp==NULL 表示打开失败，要提示并 exit(1)。",
        "fputc(ch,fp) 把一个字符写入文件，fclose(fp) 关闭并刷新缓冲区。"
      ],
      "pitfalls": [
        "路径中的反斜杠要写成 \\\\。",
        "打开文件后不检查 NULL。",
        "忘记 fclose，数据可能没有真正写入磁盘。"
      ],
      "example": {
        "title": "例8.1 输出26个小写字母（屏幕版与文件版）",
        "source": "课件 lesson8 · P12-P13",
        "code": "#include  <iostream>\nusing  namespace std;\nint main()\n{\n    char ch;\n    for(ch='a';ch<='z';ch++)\n        putchar(ch);\nsystem(\"pause\");\nreturn 0;\n}\n\n#include  <iostream>\nusing  namespace std;\nint main()\n{\n    FILE *fp;\n    char ch;\n    fp=fopen(\"d:\\\\alp.txt\",\"w\");\n    if(fp==NULL)\n    {\n        cout<<\"can't open d:\\\\alp.txt\"<<endl;\n        exit(1);\n    }\n    for(ch='a';ch<='z';ch++)\n        fputc(ch,fp);\n    fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "屏幕版输出 abc…z；文件版在 D 盘生成 alp.txt，内容为 abc…z",
        "explanation": "两个程序循环完全相同，区别只在输出去向：putchar 写到标准输出（屏幕），fputc 写到 fp 指向的文件。文件版多了打开、失败检查、关闭三步，这是所有文件操作的基本流程。",
        "notes": [
          {
            "section": 0,
            "line": 7,
            "text": "把字符写到标准输出，程序结束数据就消失。"
          },
          {
            "section": 1,
            "line": 5,
            "text": "文件指针，后续所有文件操作都通过它。"
          },
          {
            "section": 1,
            "line": 7,
            "text": "\"w\" 表示写方式；文件不存在则创建，存在则清空。"
          },
          {
            "section": 1,
            "line": 8,
            "text": "打开失败必须处理，否则后续操作会崩溃。"
          },
          {
            "section": 1,
            "line": 11,
            "text": "异常终止程序。"
          },
          {
            "section": 1,
            "line": 14,
            "text": "把一个字符写到文件当前位置。"
          },
          {
            "section": 1,
            "line": 15,
            "text": "关闭文件，刷新缓冲区，确保数据落盘。"
          }
        ],
        "sections": [
          {
            "label": "屏幕版",
            "code": "#include  <iostream>\nusing  namespace std;\nint main()\n{\n    char ch;\n    for(ch='a';ch<='z';ch++)\n        putchar(ch);\nsystem(\"pause\");\nreturn 0;\n}"
          },
          {
            "label": "文件版",
            "code": "#include  <iostream>\nusing  namespace std;\nint main()\n{\n    FILE *fp;\n    char ch;\n    fp=fopen(\"d:\\\\alp.txt\",\"w\");\n    if(fp==NULL)\n    {\n        cout<<\"can't open d:\\\\alp.txt\"<<endl;\n        exit(1);\n    }\n    for(ch='a';ch<='z';ch++)\n        fputc(ch,fp);\n    fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}"
          }
        ]
      },
      "masteryHint": "能说出文件操作的三个基本步骤，并解释 fclose 的作用。",
      "sourcePages": [
        12
      ]
    },
    {
      "id": "l8-ex8-2",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.2 读文本、按单词分行、写入新文件并计数",
      "tags": [
        "课件例题",
        "fgetc",
        "feof",
        "文件复制"
      ],
      "overview": "从 text.txt 逐字符读入，遇到空白符就输出换行并计数，同时把字符写入 words.txt。",
      "keyPoints": [
        "while(!feof(fp1)) 判断是否到达文件尾。",
        "ch=fgetc(fp1) 读一个字符。",
        "空白符包括空格、制表符、换行符。",
        "fputc(ch,fp2) 把字符写到另一个文件。"
      ],
      "pitfalls": [
        "feof 只有在读失败后才为真，循环可能多处理一次。",
        "只打开一个文件却想同时读写两个。",
        "忘记 fclose 两个文件。"
      ],
      "example": {
        "title": "例8.2 读文本、按单词分行、写入新文件并计数",
        "source": "课件 lesson8 · P24-P26",
        "code": "#include <iostream>\nusing namespace std;\nint main( )\n{                                          \n    FILE  *fp1,*fp2;\n    char ch;\n    int num=0;\n    if((fp1=fopen(\"d:\\\\text.txt\",\"r\"))==NULL)\n    {\n        cout<<\"can't open text.\\n\";\n        exit(0);\n    }\n    if((fp2=fopen(\"d:\\\\words.txt\",\"w\"))==NULL)\n    {\n        cout<<\"can't open file.\\n\";\n        exit(0);\n    }\n    while(!feof(fp1))\n    {    \n        ch=fgetc(fp1); \n        if(ch==' '||ch=='\\t'||ch=='\\n')   \n        {    num++;                       \n             cout<<endl;\n             fputc('\\n',fp2);\n        }\n        else\n        {    cout<<ch;\n             fputc(ch,fp2);\n        }\n    }\n    cout<<\"\\nnum=\"<<num<<endl;\nfclose(fp1); fclose(fp2);\nsystem(\"pause\"); return 0;\n}",
        "output": "屏幕上每个单词一行，最后输出 num=单词数；words.txt 内容相同",
        "explanation": "程序同时打开两个文件：fp1 只读，fp2 只写。每读一个字符，如果是空白符就输出换行并让 num 加 1，否则原样输出并写入 fp2。这样 text.txt 中的单词被逐行拆开，words.txt 得到同样格式。",
        "notes": [
          {
            "section": 0,
            "line": 8,
            "text": "\"r\" 只读，文件必须已存在。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "\"w\" 只写，文件不存在会创建。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "feof 为假表示还没到文件尾。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "从 fp1 读一个字符。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "三种空白符都表示一个单词结束。"
          },
          {
            "section": 0,
            "line": 22,
            "text": "统计单词数（空白符个数）。"
          },
          {
            "section": 0,
            "line": 28,
            "text": "把非空白字符写入 words.txt。"
          },
          {
            "section": 0,
            "line": 32,
            "text": "两个文件都要关闭。"
          }
        ]
      },
      "masteryHint": "能说出两个文件指针各自的作用，以及 feof 的判断时机。",
      "sourcePages": [
        24
      ]
    },
    {
      "id": "l8-ex8-3",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.3 字符串读写 fputs 与 fgets",
      "tags": [
        "课件例题",
        "fputs",
        "fgets",
        "文件关闭"
      ],
      "overview": "先以 \"w\" 写入三行字符串，关闭后以 \"r\" 重新打开，用 fgets 逐行读入并用 puts 输出。",
      "keyPoints": [
        "fputs 不自动添加换行符，需要手动写 \\n。",
        "fgets(s,100,fp) 最多读 99 个字符，遇到换行或 EOF 停止。",
        "写完必须 fclose，再以读方式重新打开。",
        "while(!feof(fp)) 也可以用 while(fgets(...)!=NULL) 替代。"
      ],
      "pitfalls": [
        "写完不关闭就重新打开，缓冲区数据可能还没落盘。",
        "fgets 的第二个参数是缓冲区大小，不是读取长度。",
        "fputs 不会自动换行。"
      ],
      "example": {
        "title": "例8.3 字符串读写 fputs 与 fgets",
        "source": "课件 lesson8 · P29",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{    FILE *fp;\n    char s[100];\n    if((fp=fopen(\"file1.TXT\", \"w\"))==NULL)\n    {\n        cout<<\"can't open file\\n\";  exit(1); }\n    fputs(\"I am a teacher.\\n\",fp);\n    fputs(\"He is a boy.\", fp);\n    fputs(\"She is a girl.\", fp);\n    fclose(fp); //必须先关闭，再以读的方式打开。\n    if((fp=fopen(\"file1.TXT\", \"r\"))==NULL)\n    {   cout<<\"can't open file\\n\";  exit(1);   }\n    while(!feof(fp))\n    {\n        fgets(s,100,fp);\n        puts(s);\n    }\n    fclose(fp);\nsystem(\"pause\");return 0;\n}",
        "output": "I am a teacher.\nHe is a boy.She is a girl.",
        "explanation": "fputs 只写字符串内容，不自动换行，所以第一行手动加了 \\n，后两行连在一起。fgets 一次读一行（或最多 99 个字符），puts 输出并换行。课件还给出更稳妥的写法：while(fgets(s,100,fp)!=NULL) puts(s);",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "写方式打开，文件不存在则创建。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "fputs 不自动换行，换行符要自己写。"
          },
          {
            "section": 0,
            "line": 12,
            "text": "必须先关闭，才能保证写入完成并重新以读方式打开。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "读方式重新打开同一个文件。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "最多读 99 个字符到 s，遇到换行或 EOF 停止。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "输出字符串并自动换行。"
          }
        ]
      },
      "masteryHint": "能说出 fputs 与 puts 的区别，以及为什么写完要先 fclose。",
      "sourcePages": [
        29
      ]
    },
    {
      "id": "l8-ex8-4",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.4 学生信息排序后以二进制文件保存并读回",
      "tags": [
        "课件例题",
        "fwrite",
        "fread",
        "二进制文件"
      ],
      "overview": "5 个学生按成绩排序后，用 fwrite 把整个结构数组写入 student.dat，再以 \"rb\" 打开，用 fread 逐个读回并显示。",
      "keyPoints": [
        "\"wb\"、\"rb\" 是二进制读写方式。",
        "fwrite(s,sizeof(s),1,fp) 把整个数组作为一块写入。",
        "fread(&t[i],sizeof(student),1,fp)==1 表示成功读到一个学生。",
        "二进制文件不能直接用记事本阅读，会是乱码。"
      ],
      "pitfalls": [
        "用 \"w\" 而不是 \"wb\" 写结构数组。",
        "fread 第一个参数不是地址。",
        "用 feof 判断 fread 是否成功。"
      ],
      "example": {
        "title": "例8.4 学生信息排序后以二进制文件保存并读回",
        "source": "课件 lesson8 · P33-P36",
        "code": "#define N 5\n#include <iostream>\nusing namespace std;\nstruct student\n{\n    char name[20];\n    char num[8];\n    double score;\n};\nint main()\n{\n    struct student s[N],t[N];\n    int i, j;\n    FILE *fp;\n    if((fp=fopen(\"student.dat\",\"wb\"))==NULL)\n    {\n        cout<<\"can't open student.dat\";\n        exit(1);\n    }\n    for(i=0;i<N;i++)\n        cin>>s[i].name>>s[i].num>>s[i].score;\n    for(i=0;i<N-1;i++)\n        for(j=0;j<N-1-i;j++)\n            if(s[j].score>s[j+1].score)\n            {\n                student ts=s[j];\n                s[j]=s[j+1];\n                s[j+1]=ts;\n            }\n    fwrite(s,sizeof(s),1,fp);\n    fclose(fp); \n    if((fp=fopen(\"student.dat\",\"rb\"))==NULL)\n    {\n        cout<<\"can't open student.dat\";\n        exit(1);\n    }\n    cout<<\"从文件中读取的数据：\"<<endl;\n    i=0;\n    while(fread(&t[i],sizeof(student),1,fp)==1)\n    {\n        cout<<t[i].name<<' '<<t[i].num<<' '<<t[i].score<<endl;\n        i++;\n    }\n    fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "按成绩从低到高输出 5 个学生的信息",
        "explanation": "结构数组在内存中是连续存放的，所以可以用一次 fwrite 把整个数组写成一块二进制数据。读回时用 fread 每次读一个 student，返回值为 1 表示读成功，读到最后返回 0，循环自然结束。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "结构体包含姓名、学号和 double 成绩。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "wb 是二进制写方式，不做文本转换；打开失败返回 NULL。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "结构数组不能整体输入，必须逐个成员输入。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "冒泡排序，按成绩从小到大。"
          },
          {
            "section": 0,
            "line": 26,
            "text": "结构体允许整体赋值，交换时用临时结构变量 ts。"
          },
          {
            "section": 0,
            "line": 30,
            "text": "把整个数组当作 1 个块写入，块大小 sizeof(s)=N*sizeof(student)。"
          },
          {
            "section": 0,
            "line": 31,
            "text": "写完必须关闭文件，缓冲区内容才会真正写入磁盘。"
          },
          {
            "section": 0,
            "line": 39,
            "text": "每次读 1 个 student，返回 1 表示成功；读到文件尾返回 0，循环结束。"
          },
          {
            "section": 0,
            "line": 42,
            "text": "下标后移，为读下一个学生做准备。"
          }
        ]
      },
      "masteryHint": "能解释 fwrite 的 size、count 两个参数，以及为什么用 fread 返回值判断结束。",
      "sourcePages": [
        33
      ]
    },
    {
      "id": "l8-ex8-5",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.5 用 fprintf 与 fscanf 实现同样的学生信息读写",
      "tags": [
        "课件例题",
        "fprintf",
        "fscanf",
        "文本文件"
      ],
      "overview": "与例8.4 功能相同，但用 fprintf 写文本、fscanf 读文本，文件 student.txt 可以直接用记事本查看。",
      "keyPoints": [
        "fprintf(fp,\"%s %s %f\\n\",...) 按格式写文本。",
        "fscanf(fp,\"%s%s%lf\",...) 按格式读文本。",
        "fscanf 的字符串参数前不加 &，数值参数前要加 &。",
        "fscanf 返回成功读取的数据个数，==3 表示三个字段都读到。"
      ],
      "pitfalls": [
        "fscanf 的字符串数组前多写 &。",
        "fscanf 的 double 用 %f 而不是 %lf。",
        "用 feof 判断 fscanf 是否成功。"
      ],
      "example": {
        "title": "例8.5 用 fprintf 与 fscanf 实现同样的学生信息读写",
        "source": "课件 lesson8 · P42-P44",
        "code": "#define N 5\n#include <iostream>\nusing namespace std;\nstruct student\n{\n    char name[20];\n    char num[8];\n    double score;\n};\nint main()\n{\n    struct student s[N],t[N];\n    int i, j;\n    FILE *fp;\n    if((fp=fopen(\"student.txt\",\"w\"))==NULL)\n    {\n        cout<<\"can't open student.txt\";\n        exit(1);\n    }\n    for(i=0;i<N;i++)\n        cin>>s[i].name>>s[i].num>>s[i].score;\n    for(i=0;i<N-1;i++)\n        for(j=0;j<N-1-i;j++)\n            if(s[j].score>s[j+1].score)\n            {\n                student ts=s[j];\n                s[j]=s[j+1];\n                s[j+1]=ts;\n            }\n    for(i=0;i<N;i++)\n        fprintf(fp,\"%s %s %f\\n\",s[i].name,s[i].num,s[i].score);\n    fclose(fp); \n    if((fp=fopen(\"student.txt\",\"r\"))==NULL)\n    {\n        cout<<\"can't open student.txt\";\n        exit(1);\n    }\n    cout<<\"从文件中读取的数据：\"<<endl;\n    i=0;\n    while(fscanf(fp,\"%s%s%lf\",t[i].name,t[i].num,&t[i].score)==3)\n    {\n        cout<<t[i].name<<' '<<t[i].num<<' '<<t[i].score<<endl;\n        i++;\n    }\n    fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "student.txt 为可读文本；屏幕按成绩从低到高输出",
        "explanation": "fprintf 的用法与 printf 相同，只是多一个文件指针参数；fscanf 与 scanf 相同，也多一个文件指针。字符串数组名本身就是地址，所以 t[i].name 前不加 &；score 是 double，必须用 %lf 并加 &。",
        "notes": [
          {
            "section": 0,
            "line": 4,
            "text": "文本文件读写的结构体与例8.4相同，成绩仍是 double。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "w 是文本写方式，若文件已存在会先清空。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "先读入 5 个学生的姓名、学号、成绩。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "排序逻辑与例8.4完全相同。"
          },
          {
            "section": 0,
            "line": 31,
            "text": "fprintf 按格式把每个学生写成一行文本，%f 输出 double。"
          },
          {
            "section": 0,
            "line": 33,
            "text": "重新以 r 方式打开同一个文件，准备读回。"
          },
          {
            "section": 0,
            "line": 40,
            "text": "fscanf 返回成功读入的字段数，3 表示姓名、学号、成绩都读到；字符串数组名本身就是地址，double 要加 &。"
          },
          {
            "section": 0,
            "line": 43,
            "text": "准备读下一个学生，直到 fscanf 返回不足 3 项。"
          }
        ]
      },
      "masteryHint": "能说出 fscanf 中哪些参数要加 &，以及返回值 3 的含义。",
      "sourcePages": [
        42
      ]
    },
    {
      "id": "l8-ex8-6",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.6 随机读写 fseek 示例",
      "tags": [
        "课件例题",
        "fseek",
        "随机读写"
      ],
      "overview": "以 \"w+\" 打开可读写文件，先写 \"I love China\"，用 fseek(fp,-5,SEEK_CUR) 回到 'C'，读字符串；再定位到文件尾写入 '!'。",
      "keyPoints": [
        "\"w+\" 打开后可读可写。",
        "fseek(fp,-5,SEEK_CUR) 从当前位置向前移动 5 字节。",
        "fgets(s,100,fp) 从当前位置读字符串。",
        "fseek(fp,0,2) 定位到文件尾，然后 fputc('!',fp) 追加。"
      ],
      "pitfalls": [
        "写完立刻读却不 fseek，读写位置在文件尾。",
        "fseek 的偏移量单位是字节，不是元素个数。",
        "用 \"w\" 打开却想读。"
      ],
      "example": {
        "title": "例8.6 随机读写 fseek 示例",
        "source": "课件 lesson8 · P48",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{  FILE  *fp;\n   char s[100];\n   if ((fp = fopen(\"file.txt\", \"w+\")) == NULL)\n   {   cout << \"can't open file.\\n\";     exit(1);     }\n   fputs(\"I love \", fp);\n   fputs(\"China\", fp);\n   fseek(fp, -5, SEEK_CUR);            \n   fgets(s,100,fp); \n   cout << s << endl;\n   fseek(fp,0, 2);                      \n   fputc('!', fp);                       \n   fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "China\n文件内容变为 I love China!",
        "explanation": "\"I love \" 占 7 字节，\"China\" 占 5 字节，写完后位置在文件尾。fseek(-5,SEEK_CUR) 向前退 5 字节，正好回到 'C'，所以 fgets 读到 \"China\"。fseek(0,2) 定位到文件尾，再写 '!' 就追加在末尾。",
        "notes": [
          {
            "section": 0,
            "line": 6,
            "text": "\"w+\" 既可写也可读。"
          },
          {
            "section": 0,
            "line": 9,
            "text": "写完 \"China\" 后，读写位置在文件尾。"
          },
          {
            "section": 0,
            "line": 10,
            "text": "从当前位置向前移动 5 字节，回到 'C'。"
          },
          {
            "section": 0,
            "line": 11,
            "text": "从当前位置读到换行或 EOF，得到 \"China\"。"
          },
          {
            "section": 0,
            "line": 13,
            "text": "2 即 SEEK_END，定位到文件尾。"
          },
          {
            "section": 0,
            "line": 14,
            "text": "在文件尾追加一个字符。"
          }
        ]
      },
      "masteryHint": "能算出 fseek(-5) 为什么正好回到 'C'。",
      "sourcePages": [
        48
      ]
    },
    {
      "id": "l8-ex8-7",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.7 统计文件中每个数字字符出现的次数",
      "tags": [
        "课件例题",
        "fgetc",
        "字符统计",
        "下标映射"
      ],
      "overview": "逐字符读取 file1.txt，若 ch 是数字，则用 k=ch-'0' 作为下标，让 num[k] 加 1。",
      "keyPoints": [
        "num[10] 初始化为 0，分别统计 '0'~'9'。",
        "k=ch-'0' 把数字字符映射到 0~9。",
        "只统计数字字符，其它字符跳过。",
        "最后只输出出现次数不为 0 的数字。"
      ],
      "pitfalls": [
        "下标写成 ch（字符的 ASCII 码），越界。",
        "num 没有初始化。",
        "把 '0' 写成 0。"
      ],
      "example": {
        "title": "例8.7 统计文件中每个数字字符出现的次数",
        "source": "课件 lesson8 · P49-P50",
        "code": "#include <iostream>\nusing namespace std;\nint main( )\n{\n    FILE *fp;\n    char ch;\n    int num[10]={0},k;\n    if((fp=fopen(\"file1.txt\", \"r\"))==NULL)\n    { \n        cout<<\"can’t open file\\n\";  \n        exit(1);\n    }\n    while(!feof(fp)) \n    {  \n        ch=fgetc(fp);\n        if(ch>='0'&&ch<='9')\n        {\n            k=ch-'0'; \n            num[k]=num[k]+1;\n        }\n    }\n    fclose(fp);\n    for(k=0;k<10;k++)\n        if(num[k]!=0)\n            cout<<k<<\"出现\"<<num[k]<<\"次\"<<endl;\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "例如文件中数字 1 出现 3 次，则输出 1出现3次",
        "explanation": "数字字符 '0'~'9' 的 ASCII 码是连续的，所以 ch-'0' 正好得到 0~9 的整数。用这个整数作 num 的下标，就能把每个数字字符的次数分别累加。",
        "notes": [
          {
            "section": 0,
            "line": 7,
            "text": "10 个计数器全部初始化为 0。"
          },
          {
            "section": 0,
            "line": 15,
            "text": "从文件读一个字符。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "只处理数字字符。"
          },
          {
            "section": 0,
            "line": 18,
            "text": "把字符 '0'~'9' 转成下标 0~9。"
          },
          {
            "section": 0,
            "line": 19,
            "text": "对应数字的计数加 1。"
          },
          {
            "section": 0,
            "line": 24,
            "text": "只输出出现过的数字。"
          }
        ]
      },
      "masteryHint": "能解释 ch-'0' 为什么能得到 0~9 的下标。",
      "sourcePages": [
        49
      ]
    },
    {
      "id": "l8-ex8-8",
      "lessonId": "lesson8",
      "kind": "example",
      "title": "例8.8 删除重复字符并写入文件",
      "tags": [
        "课件例题",
        "字符串去重",
        "文件写入",
        "j--"
      ],
      "overview": "对每个字符 s[i]，在它后面查找相同字符；找到就把它后面的所有字符前移一位，并让 j-- 回退，防止连续重复漏删。",
      "keyPoints": [
        "外层 i 逐个考查每个字符。",
        "内层 j 从 i+1 开始找相同字符。",
        "删除时 for(k=j;s[k]!='\\0';k++) s[k]=s[k+1]; 前移覆盖。",
        "j-- 让下一轮重新检查当前位置，处理连续重复。"
      ],
      "pitfalls": [
        "删除后忘记 j--，连续三个相同字符只删掉一个。",
        "前移循环上界写成 k<strlen(s)，越界。",
        "文件以 \"w\" 打开却忘记 fputs。"
      ],
      "example": {
        "title": "例8.8 删除重复字符并写入文件",
        "source": "课件 lesson8 · P51",
        "code": "#include <iostream>\nusing namespace std;\nint main( )\n{\n    FILE *fp;\n    char s[100],ch;\n    int i,j,k;\n    if((fp=fopen(\"file.txt\", \"w\"))==NULL)\n    {\n        cout<<\"can't open file\\n\";\n        exit(1);\n    }\n    gets(s);\n    for(i=0;s[i]!='\\0';i++)\n    {\n        ch=s[i];\n        for(j=i+1;s[j]!='\\0';j++)\n            if(s[j]==ch)\n            {\n                for(k=j;s[k]!='\\0';k++)\n                    s[k]=s[k+1];\n                j--;\n            }\n    }\n    fputs(s,fp);\n    fclose(fp);\nsystem(\"pause\");\nreturn 0;\n}",
        "output": "输入 aaabbbccc 时，文件内容为 abc",
        "explanation": "每找到一个重复字符，就把从 j 开始的整段字符串前移一位，相当于删除 s[j]。删除后原来的 s[j+1] 移到了 s[j]，所以 j-- 让下一轮仍然检查 j 这个位置，才能处理 aaa 这种连续重复。",
        "notes": [
          {
            "section": 0,
            "line": 14,
            "text": "逐个字符作为“保留字符”考查。"
          },
          {
            "section": 0,
            "line": 16,
            "text": "保存当前字符，后面所有相同字符都要删。"
          },
          {
            "section": 0,
            "line": 17,
            "text": "只在当前字符后面找重复。"
          },
          {
            "section": 0,
            "line": 20,
            "text": "从重复位置开始，把后面的字符整体前移。"
          },
          {
            "section": 0,
            "line": 21,
            "text": "用后一个字符覆盖当前字符，相当于删除。"
          },
          {
            "section": 0,
            "line": 22,
            "text": "删除后当前位置已经是新字符，必须回退一位重新检查。"
          },
          {
            "section": 0,
            "line": 25,
            "text": "把去重后的字符串写入文件。"
          }
        ]
      },
      "masteryHint": "能解释 j-- 为什么能处理连续重复字符。",
      "sourcePages": [
        51
      ]
    },
    {
      "id": "l8-file-concepts",
      "lessonId": "lesson8",
      "title": "文件、文本文件与二进制文件",
      "tags": [
        "文件",
        "文本文件",
        "二进制文件",
        "流"
      ],
      "overview": "文件是外存上的数据集合。C 文件是字节序列，通过文件指针访问；文本文件保存字符编码，二进制文件直接保存内存表示。",
      "keyPoints": [
        "文件标识包含路径、主文件名和后缀。",
        "文本文件把数据转换成字符形式，便于直接查看和编辑。",
        "二进制文件不转换格式，通常更省空间、读写更快，但不能直接按文本阅读。",
        "整数 123 的文本形式占 3 个字符字节，二进制 int 通常占 4 字节。",
        "字符型数据通常以 ASCII 形式保存；数值可按需要选择文本或二进制。"
      ],
      "pitfalls": [
        "把二进制文件当普通文本直接编辑。",
        "认为二进制文件一定更小，忽略具体类型和编码。",
        "把文件扩展名当作文件内容的唯一证据。",
        "忘记文本转换需要额外时间。"
      ],
      "exercise": {
        "prompt": "用 C++ 输出 int 类型 123 和 char 类型 '7' 的 sizeof，理解数值类型与字符类型的存储差异。",
        "starter": "#include <iostream>\n\nint main() {\n    // 输出两个 sizeof\n    return 0;\n}",
        "hint": "分别写 sizeof(int) 和 sizeof(char)。",
        "checks": [
          {
            "label": "输出 sizeof(int)",
            "pattern": "sizeof\\s*\\(\\s*int\\s*\\)"
          },
          {
            "label": "输出 sizeof(char)",
            "pattern": "sizeof\\s*\\(\\s*char\\s*\\)"
          },
          {
            "label": "使用 cout",
            "pattern": "\\bstd\\s*::\\s*cout|\\bcout"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << sizeof(int) << ' ' << sizeof(char);\n    return 0;\n}",
        "explanation": "sizeof 给出类型占用的字节数；具体 int 宽度依环境，常见为 4。",
        "commonMistakes": [
          "把 sizeof(int) 误写成 sizeof(123)。",
          "认为 char 总是字符串。",
          "认为文本文件中的 123 也占 4 字节。"
        ]
      },
      "masteryHint": "能解释文本与二进制存储差异。"
    },
    {
      "id": "l8-file-pointer",
      "lessonId": "lesson8",
      "title": "FILE 指针与文件操作步骤",
      "tags": [
        "FILE",
        "文件指针",
        "stdio.h",
        "缓冲"
      ],
      "overview": "C 文件操作通过 FILE 结构及其指针完成。标准流程是定义文件指针、打开、检查、读写、关闭。",
      "keyPoints": [
        "FILE 类型及 fopen、fclose、fgetc 等函数由 <stdio.h>/<cstdio> 提供。",
        "FILE* fp 并不直接保存整个文件内容，而是关联缓冲区与文件状态。",
        "文件操作通常经缓冲区进行，不一定每次调用都立即写磁盘。",
        "文件位置指示器记录下一次读写的当前位置。",
        "所有打开的文件都应在程序结束前关闭。"
      ],
      "pitfalls": [
        "把 FILE* 当作普通字符数组。",
        "不包含 cstdio/stdio.h 就使用 FILE。",
        "打开后不检查返回值。",
        "关闭后继续使用同一文件指针进行读写。"
      ],
      "exercise": {
        "prompt": "声明 FILE* fp，以写模式打开 out.txt；若打开失败返回 1，成功时写入 \"OK\" 并关闭文件。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 定义、打开、检查、写入、关闭\n    return 0;\n}",
        "hint": "模式字符串写 \"w\"；打开后用 fputs 或 fprintf。",
        "checks": [
          {
            "label": "声明 FILE 指针",
            "pattern": "\\bFILE\\s*\\*\\s*\\w+"
          },
          {
            "label": "以 w 模式打开",
            "pattern": "\\bfopen\\s*\\(\\s*\\\"[^\\\"]+\\\"\\s*,\\s*\\\"w\\\"\\s*\\)"
          },
          {
            "label": "检查空指针",
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*(?:NULL|NULL)\\s*\\)"
          },
          {
            "label": "写入 OK",
            "pattern": "(?:fputs|fprintf)\\s*\\([^;]*OK"
          },
          {
            "label": "关闭文件",
            "pattern": "\\bfclose\\s*\\("
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"out.txt\", \"w\");\n    if (!fp) return 1;\n    fputs(\"OK\", fp);\n    fclose(fp);\n    return 0;\n}",
        "explanation": "打开、检查、使用、关闭构成完整文件生命周期。",
        "commonMistakes": [
          "使用 fopen 却写成 fopen。",
          "打开失败后仍继续写入。",
          "写完不关闭。"
        ]
      },
      "masteryHint": "能写出安全完整的文件操作流程。"
    },
    {
      "id": "l8-open-modes",
      "lessonId": "lesson8",
      "title": "fopen 打开方式与错误检查",
      "tags": [
        "fopen",
        "r",
        "w",
        "a",
        "b",
        "+"
      ],
      "overview": "打开方式决定文件是读、写、追加还是兼读写，也决定文本/二进制模式以及文件不存在时的行为。",
      "keyPoints": [
        "r 只读，文件必须存在。",
        "w 只写，存在文件会被截断为空文件。",
        "a 追加，不存在则创建。",
        "b 表示二进制模式，如 rb、wb、ab。",
        "+ 允许读写，如 r+、w+、a+。",
        "fopen 失败返回 NULL/NULL，必须检查。"
      ],
      "pitfalls": [
        "用 w 打开已有文件却以为会保留原内容。",
        "用 r 打开不存在文件后未检查返回值。",
        "用文本模式读写二进制结构体。",
        "在字符串中写路径 d:\\file.txt 却只写一个反斜杠。"
      ],
      "exercise": {
        "prompt": "以追加文本模式打开 log.txt 并写入 \"new\\n\"；文件不存在时应自动创建。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 追加写入\n    return 0;\n}",
        "hint": "模式字符串应使用 \"a\"。",
        "checks": [
          {
            "label": "以 a 模式打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"a\\\"\\s*\\)"
          },
          {
            "label": "检查文件指针",
            "pattern": "\\bif\\s*\\([^)]*\\)"
          },
          {
            "label": "写入 new 和换行",
            "pattern": "fputs\\s*\\(\\s*\\\"new\\\\n\\\""
          },
          {
            "label": "关闭文件",
            "pattern": "\\bfclose\\s*\\("
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"log.txt\", \"a\");\n    if (!fp) return 1;\n    fputs(\"new\\n\", fp);\n    fclose(fp);\n    return 0;\n}",
        "explanation": "a 模式保留原内容，并在末尾追加。",
        "commonMistakes": [
          "使用 w，覆盖原日志。",
          "使用 r，文件不存在时失败且不能写。",
          "字符串中写 \\n 被误解析。"
        ]
      },
      "masteryHint": "能按读写意图选择 r/w/a、b 与 +。"
    },
    {
      "id": "l8-close-buffer",
      "lessonId": "lesson8",
      "title": "fclose 与缓冲区刷新",
      "tags": [
        "fclose",
        "缓冲区",
        "资源管理"
      ],
      "overview": "fclose 把尚未写出的缓冲数据刷新到文件，并释放文件相关资源。即使程序看似已写完，也应及时关闭。",
      "keyPoints": [
        "fclose 成功通常返回 0，失败返回非 0。",
        "写入函数成功不代表所有字节已经到达磁盘。",
        "程序正常结束通常会清理打开的文件，但显式关闭更可靠。",
        "关闭文件后不应继续用该 FILE* 读写。",
        "多个文件都应分别关闭。"
      ],
      "pitfalls": [
        "只打开文件不关闭。",
        "关闭后继续 fputc/fgets。",
        "认为 fputs 返回成功就已经永久保存。",
        "关闭失败不处理。"
      ],
      "exercise": {
        "prompt": "打开 out.txt 写模式，检查失败；写入 \"done\" 后关闭，并检查 fclose 返回值。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 写入并关闭，检查两次返回值\n    return 0;\n}",
        "hint": "fopen 和 fclose 都可能失败。",
        "checks": [
          {
            "label": "检查 fopen",
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*(?:NULL|NULL)\\s*\\)"
          },
          {
            "label": "写入 done",
            "pattern": "fputs\\s*\\(\\s*\\\"done\\\""
          },
          {
            "label": "检查 fclose 返回值",
            "pattern": "\\bif\\s*\\(\\s*(?:std\\s*::\\s*)?fclose\\s*\\([^)]*\\)\\s*!=\\s*0\\s*\\)"
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"out.txt\", \"w\");\n    if (!fp) return 1;\n    fputs(\"done\", fp);\n    if (fclose(fp) != 0) return 2;\n    return 0;\n}",
        "explanation": "fclose 不仅释放资源，也可能暴露写入失败。",
        "commonMistakes": [
          "只在 fopen 后检查，不检查 fclose。",
          "关闭后再次使用 fp。",
          "漏写 close。"
        ]
      },
      "masteryHint": "能解释关闭文件为何是必要步骤。"
    },
    {
      "id": "l8-char-io",
      "lessonId": "lesson8",
      "title": "字符读写与 EOF",
      "tags": [
        "fgetc",
        "fputc",
        "EOF",
        "feof"
      ],
      "overview": "fgetc 每次读取一个字符，fputc 每次写入一个字符。读取循环应依据 fgetc 的返回值判断结束。",
      "keyPoints": [
        "fgetc(fp) 返回读到的字符或 EOF(-1)。",
        "fputc(ch, fp) 写入一个字符。",
        "推荐写法为 while ((ch=fgetc(fp)) != EOF)。",
        "feof 只在一次读取尝试发现文件结束后才变为真，不能替代提前判断。",
        "字符函数不能直接用于读取完整整数对象。"
      ],
      "pitfalls": [
        "把 fgetc 当作读取整数的函数。",
        "先 feof 再读取，最后一次读取可能处理旧值或 EOF。",
        "把 char 与 EOF 比较，在 char 有符号性不同的平台上出错。",
        "fputc 参数顺序写反。"
      ],
      "exercise": {
        "prompt": "打开 input.txt 只读，逐字符输出到屏幕，直到 EOF；关闭文件。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 逐字符读取并输出\n    return 0;\n}",
        "hint": "使用 int ch 和 while ((ch=fgetc(fp)) != EOF)。",
        "checks": [
          {
            "label": "以 r 打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"r\\\"\\s*\\)"
          },
          {
            "label": "fgetc 循环直到 EOF",
            "pattern": "while\\s*\\(\\s*\\(\\s*\\w+\\s*=\\s*(?:std\\s*::\\s*)?fgetc\\s*\\([^)]*\\)\\s*\\)\\s*!=\\s*EOF"
          },
          {
            "label": "输出字符",
            "pattern": "(?:putchar|fputc|cout)\\s*\\("
          },
          {
            "label": "关闭文件",
            "pattern": "\\bfclose\\s*\\("
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"input.txt\", \"r\");\n    if (!fp) return 1;\n    int ch;\n    while ((ch = fgetc(fp)) != EOF) {\n        putchar(ch);\n    }\n    fclose(fp);\n    return 0;\n}",
        "explanation": "用 int 接收 fgetc，才能正确区分普通字符和 EOF。",
        "commonMistakes": [
          "写 while(!feof(fp)) { ch=fgetc(fp); putchar(ch); }，可能多处理一次 EOF。",
          "把 fputc 当读取函数。",
          "忘记关闭文件。"
        ]
      },
      "masteryHint": "能写出安全逐字符复制与 EOF 判断。"
    },
    {
      "id": "l8-string-io",
      "lessonId": "lesson8",
      "title": "字符串读写 fputs 与 fgets",
      "tags": [
        "fputs",
        "fgets",
        "换行",
        "字符串"
      ],
      "overview": "fputs 写入字符串但不自动添加换行；fgets 最多读取 n-1 个字符，遇换行或文件结束停止并补 '\\0'。",
      "keyPoints": [
        "fputs 不输出字符串结尾的 '\\0'。",
        "fputs 不自动追加换行，需要时手动写 \"\\n\"。",
        "fgets(s,n,fp) 最多写入 n-1 个字符，并自动补 '\\0'。",
        "fgets 会把读到的换行符保留在字符串中。",
        "fgets 成功返回 s，失败或到文件尾返回 NULL，适合用返回值控制循环。"
      ],
      "pitfalls": [
        "以为 fputs 会自动换行。",
        "把 fgets 的 n 当作实际读取字符数，忘记预留 '\\0'。",
        "忽略 fgets 保留的换行符。",
        "用 while(!feof) 配合 fgets 导致重复处理旧缓冲。"
      ],
      "exercise": {
        "prompt": "打开 lines.txt 写模式，写入两行 \"alpha\" 和 \"beta\"（必须用 fputs），关闭后再以读模式用 fgets 输出每行。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 写入两行，再读取输出\n    return 0;\n}",
        "hint": "写时用两个 fputs，第一个字符串包含 \\n；读时 while(fgets(...))。",
        "checks": [
          {
            "label": "使用 fputs",
            "pattern": "\\bfputs\\s*\\("
          },
          {
            "label": "显式写入换行",
            "pattern": "fputs\\s*\\([^;]*\\\\n"
          },
          {
            "label": "以读模式重新打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"r\\\"\\s*\\)"
          },
          {
            "label": "fgets 循环",
            "pattern": "while\\s*\\(\\s*(?:std\\s*::\\s*)?fgets\\s*\\("
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"lines.txt\", \"w\");\n    if (!fp) return 1;\n    fputs(\"alpha\\n\", fp);\n    fputs(\"beta\\n\", fp);\n    fclose(fp);\n\n    fp = fopen(\"lines.txt\", \"r\");\n    if (!fp) return 2;\n    char s[100];\n    while (fgets(s, 100, fp)) {\n        fputs(s, stdout);\n    }\n    fclose(fp);\n    return 0;\n}",
        "explanation": "字符串读写适合按行或按整段文本处理。",
        "commonMistakes": [
          "认为 fputs 自动换行。",
          "fgets 缓冲区太小，截断行。",
          "写完不关闭就试图重新以 r 模式打开。"
        ]
      },
      "masteryHint": "能正确使用 fputs/fgets 并处理换行与缓冲区。"
    },
    {
      "id": "l8-formatted-io",
      "lessonId": "lesson8",
      "title": "fprintf 与 fscanf 格式化读写",
      "tags": [
        "fprintf",
        "fscanf",
        "文本文件",
        "地址"
      ],
      "overview": "fprintf 按格式把数据写成文本；fscanf 按格式从文本文件读取。二者分别类似 printf 与 scanf。",
      "keyPoints": [
        "fprintf(fp, \"%d %s\", x, s) 将格式文本写入文件。",
        "fscanf(fp, \"%d\", &x) 的参数通常需要地址。",
        "读字符数组时数组名本身已是地址，通常不再加 &。",
        "输入分隔符要与格式字符串中的普通字符一致。",
        "fscanf 成功时返回成功读取的数据项数，可据此判断结束。"
      ],
      "pitfalls": [
        "fscanf 读取 int 时漏写 &。",
        "格式字符串要求逗号分隔，文件却用空格分隔。",
        "读取 double 时用 %f 而非 %lf。",
        "用 fscanf 读写二进制结构文件。"
      ],
      "exercise": {
        "prompt": "创建 numbers.txt，用 fprintf 写入 12 和 34，再以读模式用 fscanf 读回两个 int 并输出和。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 写入、读回、输出和\n    return 0;\n}",
        "hint": "fscanf 的 int 参数前需要 &。",
        "checks": [
          {
            "label": "使用 fprintf 写入两个数",
            "pattern": "fprintf\\s*\\([^;]*12[^;]*34"
          },
          {
            "label": "使用 fscanf 读取",
            "pattern": "fscanf\\s*\\("
          },
          {
            "label": "读取 int 使用地址",
            "pattern": "fscanf\\s*\\([^;]*&\\s*\\w+"
          },
          {
            "label": "输出两数之和",
            "pattern": "(?:cout|printf|fprintf)[^;]*(?:\\w+\\s*\\+\\s*\\w+)"
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"numbers.txt\", \"w\");\n    if (!fp) return 1;\n    fprintf(fp, \"%d %d\", 12, 34);\n    fclose(fp);\n\n    fp = fopen(\"numbers.txt\", \"r\");\n    if (!fp) return 2;\n    int a, b;\n    if (fscanf(fp, \"%d %d\", &a, &b) == 2) {\n        printf(\"%d\", a + b);\n    }\n    fclose(fp);\n    return 0;\n}",
        "explanation": "格式化读写得到的是可阅读的文本，不是原始对象内存。",
        "commonMistakes": [
          "fscanf 漏掉 &。",
          "格式和文本分隔符不一致。",
          "没有检查读取项数。"
        ]
      },
      "masteryHint": "能按文本格式安全读写多种基本类型。"
    },
    {
      "id": "l8-block-io",
      "lessonId": "lesson8",
      "title": "fread、fwrite 与二进制块读写",
      "tags": [
        "fread",
        "fwrite",
        "二进制",
        "结构数组"
      ],
      "overview": "fread/fwrite 直接读写对象或数组的内存块，常用于二进制文件和结构数组。参数要正确给出元素大小与数量。",
      "keyPoints": [
        "fwrite(&x, sizeof(x), 1, fp) 写入一个对象。",
        "fwrite(a, sizeof(a[0]), n, fp) 写入 n 个数组元素。",
        "fread 返回实际读取的元素块数，可用于判断结束。",
        "二进制块读写通常使用 rb/wb/ab 模式。",
        "包含指针成员的结构体直接块写只会保存地址值，通常不是有效持久化格式。"
      ],
      "pitfalls": [
        "二进制文件用 w/r 而不是 wb/rb。",
        "fwrite 第一个参数写成对象值而非地址。",
        "size 与 count 参数颠倒。",
        "把含动态指针的结构体直接写入后，在其他程序中当作有效数据读取。"
      ],
      "exercise": {
        "prompt": "把 int 数组 a[3]={1,2,3} 以二进制写入 data.bin，再以 rb 模式读回到 b[3] 并输出 b[2]。",
        "starter": "#include <cstdio>\n\nint main() {\n    int a[3] = {1, 2, 3};\n    int b[3] = {0, 0, 0};\n    // 块写入并读回\n    return 0;\n}",
        "hint": "写：fwrite(a, sizeof(a[0]), 3, fp)；读参数形状相同。",
        "checks": [
          {
            "label": "以 wb 打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"wb\\\"\\s*\\)"
          },
          {
            "label": "fwrite 整个数组",
            "pattern": "fwrite\\s*\\(\\s*a\\s*,\\s*sizeof\\s*\\(\\s*a\\s*\\[\\s*0\\s*\\]\\s*\\)\\s*,\\s*3"
          },
          {
            "label": "以 rb 打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"rb\\\"\\s*\\)"
          },
          {
            "label": "fread 到 b",
            "pattern": "fread\\s*\\(\\s*b\\s*,\\s*sizeof\\s*\\(\\s*b\\s*\\[\\s*0\\s*\\]\\s*\\)\\s*,\\s*3"
          },
          {
            "label": "输出 b[2]",
            "pattern": "b\\s*\\[\\s*2\\s*\\]"
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    int a[3] = {1, 2, 3};\n    int b[3] = {0, 0, 0};\n    FILE* fp = fopen(\"data.bin\", \"wb\");\n    if (!fp) return 1;\n    fwrite(a, sizeof(a[0]), 3, fp);\n    fclose(fp);\n\n    fp = fopen(\"data.bin\", \"rb\");\n    if (!fp) return 2;\n    fread(b, sizeof(b[0]), 3, fp);\n    fclose(fp);\n    printf(\"%d\", b[2]);\n    return 0;\n}",
        "explanation": "块读写保留对象内存表示，size 和 count 要匹配。",
        "commonMistakes": [
          "使用文本模式 w/r 处理二进制块。",
          "fwrite 第一参数漏掉数组名或地址。",
          "读回后未检查实际读取数量。"
        ]
      },
      "masteryHint": "能正确对数组或结构数组进行二进制块读写。"
    },
    {
      "id": "l8-random-io",
      "lessonId": "lesson8",
      "title": "随机读写与读写函数选择",
      "tags": [
        "fseek",
        "rewind",
        "SEEK_SET",
        "函数选择"
      ],
      "overview": "顺序读写从当前位置继续，随机读写通过 rewind/fseek 重新定位文件位置指示器。读写函数应根据数据单位选择。",
      "keyPoints": [
        "rewind(fp) 把位置指示器移回文件开头。",
        "fseek(fp, offset, SEEK_SET/SEEK_CUR/SEEK_END) 设置新位置。",
        "fseek 常用于二进制文件并配合 fread/fwrite。",
        "单个字符选 fgetc/fputc，字符串选 fgets/fputs。",
        "数值、数组、结构可用 fprintf/fscanf 处理文本，或 fread/fwrite 处理二进制。"
      ],
      "pitfalls": [
        "读写模式切换后没有重新定位文件位置。",
        "把 fseek 的 offset 当元素个数而不是字节数。",
        "用 fgetc 直接读取一个 int 对象并期待得到原整数。",
        "对二进制文件使用文本格式函数却期待原内存块。"
      ],
      "exercise": {
        "prompt": "打开 data.bin 为 rb，使用 fseek 从文件末尾向前移动 sizeof(int) 字节，再用 fread 读取最后一个 int 并输出。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 定位到最后一个 int 并读取\n    return 0;\n}",
        "hint": "fseek(fp, -(long)(sizeof(int)), SEEK_END)。",
        "checks": [
          {
            "label": "以 rb 打开",
            "pattern": "\\bfopen\\s*\\([^,]+,\\s*\\\"rb\\\"\\s*\\)"
          },
          {
            "label": "fseek 从 SEEK_END",
            "pattern": "fseek\\s*\\([^;]*SEEK_END"
          },
          {
            "label": "偏移量为负",
            "pattern": "fseek\\s*\\(\\s*\\w+\\s*,\\s*-\\s*"
          },
          {
            "label": "fread 一个 int",
            "pattern": "fread\\s*\\([^;]*sizeof\\s*\\(\\s*int\\s*\\)\\s*,\\s*1"
          }
        ],
        "solution": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* fp = fopen(\"data.bin\", \"rb\");\n    if (!fp) return 1;\n    int last = 0;\n    fseek(fp, -(long)(sizeof(int)), SEEK_END);\n    if (fread(&last, sizeof(int), 1, fp) == 1) {\n        printf(\"%d\", last);\n    }\n    fclose(fp);\n    return 0;\n}",
        "explanation": "fseek 的偏移单位是字节；负偏移从指定基准向前移动。",
        "commonMistakes": [
          "把偏移写成 -1 元素。",
          "使用文本模式并忽略换行转换差异。",
          "定位后忘记检查 fread 返回值。"
        ]
      },
      "masteryHint": "能按数据形态选择读写函数并定位文件位置。"
    },
    {
      "id": "l8-return-value-eof",
      "lessonId": "lesson8",
      "title": "文件结束判断与读取函数返回值",
      "tags": [
        "EOF",
        "fscanf",
        "返回值",
        "feof",
        "文件结束"
      ],
      "overview": "可靠的读文件循环应依据读取函数的返回值，而不是预先调用 feof。fscanf 返回成功读取的数据项数，fgets 返回字符串指针，fread 返回实际读取块数。",
      "keyPoints": [
        "fscanf(fp, \"%d\", &x) 成功读取一个整数时返回 1。",
        "while (fscanf(...) == 1) 能在读取失败时立即停止。",
        "feof 只有在一次读取尝试遇到文件结束后才为真。",
        "fgets 成功返回缓冲区地址，失败或到末尾返回 NULL。",
        "fread 成功返回实际读取的元素块数。"
      ],
      "pitfalls": [
        "先 while(!feof(fp)) 再读取，导致重复处理旧数据。",
        "忽略 fscanf 的返回值。",
        "把 fscanf 的返回项数误当读到的数值。",
        "读取失败后仍使用未成功写入的变量。"
      ],
      "exercise": {
        "prompt": "程序先创建 demo.txt 并写入 1 2 3，然后重新打开读取。补全循环，使用 fscanf 的返回值求和并统计个数，输出和与个数。",
        "starter": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* out = fopen(\"demo.txt\", \"w\");\n    fputs(\"1 2 3\", out);\n    fclose(out);\n\n    FILE* fp = fopen(\"demo.txt\", \"r\");\n    if (fp == NULL) return 1;\n    int x, sum = 0, count = 0;\n    // 使用 fscanf 返回值循环读取\n    fclose(fp);\n    cout << sum << ' ' << count << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "6 3",
        "hint": "循环条件写 fscanf(fp, \"%d\", &x) == 1。",
        "checks": [
          {
            "label": "使用 while 读取",
            "pattern": "\\bwhile\\s*\\("
          },
          {
            "label": "检查 fscanf 返回 1",
            "pattern": "\\bfscanf\\s*\\([^)]*\\)\\s*==\\s*1"
          },
          {
            "label": "累加读取值",
            "pattern": "\\bsum\\s*\\+?=\\s*x"
          },
          {
            "label": "统计个数",
            "pattern": "\\+\\+\\s*count|count\\s*\\+?=\\s*1"
          }
        ],
        "solution": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* out = fopen(\"demo.txt\", \"w\");\n    fputs(\"1 2 3\", out);\n    fclose(out);\n\n    FILE* fp = fopen(\"demo.txt\", \"r\");\n    if (fp == NULL) return 1;\n    int x, sum = 0, count = 0;\n    while (fscanf(fp, \"%d\", &x) == 1) {\n        sum += x;\n        ++count;\n    }\n    fclose(fp);\n    cout << sum << ' ' << count << endl;\n    return 0;\n}",
        "explanation": "fscanf 成功读取一个整数返回 1；读取失败后立即结束循环，避免处理旧值。",
        "commonMistakes": [
          "写成 while(!feof(fp)) 后直接累加 x。",
          "把 fscanf 返回的 1 当读到的数值。",
          "忘记关闭文件。"
        ]
      },
      "masteryHint": "能根据读取函数的返回值正确判断文件结束。"
    },
    {
      "id": "l8-path-modes-safe",
      "lessonId": "lesson8",
      "title": "文件路径、打开模式与安全检查",
      "tags": [
        "文件路径",
        "转义",
        "fopen",
        "w",
        "r"
      ],
      "overview": "文件路径字符串中的反斜杠需要转义。写文件常用 w 模式并会截断已有内容；重新读取前要关闭写入文件并检查 fopen 是否成功。",
      "keyPoints": [
        "相对路径从程序当前工作目录开始解析。",
        "Windows 字符串路径中的反斜杠写成 \\\\，例如 C:\\\\temp\\\\a.txt。",
        "w 模式会创建空文件或截断已有文件。",
        "r 模式要求文件已存在。",
        "每次 fopen 后都应检查是否返回 NULL。"
      ],
      "pitfalls": [
        "路径写成 C:\\temp\\a.txt 时被当成转义字符。",
        "用 w 打开已有文件却以为会保留内容。",
        "写入后不关闭文件就重新读取，缓冲区内容可能尚未完整刷新。",
        "fopen 失败后继续使用空 FILE*。"
      ],
      "exercise": {
        "prompt": "读取一个不含空白的字符串，写入 data.txt，关闭后重新读取并输出。补全 fopen 模式与安全检查。",
        "starter": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    char text[50], buffer[50];\n    cin >> text;\n    FILE* out = fopen(\"data.txt\", \"?\");\n    if (out == NULL) return 1;\n    fputs(text, out);\n    fclose(out);\n\n    FILE* in = fopen(\"data.txt\", \"?\");\n    if (in == NULL) return 1;\n    fgets(buffer, 50, in);\n    fclose(in);\n    cout << buffer << endl;\n    return 0;\n}",
        "sampleInput": "C++",
        "expectedOutput": "C++",
        "hint": "第一次打开用于写，模式用 w；第二次用于读，模式用 r。",
        "checks": [
          {
            "label": "以写模式打开",
            "pattern": "\\bfopen\\s*\\([^;]*\"\\s*w\\s*\"\\s*\\)"
          },
          {
            "label": "以读模式打开",
            "pattern": "\\bfopen\\s*\\([^;]*\"\\s*r\\s*\"\\s*\\)"
          },
          {
            "label": "检查打开失败",
            "pattern": "\\bif\\s*\\([^)]*(?:==\\s*(?:NULL|NULL)|!\\s*\\w+)\\s*\\)"
          },
          {
            "label": "写入后关闭",
            "pattern": "\\bfputs\\s*\\([\\s\\S]*\\bfclose\\s*\\(\\s*out\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    char text[50], buffer[50];\n    cin >> text;\n    FILE* out = fopen(\"data.txt\", \"w\");\n    if (out == NULL) return 1;\n    fputs(text, out);\n    fclose(out);\n\n    FILE* in = fopen(\"data.txt\", \"r\");\n    if (in == NULL) return 1;\n    fgets(buffer, 50, in);\n    fclose(in);\n    cout << buffer << endl;\n    return 0;\n}",
        "explanation": "w 模式先清空或创建文件，fclose 后再用 r 读取。两个 fopen 都检查了失败。",
        "commonMistakes": [
          "用 r 模式写入。",
          "写入后不关闭文件。",
          "fopen 返回 NULL 后继续使用指针。"
        ]
      },
      "masteryHint": "能正确选择文本文件读写模式并处理路径与打开失败。"
    },
    {
      "id": "l8-cpp-fstream",
      "lessonId": "lesson8",
      "title": "C++ 文件流 ifstream 与 ofstream",
      "tags": [
        "fstream",
        "ifstream",
        "ofstream",
        "文件流"
      ],
      "overview": "C++ 可以用 ifstream 读文件、ofstream 写文件。文件流通过 >>、<< 或 getline 操作，作用域结束时会自动关闭文件。",
      "keyPoints": [
        "ifstream 用于输入文件，ofstream 用于输出文件。",
        "定义文件流时可直接给出文件名。",
        "使用 if (!file) 检查文件是否成功打开。",
        "while (in >> x) 可在读取失败时结束循环。",
        "文件流离开作用域时会自动析构并关闭。"
      ],
      "pitfalls": [
        "用 ofstream 读取文件。",
        "未检查文件是否打开成功。",
        "用 while(!in.eof()) 导致重复处理最后一项。",
        "忘记包含 <fstream>。"
      ],
      "exercise": {
        "prompt": "使用 ofstream 向 nums.txt 写入 1、2、3，关闭后用 ifstream 读取并求和，输出结果。",
        "starter": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    // 写入 1 2 3\n    // 读取并求和\n    cout << sum << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "6",
        "hint": "写入后显式 close；读取循环写成 while (in >> x)。",
        "checks": [
          {
            "label": "包含 fstream",
            "pattern": "#\\s*include\\s*<\\s*fstream\\s*>"
          },
          {
            "label": "使用 ofstream",
            "pattern": "\\bofstream\\b"
          },
          {
            "label": "使用 ifstream",
            "pattern": "\\bifstream\\b"
          },
          {
            "label": "按读取结果循环",
            "pattern": "\\bwhile\\s*\\(\\s*\\w+\\s*>>\\s*\\w+\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"nums.txt\");\n    out << 1 << ' ' << 2 << ' ' << 3;\n    out.close();\n\n    ifstream in(\"nums.txt\");\n    if (!in) return 1;\n    int x, sum = 0;\n    while (in >> x) sum += x;\n    cout << sum << endl;\n    return 0;\n}",
        "explanation": "ofstream 写入，ifstream 读取；while (in >> x) 只在读取成功时执行循环体。",
        "commonMistakes": [
          "文件流类名写反。",
          "没有检查 ifstream 是否打开成功。",
          "用 eof 作为循环条件。"
        ]
      },
      "masteryHint": "能用 C++ 文件流完成基本文本文件读写。"
    },
    {
      "id": "l9-syntax-traps",
      "lessonId": "lesson9",
      "title": "期中语法陷阱：标识符、常量与运算符",
      "tags": [
        "标识符",
        "字符常量",
        "优先级",
        "结合性"
      ],
      "overview": "期中基础题经常把标识符合法性、字符常量、运算符优先级和复合赋值放在一起考查。关键是按规则逐项判断，不凭直觉。",
      "keyPoints": [
        "标识符只能由字母、数字、下划线组成，首字符不能是数字，且不能是关键字。",
        "普通字符常量用单引号；多字符常量不是普通字符串。",
        "a += a * 2 等价于 a = a + (a * 2)。",
        "++/-- 只能作用于可修改对象，不能写 (i+j)++ 或 3++。",
        "% 的两个操作数必须是整型。"
      ],
      "pitfalls": [
        "把 class、public 当合法用户标识符。",
        "把 'ABC' 当普通字符串。",
        "把 a+=a*2 误展开为 a=a+2。",
        "对表达式执行 ++。"
      ],
      "exercise": {
        "prompt": "令 int a=4，计算 a += a*3 后的结果并输出。",
        "starter": "#include <iostream>\n\nint main() {\n    int a = 4;\n    // 执行复合赋值并输出\n    return 0;\n}",
        "hint": "复合赋值右侧作为一个整体先求值。",
        "checks": [
          {
            "label": "使用 += 复合赋值",
            "pattern": "a\\s*\\+=\\s*a\\s*\\*\\s*3"
          },
          {
            "label": "输出 a",
            "pattern": "(?:cout|printf)[^;]*a"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 4;\n    a += a * 3;\n    cout << a;\n    return 0;\n}",
        "explanation": "a += a*3 等价于 a = a + (a*3)。",
        "commonMistakes": [
          "误认为结果是 12。",
          "写成 a = a*3。",
          "对表达式使用 ++。"
        ]
      },
      "masteryHint": "能逐条判断基础语法题并展开复合赋值。"
    },
    {
      "id": "l9-control-flow",
      "lessonId": "lesson9",
      "title": "期中控制流：短路、switch 与循环边界",
      "tags": [
        "短路求值",
        "switch",
        "break",
        "continue",
        "空循环"
      ],
      "overview": "期中题常要求手算自增副作用、switch 贯穿、break/continue 差异以及 for 条件是否成立。",
      "keyPoints": [
        "&& 左侧为假时右侧不求值；|| 左侧为真时右侧不求值。",
        "switch 匹配后若没有 break，会继续执行后续 case。",
        "continue 跳过本轮剩余语句；break 结束整个当前循环/switch。",
        "do-while 至少执行一次；while/for 可能一次也不执行。",
        "for 语句头后的分号可能形成空循环，循环体与后续语句要区分。"
      ],
      "pitfalls": [
        "忽略短路导致自增没有执行。",
        "switch 分支漏写 break。",
        "把 continue 当结束整个循环。",
        "把 for 后的分号误当排版。"
      ],
      "exercise": {
        "prompt": "令 a=0、b=1，执行 bool ok = a++ && ++b; 后输出 a、b、ok。",
        "starter": "#include <iostream>\n\nint main() {\n    int a = 0, b = 1;\n    // 执行短路表达式并输出\n    return 0;\n}",
        "hint": "a++ 先取旧值 0 作为左操作数，随后 a 变为 1。",
        "checks": [
          {
            "label": "使用 a++ && ++b",
            "pattern": "a\\s*\\+\\+\\s*&&\\s*\\+\\+\\s*b"
          },
          {
            "label": "保存布尔结果",
            "pattern": "\\bbool\\s+\\w+\\s*="
          },
          {
            "label": "输出三个值",
            "pattern": "(?:cout|printf)[^;]*a[^;]*b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 0, b = 1;\n    bool ok = a++ && ++b;\n    cout << a << ' ' << b << ' ' << ok;\n    return 0;\n}",
        "explanation": "a++ 的旧值 0 使左侧为假，因此 ++b 被短路。",
        "commonMistakes": [
          "认为 b 会变成 2。",
          "认为 a 不变。",
          "把结果保存为字符串。"
        ]
      },
      "masteryHint": "能手算短路与控制流题目。"
    },
    {
      "id": "l9-array-string",
      "lessonId": "lesson9",
      "title": "期中数组与字符串易错点",
      "tags": [
        "数组越界",
        "地址常量",
        "字符数组",
        "字符串"
      ],
      "overview": "数组长度必须足够并避免越界；数组名是地址常量；只有字符数组可以整体按字符串输入输出。",
      "keyPoints": [
        "char s[5] 无法容纳 16 个字符的字符串和结尾 '\\0'。",
        "数组名不能被赋值，如 s = \"text\" 非法。",
        "字符数组初始化或 strcpy 可写入字符串。",
        "二维数组元素仍按行优先存储。",
        "字符串长度 strlen 不包含结尾 '\\0'，数组容量必须至少为长度+1。"
      ],
      "pitfalls": [
        "数组长度按字符数分配却忘记 '\\0'。",
        "用 = 给已有字符数组赋新字符串。",
        "把 strlen 结果当作所需数组容量。",
        "循环访问 a[n]。"
      ],
      "exercise": {
        "prompt": "定义 char s[6]，用 strcpy 复制 \"hello\"，输出字符串及其 strlen。",
        "starter": "#include <iostream>\n#include <cstring>\n\nint main() {\n    // 定义、复制、输出\n    return 0;\n}",
        "hint": "容量至少为 5+1。",
        "checks": [
          {
            "label": "定义容量足够的字符数组",
            "pattern": "\\bchar\\s+\\w+\\s*\\[\\s*[6-9]|[1-9]\\d+\\s*\\]"
          },
          {
            "label": "使用 strcpy",
            "pattern": "\\b(?:std\\s*::\\s*)?strcpy\\s*\\("
          },
          {
            "label": "输出 strlen",
            "pattern": "\\b(?:std\\s*::\\s*)?strlen\\s*\\("
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char s[6];\n    strcpy(s, \"hello\");\n    cout << s << ' ' << strlen(s);\n    return 0;\n}",
        "explanation": "字符数组必须给结尾 '\\0' 留空间。",
        "commonMistakes": [
          "分配 s[5] 存 \"hello\"。",
          "写 s = \"hello\"。",
          "认为 strlen(\"hello\") 为 6。"
        ]
      },
      "masteryHint": "能判断数组容量、赋值合法性和字符串长度。"
    },
    {
      "id": "l9-pointer-memory",
      "lessonId": "lesson9",
      "title": "期中指针运算与动态内存",
      "tags": [
        "指针算术",
        "指针与数组",
        "new",
        "delete"
      ],
      "overview": "指针加法按所指类型大小移动；两个同类型指针相减得到元素个数差。new/delete 必须配对。",
      "keyPoints": [
        "若 float* p 指向地址 1000，则 p+1 通常增加 sizeof(float)，即 1004。",
        "int a[5]，p=a+1 时 *p+1 与 *(p+1) 含义不同。",
        "p[i] 等价于 *(p+i)。",
        "new int(6) 创建一个初值 6 的对象；new int[10] 创建数组。",
        "单个对象用 delete，数组用 delete[]。"
      ],
      "pitfalls": [
        "认为指针加 1 永远只增加 1 字节。",
        "混淆 *p+1 与 *(p+1)。",
        "对普通变量 p 使用 delete。",
        "new[] 后用 delete 释放。"
      ],
      "exercise": {
        "prompt": "创建 int 数组 a={2,4,6,8}，令 p=a+2，输出 *p 和 *(p-1)。",
        "starter": "#include <iostream>\n\nint main() {\n    // 定义数组和指针并输出\n    return 0;\n}",
        "hint": "p=a+2 指向 a[2]。",
        "checks": [
          {
            "label": "定义数组",
            "pattern": "\\bint\\s+\\w+\\s*\\[[^\\]]*\\]\\s*=\\s*\\{"
          },
          {
            "label": "指针 p=a+2",
            "pattern": "\\*\\s*\\w+\\s*=\\s*\\w+\\s*\\+\\s*2\\s*;"
          },
          {
            "label": "输出 *p",
            "pattern": "\\*\\s*p\\b"
          },
          {
            "label": "输出 *(p-1)",
            "pattern": "\\*\\s*\\(\\s*p\\s*-\\s*1\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[4] = {2, 4, 6, 8};\n    int* p = a + 2;\n    cout << *p << ' ' << *(p - 1);\n    return 0;\n}",
        "explanation": "指针加整数按元素移动，不按字节手动计算。",
        "commonMistakes": [
          "把 p=a+2 当第二个元素。",
          "写 *p-1 输出 5 而不是 *(p-1)。",
          "对 p 使用 delete。"
        ]
      },
      "masteryHint": "能追踪指针移动与解引用表达式的值。"
    },
    {
      "id": "l9-algorithms",
      "lessonId": "lesson9",
      "title": "期中常用算法模板",
      "tags": [
        "素数",
        "最大公约数",
        "回文",
        "排序",
        "二分查找"
      ],
      "overview": "期中编程题常由基础算法变形而来。先保证边界正确，再套用已验证的循环模板。",
      "keyPoints": [
        "判断素数可从 2 试除到 m-1，或试除到 sqrt(m)。",
        "辗转相除法用 while(r=m%n) { m=n; n=r; } 求最大公约数。",
        "判断回文数可用取余构造逆序数。",
        "冒泡排序相邻比较交换；选择排序每轮确定最小/最大位置。",
        "二分查找要求数组有序，并维护 bot、top、mid 边界。"
      ],
      "pitfalls": [
        "素数循环从 0 或 1 开始。",
        "回文比较过程中破坏原数，没有保存副本。",
        "二分查找区间更新写错导致死循环。",
        "排序循环边界写成 <= n。"
      ],
      "exercise": {
        "prompt": "编写 int gcd(int a,int b)，用辗转相除法返回最大公约数，并输出 gcd(36,60)。",
        "starter": "#include <iostream>\n\n// 定义 gcd\n\nint main() {\n    // 输出 gcd(36,60)\n    return 0;\n}",
        "hint": "循环中先算 r=a%b，再更新 a=b、b=r。",
        "checks": [
          {
            "label": "定义 gcd",
            "pattern": "\\bint\\s+gcd\\s*\\(\\s*int\\s+\\w+\\s*,\\s*int\\s+\\w+\\s*\\)"
          },
          {
            "label": "计算余数",
            "pattern": "\\bint\\s+\\w+\\s*=\\s*\\w+\\s*%\\s*\\w+"
          },
          {
            "label": "更新 a 和 b",
            "pattern": "\\w+\\s*=\\s*\\w+\\s*;[\\s\\S]*\\w+\\s*=\\s*\\w+\\s*;"
          },
          {
            "label": "输出 gcd(36,60)",
            "pattern": "\\bgcd\\s*\\(\\s*36\\s*,\\s*60\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    return a;\n}\n\nint main() {\n    cout << gcd(36, 60);\n    return 0;\n}",
        "explanation": "辗转相除法通过不断用除数替换被除数、余数替换除数收敛。",
        "commonMistakes": [
          "循环条件写成 b==0。",
          "更新顺序颠倒，丢掉原除数。",
          "返回 b 而不是最后的 a。"
        ]
      },
      "masteryHint": "能默写并修正期中常见基础算法。"
    },
    {
      "id": "l9-io-ascii",
      "lessonId": "lesson9",
      "title": "期中输入输出、ASCII 与表达式类型",
      "tags": [
        "cin",
        "cout",
        "ASCII",
        "表达式类型",
        "格式化"
      ],
      "overview": "输入输出结果不仅取决于值，也取决于表达式类型。字符参与算术会提升为整数，字符数组与指针的输出规则也不同。",
      "keyPoints": [
        "cin >> 字符数组通常只读取一个以空白分隔的单词。",
        "cout << ch + 2 输出整数结果；cout << char(ch+2) 输出对应字符。",
        "cout << s+2 中 s 若为字符数组会从第 3 个字符开始输出字符串。",
        "1/n 中两者均为 int 时执行整数除法。",
        "setw 只影响紧随其后的一个输出项。"
      ],
      "pitfalls": [
        "把 cout << ch+2 当作输出字符 d。",
        "用 cin>>c 读取含空格的整行。",
        "用 1/n 计算平均值。",
        "以为 setw 会持续影响后续所有输出。"
      ],
      "exercise": {
        "prompt": "令 char ch='A'，分别输出 ch+1 的整数值和转换回 char 后的字符。",
        "starter": "#include <iostream>\n\nint main() {\n    char ch = 'A';\n    // 输出整数和字符\n    return 0;\n}",
        "hint": "第二次输出需要 (char)(ch+1)。",
        "checks": [
          {
            "label": "输出 ch+1",
            "pattern": "\\bcout\\s*<<[^;]*ch\\s*\\+\\s*1"
          },
          {
            "label": "转换为 char",
            "pattern": "\\(\\s*char\\s*\\)\\s*\\(?\\s*ch\\s*\\+\\s*1\\s*\\)?"
          },
          {
            "label": "至少两次输出",
            "pattern": "(?:\\bcout\\s*<<[\\s\\S]*){2}"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch = 'A';\n    cout << ch + 1 << ' ';\n    cout << (char)(ch + 1);\n    return 0;\n}",
        "explanation": "字符参与算术会提升为整数，只有转换回 char 才按字符输出。",
        "commonMistakes": [
          "两次都写 ch+1，第二项仍输出整数。",
          "用单引号写多字符字符串。",
          "用整数除法计算带小数的平均值。"
        ]
      },
      "masteryHint": "能预测字符、整数和字符串在输出中的差异。"
    },
    {
      "id": "l9-c-string-library",
      "lessonId": "lesson9",
      "title": "期中常用 C 字符串库函数",
      "tags": [
        "strlen",
        "strcpy",
        "strcat",
        "strcmp",
        "cstring"
      ],
      "overview": "C 字符串以 '\\0' 结尾。strlen、strcpy、strcat、strcmp 是最常考函数，目标数组必须预留结尾 '\\0' 的空间。",
      "keyPoints": [
        "strlen(s) 返回 '\\0' 之前的字符个数。",
        "strcpy(dest, src) 复制包含结尾 '\\0' 的字符串。",
        "strcat(dest, src) 把 src 追加到 dest 末尾。",
        "strcmp(a,b) 为 0 表示内容相同。",
        "strlwr、strupr 不是标准 C++ 函数，考试环境可用但现代代码应谨慎。"
      ],
      "pitfalls": [
        "目标字符数组容量不足。",
        "用 == 比较 C 字符串内容。",
        "把 strlen 结果当容量，忘记再加 1。",
        "对字符串字面量使用 strcpy 作为目标。"
      ],
      "exercise": {
        "prompt": "读取两个单词，复制第一个到 buffer，把第二个追加到 buffer，输出连接结果、两个长度以及内容是否相等。",
        "starter": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[50], b[50], buffer[120];\n    cin >> a >> b;\n    // 使用 strcpy、strcat、strlen、strcmp\n    return 0;\n}",
        "sampleInput": "abc abc",
        "expectedOutput": "abcabc 3 3 equal",
        "hint": "先 strcpy(buffer,a)，再 strcat(buffer,b)，最后根据 strcmp(a,b)==0 输出 equal。",
        "checks": [
          {
            "label": "使用 strlen",
            "pattern": "\\bstrlen\\s*\\("
          },
          {
            "label": "使用 strcpy",
            "pattern": "\\bstrcpy\\s*\\("
          },
          {
            "label": "使用 strcat",
            "pattern": "\\bstrcat\\s*\\("
          },
          {
            "label": "使用 strcmp 判断相等",
            "pattern": "\\bstrcmp\\s*\\([^)]*\\)\\s*==\\s*0"
          }
        ],
        "solution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[50], b[50], buffer[120];\n    cin >> a >> b;\n    strcpy(buffer, a);\n    strcat(buffer, b);\n    cout << buffer << ' ' << strlen(a) << ' ' << strlen(b) << ' ';\n    cout << (strcmp(a, b) == 0 ? \"equal\" : \"different\") << endl;\n    return 0;\n}",
        "explanation": "buffer 容量足以容纳两个字符串和结尾 '\\0'；strcmp 返回 0 表示内容相同。",
        "commonMistakes": [
          "buffer 只分配与 a 等长。",
          "strcmp(a,b)==true 判断相等。",
          "对字符串字面量调用 strcat。"
        ]
      },
      "masteryHint": "能正确使用常用字符串库函数并控制目标容量。"
    },
    {
      "id": "l9-stdio-math-library",
      "lessonId": "lesson9",
      "title": "期中常用输入输出与数学函数",
      "tags": [
        "getchar",
        "putchar",
        "sqrt",
        "fabs",
        "gets"
      ],
      "overview": "期中常用库函数分布在 <cstdio>、<cmath> 等头文件。gets 不安全且已从现代标准移除，练习时应优先使用 fgets 或 cin.getline。",
      "keyPoints": [
        "getchar 读取一个字符，putchar 输出一个字符。",
        "puts 输出字符串并自动追加换行。",
        "gets 不检查缓冲区长度，现代 C++ 不应使用。",
        "sqrt 计算平方根，fabs 计算浮点绝对值。",
        "printf/scanf 的格式说明符必须与数据类型匹配。"
      ],
      "pitfalls": [
        "使用 gets 读取任意长度输入。",
        "用 %f 读取 double 变量。",
        "putchar 的参数写成字符串。",
        "对负数调用 sqrt。"
      ],
      "exercise": {
        "prompt": "读取一个非负实数和字符，输出 sqrt(x) 与 fabs(x)，均保留两位小数，再用 putchar 输出该字符。",
        "starter": "#include <iostream>\n#include <iomanip>\n#include <cmath>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    double x;\n    char ch;\n    cin >> x >> ch;\n    // 输出 sqrt、fabs 和字符\n    return 0;\n}",
        "sampleInput": "9 A",
        "expectedOutput": "3.00 9.00 A",
        "hint": "先 fixed << setprecision(2) 输出两个数，再调用 putchar(ch)。",
        "checks": [
          {
            "label": "包含 cmath",
            "pattern": "#\\s*include\\s*<\\s*cmath\\s*>"
          },
          {
            "label": "使用 sqrt",
            "pattern": "\\bsqrt\\s*\\("
          },
          {
            "label": "使用 fabs",
            "pattern": "\\bfabs\\s*\\("
          },
          {
            "label": "使用 putchar 输出字符",
            "pattern": "\\bputchar\\s*\\(\\s*ch\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <iomanip>\n#include <cmath>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    double x;\n    char ch;\n    cin >> x >> ch;\n    cout << fixed << setprecision(2) << sqrt(x) << ' ' << fabs(x) << ' ';\n    putchar(ch);\n    putchar('\\n');\n    return 0;\n}",
        "explanation": "sqrt 和 fabs 返回浮点结果，putchar 按字符输出。",
        "commonMistakes": [
          "用 gets 读取字符。",
          "使用 abs 处理 double。",
          "忘记 fixed。"
        ]
      },
      "masteryHint": "能识别常用标准库函数及其头文件和返回类型。"
    },
    {
      "id": "l9-array-extrema",
      "lessonId": "lesson9",
      "title": "数组极值及其下标",
      "tags": [
        "数组极值",
        "最大值",
        "最小值",
        "下标"
      ],
      "overview": "求极值应先把 a[0] 和下标 0 作为初值，再从下标 1 开始比较。保存下标时，后续交换整个元素或通过下标访问。",
      "keyPoints": [
        "最大值和最小值都应以 a[0] 为初值。",
        "最大下标和最小下标也初始化为 0。",
        "从下标 1 开始比较，避免重复比较首元素。",
        "遇到更大值同时更新值和下标。",
        "数组为空时不能访问 a[0]。"
      ],
      "pitfalls": [
        "把极值初值设成 0，导致全负数组错误。",
        "只保存值不保存下标。",
        "循环从 0 开始且初始化错误。",
        "遇到相等元素时无条件更新下标，导致结果不稳定。"
      ],
      "exercise": {
        "prompt": "读取 6 个整数，输出最大值及首次出现的下标、最小值及首次出现的下标。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6];\n    for (int i = 0; i < 6; ++i) cin >> a[i];\n    // 求最大值和最小值及下标\n    return 0;\n}",
        "sampleInput": "3 9 2 9 5 1",
        "expectedOutput": "9 1 1 5",
        "hint": "maxValue/minValue 和两个下标都以 0 为初值，从 i=1 开始比较。",
        "checks": [
          {
            "label": "以 a[0] 初始化极值",
            "pattern": "\\b(?:max|min)Value\\s*=\\s*a\\s*\\[\\s*0\\s*\\]"
          },
          {
            "label": "从下标 1 开始循环",
            "pattern": "\\bfor\\s*\\(\\s*int\\s+i\\s*=\\s*1\\s*;"
          },
          {
            "label": "更新最大下标",
            "pattern": "a\\s*\\[\\s*i\\s*\\]\\s*>\\s*maxValue[\\s\\S]*maxIndex\\s*=\\s*i"
          },
          {
            "label": "更新最小下标",
            "pattern": "a\\s*\\[\\s*i\\s*\\]\\s*<\\s*minValue[\\s\\S]*minIndex\\s*=\\s*i"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6];\n    for (int i = 0; i < 6; ++i) cin >> a[i];\n    int maxValue = a[0], minValue = a[0];\n    int maxIndex = 0, minIndex = 0;\n    for (int i = 1; i < 6; ++i) {\n        if (a[i] > maxValue) {\n            maxValue = a[i];\n            maxIndex = i;\n        }\n        if (a[i] < minValue) {\n            minValue = a[i];\n            minIndex = i;\n        }\n    }\n    cout << maxValue << ' ' << maxIndex << ' '\n         << minValue << ' ' << minIndex << endl;\n    return 0;\n}",
        "explanation": "严格比较保留首次出现的位置；全负数组也能正确处理。",
        "commonMistakes": [
          "把 maxValue 初值设为 0。",
          "忘记更新下标。",
          "循环从 0 开始但 minValue 未初始化。"
        ]
      },
      "masteryHint": "能同时维护极值和下标，并正确处理全负或重复元素。"
    },
    {
      "id": "l9-array-shift-insert-delete",
      "lessonId": "lesson9",
      "title": "数组插入、删除与平移方向",
      "tags": [
        "数组插入",
        "数组删除",
        "平移",
        "循环边界"
      ],
      "overview": "数组删除要把后继元素向前覆盖；插入要先把从插入位置起的元素向后移动，再把新值放入空位。方向写反会覆盖尚未保存的数据。",
      "keyPoints": [
        "删除 a[pos]：从 pos 开始把 a[i+1] 写入 a[i]，最后 n--。",
        "插入前要确保有效长度小于数组容量。",
        "插入 a[pos]=x：从最后一个有效元素开始向后复制。",
        "在有序数组中可先寻找插入位置。",
        "所有循环边界都应基于有效长度 n。"
      ],
      "pitfalls": [
        "删除时从后向前移动，导致元素重复。",
        "插入时从前向后移动，覆盖尚未保存的元素。",
        "忘记调整有效长度。",
        "数组容量不足仍插入。"
      ],
      "exercise": {
        "prompt": "已有有序数组 1 3 5 7 9。先删除值 5，再插入 6 保持有序，最后输出有效元素。补全 deleteValue 和 insertSorted。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint deleteValue(int a[], int& n, int x) {\n    // 删除 x，成功返回 1\n}\n\nint insertSorted(int a[], int& n, int x) {\n    // 有序插入 x，成功返回 1\n}\n\nint main() {\n    int a[20] = {1,3,5,7,9}, n = 5;\n    deleteValue(a, n, 5);\n    insertSorted(a, n, 6);\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "1 3 6 7 9",
        "hint": "删除向左覆盖；插入时先找 pos，再从 i=n 向 pos 递减移动。",
        "checks": [
          {
            "label": "删除时向左覆盖",
            "pattern": "\\ba\\s*\\[\\s*\\w+\\s*\\]\\s*=\\s*a\\s*\\[\\s*\\w+\\s*\\+\\s*1\\s*\\]"
          },
          {
            "label": "删除后减少长度",
            "pattern": "\\bdeleteValue\\b[\\s\\S]*--\\s*n|\\bdeleteValue\\b[\\s\\S]*n\\s*=\\s*n\\s*-\\s*1"
          },
          {
            "label": "查找插入位置",
            "pattern": "\\bwhile\\s*\\([^)]*a\\s*\\[\\s*pos\\s*\\][^)]*\\<[^)]*x"
          },
          {
            "label": "插入时向右移动",
            "pattern": "a\\s*\\[\\s*i\\s*\\]\\s*=\\s*a\\s*\\[\\s*i\\s*-\\s*1\\s*\\]"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint deleteValue(int a[], int& n, int x) {\n    for (int i = 0; i < n; ++i) {\n        if (a[i] == x) {\n            for (int j = i; j < n - 1; ++j) a[j] = a[j + 1];\n            --n;\n            return 1;\n        }\n    }\n    return 0;\n}\n\nint insertSorted(int a[], int& n, int x) {\n    if (n >= 20) return 0;\n    int pos = 0;\n    while (pos < n && a[pos] < x) ++pos;\n    for (int i = n; i > pos; --i) a[i] = a[i - 1];\n    a[pos] = x;\n    ++n;\n    return 1;\n}\n\nint main() {\n    int a[20] = {1,3,5,7,9}, n = 5;\n    deleteValue(a, n, 5);\n    insertSorted(a, n, 6);\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
        "explanation": "删除左移、插入右移，移动方向都由数据依赖关系决定。",
        "commonMistakes": [
          "插入从前往后移动，覆盖后续元素。",
          "删除后不减少 n。",
          "插入位置从 1 开始，漏掉插在首位。"
        ]
      },
      "masteryHint": "能正确选择数组移动方向并维护有效长度。"
    },
    {
      "id": "l9-string-manual-copy-compare",
      "lessonId": "lesson9",
      "title": "手写字符串复制、连接与比较",
      "tags": [
        "字符串遍历",
        "复制",
        "连接",
        "比较",
        "\\0"
      ],
      "overview": "手写 C 字符串算法时，关键是以 '\\0' 作为结束标志。复制和连接后必须补结尾 '\\0'，比较应从第一个不同字符或结尾处得出结论。",
      "keyPoints": [
        "字符串长度是 '\\0' 之前的字符数。",
        "复制循环结束后要写 to[k]='\\0'。",
        "连接前先定位目标字符串末尾。",
        "比较时逐字符检查，直到出现不同字符或两者都到结尾。",
        "目标数组必须足够大。"
      ],
      "pitfalls": [
        "忘记补 '\\0'。",
        "把字符串结束符写成字符 '0'。",
        "连接时覆盖原字符串结尾。",
        "比较只判断长度。"
      ],
      "exercise": {
        "prompt": "读取两个单词，手写函数 copyString 和 concatString，输出复制结果与连接结果。",
        "starter": "#include <iostream>\nusing namespace std;\n\nvoid copyString(char to[], const char from[]) {\n    // 手写复制\n}\n\nvoid concatString(char to[], const char from[]) {\n    // 手写连接\n}\n\nint main() {\n    char a[50], b[50], copied[100], joined[100];\n    cin >> a >> b;\n    copyString(copied, a);\n    copyString(joined, a);\n    concatString(joined, b);\n    cout << copied << ' ' << joined << endl;\n    return 0;\n}",
        "sampleInput": "hello world",
        "expectedOutput": "hello helloworld",
        "hint": "复制循环后补 to[i]='\\0'；连接时先找到 to 的末尾。",
        "checks": [
          {
            "label": "复制循环检查结束符",
            "pattern": "\\bwhile\\s*\\([^)]*from\\s*\\[\\s*i\\s*\\]\\s*!=\\s*'\\\\0'"
          },
          {
            "label": "复制后补结束符",
            "pattern": "\\bto\\s*\\[\\s*i\\s*\\]\\s*=\\s*'\\\\0'"
          },
          {
            "label": "连接时寻找目标末尾",
            "pattern": "\\bwhile\\s*\\([^)]*to\\s*\\[\\s*i\\s*\\]\\s*!=\\s*'\\\\0'"
          },
          {
            "label": "连接循环复制字符",
            "pattern": "to\\s*\\[\\s*i\\s*\\+\\+\\s*\\]\\s*=\\s*from\\s*\\[\\s*j\\s*\\+\\+\\s*\\]|to\\s*\\[\\s*i\\s*\\]\\s*=\\s*from\\s*\\[\\s*j\\s*\\]"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nvoid copyString(char to[], const char from[]) {\n    int i = 0;\n    while (from[i] != '\\0') {\n        to[i] = from[i];\n        ++i;\n    }\n    to[i] = '\\0';\n}\n\nvoid concatString(char to[], const char from[]) {\n    int i = 0, j = 0;\n    while (to[i] != '\\0') ++i;\n    while (from[j] != '\\0') {\n        to[i++] = from[j++];\n    }\n    to[i] = '\\0';\n}\n\nint main() {\n    char a[50], b[50], copied[100], joined[100];\n    cin >> a >> b;\n    copyString(copied, a);\n    copyString(joined, a);\n    concatString(joined, b);\n    cout << copied << ' ' << joined << endl;\n    return 0;\n}",
        "explanation": "复制与连接都以 '\\0' 为结束标志，并在最终位置补结束符。",
        "commonMistakes": [
          "把 '\\0' 写成 '0'。",
          "连接时从 to[0] 开始覆盖。",
          "目标数组容量不足。"
        ]
      },
      "masteryHint": "能不依赖库函数完成字符串复制与连接。"
    },
    {
      "id": "l9-string-case-frequency",
      "lessonId": "lesson9",
      "title": "字符大小写转换与频率统计",
      "tags": [
        "ASCII",
        "大小写",
        "频次",
        "字符串",
        "最多字符"
      ],
      "overview": "ASCII 中同一英文字母的小写编码比大写大 32。统计字母频次可用长度为 26 的数组，把字母映射为 0-25 的下标。",
      "keyPoints": [
        "大写 A-Z 与小写 a-z 分别连续排列。",
        "s[i] >= 'A' && s[i] <= 'Z' 可判断大写字母。",
        "大写转小写可执行 s[i] += 32。",
        "小写字母下标可写为 s[i] - 'a'。",
        "统计前把频率数组初始化为 0。"
      ],
      "pitfalls": [
        "对非字母字符也转换。",
        "频率数组只初始化第一个元素。",
        "下标直接使用 ASCII 值，造成越界。",
        "统计时忘记区分大小写或先统一大小写。"
      ],
      "exercise": {
        "prompt": "读取一个单词，把所有大写字母转为小写，并输出转换后的字符串以及出现次数最多的字母和次数。若并列取字母序最小者。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100];\n    cin >> s;\n    int freq[26] = {0};\n    // 转换大小写并统计\n    return 0;\n}",
        "sampleInput": "Banana",
        "expectedOutput": "banana a 3",
        "hint": "先转换再统计；找最大频次时按 a 到 z 顺序扫描。",
        "checks": [
          {
            "label": "判断大写字母",
            "pattern": "s\\s*\\[\\s*i\\s*\\]\\s*>=\\s*'A'[\\s\\S]*s\\s*\\[\\s*i\\s*\\]\\s*<=\\s*'Z'"
          },
          {
            "label": "大写转小写",
            "pattern": "s\\s*\\[\\s*i\\s*\\]\\s*=\\s*s\\s*\\[\\s*i\\s*\\]\\s*\\+\\s*32|s\\s*\\[\\s*i\\s*\\]\\s*\\+=\\s*32"
          },
          {
            "label": "用 s[i]-'a' 统计",
            "pattern": "freq\\s*\\[\\s*s\\s*\\[\\s*i\\s*\\]\\s*-\\s*'a'\\s*\\]"
          },
          {
            "label": "寻找最大频次",
            "pattern": "\\bif\\s*\\([^)]*freq\\s*\\[\\s*i\\s*\\][^)]*>"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[100];\n    cin >> s;\n    int freq[26] = {0};\n    for (int i = 0; s[i] != '\\0'; ++i) {\n        if (s[i] >= 'A' && s[i] <= 'Z') s[i] = s[i] + 32;\n        if (s[i] >= 'a' && s[i] <= 'z') ++freq[s[i] - 'a'];\n    }\n    int best = 0;\n    for (int i = 1; i < 26; ++i) {\n        if (freq[i] > freq[best]) best = i;\n    }\n    cout << s << ' ' << char('a' + best) << ' ' << freq[best] << endl;\n    return 0;\n}",
        "explanation": "字符先统一为小写，再映射到 0-25 的频率数组。严格大于保留并列时字母序最小者。",
        "commonMistakes": [
          "freq 没有全部初始化为 0。",
          "把空格或其他符号计入字母频次。",
          "并列时使用 >= 导致选择字母序较大者。"
        ]
      },
      "masteryHint": "能利用 ASCII 规律完成大小写转换和字母频次统计。"
    }
  ]
};
