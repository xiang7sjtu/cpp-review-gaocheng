window.COURSE_DATA = {
  "meta": {
    "title": "C/C++ 高程知识复习台",
    "subtitle": "按知识点分块练习、判断掌握程度，并自动安排下一轮复习",
    "version": 3,
    "updatedAt": "2026-11-17",
    "sourceNote": "根据 Canvas 课程 118150 的 lesson1-8 课件与期中知识梳理整理；支持本地精确编译判题。"
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
        "忘记包含 <iostream> 却直接使用 std::cout。",
        "把函数定义写在另一个函数内部。"
      ],
      "example": {
        "title": "最小控制台程序",
        "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
        "output": "Hello, C++!",
        "explanation": "std::cout 负责标准输出，<< 把字符串送入输出流，std::endl 换行并刷新缓冲区。"
      },
      "exercise": {
        "prompt": "编写一个完整程序，输出 Hello, C++! 后换行，并正常结束。",
        "starter": "#include <iostream>\n\nint main() {\n    // 在这里完成输出\n\n    return 0;\n}",
        "hint": "使用 std::cout、字符串字面量、<< 和 std::endl。",
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
            "pattern": "std\\s*::\\s*cout\\s*<<\\s*\"Hello,\\s*C\\+\\+!\""
          },
          {
            "label": "输出后换行",
            "pattern": "(?:std\\s*::\\s*endl|['\"]\\\\n['\"])"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
        "explanation": "这道题考查程序骨架与最基本的输出。可以写成 std::endl，也可以在字符串末尾写 \\n。",
        "commonMistakes": [
          "漏写 std:: 命名空间限定。",
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
      "example": {
        "title": "声明与定义必须配套",
        "code": "#include <iostream>\n\nint add(int a, int b); // 只有声明\n\nint main() {\n    std::cout << add(2, 3);\n}",
        "output": "编译可能通过，链接会失败：找不到 add 的定义。",
        "explanation": "声明告诉编译器函数如何调用，定义才提供实际函数体。这里的链接器无法解析 add 的符号。"
      },
      "exercise": {
        "prompt": "补全一个名为 add 的函数定义，接收两个 int 并返回它们的和；main 已经调用它。",
        "starter": "#include <iostream>\n\nint add(int a, int b);\n\n// 在这里补充函数定义\n\nint main() {\n    std::cout << add(2, 3);\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << add(2, 3);\n    return 0;\n}",
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
      "example": {
        "title": "合法命名",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int average_score = 90;\n    int Int = 3;\n    cout << average_score << ' ' << Int << endl;\n    return 0;\n}",
        "output": "90 3",
        "explanation": "average_score 和 Int 都符合标识符规则；Int 不是关键字。"
      },
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
      "example": {
        "title": "读取两个整数",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}",
        "output": "输入 3 5 时输出 8",
        "explanation": "两个输入可以用空格分隔，表达式 a + b 被送入 cout。"
      },
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
      "example": {
        "title": "用宏常量计算圆周长",
        "code": "#include <iostream>\nusing namespace std;\n#define PI 3.14\n\nint main() {\n    double r = 2;\n    cout << 2 * PI * r << endl;\n    return 0;\n}",
        "output": "12.56",
        "explanation": "PI 在预处理阶段被替换成 3.14，随后再参与编译和运行。"
      },
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
      "example": {
        "title": "安全初始化",
        "code": "#include <iostream>\n\nint main() {\n    int count{0};\n    double average = 0.0;\n    count = count + 1;\n    std::cout << count << \" \" << average;\n}",
        "output": "1 0",
        "explanation": "count 和 average 在读取前已有确定值，因此行为可预测。"
      },
      "exercise": {
        "prompt": "声明并初始化两个变量：int 类型 score 为 90，double 类型 rate 为 0.5。",
        "starter": "#include <iostream>\n\nint main() {\n    // 声明并初始化 score 和 rate\n\n    std::cout << score << \" \" << rate;\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nint main() {\n    int score{90};\n    double rate{0.5};\n    std::cout << score << \" \" << rate;\n    return 0;\n}",
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
      "example": {
        "title": "字符与数值是不同概念",
        "code": "#include <iostream>\n\nint main() {\n    char grade = 'A';\n    bool passed = true;\n    double ratio = 0.75;\n    std::cout << grade << \" \" << passed << \" \" << ratio;\n}",
        "output": "A 1 0.75",
        "explanation": "grade 保存字符 A，passed 的 true 在默认输出中显示为 1，ratio 保存浮点数。"
      },
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
            "pattern": "std\\s*::\\s*cout[\\s\\S]*(?:grade[\\s\\S]*passed[\\s\\S]*ratio|grade[\\s\\S]*ratio[\\s\\S]*passed|passed[\\s\\S]*grade[\\s\\S]*ratio|passed[\\s\\S]*ratio[\\s\\S]*grade|ratio[\\s\\S]*grade[\\s\\S]*passed|ratio[\\s\\S]*passed[\\s\\S]*grade)"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    char grade = 'A';\n    bool passed = true;\n    double ratio = 0.75;\n    std::cout << grade << \" \" << passed << \" \" << ratio;\n    return 0;\n}",
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
      "title": "const 与 constexpr",
      "tags": [
        "常量",
        "只读",
        "编译期"
      ],
      "overview": "const 表示对象在初始化后不可通过该名称修改；constexpr 进一步强调表达式可在编译期求值。",
      "keyPoints": [
        "const 变量必须在创建时初始化。",
        "const 有助于表达意图并防止误修改。",
        "constexpr 变量需要可用常量表达式初始化。",
        "函数参数使用 const 引用可避免复制，同时禁止函数修改实参。"
      ],
      "pitfalls": [
        "先声明 const 变量、稍后再赋值。",
        "把 const 误认为“任何上下文都一定是编译期常量”。",
        "函数参数写成 const 后仍尝试修改。"
      ],
      "example": {
        "title": "只读配置值",
        "code": "#include <iostream>\n\nint main() {\n    constexpr int maxStudents = 60;\n    const double passRate = 0.6;\n    std::cout << maxStudents << \" \" << passRate;\n}",
        "output": "60 0.6",
        "explanation": "maxStudents 是编译期常量；passRate 也是只读常量，但这里没有要求它在编译期完成所有计算。"
      },
      "exercise": {
        "prompt": "声明编译期常量 int maxStudents 为 60，以及只读 double 变量 passRate 为 0.6。",
        "starter": "#include <iostream>\n\nint main() {\n    // 完成两个常量声明\n\n    std::cout << maxStudents << \" \" << passRate;\n    return 0;\n}",
        "hint": "需要编译期常量时使用 constexpr；仅表示只读时 const 即可。",
        "checks": [
          {
            "label": "maxStudents 使用 constexpr 且为 60",
            "pattern": "\\bconstexpr\\s+int\\s+maxStudents\\s*(?:=\\s*60|\\{\\s*60\\s*\\})\\s*;"
          },
          {
            "label": "passRate 使用 const double 且为 0.6",
            "pattern": "\\bconst\\s+double\\s+passRate\\s*(?:=\\s*0?\\.6|\\{\\s*0?\\.6\\s*\\})\\s*;"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    constexpr int maxStudents = 60;\n    const double passRate = 0.6;\n    std::cout << maxStudents << \" \" << passRate;\n    return 0;\n}",
        "explanation": "两者都必须初始化。constexpr 表达更强的编译期保证，const 主要表达只读语义。",
        "commonMistakes": [
          "先写 const int maxStudents; 再在下一行赋值。",
          "把 constexpr 写成 constexprt。",
          "修改 const 变量。"
        ]
      },
      "masteryHint": "能解释 const 与 constexpr 的共同点和区别。"
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
      "example": {
        "title": "正确计算平均值",
        "code": "#include <iostream>\n\nint main() {\n    int total = 7;\n    int count = 2;\n    double average = static_cast<double>(total) / count;\n    std::cout << average;\n}",
        "output": "3.5",
        "explanation": "先把 total 转成 double，整个除法就按浮点规则执行。"
      },
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
            "pattern": "(?:static_cast\\s*<\\s*double\\s*>\\s*\\(\\s*(?:total|count)\\s*\\)|(?:double\\s*)?\\(\\s*(?:total|count)\\s*\\))"
          },
          {
            "label": "用 total 除以 count",
            "pattern": "(?:total\\s*/\\s*count|count\\s*/\\s*total)"
          },
          {
            "label": "输出 average",
            "pattern": "std\\s*::\\s*cout[\\s\\S]*<<\\s*average\\s*;"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    int total = 7;\n    int count = 2;\n    double average = static_cast<double>(total) / count;\n    std::cout << average;\n    return 0;\n}",
        "explanation": "整数除以整数会先按整数规则计算。转换必须发生在除法之前。",
        "commonMistakes": [
          "写成 double average = total / count;，得到 3 后再转为 3.0。",
          "写成 double(total / count)，转换时机仍然太晚。",
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
      "example": {
        "title": "前置与后置的区别",
        "code": "#include <iostream>\n\nint main() {\n    int x = 5;\n    int a = ++x;\n    int b = x++;\n    std::cout << x << \" \" << a << \" \" << b;\n}",
        "output": "7 6 6",
        "explanation": "++x 先把 x 变为 6，再把 6 赋给 a；x++ 把当时的 6 赋给 b，然后把 x 增至 7。"
      },
      "exercise": {
        "prompt": "已有 int x = 5。请用两条独立语句：先把前置自增结果赋给 int a，再把后置自增结果赋给 int b。",
        "starter": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // 分别创建 a 和 b\n\n    std::cout << x << \" \" << a << \" \" << b;\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nint main() {\n    int x = 5;\n    int a = ++x;\n    int b = x++;\n    std::cout << x << \" \" << a << \" \" << b;\n    return 0;\n}",
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
      "example": {
        "title": "正确判断区间",
        "code": "#include <iostream>\n\nint main() {\n    int x = 72;\n    bool valid = x >= 0 && x <= 100;\n    std::cout << valid;\n}",
        "output": "1",
        "explanation": "两个比较分别产生 bool，再用 && 组合，不能写成数学中的链式不等式。"
      },
      "exercise": {
        "prompt": "已有 int score。请创建 bool passed，当 score 在 0 到 100（含端点）时设为 true。",
        "starter": "#include <iostream>\n\nint main() {\n    int score = 88;\n    // 创建 passed\n\n    std::cout << passed;\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nint main() {\n    int score = 88;\n    bool passed = score >= 0 && score <= 100;\n    std::cout << passed;\n    return 0;\n}",
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
        "static_cast",
        "溢出"
      ],
      "overview": "不同类型混合运算时会进行转换。隐式转换方便但可能丢失信息；需要明确意图时使用 static_cast 等显式转换。",
      "keyPoints": [
        "double 转 int 会丢弃小数部分，不会自动四舍五入。",
        "有符号整数溢出是严重错误，不能依赖其回绕结果。",
        "花括号初始化能阻止某些危险的窄化转换。",
        "显式转换应尽量使用 static_cast，而不是随意使用 C 风格强制转换。"
      ],
      "pitfalls": [
        "认为 3.9 转 int 会得到 4。",
        "用 int 保存很大的计算结果导致溢出。",
        "把浮点数精度误差误认为编译器随机出错。"
      ],
      "example": {
        "title": "截断而不是四舍五入",
        "code": "#include <iostream>\n\nint main() {\n    double value = 3.9;\n    int whole = static_cast<int>(value);\n    std::cout << whole;\n}",
        "output": "3",
        "explanation": "static_cast<int> 会向零方向截断小数部分。"
      },
      "exercise": {
        "prompt": "已有 double value = 3.9。请使用 static_cast 把它显式转换为 int，保存到 whole 并输出。",
        "starter": "#include <iostream>\n\nint main() {\n    double value = 3.9;\n    // 显式转换并输出\n\n    return 0;\n}",
        "hint": "语法是 static_cast<int>(value)。",
        "checks": [
          {
            "label": "声明 int whole",
            "pattern": "\\bint\\s+whole\\s*="
          },
          {
            "label": "使用 static_cast<int>(value)",
            "pattern": "static_cast\\s*<\\s*int\\s*>\\s*\\(\\s*value\\s*\\)"
          },
          {
            "label": "输出 whole",
            "pattern": "std\\s*::\\s*cout[\\s\\S]*<<\\s*whole\\s*;"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    double value = 3.9;\n    int whole = static_cast<int>(value);\n    std::cout << whole;\n    return 0;\n}",
        "explanation": "显式转换让读者知道这里故意把浮点数转成整数，并接受小数部分被截断。",
        "commonMistakes": [
          "使用 std::round 却声称发生了截断。",
          "转换语法写成 static_cast<int>value。",
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
      "example": {
        "title": "用括号消除歧义",
        "code": "#include <iostream>\n\nint main() {\n    int a = 2;\n    int b = 3;\n    int c = 4;\n    int result = a + b * c;\n    int clear = a + (b * c);\n    std::cout << result << \" \" << clear;\n}",
        "output": "14 14",
        "explanation": "乘法先于加法。即使知道优先级，明确括号也能让维护者快速确认意图。"
      },
      "exercise": {
        "prompt": "已有 a、b、c。请计算 (a + b) * c，保存到 int result。必须显式表达先加后乘。",
        "starter": "#include <iostream>\n\nint main() {\n    int a = 2;\n    int b = 3;\n    int c = 4;\n    // 计算 result\n\n    std::cout << result;\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nint main() {\n    int a = 2;\n    int b = 3;\n    int c = 4;\n    int result = (a + b) * c;\n    std::cout << result;\n    return 0;\n}",
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
      "example": {
        "title": "复合赋值与条件表达式",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3;\n    a += a * 2;\n    int x = 5, p = 4, q = 3;\n    int r = (x == 0 ? p++ : q++);\n    cout << a << ' ' << p << ' ' << q << ' ' << r << endl;\n    return 0;\n}",
        "output": "9 4 4 3",
        "explanation": "a 先算 3+3*2 得到 9。x 不为 0，因此执行 q++，r 取得旧值 3，q 变为 4。"
      },
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
      "example": {
        "title": "映射到 50 到 100",
        "code": "#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nint main() {\n    for (int i = 0; i < 3; ++i) {\n        cout << rand() % 51 + 50 << endl;\n    }\n    return 0;\n}",
        "output": "每次运行可得到 50 到 100 之间的整数。",
        "explanation": "rand()%51 的范围是 0 到 50，再加 50 就得到 50 到 100。"
      },
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
      "example": {
        "title": "八进制转义与 ASCII",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char c = '\\102';\n    cout << static_cast<int>(c) << ' ' << c << endl;\n    return 0;\n}",
        "output": "66 B",
        "explanation": "八进制 102 等于十进制 66，对应 ASCII 字符 B。"
      },
      "exercise": {
        "prompt": "定义 char c='\\102'，先输出它的整数值，再输出该字符本身。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 定义字符并输出整数与字符\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "66 B",
        "hint": "使用 static_cast<int>(c) 输出整数值，再用 cout 输出字符。",
        "checks": [
          {
            "label": "定义八进制字符常量",
            "pattern": "\\bchar\\s+c\\s*=\\s*'\\s*\\\\102\\s*'"
          },
          {
            "label": "转换为整数输出",
            "pattern": "static_cast\\s*<\\s*int\\s*>\\s*\\(\\s*c\\s*\\)|\\bint\\s*\\(\\s*c\\s*\\)"
          },
          {
            "label": "输出字符本身",
            "pattern": "\\bcout\\s*<<[\\s\\S]*<<\\s*c\\b"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char c = '\\102';\n    cout << static_cast<int>(c) << ' ' << c << endl;\n    return 0;\n}",
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
      "example": {
        "title": "复合语句保证两个赋值同时受 if 控制",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 3, y = 8;\n    if (x < y) {\n        int t = x;\n        x = y;\n        y = t;\n    }\n    cout << x << \" \" << y << endl;\n    return 0;\n}",
        "output": "8 3",
        "explanation": "花括号把三条语句组合成一个分支体，因此交换操作只会在条件成立时整体执行。"
      },
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
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    bool leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n    if (leap) {\n        cout << \"leap\" << endl;\n    } else {\n        cout << \"common\" << endl;\n    }\n    return 0;\n}",
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
      "example": {
        "title": "成绩分级",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 86;\n    if (score >= 90) cout << \"A\";\n    else if (score >= 80) cout << \"B\";\n    else if (score >= 60) cout << \"C\";\n    else cout << \"D\";\n    return 0;\n}",
        "output": "B",
        "explanation": "条件从高分到低分排列，86 满足 score>=80 后立即结束整个分支链。"
      },
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
      "example": {
        "title": "共用 case",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'B';\n    switch (grade) {\n        case 'A':\n        case 'B': cout << \"pass with honor\"; break;\n        default: cout << \"review\";\n    }\n    return 0;\n}",
        "output": "pass with honor",
        "explanation": "A 和 B 共用同一段输出语句，遇到 break 后退出 switch。"
      },
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
      "example": {
        "title": "三种方式求 1 到 5 的和",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 5; ++i) sum += i;\n    cout << sum << endl;\n    return 0;\n}",
        "output": "15",
        "explanation": "for 把初始化、终止条件和更新集中在一行，适合固定范围累加。"
      },
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
      "example": {
        "title": "跳过 3 的倍数",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 6; ++i) {\n        if (i % 3 == 0) continue;\n        cout << i << ' ';\n    }\n    return 0;\n}",
        "output": "1 2 4 5",
        "explanation": "当 i 是 3 的倍数时，continue 跳过本轮输出，但循环本身继续。"
      },
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
      "example": {
        "title": "e 的近似值",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double term = 1.0, e = 0.0;\n    for (int i = 0; i < 8; ++i) {\n        e += term;\n        term /= i + 1;\n    }\n    cout << fixed << setprecision(6) << e << endl;\n    return 0;\n}",
        "output": "2.718254",
        "explanation": "term 依次表示 1/i!，通过 term /= i+1 由旧项得到新项。"
      },
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
      "example": {
        "title": "辗转相除",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int m = 27, n = 15;\n    while (n != 0) {\n        int r = m % n;\n        m = n;\n        n = r;\n    }\n    cout << m << endl;\n    return 0;\n}",
        "output": "3",
        "explanation": "余数最终为 0 时，保存除数的 m 就是最大公约数。"
      },
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
      "example": {
        "title": "标志变量判素数",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 29;\n    bool prime = n >= 2;\n    for (int i = 2; i * i <= n; ++i) {\n        if (n % i == 0) { prime = false; break; }\n    }\n    cout << (prime ? \"yes\" : \"no\") << endl;\n    return 0;\n}",
        "output": "yes",
        "explanation": "prime 初值先排除小于 2 的情况，找到因子后立即改为 false 并退出。"
      },
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
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    bool isPrime = n >= 2;\n    for (int i = 2; i <= n / i; ++i) {\n        if (n % i == 0) {\n            isPrime = false;\n            break;\n        }\n    }\n    cout << (isPrime ? \"prime\" : \"composite\") << endl;\n    return 0;\n}",
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
      "example": {
        "title": "空循环后的 i",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    for (i = 0; i < 5; i += 2);\n    cout << i << endl;\n    return 0;\n}",
        "output": "6",
        "explanation": "分号使循环体为空，但 i 仍依次变为 0、2、4、6；当 i=6 时条件失败。"
      },
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
      "example": {
        "title": "五行正三角形",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; ++i) {\n        cout << setw(n - i + 1) << \"\";\n        for (int j = 1; j <= 2 * i - 1; ++j) cout << '*';\n        cout << endl;\n    }\n    return 0;\n}",
        "output": "输出五行居中的星号三角形。",
        "explanation": "第 i 行先留出 n-i 个空格，再输出 2*i-1 个星号。"
      },
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
      "example": {
        "title": "牛顿迭代求平方根",
        "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double a = 2, x0 = 1;\n    for (int i = 0; i < 6; ++i) {\n        double x1 = (x0 + a / x0) / 2;\n        if (fabs(x1 - x0) < 1e-9) break;\n        x0 = x1;\n    }\n    cout << x0 << endl;\n    return 0;\n}",
        "output": "1.41421",
        "explanation": "每轮用旧近似值 x0 计算更接近根的新值 x1，再替换 x0。"
      },
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
      "example": {
        "title": "用等式减少一层循环",
        "code": "for (int x = 0; x <= 100 / 3; ++x) {\n    for (int y = 0; y <= 100 / 2; ++y) {\n        int z = 100 - x - y;\n        if (z >= 0 && 3 * x + 2 * y + 0.5 * z == 100) {\n            ++count;\n        }\n    }\n}",
        "output": "count 记录满足条件的方案数。",
        "explanation": "因为 x+y+z=100，所以 z 可由 x、y 直接算出，无需再枚举 z。"
      },
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
        "getline(cin, s) 可以读取一整行。",
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
      "example": {
        "title": "逐字符分类",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int letters = 0, digits = 0, other = 0;\n    char ch;\n    while (cin.get(ch)) {\n        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) ++letters;\n        else if (ch >= '0' && ch <= '9') ++digits;\n        else ++other;\n    }\n    cout << letters << ' ' << digits << ' ' << other << endl;\n}",
        "output": "统计字母、数字和其它字符。",
        "explanation": "每次读取一个字符后，按字符范围分类并累加对应计数器。"
      },
      "exercise": {
        "prompt": "读取一整行，统计字母、数字和其它字符的数量，依次用空格输出。",
        "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int letters = 0, digits = 0, other = 0;\n    // 统计三类字符\n    cout << letters << ' ' << digits << ' ' << other << endl;\n    return 0;\n}",
        "sampleInput": "Ab3!",
        "expectedOutput": "2 1 1",
        "hint": "遍历 s 的每个字符，先判断字母，再判断数字，其余归入 other。",
        "checks": [
          {
            "label": "读取一整行",
            "pattern": "\\bgetline\\s*\\("
          },
          {
            "label": "遍历字符串",
            "pattern": "\\bfor\\s*\\([^)]*:[^)]*\\bs\\b\\)|\\bs\\s*\\.\\s*size\\s*\\("
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
        "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int letters = 0, digits = 0, other = 0;\n    for (char ch : s) {\n        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) ++letters;\n        else if (ch >= '0' && ch <= '9') ++digits;\n        else ++other;\n    }\n    cout << letters << ' ' << digits << ' ' << other << endl;\n    return 0;\n}",
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
      "example": {
        "title": "数组求和",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (int i = 0; i < 5; ++i) sum += a[i];\n    cout << sum << endl;\n    return 0;\n}",
        "output": "15",
        "explanation": "循环下标从 0 到 4，正好覆盖全部 5 个元素。"
      },
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
      "example": {
        "title": "同时记录最大值和下标",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5] = {7, 3, 9, 1, 9};\n    int index = 0;\n    for (int i = 1; i < 5; ++i)\n        if (a[i] > a[index]) index = i;\n    cout << a[index] << ' ' << index << endl;\n    return 0;\n}",
        "output": "9 2",
        "explanation": "index 始终指向当前最大元素；只有遇到严格更大的元素才更新，因此并列时保留第一次出现的位置。"
      },
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
      "example": {
        "title": "选择排序核心",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5] = {8, 3, 4, 9, 7};\n    for (int i = 0; i < 4; ++i) {\n        int minIndex = i;\n        for (int j = i + 1; j < 5; ++j)\n            if (a[j] < a[minIndex]) minIndex = j;\n        int t = a[i]; a[i] = a[minIndex]; a[minIndex] = t;\n    }\n    for (int x : a) cout << x << ' ';\n    return 0;\n}",
        "output": "3 4 7 8 9",
        "explanation": "每轮把未排序区间的最小值换到该区间起点，逐步扩大有序前缀。"
      },
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
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5];\n    for (int i = 0; i < 5; ++i) cin >> a[i];\n    for (int i = 0; i < 4; ++i) {\n        for (int j = 0; j < 4 - i; ++j) {\n            if (a[j] > a[j + 1]) {\n                int t = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = t;\n            }\n        }\n    }\n    for (int x : a) cout << x << ' ';\n    cout << endl;\n    return 0;\n}",
        "explanation": "每轮冒泡把当前未排序部分的最大值送到末尾，因此内层终点逐轮前移。",
        "commonMistakes": [
          "内层条件写成 j<5，访问 a[5] 越界。",
          "升序却用 a[j] < a[j+1] 交换。",
          "外层轮数不足，数组没有完全有序。"
        ]
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
      "example": {
        "title": "删除第一个目标值",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[6] = {1, 2, 3, 4, 5, 0};\n    int n = 5, key = 3;\n    int pos = 0;\n    while (pos < n && a[pos] != key) ++pos;\n    if (pos < n) {\n        for (int i = pos; i < n - 1; ++i) a[i] = a[i + 1];\n        --n;\n    }\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    return 0;\n}",
        "output": "1 2 4 5",
        "explanation": "找到目标后，让后续元素逐个前移，再用 n-- 缩小有效区间。"
      },
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
      "example": {
        "title": "查找目标下标",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[7] = {1, 3, 5, 7, 9, 11, 13};\n    int target = 9, low = 0, high = 6, ans = -1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (a[mid] == target) { ans = mid; break; }\n        if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    cout << ans << endl;\n    return 0;\n}",
        "output": "4",
        "explanation": "9 位于下标 4，找到后通过 break 结束循环。"
      },
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
      "example": {
        "title": "矩阵转置",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][2] = {{1, 2}, {3, 4}};\n    int b[2][2];\n    for (int i = 0; i < 2; ++i)\n        for (int j = 0; j < 2; ++j)\n            b[j][i] = a[i][j];\n    for (int i = 0; i < 2; ++i) {\n        for (int j = 0; j < 2; ++j) cout << b[i][j] << ' ';\n        cout << endl;\n    }\n    return 0;\n}",
        "output": "1 3\n2 4",
        "explanation": "新矩阵的 b[j][i] 接收原矩阵 a[i][j]，实现行列互换。"
      },
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
      "example": {
        "title": "手动求字符串长度",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[] = \"China\";\n    int length = 0;\n    while (s[length] != '\\0') ++length;\n    cout << length << endl;\n    return 0;\n}",
        "output": "5",
        "explanation": "length 从 0 开始，遇到结束符时停止，因此得到实际字符数而不是数组总容量。"
      },
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
      "example": {
        "title": "比较两个字符串",
        "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char a[] = \"hello\";\n    char b[] = \"hello\";\n    if (strcmp(a, b) == 0) cout << \"same\";\n    else cout << \"different\";\n    return 0;\n}",
        "output": "same",
        "explanation": "数组名比较的是地址，而 strcmp 比较的是两个以 '\\0' 结尾的字符序列。"
      },
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
      "example": {
        "title": "手写复制",
        "code": "int i = 0;\nwhile (src[i] != '\\0') {\n    dst[i] = src[i];\n    ++i;\n}\ndst[i] = '\\0';",
        "output": "dst 成为 src 的完整副本。",
        "explanation": "循环复制所有有效字符，循环结束后补结束符，保证目标串合法。"
      },
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
      "example": {
        "title": "逐字符比较",
        "code": "int i = 0;\nwhile (a[i] == b[i] && a[i] != '\\0') ++i;\nint r;\nif (a[i] == '\\0' && b[i] == '\\0') r = 0;\nelse if (a[i] > b[i]) r = 1;\nelse r = -1;",
        "output": "r=0 表示字符串相等。",
        "explanation": "循环停在第一对不同字符或两串结束处，再按字符编码决定大小关系。"
      },
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
      "example": {
        "title": "统计 26 个小写字母",
        "code": "int p[26] = {0};\nfor (int i = 0; s[i] != '\\0'; ++i) {\n    if (s[i] >= 'a' && s[i] <= 'z') ++p[s[i] - 'a'];\n}",
        "output": "p[0] 记录 a 的次数，p[25] 记录 z 的次数。",
        "explanation": "字符编码相减得到字母序号，用作频率数组下标。"
      },
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
      "example": {
        "title": "一个结果元素",
        "code": "int s = 0;\nfor (int k = 0; k < 3; ++k) {\n    s += a[0][k] * b[k][0];\n}\nc[0][0] = s;",
        "output": "s 是 C[0][0] 的累加结果。",
        "explanation": "固定 i、j 后，k 遍历共同维度完成点积。"
      },
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
      "example": {
        "title": "Floyd 核心三重循环",
        "code": "for (int k = 0; k < n; ++k)\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < n; ++j)\n            if (e[i][j] > e[i][k] + e[k][j])\n                e[i][j] = e[i][k] + e[k][j];",
        "output": "所有点对的最短距离得到更新。",
        "explanation": "每轮允许编号 k 的点作为中转，比较直达路径和经过 k 的路径。"
      },
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
      "example": {
        "title": "通过指针间接修改",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 4;\n    int *p = &x;\n    *p = 10;\n    cout << x << ' ' << *p << endl;\n    return 0;\n}",
        "output": "10 10",
        "explanation": "p 保存 x 的地址，因此给 *p 赋值就是给 x 赋值。"
      },
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
        "nullptr",
        "NULL",
        "初始化",
        "指针赋值"
      ],
      "overview": "指针变量必须在使用前指向有效对象，或者明确设为空指针。现代 C++ 使用 nullptr 表示不指向任何对象，解引用空指针属于严重错误。",
      "keyPoints": [
        "空指针可初始化为 nullptr。",
        "同类型指针之间可以赋值，表示指向同一对象。",
        "不能把普通整数直接赋给指针变量。",
        "指针赋值改变的是“指向哪里”，解引用赋值改变的是“指向对象的值”。",
        "使用可能为空的指针前应先判断 p!=nullptr。"
      ],
      "pitfalls": [
        "认为 p=nullptr 会自动释放对象。",
        "对空指针执行 *p。",
        "用 delete 释放从未 new 的普通变量地址。",
        "混淆 p=&x 与 *p=x。"
      ],
      "example": {
        "title": "同类型指针赋值",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 8;\n    int *p = nullptr, *q = &x;\n    p = q;\n    cout << *p << endl;\n    return 0;\n}",
        "output": "8",
        "explanation": "p=q 后两个指针都指向 x，但没有复制 x 本身。"
      },
      "exercise": {
        "prompt": "读取整数 value，让指针 p 指向它；只有 p 不为空时输出 *p。",
        "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int value;\n    cin >> value;\n    int *p = &value;\n    // 判空后输出\n    return 0;\n}",
        "hint": "判断 p != nullptr 后再访问 *p。",
        "checks": [
          {
            "label": "定义并初始化指针",
            "pattern": "\\bint\\s*\\*\\s*p\\s*=\\s*&\\s*value"
          },
          {
            "label": "判断指针非空",
            "pattern": "p\\s*!=\\s*nullptr|nullptr\\s*!=\\s*p"
          },
          {
            "label": "通过指针输出",
            "pattern": "\\bcout\\s*<<\\s*\\*\\s*p"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int value;\n    cin >> value;\n    int *p = &value;\n    if (p != nullptr) {\n        cout << *p << endl;\n    }\n    return 0;\n}",
        "explanation": "p 指向局部变量 value，只要 value 仍在作用域内，p 就保持有效。",
        "commonMistakes": [
          "把 if(p) 理解为判断 *p 是否为 0；它实际判断指针是否非空。",
          "把 nullptr 当作数值 0 进行指针加减。",
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
      "example": {
        "title": "用指针遍历数组",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[3] = {10, 20, 30};\n    int *p = a;\n    while (p < a + 3) cout << *p++ << ' ';\n    return 0;\n}",
        "output": "10 20 30",
        "explanation": "*p++ 先读取当前元素，再让 p 指向下一个元素。"
      },
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
      "example": {
        "title": "两种等价写法",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[3] = {2, 4, 6};\n    int *p = a;\n    cout << a[2] << ' ' << *(p + 2) << endl;\n    return 0;\n}",
        "output": "6 6",
        "explanation": "a[2] 与 *(p+2) 访问同一地址中的元素。"
      },
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
      "example": {
        "title": "连续观察两种操作",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2] = {10, 20};\n    int *p = a;\n    cout << *p++ << ' ';\n    cout << (*p)++ << ' ';\n    cout << *p << endl;\n    return 0;\n}",
        "output": "10 20 21",
        "explanation": "第一次输出 10 后 p 指向 20；第二次输出 20 并把该元素改为 21。"
      },
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
      "example": {
        "title": "动态数组求和",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 3;\n    int *a = new int[n]{1, 2, 3};\n    int sum = 0;\n    for (int i = 0; i < n; ++i) sum += a[i];\n    cout << sum << endl;\n    delete[] a;\n    a = nullptr;\n    return 0;\n}",
        "output": "6",
        "explanation": "动态数组使用完后必须 delete[]，随后将指针置空，避免继续误用。"
      },
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
      "example": {
        "title": "字符指针逐字符输出",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char s[] = \"C++\";\n    const char *p = s;\n    while (*p != '\\0') {\n        cout << *p;\n        ++p;\n    }\n    return 0;\n}",
        "output": "C++",
        "explanation": "p 依次指向 C、+、+，遇到结束符时停止。"
      },
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
        "solution": "#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char s[200];\n    cin.getline(s, 200);\n    const char *p = s;\n    int count = 0;\n    while (*p != '\\0') {\n        if (isalpha(static_cast<unsigned char>(*p))) ++count;\n        ++p;\n    }\n    cout << count << endl;\n    return 0;\n}",
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
      "example": {
        "title": "行指针访问二维数组",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int (*p)[3] = a;\n    cout << p[1][2] << endl;\n    return 0;\n}",
        "output": "6",
        "explanation": "p[1] 指向第二行，p[1][2] 是第二行第三列。"
      },
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
      "example": {
        "title": "交换指针",
        "code": "int a = 3, b = 5;\nint *p = &a, *q = &b, *temp;\ntemp = p;\np = q;\nq = temp;\ncout << *p << ' ' << *q << endl;",
        "output": "5 3",
        "explanation": "a、b 的值没有改变，但 p 改为指向 b，q 改为指向 a。"
      },
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
      "example": {
        "title": "逐起点比较",
        "code": "for (char *p = s; *p != '\\0'; ++p) {\n    char *a = p, *b = sub;\n    while (*b != '\\0' && *a == *b) {\n        ++a;\n        ++b;\n    }\n    if (*b == '\\0') ++count;\n}",
        "output": "count 记录重叠匹配次数。",
        "explanation": "每个主串起点都独立尝试匹配一次。"
      },
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
      "example": {
        "title": "交换两个指针",
        "code": "char *words[] = {\"pear\", \"apple\"};\nchar *temp = words[0];\nwords[0] = words[1];\nwords[1] = temp;",
        "output": "apple pear",
        "explanation": "字符串字面量位置没有移动，改变的只是指针数组中的地址。"
      },
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
      "example": {
        "title": "定义求最大值函数",
        "code": "#include <iostream>\n\nint maxValue(int a, int b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    std::cout << maxValue(8, 13);\n    return 0;\n}",
        "output": "13",
        "explanation": "maxValue 接收两个 int，返回较大的值；main 通过函数调用取得结果。"
      },
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
        "solution": "#include <iostream>\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    std::cout << square(7);\n    return 0;\n}",
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
      "example": {
        "title": "先声明后调用",
        "code": "#include <iostream>\n\nint add(int a, int b);\n\nint main() {\n    std::cout << add(2, 5);\n}\n\nint add(int a, int b) {\n    return a + b;\n}",
        "output": "7",
        "explanation": "第一行 add 只是声明；后面的函数体才是定义。声明让 main 中的调用先通过编译。"
      },
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
        "solution": "#include <iostream>\n\nint add(int, int);\n\nint main() {\n    std::cout << add(4, 6);\n    return 0;\n}\n\nint add(int a, int b) {\n    return a + b;\n}",
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
      "example": {
        "title": "值参数无法交换实参",
        "code": "#include <iostream>\n\nvoid swapCopy(int x, int y) {\n    int t = x;\n    x = y;\n    y = t;\n}\n\nint main() {\n    int a = 10, b = 20;\n    swapCopy(a, b);\n    std::cout << a << ' ' << b;\n}",
        "output": "10 20",
        "explanation": "swapCopy 交换的是 x、y 两个副本，a、b 的值未变。"
      },
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
        "solution": "#include <iostream>\n\nint twice(int x) {\n    return 2 * x;\n}\n\nint main() {\n    std::cout << twice(9);\n    return 0;\n}",
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
      "example": {
        "title": "引用参数交换两数",
        "code": "#include <iostream>\n\nvoid swapValue(int& x, int& y) {\n    int t = x;\n    x = y;\n    y = t;\n}\n\nint main() {\n    int a = 10, b = 20;\n    swapValue(a, b);\n    std::cout << a << ' ' << b;\n}",
        "output": "20 10",
        "explanation": "x 是 a 的别名，y 是 b 的别名，因此修改 x、y 就修改了 a、b。"
      },
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
        "solution": "#include <iostream>\n\nvoid minMax(int a, int b, int& minValue, int& maxValue) {\n    if (a < b) {\n        minValue = a;\n        maxValue = b;\n    } else {\n        minValue = b;\n        maxValue = a;\n    }\n}\n\nint main() {\n    int a = 8, b = 3, lo, hi;\n    minMax(a, b, lo, hi);\n    std::cout << lo << ' ' << hi;\n    return 0;\n}",
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
      "example": {
        "title": "解引用交换内容",
        "code": "#include <iostream>\n\nvoid swapPtr(int* x, int* y) {\n    int t = *x;\n    *x = *y;\n    *y = t;\n}\n\nint main() {\n    int a = 10, b = 20;\n    swapPtr(&a, &b);\n    std::cout << a << ' ' << b;\n}",
        "output": "20 10",
        "explanation": "*x 和 *y 指向调用者的 a、b，因此交换所指内容会改变 a、b。"
      },
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
        "solution": "#include <iostream>\n\nvoid sumDiff(int a, int b, int* sum, int* diff) {\n    *sum = a + b;\n    *diff = a - b;\n}\n\nint main() {\n    int s, d;\n    sumDiff(7, 3, &s, &d);\n    std::cout << s << ' ' << d;\n    return 0;\n}",
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
      "example": {
        "title": "函数修改数组元素",
        "code": "#include <iostream>\n\nvoid addOne(int a[], int n) {\n    for (int i = 0; i < n; ++i) {\n        ++a[i];\n    }\n}\n\nint main() {\n    int a[3] = {1, 2, 3};\n    addOne(a, 3);\n    std::cout << a[0] << ' ' << a[2];\n}",
        "output": "2 4",
        "explanation": "a 传入后指向 main 中数组首元素，函数修改 a[i] 就是修改原数组元素。"
      },
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
        "solution": "#include <iostream>\n\nvoid addOne(int a[], int n) {\n    for (int i = 0; i < n; ++i) {\n        ++a[i];\n    }\n}\n\nint main() {\n    int a[3] = {1, 2, 3};\n    addOne(a, 3);\n    for (int i = 0; i < 3; ++i) {\n        std::cout << a[i] << ' ';\n    }\n    return 0;\n}",
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
        "找不到目标时可返回 nullptr/NULL，调用者必须检查。",
        "const char* 表示不能通过该指针修改所指字符。",
        "返回局部数组或局部变量地址会产生悬空指针。"
      ],
      "pitfalls": [
        "返回函数内部局部数组的地址。",
        "调用者未检查返回值是否为 NULL 就解引用。",
        "返回 char* 却让调用者误以为可以写只读字符串常量。",
        "返回指向已经 delete 的内存的指针。"
      ],
      "example": {
        "title": "返回字符位置",
        "code": "#include <iostream>\n\nchar* findChar(char* s, char ch) {\n    for (int i = 0; s[i] != '\\0'; ++i) {\n        if (s[i] == ch) return &s[i];\n    }\n    return nullptr;\n}\n\nint main() {\n    char text[] = \"C++\";\n    char* p = findChar(text, '+');\n    if (p) std::cout << p;\n}",
        "output": "++",
        "explanation": "返回的是调用者 text 中的字符地址；p 指向第一个 +，所以从 p 输出得到 ++。"
      },
      "exercise": {
        "prompt": "编写 int* findValue(int a[], int n, int target)，找到 target 时返回其地址，否则返回 nullptr；main 中查找 5。",
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
            "pattern": "\\breturn\\s+(?:nullptr|NULL)\\s*;"
          },
          {
            "label": "检查返回值",
            "pattern": "\\bif\\s*\\(\\s*\\w+\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n\nint* findValue(int a[], int n, int target) {\n    for (int i = 0; i < n; ++i) {\n        if (a[i] == target) return &a[i];\n    }\n    return nullptr;\n}\n\nint main() {\n    int a[4] = {2, 5, 8, 9};\n    int* p = findValue(a, 4, 5);\n    if (p) std::cout << *p;\n    return 0;\n}",
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
      "example": {
        "title": "递归阶乘",
        "code": "#include <iostream>\n\nlong long fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    std::cout << fact(5);\n}",
        "output": "120",
        "explanation": "fact(5) 依次调用 fact(4)...fact(1)，再由终止值 1 逐层相乘返回。"
      },
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
        "solution": "#include <iostream>\n\nint sumTo(int n) {\n    if (n <= 0) return 0;\n    return n + sumTo(n - 1);\n}\n\nint main() {\n    std::cout << sumTo(5);\n    return 0;\n}",
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
      "example": {
        "title": "默认参数与通用最大值",
        "code": "#include <iostream>\n\nint add(int a, int b = 10) {\n    return a + b;\n}\n\ntemplate <typename T>\nT larger(T a, T b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    std::cout << add(5) << ' ' << larger(2.5, 4.5);\n}",
        "output": "15 4.5",
        "explanation": "add(5) 省略 b，使用默认值 10；larger 根据 double 实参推导 T=double。"
      },
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
        "solution": "#include <iostream>\n\ntemplate <typename T>\nT larger(T a, T b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    std::cout << larger(3, 8) << ' ';\n    std::cout << larger(2.5, 1.5);\n    return 0;\n}",
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
      "example": {
        "title": "静态局部变量保留状态",
        "code": "#include <iostream>\n\nint nextId() {\n    static int id = 0;\n    return ++id;\n}\n\nint main() {\n    std::cout << nextId() << ' ' << nextId() << ' ' << nextId();\n}",
        "output": "1 2 3",
        "explanation": "static int id 的初始化只发生一次，之后每次调用 nextId 都保留上一次的值。"
      },
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
        "solution": "#include <iostream>\n\nint callCount() {\n    static int count = 0;\n    return ++count;\n}\n\nint main() {\n    std::cout << callCount() << ' ';\n    std::cout << callCount() << ' ';\n    std::cout << callCount();\n    return 0;\n}",
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
      "example": {
        "title": "lcm 调用 gcd",
        "code": "#include <iostream>\nusing namespace std;\n\nint gcd(int m, int n) {\n    while (n != 0) {\n        int r = m % n;\n        m = n;\n        n = r;\n    }\n    return m;\n}\n\nint lcm(int m, int n) {\n    return m / gcd(m, n) * n;\n}\n\nint main() {\n    cout << gcd(12, 18) << ' ' << lcm(12, 18) << endl;\n    return 0;\n}",
        "output": "6 36",
        "explanation": "lcm 调用 gcd；gcd 返回 6 后，lcm 才继续计算 12 / 6 * 18。"
      },
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
      "example": {
        "title": "二维数组行求和",
        "code": "#include <iostream>\nusing namespace std;\n\nvoid rowSum(int a[][3], int rows, int sums[]) {\n    for (int i = 0; i < rows; ++i) {\n        sums[i] = 0;\n        for (int j = 0; j < 3; ++j) sums[i] += a[i][j];\n    }\n}\n\nint main() {\n    int a[2][3] = {{1,2,3},{4,5,6}}, sums[2];\n    rowSum(a, 2, sums);\n    cout << sums[0] << ' ' << sums[1] << endl;\n    return 0;\n}",
        "output": "6 15",
        "explanation": "形参保留了列数 3，函数通过双重循环计算每一行元素之和。"
      },
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
      "example": {
        "title": "勾股斜边",
        "code": "#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double x = 3, y = 4;\n    cout << fixed << setprecision(3) << sqrt(x*x + y*y) << endl;\n    return 0;\n}",
        "output": "5.000",
        "explanation": "sqrt 返回 double 类型结果，fixed 和 setprecision(3) 固定显示三位小数。"
      },
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
      "example": {
        "title": "学生结构",
        "code": "#include <iostream>\n\nstruct Student {\n    int id;\n    double score;\n};\n\nint main() {\n    Student s{1, 92.5};\n    std::cout << s.id << ' ' << s.score;\n}",
        "output": "1 92.5",
        "explanation": "Student 是结构类型，s 是结构变量，s.id 与 s.score 访问成员。"
      },
      "exercise": {
        "prompt": "定义 struct Point，成员 int x、int y；创建 p 并初始化为 (3,5)，输出 x 和 y。",
        "starter": "#include <iostream>\n\n// 定义 Point\n\nint main() {\n    // 创建 p 并输出成员\n    return 0;\n}",
        "hint": "结构体花括号后要有分号；可用 Point p{3,5};。",
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
        "solution": "#include <iostream>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    Point p{3, 5};\n    std::cout << p.x << ' ' << p.y;\n    return 0;\n}",
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
      "example": {
        "title": "用结构指针修改成员",
        "code": "#include <iostream>\n\nstruct Point { int x; int y; };\n\nint main() {\n    Point p{2, 4};\n    Point* ptr = &p;\n    ptr->x = 8;\n    std::cout << p.x << ' ' << (*ptr).y;\n}",
        "output": "8 4",
        "explanation": "ptr 指向 p，ptr->x 与 (*ptr).x 都修改或读取 p.x。"
      },
      "exercise": {
        "prompt": "已有 struct Point { int x; int y; }; 和 Point p{2,4};。请用结构指针 ptr 把 x 改为 9，并输出 p.x。",
        "starter": "#include <iostream>\n\nstruct Point { int x; int y; };\n\nint main() {\n    Point p{2, 4};\n    // 创建指针、修改 x、输出 p.x\n    return 0;\n}",
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
        "solution": "#include <iostream>\n\nstruct Point { int x; int y; };\n\nint main() {\n    Point p{2, 4};\n    Point* ptr = &p;\n    ptr->x = 9;\n    std::cout << p.x;\n    return 0;\n}",
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
      "example": {
        "title": "逐成员输出与整体赋值",
        "code": "#include <iostream>\n#include <cstring>\n\nstruct Person {\n    char name[20];\n    int age;\n};\n\nint main() {\n    Person a{};\n    std::strcpy(a.name, \"Tom\");\n    a.age = 18;\n    Person b = a;\n    std::cout << b.name << ' ' << b.age;\n}",
        "output": "Tom 18",
        "explanation": "name 是字符数组，用 strcpy 写入；同类型结构 b 可整体复制 a 的成员。"
      },
      "exercise": {
        "prompt": "定义 struct Book { char title[30]; int pages; }; 创建 b，把 title 设为 \"C++\"、pages 设为 320，再复制给 c 并输出 c.title 和 c.pages。",
        "starter": "#include <iostream>\n#include <cstring>\n\n// 定义 Book\n\nint main() {\n    // 初始化 b、复制给 c、输出\n    return 0;\n}",
        "hint": "字符数组用 std::strcpy；结构整体可用 c = b。",
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
        "solution": "#include <iostream>\n#include <cstring>\n\nstruct Book {\n    char title[30];\n    int pages;\n};\n\nint main() {\n    Book b{};\n    std::strcpy(b.title, \"C++\");\n    b.pages = 320;\n    Book c = b;\n    std::cout << c.title << ' ' << c.pages;\n    return 0;\n}",
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
      "example": {
        "title": "按成绩交换完整结构",
        "code": "#include <iostream>\n\nstruct Student { const char* name; int score; };\n\nint main() {\n    Student a[3] = {{\"A\", 70}, {\"B\", 90}, {\"C\", 80}};\n    Student t = a[0];\n    a[0] = a[1];\n    a[1] = t;\n    std::cout << a[0].name << ' ' << a[0].score;\n}",
        "output": "B 90",
        "explanation": "交换整个 Student 元素，姓名与成绩一起移动。"
      },
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
        "solution": "#include <iostream>\n\nstruct Student { const char* name; int score; };\n\nint main() {\n    Student a[2] = {{\"A\", 70}, {\"B\", 90}};\n    if (a[0].score > a[1].score) {\n        Student t = a[0];\n        a[0] = a[1];\n        a[1] = t;\n    }\n    std::cout << a[0].name;\n    return 0;\n}",
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
      "example": {
        "title": "创建并释放结点",
        "code": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node* p = new Node{7, nullptr};\n    std::cout << p->data;\n    delete p;\n}",
        "output": "7",
        "explanation": "new 创建一个 Node 并初始化 data 和 next；使用结束后 delete 释放。"
      },
      "exercise": {
        "prompt": "定义 Node { int data; Node* next; };，用 new 创建 p，设置 data=12、next=nullptr，输出 data 后 delete p。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    // new、初始化、输出、delete\n    return 0;\n}",
        "hint": "可用 Node* p = new Node{12, nullptr};。",
        "checks": [
          {
            "label": "使用 new Node",
            "pattern": "\\bnew\\s+Node\\b"
          },
          {
            "label": "初始化 data 为 12",
            "pattern": "(?:data\\s*=\\s*12|Node\\s*\\{[^}]*12)"
          },
          {
            "label": "next 置空",
            "pattern": "(?:next\\s*=\\s*nullptr|Node\\s*\\{[^}]*nullptr)"
          },
          {
            "label": "delete 指针",
            "pattern": "\\bdelete\\s+\\w+\\s*;"
          }
        ],
        "solution": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node* p = new Node{12, nullptr};\n    std::cout << p->data;\n    delete p;\n    return 0;\n}",
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
      "overview": "单链表由头指针和若干结点组成。每个结点含数据域与指向后继的 next；最后一个结点的 next 为 nullptr。",
      "keyPoints": [
        "空链表用 head == nullptr 表示。",
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
      "example": {
        "title": "建立并遍历三个结点",
        "code": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node c{3, nullptr};\n    Node b{2, &c};\n    Node a{1, &b};\n    for (Node* p = &a; p != nullptr; p = p->next) {\n        std::cout << p->data << ' ';\n    }\n}",
        "output": "1 2 3",
        "explanation": "p 从 head 开始，每次通过 next 跳到后继结点，直到空指针。"
      },
      "exercise": {
        "prompt": "定义 Node { int data; Node* next; }; 创建三个动态结点，数据为 1、2、3，按顺序连接；用 p=p->next 遍历输出，最后释放全部结点。",
        "starter": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    // 创建并连接结点\n    // 遍历输出\n    // 释放\n    return 0;\n}",
        "hint": "可以创建 a、b、c 三个指针，连接 a->b->c，最后 c->next=nullptr。",
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
        "solution": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nint main() {\n    Node* a = new Node{1, nullptr};\n    Node* b = new Node{2, nullptr};\n    Node* c = new Node{3, nullptr};\n    a->next = b;\n    b->next = c;\n    for (Node* p = a; p != nullptr; p = p->next) {\n        std::cout << p->data << ' ';\n    }\n    delete a;\n    delete b;\n    delete c;\n    return 0;\n}",
        "explanation": "链表结点地址不一定连续，必须通过 next 跳转。",
        "commonMistakes": [
          "写 p++ 遍历动态结点。",
          "没有把 c->next 初始化为 nullptr。",
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
        "在表尾后插入要令 newnode->next = nullptr。",
        "按有序插入时需分别处理表头、中间、表尾。",
        "插入可能改变 head，所以函数通常返回 Node*。"
      ],
      "pitfalls": [
        "先写 front->next = newnode，导致原后继地址丢失。",
        "表头插入后没有更新 head。",
        "表尾插入后 newnode->next 未置空。",
        "空表插入时仍访问 front->next。"
      ],
      "example": {
        "title": "在表头插入",
        "code": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nNode* insertHead(Node* head, int x) {\n    return new Node{x, head};\n}\n\nint main() {\n    Node* head = nullptr;\n    head = insertHead(head, 2);\n    head = insertHead(head, 1);\n    std::cout << head->data << ' ' << head->next->data;\n    delete head->next;\n    delete head;\n}",
        "output": "1 2",
        "explanation": "新结点先指向旧 head，再把 head 改为新结点，因此 1 成为新表头。"
      },
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
        "solution": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nNode* insertAfter(Node* node, int x) {\n    Node* nn = new Node{x, node->next};\n    node->next = nn;\n    return nn;\n}\n\nint main() {\n    Node* head = new Node{1, nullptr};\n    insertAfter(head, 2);\n    for (Node* p = head; p; p = p->next) std::cout << p->data << ' ';\n    delete head->next;\n    delete head;\n    return 0;\n}",
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
        "查找失败时 p 会到 nullptr，不能再访问 p->data。"
      ],
      "pitfalls": [
        "只写 q->next=p->next，却忘记 delete p，造成泄漏。",
        "删除表头时仍用 q->next，q 无有效前驱。",
        "先 delete p 再访问 p->next。",
        "未判断链表为空。"
      ],
      "example": {
        "title": "删除表头结点",
        "code": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nNode* deleteHead(Node* head) {\n    if (!head) return nullptr;\n    Node* p = head;\n    head = head->next;\n    delete p;\n    return head;\n}\n\nint main() {\n    Node* head = new Node{1, new Node{2, nullptr}};\n    head = deleteHead(head);\n    std::cout << head->data;\n    delete head;\n}",
        "output": "2",
        "explanation": "先保存旧表头，再把 head 移到第二个结点，最后释放旧表头。"
      },
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
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*nullptr\\s*\\)"
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
        "solution": "#include <iostream>\n\nstruct Node { int data; Node* next; };\n\nNode* deleteHead(Node* head) {\n    if (!head) return nullptr;\n    Node* old = head;\n    head = head->next;\n    delete old;\n    return head;\n}\n\nint main() {\n    Node* head = new Node{1, new Node{2, nullptr}};\n    head = deleteHead(head);\n    std::cout << head->data;\n    delete head;\n    return 0;\n}",
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
        "空链表的 head 为 nullptr，长度为 0。",
        "按序号查找通常规定 1 表示第一个结点。",
        "找不到目标序号时返回 nullptr。"
      ],
      "pitfalls": [
        "用 p++ 遍历动态结点。",
        "循环条件错误导致跳过首结点。",
        "序号与下标混淆，导致整体偏移一位。",
        "访问空指针的 data 或 next。"
      ],
      "example": {
        "title": "统计链表长度",
        "code": "int length(Node* head) {\n    int count = 0;\n    for (Node* p = head; p != nullptr; p = p->next) ++count;\n    return count;\n}",
        "output": "若链表含 3 个结点，返回 3。",
        "explanation": "p 依次指向每个结点，直到 p 为空。"
      },
      "exercise": {
        "prompt": "补全 length 和 findKth。findKth 中 1 表示第一个结点，越界返回 nullptr。程序输出链表长度和第 2 个结点的数据。",
        "starter": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int value) : data(value), next(nullptr) {}\n};\n\nint length(Node* head) {\n    // 统计结点个数\n}\n\nNode* findKth(Node* head, int k) {\n    // 返回第 k 个结点\n}\n\nint main() {\n    Node* head = new Node(10);\n    head->next = new Node(20);\n    head->next->next = new Node(30);\n    Node* second = findKth(head, 2);\n    cout << length(head) << ' ' << (second ? second->data : -1) << endl;\n    return 0;\n}",
        "sampleInput": "",
        "expectedOutput": "3 20",
        "hint": "长度循环到 p==nullptr；findKth 从序号 1 开始计数。",
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
            "pattern": "\\breturn\\s+(?:nullptr|NULL)\\s*;"
          }
        ],
        "solution": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int value) : data(value), next(nullptr) {}\n};\n\nint length(Node* head) {\n    int count = 0;\n    for (Node* p = head; p != nullptr; p = p->next) ++count;\n    return count;\n}\n\nNode* findKth(Node* head, int k) {\n    if (k < 1) return nullptr;\n    Node* p = head;\n    int index = 1;\n    while (p != nullptr && index < k) {\n        p = p->next;\n        ++index;\n    }\n    return p;\n}\n\nint main() {\n    Node* head = new Node(10);\n    head->next = new Node(20);\n    head->next->next = new Node(30);\n    Node* second = findKth(head, 2);\n    cout << length(head) << ' ' << (second ? second->data : -1) << endl;\n    return 0;\n}",
        "explanation": "两个函数都从 head 出发，沿 next 前进；findKth 用 index 从 1 开始计数。",
        "commonMistakes": [
          "findKth 从 0 开始却把 k=1 当第二个结点。",
          "遍历条件写成 p->next != nullptr 导致漏掉尾结点。",
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
      "example": {
        "title": "C 风格创建结点",
        "code": "Node* p = (Node*)malloc(sizeof(Node));\np->data = 7;\np->next = nullptr;\nfree(p);",
        "output": "创建一个结点并释放。",
        "explanation": "malloc 只提供存储空间，因此 data 与 next 需要显式初始化。"
      },
      "exercise": {
        "prompt": "使用 malloc 创建一个 Node，令 data=7、next=nullptr，再统计后释放该结点。程序输出 data。",
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
            "pattern": "\\bp\\s*->\\s*next\\s*=\\s*(?:nullptr|NULL)"
          },
          {
            "label": "使用 free 释放",
            "pattern": "\\bfree\\s*\\(\\s*p\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\nint main() {\n    Node* p = (Node*)malloc(sizeof(Node));\n    if (p == nullptr) return 1;\n    p->data = 7;\n    p->next = nullptr;\n    cout << p->data << endl;\n    free(p);\n    return 0;\n}",
        "explanation": "malloc 分配后先检查空指针，再显式初始化成员；最后用 free 释放。",
        "commonMistakes": [
          "malloc 后不检查 nullptr。",
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
      "example": {
        "title": "候选人得票统计",
        "code": "for (int i = 0; i < 3; ++i)\n    if (strcmp(name, people[i].name) == 0)\n        ++people[i].count;",
        "output": "名称匹配时增加对应计数。",
        "explanation": "strcmp 返回 0 表示两个 C 字符串内容相同。"
      },
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
      "example": {
        "title": "文本与二进制保存方式",
        "code": "int x = 123;\n// 文本文件: '1' '2' '3'，共 3 个字符字节\n// 常见 32 位 int 二进制文件: sizeof(int) 个字节\nstd::cout << sizeof(x);",
        "output": "通常为 4",
        "explanation": "文本文件保存字符编码；二进制文件保存对象的内存表示。"
      },
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
        "solution": "#include <iostream>\n\nint main() {\n    std::cout << sizeof(int) << ' ' << sizeof(char);\n    return 0;\n}",
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
      "example": {
        "title": "最小文件打开流程",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"demo.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"hello\", fp);\n    std::fclose(fp);\n}",
        "output": "创建 demo.txt，内容为 hello",
        "explanation": "fopen 建立文件关联，fputs 写入，fclose 刷新并释放资源。"
      },
      "exercise": {
        "prompt": "声明 FILE* fp，以写模式打开 out.txt；若打开失败返回 1，成功时写入 \"OK\" 并关闭文件。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 定义、打开、检查、写入、关闭\n    return 0;\n}",
        "hint": "模式字符串写 \"w\"；打开后用 std::fputs 或 fprintf。",
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
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*(?:nullptr|NULL)\\s*\\)"
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"out.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"OK\", fp);\n    std::fclose(fp);\n    return 0;\n}",
        "explanation": "打开、检查、使用、关闭构成完整文件生命周期。",
        "commonMistakes": [
          "使用 std::fopen 却写成 fopen。",
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
        "fopen 失败返回 nullptr/NULL，必须检查。"
      ],
      "pitfalls": [
        "用 w 打开已有文件却以为会保留原内容。",
        "用 r 打开不存在文件后未检查返回值。",
        "用文本模式读写二进制结构体。",
        "在字符串中写路径 d:\\file.txt 却只写一个反斜杠。"
      ],
      "example": {
        "title": "选择正确模式",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"data.bin\", \"wb\");\n    if (!fp) return 1;\n    int x = 42;\n    std::fwrite(&x, sizeof(x), 1, fp);\n    std::fclose(fp);\n}",
        "output": "创建二进制文件 data.bin",
        "explanation": "wb 用于创建/截断二进制文件并写入数据块。"
      },
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"log.txt\", \"a\");\n    if (!fp) return 1;\n    std::fputs(\"new\\n\", fp);\n    std::fclose(fp);\n    return 0;\n}",
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
      "example": {
        "title": "关闭时刷新数据",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"note.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"saved\", fp);\n    if (std::fclose(fp) != 0) return 2;\n}",
        "output": "文件保存 saved",
        "explanation": "fclose 负责刷新缓冲区并释放文件资源。"
      },
      "exercise": {
        "prompt": "打开 out.txt 写模式，检查失败；写入 \"done\" 后关闭，并检查 fclose 返回值。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 写入并关闭，检查两次返回值\n    return 0;\n}",
        "hint": "fopen 和 fclose 都可能失败。",
        "checks": [
          {
            "label": "检查 fopen",
            "pattern": "\\bif\\s*\\(\\s*!\\s*\\w+\\s*\\)|\\bif\\s*\\(\\s*\\w+\\s*==\\s*(?:nullptr|NULL)\\s*\\)"
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"out.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"done\", fp);\n    if (std::fclose(fp) != 0) return 2;\n    return 0;\n}",
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
      "example": {
        "title": "复制字符",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* in = std::fopen(\"in.txt\", \"r\");\n    FILE* out = std::fopen(\"out.txt\", \"w\");\n    if (!in || !out) return 1;\n    int ch;\n    while ((ch = std::fgetc(in)) != EOF) {\n        std::fputc(ch, out);\n    }\n    std::fclose(in);\n    std::fclose(out);\n}",
        "output": "out.txt 与 in.txt 内容相同",
        "explanation": "循环在 fgetc 返回 EOF 时停止，避免把 EOF 写入输出。"
      },
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"input.txt\", \"r\");\n    if (!fp) return 1;\n    int ch;\n    while ((ch = std::fgetc(fp)) != EOF) {\n        std::putchar(ch);\n    }\n    std::fclose(fp);\n    return 0;\n}",
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
      "example": {
        "title": "写入两行并读取",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"text.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"first\\nsecond\", fp);\n    std::fclose(fp);\n}",
        "output": "文本含两行 first、second",
        "explanation": "第一段字符串显式包含换行，第二段不自动换行。"
      },
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"lines.txt\", \"w\");\n    if (!fp) return 1;\n    std::fputs(\"alpha\\n\", fp);\n    std::fputs(\"beta\\n\", fp);\n    std::fclose(fp);\n\n    fp = std::fopen(\"lines.txt\", \"r\");\n    if (!fp) return 2;\n    char s[100];\n    while (std::fgets(s, 100, fp)) {\n        std::fputs(s, stdout);\n    }\n    std::fclose(fp);\n    return 0;\n}",
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
      "example": {
        "title": "写入并读回整数",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"num.txt\", \"w\");\n    if (!fp) return 1;\n    std::fprintf(fp, \"%d %d\", 4, 7);\n    std::fclose(fp);\n}",
        "output": "num.txt 文本内容为 4 7",
        "explanation": "fprintf 按格式把两个整数写成文本。"
      },
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"numbers.txt\", \"w\");\n    if (!fp) return 1;\n    std::fprintf(fp, \"%d %d\", 12, 34);\n    std::fclose(fp);\n\n    fp = std::fopen(\"numbers.txt\", \"r\");\n    if (!fp) return 2;\n    int a, b;\n    if (std::fscanf(fp, \"%d %d\", &a, &b) == 2) {\n        std::printf(\"%d\", a + b);\n    }\n    std::fclose(fp);\n    return 0;\n}",
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
      "example": {
        "title": "写入一个整数块",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"n.bin\", \"wb\");\n    if (!fp) return 1;\n    int x = 2026;\n    std::fwrite(&x, sizeof(x), 1, fp);\n    std::fclose(fp);\n}",
        "output": "n.bin 含一个 int 的二进制表示",
        "explanation": "第一个参数必须是待写数据的内存地址。"
      },
      "exercise": {
        "prompt": "把 int 数组 a[3]={1,2,3} 以二进制写入 data.bin，再以 rb 模式读回到 b[3] 并输出 b[2]。",
        "starter": "#include <cstdio>\n\nint main() {\n    int a[3] = {1, 2, 3};\n    int b[3] = {};\n    // 块写入并读回\n    return 0;\n}",
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
        "solution": "#include <cstdio>\n\nint main() {\n    int a[3] = {1, 2, 3};\n    int b[3] = {};\n    FILE* fp = std::fopen(\"data.bin\", \"wb\");\n    if (!fp) return 1;\n    std::fwrite(a, sizeof(a[0]), 3, fp);\n    std::fclose(fp);\n\n    fp = std::fopen(\"data.bin\", \"rb\");\n    if (!fp) return 2;\n    std::fread(b, sizeof(b[0]), 3, fp);\n    std::fclose(fp);\n    std::printf(\"%d\", b[2]);\n    return 0;\n}",
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
      "example": {
        "title": "回到文件开头",
        "code": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"r.txt\", \"w+\");\n    if (!fp) return 1;\n    std::fputs(\"abc\", fp);\n    std::rewind(fp);\n    std::putchar(std::fgetc(fp));\n    std::fclose(fp);\n}",
        "output": "a",
        "explanation": "写完 abc 后位置在末尾，rewind 把它移回开头，再读取得到 a。"
      },
      "exercise": {
        "prompt": "打开 data.bin 为 rb，使用 fseek 从文件末尾向前移动 sizeof(int) 字节，再用 fread 读取最后一个 int 并输出。",
        "starter": "#include <cstdio>\n\nint main() {\n    // 定位到最后一个 int 并读取\n    return 0;\n}",
        "hint": "fseek(fp, -static_cast<long>(sizeof(int)), SEEK_END)。",
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
        "solution": "#include <cstdio>\n\nint main() {\n    FILE* fp = std::fopen(\"data.bin\", \"rb\");\n    if (!fp) return 1;\n    int last = 0;\n    std::fseek(fp, -static_cast<long>(sizeof(int)), SEEK_END);\n    if (std::fread(&last, sizeof(int), 1, fp) == 1) {\n        std::printf(\"%d\", last);\n    }\n    std::fclose(fp);\n    return 0;\n}",
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
        "fgets 成功返回缓冲区地址，失败或到末尾返回 nullptr。",
        "fread 成功返回实际读取的元素块数。"
      ],
      "pitfalls": [
        "先 while(!feof(fp)) 再读取，导致重复处理旧数据。",
        "忽略 fscanf 的返回值。",
        "把 fscanf 的返回项数误当读到的数值。",
        "读取失败后仍使用未成功写入的变量。"
      ],
      "example": {
        "title": "按返回值读取整数",
        "code": "int x, sum = 0;\nwhile (fscanf(fp, \"%d\", &x) == 1) {\n    sum += x;\n}",
        "output": "读到非整数或文件尾时循环结束。",
        "explanation": "只有成功读取 1 个整数时才进入循环体。"
      },
      "exercise": {
        "prompt": "程序先创建 demo.txt 并写入 1 2 3，然后重新打开读取。补全循环，使用 fscanf 的返回值求和并统计个数，输出和与个数。",
        "starter": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* out = fopen(\"demo.txt\", \"w\");\n    fputs(\"1 2 3\", out);\n    fclose(out);\n\n    FILE* fp = fopen(\"demo.txt\", \"r\");\n    if (fp == nullptr) return 1;\n    int x, sum = 0, count = 0;\n    // 使用 fscanf 返回值循环读取\n    fclose(fp);\n    cout << sum << ' ' << count << endl;\n    return 0;\n}",
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
        "solution": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    FILE* out = fopen(\"demo.txt\", \"w\");\n    fputs(\"1 2 3\", out);\n    fclose(out);\n\n    FILE* fp = fopen(\"demo.txt\", \"r\");\n    if (fp == nullptr) return 1;\n    int x, sum = 0, count = 0;\n    while (fscanf(fp, \"%d\", &x) == 1) {\n        sum += x;\n        ++count;\n    }\n    fclose(fp);\n    cout << sum << ' ' << count << endl;\n    return 0;\n}",
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
        "每次 fopen 后都应检查是否返回 nullptr。"
      ],
      "pitfalls": [
        "路径写成 C:\\temp\\a.txt 时被当成转义字符。",
        "用 w 打开已有文件却以为会保留内容。",
        "写入后不关闭文件就重新读取，缓冲区内容可能尚未完整刷新。",
        "fopen 失败后继续使用空 FILE*。"
      ],
      "example": {
        "title": "安全的写后读",
        "code": "FILE* fp = fopen(\"data.txt\", \"w\");\nif (!fp) return 1;\nfputs(\"hello\", fp);\nfclose(fp);\nfp = fopen(\"data.txt\", \"r\");",
        "output": "先关闭写文件，再重新以只读方式打开。",
        "explanation": "fclose 刷新缓冲区并释放文件资源。"
      },
      "exercise": {
        "prompt": "读取一个不含空白的字符串，写入 data.txt，关闭后重新读取并输出。补全 fopen 模式与安全检查。",
        "starter": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    char text[50], buffer[50];\n    cin >> text;\n    FILE* out = fopen(\"data.txt\", \"?\");\n    if (out == nullptr) return 1;\n    fputs(text, out);\n    fclose(out);\n\n    FILE* in = fopen(\"data.txt\", \"?\");\n    if (in == nullptr) return 1;\n    fgets(buffer, 50, in);\n    fclose(in);\n    cout << buffer << endl;\n    return 0;\n}",
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
            "pattern": "\\bif\\s*\\([^)]*(?:==\\s*(?:nullptr|NULL)|!\\s*\\w+)\\s*\\)"
          },
          {
            "label": "写入后关闭",
            "pattern": "\\bfputs\\s*\\([\\s\\S]*\\bfclose\\s*\\(\\s*out\\s*\\)"
          }
        ],
        "solution": "#include <iostream>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    char text[50], buffer[50];\n    cin >> text;\n    FILE* out = fopen(\"data.txt\", \"w\");\n    if (out == nullptr) return 1;\n    fputs(text, out);\n    fclose(out);\n\n    FILE* in = fopen(\"data.txt\", \"r\");\n    if (in == nullptr) return 1;\n    fgets(buffer, 50, in);\n    fclose(in);\n    cout << buffer << endl;\n    return 0;\n}",
        "explanation": "w 模式先清空或创建文件，fclose 后再用 r 读取。两个 fopen 都检查了失败。",
        "commonMistakes": [
          "用 r 模式写入。",
          "写入后不关闭文件。",
          "fopen 返回 nullptr 后继续使用指针。"
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
      "example": {
        "title": "写入并读取整数",
        "code": "#include <fstream>\nusing namespace std;\nofstream out(\"n.txt\");\nout << 1 << ' ' << 2 << ' ' << 3;\nout.close();\nifstream in(\"n.txt\");\nint x;\nwhile (in >> x) { /* 处理 x */ }",
        "output": "读取 1、2、3。",
        "explanation": ">> 读取失败时条件为假，循环自然结束。"
      },
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
      "example": {
        "title": "复合赋值",
        "code": "#include <iostream>\n\nint main() {\n    int a = 3;\n    a += a * 2;\n    std::cout << a;\n}",
        "output": "9",
        "explanation": "先算右侧 a*2 得 6，再执行 a = 3 + 6，得到 9。"
      },
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
        "solution": "#include <iostream>\n\nint main() {\n    int a = 4;\n    a += a * 3;\n    std::cout << a;\n    return 0;\n}",
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
      "example": {
        "title": "短路让右侧不执行",
        "code": "#include <iostream>\n\nint main() {\n    int a = 0, b = 1;\n    bool r = --a && ++b;\n    std::cout << a << ' ' << b << ' ' << r;\n}",
        "output": "0 1 0",
        "explanation": "--a 先把 a 变为 0，左侧为假，&& 右侧 ++b 不执行。"
      },
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
        "solution": "#include <iostream>\n\nint main() {\n    int a = 0, b = 1;\n    bool ok = a++ && ++b;\n    std::cout << a << ' ' << b << ' ' << ok;\n    return 0;\n}",
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
      "example": {
        "title": "安全复制字符串",
        "code": "#include <iostream>\n#include <cstring>\n\nint main() {\n    char s[10];\n    std::strcpy(s, \"hello\");\n    std::cout << s << ' ' << std::strlen(s);\n}",
        "output": "hello 5",
        "explanation": "数组容量 10 足以保存 5 个字符和结尾 '\\0'；strlen 返回 5。"
      },
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
        "solution": "#include <iostream>\n#include <cstring>\n\nint main() {\n    char s[6];\n    std::strcpy(s, \"hello\");\n    std::cout << s << ' ' << std::strlen(s);\n    return 0;\n}",
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
      "example": {
        "title": "指针表达式",
        "code": "#include <iostream>\n\nint main() {\n    int a[5] = {1, 3, 5, 7, 9};\n    int* p = a + 1;\n    std::cout << *p + 1 << ' ' << *(p + 1);\n}",
        "output": "4 5",
        "explanation": "p 指向 a[1]=3，*p+1 得 4；p+1 指向 a[2]=5，解引用得 5。"
      },
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
        "solution": "#include <iostream>\n\nint main() {\n    int a[4] = {2, 4, 6, 8};\n    int* p = a + 2;\n    std::cout << *p << ' ' << *(p - 1);\n    return 0;\n}",
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
      "example": {
        "title": "最大公约数",
        "code": "#include <iostream>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    return a;\n}\n\nint main() {\n    std::cout << gcd(18, 24);\n}",
        "output": "6",
        "explanation": "辗转相除直到余数为 0，最后一个非零除数就是最大公约数。"
      },
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
        "solution": "#include <iostream>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int r = a % b;\n        a = b;\n        b = r;\n    }\n    return a;\n}\n\nint main() {\n    std::cout << gcd(36, 60);\n    return 0;\n}",
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
      "example": {
        "title": "字符算术的类型提升",
        "code": "#include <iostream>\n\nint main() {\n    char ch = 'b';\n    std::cout << ch + 2 << ' ' << static_cast<char>(ch + 2);\n}",
        "output": "100 d",
        "explanation": "ch+2 参与算术时提升为整数；显式转回 char 才输出字符。"
      },
      "exercise": {
        "prompt": "令 char ch='A'，分别输出 ch+1 的整数值和转换回 char 后的字符。",
        "starter": "#include <iostream>\n\nint main() {\n    char ch = 'A';\n    // 输出整数和字符\n    return 0;\n}",
        "hint": "第二次输出需要 static_cast<char>(ch+1)。",
        "checks": [
          {
            "label": "输出 ch+1",
            "pattern": "(?:cout|printf)[^;]*ch\\s*\\+\\s*1"
          },
          {
            "label": "转换为 char",
            "pattern": "static_cast\\s*<\\s*char\\s*>\\s*\\(\\s*ch\\s*\\+\\s*1\\s*\\)"
          },
          {
            "label": "至少两次输出",
            "pattern": "(?:std\\s*::\\s*cout\\s*<<[\\s\\S]*){2}"
          }
        ],
        "solution": "#include <iostream>\n\nint main() {\n    char ch = 'A';\n    std::cout << ch + 1 << ' ';\n    std::cout << static_cast<char>(ch + 1);\n    return 0;\n}",
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
      "example": {
        "title": "字符串长度与复制",
        "code": "char s1[] = \"abc\";\nchar s2[20];\nstrcpy(s2, s1);\ncout << strlen(s2) << endl;",
        "output": "3",
        "explanation": "strcpy 复制到可写数组 s2，strlen 不计算结尾 '\\0'。"
      },
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
      "overview": "期中常用库函数分布在 <cstdio>、<cmath> 等头文件。gets 不安全且已从现代标准移除，练习时应优先使用 fgets 或 std::cin.getline。",
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
      "example": {
        "title": "平方根与字符输出",
        "code": "#include <cmath>\n#include <cstdio>\nusing namespace std;\n\nprintf(\"%.2f\\n\", sqrt(9.0));\nputchar('A');",
        "output": "3.00\nA",
        "explanation": "sqrt 返回浮点值，putchar 输出单个字符。"
      },
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
      "example": {
        "title": "最大值",
        "code": "int maxValue = a[0], maxIndex = 0;\nfor (int i = 1; i < n; ++i)\n    if (a[i] > maxValue) {\n        maxValue = a[i];\n        maxIndex = i;\n    }",
        "output": "返回最大值及其下标。",
        "explanation": "严格大于时更新，可保留第一个最大值的位置。"
      },
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
      "example": {
        "title": "删除一个元素",
        "code": "for (int i = pos; i < n - 1; ++i)\n    a[i] = a[i + 1];\n--n;",
        "output": "后继元素整体左移一位。",
        "explanation": "从 pos 开始向前覆盖，循环到 n-2。"
      },
      "exercise": {
        "prompt": "已有有序数组 1 3 5 7 9。先删除值 5，再插入 6 保持有序，最后输出有效元素。补全 deleteValue 和 insertSorted。",
        "starter": "#include <iostream>\nusing namespace std;\n\nbool deleteValue(int a[], int& n, int x) {\n    // 删除 x，成功返回 true\n}\n\nbool insertSorted(int a[], int& n, int x) {\n    // 有序插入 x，成功返回 true\n}\n\nint main() {\n    int a[20] = {1,3,5,7,9}, n = 5;\n    deleteValue(a, n, 5);\n    insertSorted(a, n, 6);\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
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
        "solution": "#include <iostream>\nusing namespace std;\n\nbool deleteValue(int a[], int& n, int x) {\n    for (int i = 0; i < n; ++i) {\n        if (a[i] == x) {\n            for (int j = i; j < n - 1; ++j) a[j] = a[j + 1];\n            --n;\n            return true;\n        }\n    }\n    return false;\n}\n\nbool insertSorted(int a[], int& n, int x) {\n    if (n >= 20) return false;\n    int pos = 0;\n    while (pos < n && a[pos] < x) ++pos;\n    for (int i = n; i > pos; --i) a[i] = a[i - 1];\n    a[pos] = x;\n    ++n;\n    return true;\n}\n\nint main() {\n    int a[20] = {1,3,5,7,9}, n = 5;\n    deleteValue(a, n, 5);\n    insertSorted(a, n, 6);\n    for (int i = 0; i < n; ++i) cout << a[i] << ' ';\n    cout << endl;\n    return 0;\n}",
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
      "example": {
        "title": "手写复制",
        "code": "int i = 0;\nwhile (from[i] != '\\0') {\n    to[i] = from[i];\n    ++i;\n}\nto[i] = '\\0';",
        "output": "完整复制字符串。",
        "explanation": "循环复制非结束字符，最后单独补 '\\0'。"
      },
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
      "example": {
        "title": "大写转小写",
        "code": "for (int i = 0; s[i] != '\\0'; ++i)\n    if (s[i] >= 'A' && s[i] <= 'Z')\n        s[i] = s[i] + 32;",
        "output": "只转换大写英文字母。",
        "explanation": "小写编码比对应大写大 32。"
      },
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
