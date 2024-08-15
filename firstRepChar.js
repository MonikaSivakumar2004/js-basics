def firstRepChar(s):
    n = len(s)
    for i in range(n):
        for j in range(i):
            if s[i] == s[j]:
                return s[i]
    return "-1"
s = "Monika birthday month is October"
print(firstRepChar(s))
